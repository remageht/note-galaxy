/* glsl */
export const RING_VERTEX = `
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vColor;

void main() {
	vUv = uv;
	vColor = instanceColor;
	vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
	vWorldPos = worldPosition.xyz;
	gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
}
`;

/* glsl */
export const RING_FRAGMENT = `
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vColor;

void main() {
	// RingGeometry UV maps x to radius (0=inner, 1=outer), y to angle (0..1)
	float r = vUv.x;

	// Cassini division: prominent dark gap between main rings around r = 0.62..0.66
	float cassini = smoothstep(0.61, 0.625, r) * (1.0 - smoothstep(0.645, 0.66, r));
	if (cassini > 0.8) {
		discard;
	}

	// Concentric density ringlets
	float ringlets = sin(r * 140.0) * 0.15 + sin(r * 45.0) * 0.25 + 0.6;

	// Fade softly at inner and outer edges
	float edgeFade = smoothstep(0.0, 0.08, r) * (1.0 - smoothstep(0.92, 1.0, r));
	float alpha = edgeFade * (1.0 - cassini * 0.9) * 0.42 * ringlets;

	if (alpha < 0.01) discard;

	vec3 ringColor = mix(vColor, vec3(0.85, 0.88, 0.95), 0.35) * ringlets;
	gl_FragColor = vec4(ringColor, alpha);
}
`;
