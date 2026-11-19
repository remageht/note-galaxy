/* glsl */
export const CELESTIAL_VERTEX = `
attribute float aCelestialType;
attribute float aSeed;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vLocalPos;
varying float vType;
varying float vSeed;
varying vec3 vColor;

// Simplex-style pseudo noise for vertex displacement
float hash3(vec3 p) {
	p = fract(p * 0.3183099 + 0.1);
	p *= 17.0;
	return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise3(vec3 p) {
	vec3 i = floor(p);
	vec3 f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(
		mix(mix(hash3(i + vec3(0,0,0)), hash3(i + vec3(1,0,0)), f.x),
		    mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
		mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x),
		    mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y), f.z
	);
}

void main() {
	vType = aCelestialType;
	vSeed = aSeed;
	vColor = instanceColor;
	vLocalPos = position;

	vec3 displacedPos = position;

	// For asteroids (type 0): deform vertices into an irregular craggy rock
	if (aCelestialType < 0.5) {
		float crag = noise3(position * 2.5 + aSeed * 10.0);
		displacedPos += normal * (crag * 0.32 - 0.16);
	}

	vec4 worldPosition = instanceMatrix * vec4(displacedPos, 1.0);
	vec4 mvPosition = modelViewMatrix * worldPosition;

	vNormal = normalize(mat3(instanceMatrix) * normal);
	vViewPosition = -mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;
}
`;

/* glsl */
export const CELESTIAL_FRAGMENT = `
precision highp float;

uniform float uTime;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vLocalPos;
varying float vType;
varying float vSeed;
varying vec3 vColor;

float hash21(vec2 p) {
	p = fract(p * vec2(234.34, 435.345));
	p += dot(p, p + 34.23);
	return fract(p.x * p.y);
}

float noise2(vec2 p) {
	vec2 i = floor(p);
	vec2 f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(
		mix(hash21(i + vec2(0.0, 0.0)), hash21(i + vec2(1.0, 0.0)), f.x),
		mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x),
		f.y
	);
}

float fbm2(vec2 p) {
	float v = 0.0;
	float a = 0.5;
	for (int i = 0; i < 4; i++) {
		v += a * noise2(p);
		p *= 2.1;
		a *= 0.5;
	}
	return v;
}

void main() {
	vec3 N = normalize(vNormal);
	vec3 V = normalize(vViewPosition);
	float NdotV = max(0.0, dot(N, V));
	float fresnel = pow(1.0 - NdotV, 2.5);

	// Normalised local 3D coords for spherical mapping
	vec3 p = normalize(vLocalPos);
	vec2 uv = vec2(atan(p.z, p.x) / 6.2831853 + 0.5, p.y * 0.5 + 0.5);

	vec3 finalColor = vColor;

	// TYPE 3: STAR (Sun / Tag)
	if (vType > 2.5) {
		// Boiling convective solar plasma
		float plasma1 = fbm2(uv * 12.0 + vec2(uTime * 0.15, -uTime * 0.12) + vSeed * 7.0);
		float plasma2 = fbm2(uv * 24.0 - vec2(-uTime * 0.22, uTime * 0.18) + vSeed * 3.0);
		float plasma = mix(plasma1, plasma2, 0.5);

		// Limb darkening: center is ultra hot, edges are deeper amber/red
		float limb = pow(NdotV, 0.45);
		vec3 hotCenter = vec3(1.2, 1.15, 0.95);
		vec3 midColor = vColor * 1.35;
		vec3 rimColor = vColor * vec3(0.85, 0.45, 0.2);

		vec3 starCol = mix(rimColor, midColor, limb);
		starCol = mix(starCol, hotCenter, pow(plasma, 2.2) * limb);

		// Corona limb glow
		starCol += (vColor * 0.8) * fresnel;
		finalColor = starCol;
	}
	// TYPE 2: GAS GIANT (Project / Hub)
	else if (vType > 1.5) {
		// Jupiter/Saturn-like atmospheric bands with turbulent eddy currents
		float bandCoord = uv.y * 32.0;
		float turbulence = fbm2(vec2(uv.x * 6.0 + uTime * 0.05, uv.y * 8.0) + vSeed * 5.0) * 2.8;
		float bandVal = sin(bandCoord + turbulence);

		// Great storm spot
		vec2 stormCenter = vec2(fract(vSeed * 0.77), 0.38);
		float stormDist = length((uv - stormCenter) * vec2(2.5, 5.0));
		float storm = smoothstep(0.35, 0.0, stormDist);

		vec3 bandColorA = vColor * 1.15;
		vec3 bandColorB = vColor * vec3(0.65, 0.72, 0.85);
		vec3 bandColor = mix(bandColorA, bandColorB, bandVal * 0.5 + 0.5);

		if (storm > 0.01) {
			vec3 stormColor = mix(vec3(0.95, 0.4, 0.25), vec3(1.0, 0.8, 0.6), storm);
			bandColor = mix(bandColor, stormColor, storm * 0.85);
		}

		// Subtle atmospheric limb darkening
		bandColor *= (0.45 + 0.55 * pow(NdotV, 0.7));
		finalColor = bandColor;
	}
	// TYPE 1: TERRESTRIAL PLANET (Regular Note)
	else if (vType > 0.5) {
		// Continents, oceans, and polar ice
		float elevation = fbm2(uv * 8.0 + vSeed * 11.0);
		bool isOcean = elevation < 0.48;

		vec3 oceanColor = mix(vec3(0.06, 0.18, 0.42), vec3(0.08, 0.32, 0.55), elevation * 2.0);
		vec3 landColor = mix(vColor * 0.85, vColor * 1.25, (elevation - 0.48) * 2.0);

		vec3 surface = isOcean ? oceanColor : landColor;

		// Polar ice caps
		float polar = smoothstep(0.82, 0.94, abs(p.y));
		if (polar > 0.0) {
			surface = mix(surface, vec3(0.92, 0.96, 1.0), polar);
		}

		// Specular sunlight highlight on oceans
		vec3 lightDir = normalize(vec3(0.6, 0.7, 0.8));
		vec3 H = normalize(lightDir + V);
		float spec = pow(max(0.0, dot(N, H)), 24.0);
		if (isOcean && polar < 0.2) {
			surface += vec3(0.4, 0.5, 0.7) * spec;
		}

		// Atmospheric Rayleigh scattering rim (soft blue/cyan haze)
		vec3 atmosphereColor = vec3(0.35, 0.65, 1.0);
		surface = mix(surface, atmosphereColor, fresnel * 0.65);

		// Diffuse shading
		float diff = max(0.25, dot(N, lightDir) * 0.75 + 0.25);
		finalColor = surface * diff;
	}
	// TYPE 0: ASTEROID (Orphan / Leaf Note)
	else {
		// Craggy, cratered basaltic rock
		float rockNoise = fbm2(uv * 18.0 + vSeed * 13.0);
		vec3 rockColor = mix(vec3(0.22, 0.24, 0.28), vec3(0.45, 0.47, 0.52), rockNoise);
		rockColor = mix(rockColor, vColor * 0.6, 0.35);

		vec3 lightDir = normalize(vec3(0.5, 0.8, 0.5));
		float diff = max(0.15, dot(N, lightDir));
		finalColor = rockColor * diff;
	}

	gl_FragColor = vec4(finalColor, 1.0);
}
`;
