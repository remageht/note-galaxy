/*
Note Galaxy — bundled by esbuild.
Source: src/. Do not edit main.js by hand.
*/
var ca=Object.defineProperty;var ru=Object.getOwnPropertyDescriptor;var au=Object.getOwnPropertyNames;var ou=Object.prototype.hasOwnProperty;var lu=(i,t)=>{for(var e in t)ca(i,e,{get:t[e],enumerable:!0})},cu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of au(t))!ou.call(i,s)&&s!==e&&ca(i,s,{get:()=>t[s],enumerable:!(n=ru(t,s))||n.enumerable});return i};var hu=i=>cu(ca({},"__esModule",{value:!0}),i);var g_={};lu(g_,{default:()=>oa});module.exports=hu(g_);var eu=require("obsidian");var sa=require("obsidian");var al="170",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uu=0,Hl=1,du=2;var Qc=1,fu=2,_n=3,zn=0,Ne=1,Me=2,cn=0,Li=1,he=2,Vl=3,Gl=4,pu=5,Qn=100,mu=101,gu=102,_u=103,vu=104,xu=200,yu=201,bu=202,Mu=203,ka=204,Ha=205,Su=206,Eu=207,Tu=208,wu=209,Au=210,Cu=211,Ru=212,Pu=213,Du=214,Va=0,Ga=1,Wa=2,Fi=3,Xa=4,qa=5,Ya=6,$a=7,th=0,Iu=1,Lu=2,Bn=0,ol=1,ll=2,cl=3,ws=4,Nu=5,hl=6,ul=7;var eh=300,Bi=301,zi=302,Za=303,Ja=304,Br=306,ja=1e3,ei=1001,Ka=1002,ke=1003,Uu=1004;var Ls=1005;var on=1006,ha=1007;var ni=1008;var bn=1009,nh=1010,ih=1011,vs=1012,dl=1013,ii=1014,ln=1015,nn=1016,fl=1017,pl=1018,ki=1020,sh=35902,rh=1021,ah=1022,Qe=1023,oh=1024,lh=1025,Ni=1026,Hi=1027,ml=1028,gl=1029,ch=1030,_l=1031;var vl=1033,cr=33776,hr=33777,ur=33778,dr=33779,Qa=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,vo=37819,xo=37820,yo=37821,fr=36492,bo=36494,Mo=36495,hh=36283,So=36284,Eo=36285,To=36286;var pr=2300,wo=2301,ua=2302,Wl=2400,Xl=2401,ql=2402;var Ou=3200,Fu=3201;var Bu=0,zu=1,On="",me="srgb",Zi="srgb-linear",zr="linear",$t="srgb";var fi=7680;var Yl=519,ku=512,Hu=513,Vu=514,uh=515,Gu=516,Wu=517,Xu=518,qu=519,Ao=35044,As=35048;var $l="300 es",vn=2e3,mr=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=1234567,ms=Math.PI/180,xs=180/Math.PI;function xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function Yu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $u(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function Zu(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function Ju(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function td(i,t){return i+Math.random()*(t-i)}function ed(i){return i*(.5-Math.random())}function nd(i){i!==void 0&&(Zl=i);let t=Zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function id(i){return i*ms}function sd(i){return i*xs}function rd(i){return(i&i-1)===0&&i!==0}function ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ld(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dh={DEG2RAD:ms,RAD2DEG:xs,generateUUID:xn,clamp:Ce,euclideanModulo:xl,mapLinear:Yu,inverseLerp:$u,lerp:gs,damp:Zu,pingpong:Ju,smoothstep:ju,smootherstep:Ku,randInt:Qu,randFloat:td,randFloatSpread:ed,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:ad,floorPowerOfTwo:od,setQuaternionFromProperEuler:ld,normalize:Jt,denormalize:Ke},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],S=s[4],y=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*v+o*E+l*R,r[3]=a*m+o*S+l*T,r[6]=a*d+o*y+l*C,r[1]=c*v+h*E+u*R,r[4]=c*m+h*S+u*T,r[7]=c*d+h*y+u*C,r[2]=f*v+p*E+g*R,r[5]=f*m+p*S+g*T,r[8]=f*d+p*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},da=new It;function fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){let i=gr("canvas");return i.style.display="block",i}var Jl={};function fs(i){i in Jl||(Jl[i]=!0,console.warn(i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ud(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ft={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jl=[.64,.33,.3,.6,.15,.06],Kl=[.2126,.7152,.0722],Ql=[.3127,.329],tc=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ft.define({[Zi]:{primaries:jl,whitePoint:Ql,transfer:zr,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:Kl,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:jl,whitePoint:Ql,transfer:$t,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:Kl,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var pi,Co=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=gr("canvas")),pi.width=t.width,pi.height=t.height;let n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fd=0,_r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fa(s[a].image)):r.push(fa(s[a]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pd=0,Ue=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=on,a=ni,o=Qe,l=bn,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=xn(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=eh;Ue.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(p+1)/2,R=(d+1)/2,T=(h+f)/4,C=(u+v)/4,P=(g+m)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ie=class extends Ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let R=Math.sqrt(S),T=Math.atan2(R,d*E);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let y=o*E;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pa=new D,nc=new tn,Sn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Us.subVectors(this.max,is),mi.subVectors(t.a,is),gi.subVectors(t.b,is),_i.subVectors(t.c,is),Pn.subVectors(gi,mi),Dn.subVectors(_i,gi),qn.subVectors(mi,_i);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-qn.y,qn.x,0];return!ma(e,mi,gi,_i,Us)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,mi,gi,_i,Us))?!1:(Os.crossVectors(Pn,Dn),e=[Os.x,Os.y,Os.z],ma(e,mi,gi,_i,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new D,new D,new D,new D,new D,new D,new D,new D],$e=new D,Ns=new Sn,mi=new D,gi=new D,_i=new D,Pn=new D,Dn=new D,qn=new D,is=new D,Us=new D,Os=new D,Yn=new D;function ma(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var md=new Sn,ss=new D,ga=new D,En=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);let e=ss.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ga)),this.expandByPoint(ss.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new D,_a=new D,Fs=new D,In=new D,va=new D,Bs=new D,xa=new D,kn=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_a.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(_a);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=In.dot(this.direction),l=-In.dot(Fs),c=In.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_a).addScaledVector(Fs,f),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),Bs.subVectors(n,t),xa.crossVectors(va,Bs);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,t);let l=o*this.direction.dot(Bs.crossVectors(In,Bs));if(l<0)return null;let c=o*this.direction.dot(va.cross(In));if(c<0||l+c>a)return null;let h=-o*In.dot(xa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gd,t,_d)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Ln.crossVectors(n,Be),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Ln.crossVectors(n,Be)),Ln.normalize(),zs.crossVectors(Be,Ln),s[0]=Ln.x,s[4]=zs.x,s[8]=Be.x,s[1]=Ln.y,s[5]=zs.y,s[9]=Be.y,s[2]=Ln.z,s[6]=zs.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],S=n[7],y=n[11],R=n[15],T=s[0],C=s[4],P=s[8],b=s[12],_=s[1],w=s[5],I=s[9],N=s[13],B=s[2],W=s[6],k=s[10],j=s[14],G=s[3],et=s[7],it=s[11],_t=s[15];return r[0]=a*T+o*_+l*B+c*G,r[4]=a*C+o*w+l*W+c*et,r[8]=a*P+o*I+l*k+c*it,r[12]=a*b+o*N+l*j+c*_t,r[1]=h*T+u*_+f*B+p*G,r[5]=h*C+u*w+f*W+p*et,r[9]=h*P+u*I+f*k+p*it,r[13]=h*b+u*N+f*j+p*_t,r[2]=g*T+v*_+m*B+d*G,r[6]=g*C+v*w+m*W+d*et,r[10]=g*P+v*I+m*k+d*it,r[14]=g*b+v*N+m*j+d*_t,r[3]=E*T+S*_+y*B+R*G,r[7]=E*C+S*w+y*W+R*et,r[11]=E*P+S*I+y*k+R*it,r[15]=E*b+S*N+y*j+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],E=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,S=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,y=h*v*c-g*u*c+g*o*p-a*v*p-h*o*d+a*u*d,R=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,T=e*E+n*S+s*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=E*C,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*C,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*C,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*C,t[4]=S*C,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*C,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*C,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*d+e*o*d)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=R*C,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,E=l*c,S=l*h,y=l*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(v+d))*R,s[1]=(p+y)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(f+d))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*C,s[9]=(m-E)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let c=1/r,h=1/a,u=1/o;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(o===vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h,g,v;if(o===vn)g=(a+r)*u,v=-2*u;else if(o===mr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vi=new D,Ze=new ee,gd=new D(0,0,0),_d=new D(1,1,1),Ln=new D,zs=new D,Be=new D,ic=new ee,sc=new tn,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,rc=new D,xi=new tn,pn=new ee,ks=new D,rs=new D,xd=new D,yd=new tn,ac=new D(1,0,0),oc=new D(0,1,0),lc=new D(0,0,1),cc={type:"added"},bd={type:"removed"},yi={type:"childadded",child:null},ya={type:"childremoved",child:null},_e=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Tn,n=new tn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(rs,ks,this.up):pn.lookAt(ks,rs,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(pn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bd),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new D,mn=new D,ba=new D,gn=new D,bi=new D,Mi=new D,hc=new D,Ma=new D,Sa=new D,Ea=new D,Ta=new de,wa=new de,Aa=new de,Fn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),mn.subVectors(n,e),ba.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(mn),l=Je.dot(ba),c=mn.dot(mn),h=mn.dot(ba),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ta.setScalar(0),wa.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),mn.subVectors(t,e),Je.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Mi.subVectors(r,n),Ma.subVectors(t,n);let l=bi.dot(Ma),c=Mi.dot(Ma);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);let h=bi.dot(Sa),u=Mi.dot(Sa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);Ea.subVectors(t,r);let p=bi.dot(Ea),g=Mi.dot(Ea);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Mi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return hc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(hc,o);let d=1/(m+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(bi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ft.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ft.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ft.workingColorSpace){if(t=xl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ca(a,r,t+1/3),this.g=Ca(a,r,t),this.b=Ca(a,r,t-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Ft.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ce(Ae.r*255,0,255))*65536+Math.round(Ce(Ae.g*255,0,255))*256+Math.round(Ce(Ae.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=me){Ft.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Hs);let n=gs(Nn.h,Hs.h,e),s=gs(Nn.s,Hs.s,e),r=gs(Nn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new xt;xt.NAMES=ph;var Md=0,wn=class extends Mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=xn(),this.name="",this.blending=Li,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ha,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ee=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,Vs=new ht,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}};var xr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sd=0,We=new ee,Ra=new _e,Si=new D,ze=new Sn,as=new Sn,be=new D,fe=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fh(t)?yr:xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(ze.min,as.min),ze.expandByPoint(be),be.addVectors(ze.max,as.max),ze.expandByPoint(be)):(ze.expandByPoint(as.min),ze.expandByPoint(as.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),be.add(Si)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;let c=new D,h=new D,u=new D,f=new ht,p=new ht,g=new ht,v=new D,m=new D;function d(P,b,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(v),o[b].add(v),o[_].add(v),l[P].add(m),l[b].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,b=E.length;P<b;++P){let _=E[P],w=_.start,I=_.count;for(let N=w,B=w+I;N<B;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new D,y=new D,R=new D,T=new D;function C(P){R.fromBufferAttribute(s,P),T.copy(R);let b=o[P];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(T,b);let w=y.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,w)}for(let P=0,b=E.length;P<b;++P){let _=E[P],w=_.start,I=_.count;for(let N=w,B=w+I;N<B;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uc=new ee,$n=new kn,Gs=new En,dc=new D,Ws=new D,Xs=new D,qs=new D,Pa=new D,Ys=new D,fc=new D,$s=new D,re=class extends _e{constructor(t=new fe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Pa.fromBufferAttribute(u,t),a?Ys.addScaledVector(Pa,h):Ys.addScaledVector(Pa.sub(e),h))}e.add(Ys)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Gs.containsPoint($n.origin)===!1&&($n.intersectSphere(Gs,dc)===null||$n.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),$n.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,R=S;y<R;y+=3){let T=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);s=Zs(this,d,t,n,c,h,u,T,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Zs(this,a,t,n,c,h,u,E,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,R=S;y<R;y+=3){let T=y,C=y+1,P=y+2;s=Zs(this,d,t,n,c,h,u,T,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=m,S=m+1,y=m+2;s=Zs(this,a,t,n,c,h,u,E,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ed(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,qs);let h=Ed(i,t,e,n,Ws,Xs,qs,fc);if(h){let u=new D;Fn.getBarycoord(fc,Ws,Xs,qs,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new ht)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new ht)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Fn.getNormal(Ws,Xs,qs,f.normal),h.face=f,h.barycoord=u}return h}var bs=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(v,m,d,E,S,y,R,T,C,P,b){let _=y/C,w=R/P,I=y/2,N=R/2,B=T/2,W=C+1,k=P+1,j=0,G=0,et=new D;for(let it=0;it<k;it++){let _t=it*w-N;for(let Rt=0;Rt<W;Rt++){let Xt=Rt*_-I;et[v]=Xt*E,et[m]=_t*S,et[d]=B,c.push(et.x,et.y,et.z),et[v]=0,et[m]=0,et[d]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Rt/C),u.push(1-it/P),j+=1}}for(let it=0;it<P;it++)for(let _t=0;_t<C;_t++){let Rt=f+_t+W*it,Xt=f+_t+W*(it+1),q=f+(_t+1)+W*(it+1),K=f+(_t+1)+W*it;l.push(Rt,Xt,K),l.push(Xt,q,K),G+=6}o.addGroup(p,G,b),p+=G,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Td(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var Gn={clone:Vi,merge:Pe},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},br=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new D,pc=new ht,mc=new ht,De=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ei=-90,Ti=1,Do=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Ei,Ti,t,e);s.layers=this.layers,this.add(s);let r=new De(Ei,Ti,t,e);r.layers=this.layers,this.add(r);let a=new De(Ei,Ti,t,e);a.layers=this.layers,this.add(a);let o=new De(Ei,Ti,t,e);o.layers=this.layers,this.add(o);let l=new De(Ei,Ti,t,e);l.layers=this.layers,this.add(l);let c=new De(Ei,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Io=class extends Ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bs(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:cn});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=on),new Do(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Da=new D,Cd=new D,Rd=new It,je=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Da.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new En,Js=new D,Sr=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],S=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-p,y-d).normalize(),n[1].setComponents(l+r,f+c,m+p,y+d).normalize(),n[2].setComponents(l+a,f+h,m+g,y+E).normalize(),n[3].setComponents(l-a,f-h,m-g,y-E).normalize(),n[4].setComponents(l-o,f-u,m-v,y-S).normalize(),e===vn)n[5].setComponents(l+o,f+u,m+v,y+S).normalize();else if(e===mr)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Er=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-a;for(let S=0;S<c;S++){let y=S*u-r;g.push(y,-E,0),v.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let S=E+c*d,y=E+c*(d+1),R=E+1+c*(d+1),T=E+1+c*d;p.push(S,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:Dd,alphahash_pars_fragment:Id,alphamap_fragment:Ld,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Od,aomap_fragment:Fd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:jd,color_pars_vertex:Kd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:Tf,lights_toon_pars_fragment:wf,lights_phong_fragment:Af,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Df,lights_fragment_maps:If,lights_fragment_end:Lf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Ff,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:kf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:jf,normal_pars_vertex:Kf,normal_vertex:Qf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:xp,skinnormal_vertex:yp,specularmap_fragment:bp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:wp,uv_pars_fragment:Ap,uv_pars_vertex:Cp,uv_vertex:Rp,worldpos_vertex:Pp,background_vert:Dp,background_frag:Ip,backgroundCube_vert:Lp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Op,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:kp,equirect_vert:Hp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:jp,meshnormal_frag:Kp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},nt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},an={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};an.physical={uniforms:Pe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var js={r:0,b:0,g:0},Jn=new Tn,um=new ee;function dm(i,t,e,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function v(E){let S=!1,y=g(E);y===null?d(o,l):y&&y.isColor&&(d(y,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let y=g(S);y&&(y.isCubeTexture||y.mapping===Br)?(h===void 0&&(h=new re(new bs(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:Vi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(S.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(Jn)),h.material.toneMapped=Ft.getTransfer(y.colorSpace)!==$t,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new re(new Er(2,2),new oe({name:"BackgroundMaterial",uniforms:Vi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(y.colorSpace)!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(js,mh(i)),n.buffers.color.setClear(js.r,js.g,js.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:v,addToRenderList:m}}function fm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(_,w,I,N,B){let W=!1,k=u(N,I,w);r!==k&&(r=k,c(r.object)),W=p(_,N,I,B),W&&g(_,N,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(_,w,I,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,I){let N=I.wireframe===!0,B=n[_.id];B===void 0&&(B={},n[_.id]=B);let W=B[w.id];W===void 0&&(W={},B[w.id]=W);let k=W[N];return k===void 0&&(k=f(l()),W[N]=k),k}function f(_){let w=[],I=[],N=[];for(let B=0;B<e;B++)w[B]=0,I[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:N,object:_,attributes:{},index:null}}function p(_,w,I,N){let B=r.attributes,W=w.attributes,k=0,j=I.getAttributes();for(let G in j)if(j[G].location>=0){let it=B[G],_t=W[G];if(_t===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function g(_,w,I,N){let B={},W=w.attributes,k=0,j=I.getAttributes();for(let G in j)if(j[G].location>=0){let it=W[G];it===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),B[G]=_t,k++}r.attributes=B,r.attributesNum=k,r.index=N}function v(){let _=r.newAttributes;for(let w=0,I=_.length;w<I;w++)_[w]=0}function m(_){d(_,0)}function d(_,w){let I=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;I[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),B[_]!==w&&(i.vertexAttribDivisor(_,w),B[_]=w)}function E(){let _=r.newAttributes,w=r.enabledAttributes;for(let I=0,N=w.length;I<N;I++)w[I]!==_[I]&&(i.disableVertexAttribArray(I),w[I]=0)}function S(_,w,I,N,B,W,k){k===!0?i.vertexAttribIPointer(_,w,I,B,W):i.vertexAttribPointer(_,w,I,N,B,W)}function y(_,w,I,N){v();let B=N.attributes,W=I.getAttributes(),k=w.defaultAttributeValues;for(let j in W){let G=W[j];if(G.location>=0){let et=B[j];if(et===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(et=_.instanceColor)),et!==void 0){let it=et.normalized,_t=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;let Xt=Rt.buffer,q=Rt.type,K=Rt.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||et.gpuType===dl;if(et.isInterleavedBufferAttribute){let rt=et.data,Tt=rt.stride,Ct=et.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)d(G.location+Ot,rt.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Ot=0;Ot<G.locationSize;Ot++)S(G.location+Ot,_t/G.locationSize,q,it,Tt*K,(Ct+_t/G.locationSize*Ot)*K,vt)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,et.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let rt=0;rt<G.locationSize;rt++)S(G.location+rt,_t/G.locationSize,q,it,_t*K,_t/G.locationSize*rt*K,vt)}}else if(k!==void 0){let it=k[j];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(G.location,it);break;case 3:i.vertexAttrib3fv(G.location,it);break;case 4:i.vertexAttrib4fv(G.location,it);break;default:i.vertexAttrib1fv(G.location,it)}}}}E()}function R(){P();for(let _ in n){let w=n[_];for(let I in w){let N=w[I];for(let B in N)h(N[B].object),delete N[B];delete w[I]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let I in w){let N=w[I];for(let B in N)h(N[B].object),delete N[B];delete w[I]}delete n[_.id]}function C(_){for(let w in n){let I=n[w];if(I[_.id]===void 0)continue;let N=I[_.id];for(let B in N)h(N[B].object),delete N[B];delete I[_.id]}}function P(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function pm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function gm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,S=E*4,y=d.clippingState||null;l.value=y,y=h(g,f,S,p);for(let R=0;R!==S;++R)y[R]=e[R];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=p;S!==v;++S,y+=4)a.copy(u[S]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function _m(i){let t=new WeakMap;function e(a,o){return o===Za?a.mapping=Bi:o===Ja&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Za||o===Ja)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Io(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ms=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ii=4,gc=[.125,.215,.35,.446,.526,.582],ti=20,Ia=new Ms,_c=new xt,La=null,Na=0,Ua=0,Oa=!1,Kn=(1+Math.sqrt(5))/2,wi=1/Kn,vc=[new D(-Kn,wi,0),new D(Kn,wi,0),new D(-wi,0,Kn),new D(wi,0,Kn),new D(0,Kn,-wi),new D(0,Kn,wi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){La=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Na,Ua),this._renderer.xr.enabled=Oa,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:nn,format:Qe,colorSpace:Zi,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){let o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_c),h.toneMapping=Bn,h.autoClear=!1;let p=new Ee({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new re(new bs,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(_c),v=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let S=this._cubeSize;Ks(s,E*S,d>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Bi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(s-r-1)%vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);let d=[],E=0;for(let C=0;C<ti;++C){let P=C/v,b=Math.exp(-P*P/2);d.push(b),C===0?E+=b:C<m&&(E+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-Ii?s-S+Ii:0),T=4*(this._cubeSize-y);Ks(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Ia)}};function vm(i){let t=[],e=[],n=[],s=i,r=i-Ii+1+gc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ii?l=gc[a-i+Ii-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),S=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,P=T>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(b,v*g*T),S.set(f,m*g*T);let _=[T,T,T,T,T,T];y.set(_,d*g*T)}let R=new fe;R.setAttribute("position",new ge(E,v)),R.setAttribute("uv",new ge(S,m)),R.setAttribute("faceIndex",new ge(y,d)),t.push(R),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){let n=new Ie(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xm(i,t,e){let n=new Float32Array(ti),s=new D(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function yc(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function bc(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Za||l===Ja,h=l===Bi||l===zi;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Tr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Tr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mm(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let S=0,y=E.length;S<y;S+=3){let R=E[S+0],T=E[S+1],C=E[S+2];f.push(R,T,T,C,C,R)}}else if(g!==void 0){let E=g.array;v=g.version;for(let S=0,y=E.length/3-1;S<y;S+=3){let R=S+0,T=S+1,C=S+2;f.push(R,T,T,C,C,R)}}else return;let m=new(fh(f)?yr:xr)(f,1);m.version=v;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tm(i,t,e){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*u),C=new vr(T,y,R,u);C.type=ln,C.needsUpdate=!0;let P=S*4;for(let _=0;_<u;_++){let w=m[_],I=d[_],N=E[_],B=y*R*4*_;for(let W=0;W<w.count;W++){let k=W*P;p===!0&&(s.fromBufferAttribute(w,W),T[B+k+0]=s.x,T[B+k+1]=s.y,T[B+k+2]=s.z,T[B+k+3]=0),g===!0&&(s.fromBufferAttribute(I,W),T[B+k+4]=s.x,T[B+k+5]=s.y,T[B+k+6]=s.z,T[B+k+7]=0),v===!0&&(s.fromBufferAttribute(N,W),T[B+k+8]=s.x,T[B+k+9]=s.y,T[B+k+10]=s.z,T[B+k+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ht(y,R)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var wr=class extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=Ni){if(h!==Ni&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=ii),n===void 0&&h===Hi&&(n=ki),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_h=new Ue,Mc=new wr(1,1),vh=new vr,xh=new Po,yh=new Mr,Sc=[],Ec=[],Tc=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function Ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),xe(e,n)}}function Im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),xe(e,n)}}function Lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),xe(e,n)}}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=uh,r=Mc):r=_h,e.setTexture2D(t||r,s)}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xh,s)}function Wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yh,s)}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function qm(i){switch(i){case 5126:return Am;case 35664:return Cm;case 35665:return Rm;case 35666:return Pm;case 35674:return Dm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Om;case 35669:case 35673:return Fm;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,t){i.uniform1fv(this.addr,t)}function $m(i,t){let e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){let e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){let e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function jm(i,t){let e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Km(i,t){let e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qm(i,t){let e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function ag(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||_h,r[a])}function cg(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xh,r[a])}function hg(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yh,r[a])}function ug(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vh,r[a])}function dg(i){switch(i){case 5126:return Ym;case 35664:return $m;case 35665:return Zm;case 35666:return Jm;case 35674:return jm;case 35675:return Km;case 35676:return Qm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}var Lo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qm(e.type)}},No=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}},Uo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fa=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function fg(i,t,e){let n=i.name,s=n.length;for(Fa.lastIndex=0;;){let r=Fa.exec(n),a=Fa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cc(e,c===void 0?new Lo(o,i,t):new No(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Uo(o),Cc(e,u)),e=u}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);fg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var pg=37297,mg=0;function gg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pc=new It;function _g(i){Ft._getMatrix(Pc,Ft.workingColorSpace,i);let t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),a)}else return s}function vg(i,t){let e=_g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case ol:e="Linear";break;case ll:e="Reinhard";break;case cl:e="Cineon";break;case ws:e="ACESFilmic";break;case hl:e="AgX";break;case ul:e="Neutral";break;case Nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qs=new D;function yg(){Ft.getLuminanceCoefficients(Qs);let i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function Ic(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(Eg,wg)}var Tg=new Map;function wg(i,t){let e=Nt[t];if(e===void 0){let n=Tg.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(i){return i.replace(Ag,Cg)}function Cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ng(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Rg(e),c=Pg(e),h=Dg(e),u=Ig(e),f=Lg(e),p=bg(e),g=Mg(r),v=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),d.length>0&&(d+=`
`)):(m=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),d=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=Oo(a),a=Ic(a,e),a=Lc(a,e),o=Oo(o),o=Ic(o,e),o=Lc(o,e),a=Nc(a),o=Nc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=E+m+a,y=E+d+o,R=Rc(s,s.VERTEX_SHADER,S),T=Rc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),W=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{let j=Dc(s,R,"vertex"),G=Dc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+j+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||B==="")&&(k=!1);k&&(w.diagnostics={runnable:W,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(R),s.deleteShader(T),P=new Oi(s,v),b=Sg(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,pg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var Ug=0,Fo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bo(t),e.set(t,n)),n}},Bo=class{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}};function Og(i,t,e,n,s,r,a){let o=new ys,l=new Fo,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,w,I,N){let B=I.fog,W=N.geometry,k=b.isMeshStandardMaterial?I.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),G=j&&j.mapping===Br?j.image.height:null,et=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=it!==void 0?it.length:0,Rt=0;W.morphAttributes.position!==void 0&&(Rt=1),W.morphAttributes.normal!==void 0&&(Rt=2),W.morphAttributes.color!==void 0&&(Rt=3);let Xt,q,K,vt;if(et){let Zt=an[et];Xt=Zt.vertexShader,q=Zt.fragmentShader}else Xt=b.vertexShader,q=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);let rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Ct=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,le=!!b.map,Ht=!!b.matcap,ue=!!j,F=!!b.aoMap,Ve=!!b.lightMap,Bt=!!b.bumpMap,zt=!!b.normalMap,St=!!b.displacementMap,ne=!!b.emissiveMap,Mt=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,J=b.iridescence>0,Y=b.sheen>0,yt=b.transmission>0,at=x&&!!b.anisotropyMap,ut=z&&!!b.clearcoatMap,Vt=z&&!!b.clearcoatNormalMap,Q=z&&!!b.clearcoatRoughnessMap,dt=J&&!!b.iridescenceMap,Et=J&&!!b.iridescenceThicknessMap,wt=Y&&!!b.sheenColorMap,ft=Y&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Lt=!!b.specularColorMap,Qt=!!b.specularIntensityMap,L=yt&&!!b.transmissionMap,st=yt&&!!b.thicknessMap,X=!!b.gradientMap,Z=!!b.alphaMap,ct=b.alphaTest>0,ot=!!b.alphaHash,Pt=!!b.extensions,ce=Bn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Te={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:q,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&N.instanceColor!==null,instancingMorph:Ct&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:Ht,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ve,bumpMap:Bt,normalMap:zt,displacementMap:f&&St,emissiveMap:ne,normalMapObjectSpace:zt&&b.normalMapType===zu,normalMapTangentSpace:zt&&b.normalMapType===Bu,metalnessMap:Mt,roughnessMap:A,anisotropy:x,anisotropyMap:at,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:Y,sheenColorMap:wt,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Lt,specularIntensityMap:Qt,transmission:yt,transmissionMap:L,thicknessMap:st,gradientMap:X,opaque:b.transparent===!1&&b.blending===Li&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:b.combine,mapUv:le&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:Ve&&v(b.lightMap.channel),bumpMapUv:Bt&&v(b.bumpMap.channel),normalMapUv:zt&&v(b.normalMap.channel),displacementMapUv:St&&v(b.displacementMap.channel),emissiveMapUv:ne&&v(b.emissiveMap.channel),metalnessMapUv:Mt&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:at&&v(b.anisotropyMap.channel),clearcoatMapUv:ut&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(b.sheenRoughnessMap.channel),specularMapUv:kt&&v(b.specularMap.channel),specularColorMapUv:Lt&&v(b.specularColorMap.channel),specularIntensityMapUv:Qt&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:st&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(zt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(le||Z),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Rt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===$t,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(b.emissiveMap.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Me,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function d(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let w in b.defines)_.push(w),_.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(E(_,b),S(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function E(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let _=g[b.type],w;if(_){let I=an[_];w=Gn.clone(I.uniforms)}else w=b.uniforms;return w}function R(b,_){let w;for(let I=0,N=h.length;I<N;I++){let B=h[I];if(B.cacheKey===_){w=B,++w.usedTimes;break}}return w===void 0&&(w=new Ng(i,_,b,r),h.push(w)),w}function T(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,f,p,g,v,m){let d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,v,m){let d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(f||Oc),s.length>1&&s.sort(f||Oc)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fc,i.set(n,[a])):s>=r.length?(a=new Fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new xt};break;case"SpotLight":e={position:new D,direction:new D,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Hg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vg=0;function Gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){let t=new kg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ee,a=new ee;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,S=0,y=0,R=0,T=0,C=0;c.sort(Gg);for(let b=0,_=c.length;b<_;b++){let w=c[b],I=w.color,N=w.intensity,B=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],N);C++}else if(w.isDirectionalLight){let k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=w.shadow.matrix,E++}n.directional[p]=k,p++}else if(w.isSpotLight){let k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(I).multiplyScalar(N),k.distance=B,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[v]=k;let j=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,j.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,w.castShadow){let G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=W,y++}v++}else if(w.isRectAreaLight){let k=t.get(w);k.color.copy(I).multiplyScalar(N),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=k,m++}else if(w.isPointLight){let k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){let j=w.shadow,G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=k,g++}else if(w.isHemisphereLight){let k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(N),k.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=C,n.version=Vg++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let S=c[d];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(S.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Bc(i){let t=new Wg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bc(i),t.set(s,[o])):r>=a.length?(o=new Bc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var zo=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ko=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(i,t,e){let n=new Sr,s=new ht,r=new ht,a=new de,o=new zo({depthPacking:Fu}),l=new ko,c={},h=e.maxTextureSize,u={[zn]:Ne,[Ne]:zn,[Me]:Me},f=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let d=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=d!==_n&&this.type===_n,B=d===_n&&this.type!==_n;for(let W=0,k=T.length;W<k;W++){let j=T[W],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();if(s.multiply(et),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,G.mapSize.y=r.y)),G.map===null||N===!0||B===!0){let _t=this.type!==_n?{minFilter:ke,magFilter:ke}:{};G.map!==null&&G.map.dispose(),G.map=new Ie(s.x,s.y,_t),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let it=G.getViewportCount();for(let _t=0;_t<it;_t++){let Rt=G.getViewport(_t);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),I.viewport(a),G.updateMatrices(j,_t),n=G.getFrustum(),y(C,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&E(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,w)};function E(T,C){let P=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ie(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,p,v,null)}function S(T,C,P,b){let _=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=_.uuid,N=C.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let W=B[N];W===void 0&&(W=_.clone(),B[N]=W,C.addEventListener("dispose",R)),_=W}if(_.visible=C.visible,_.wireframe=C.wireframe,b===_n?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let I=i.properties.get(_);I.light=P}return _}function y(T,C,P,b,_){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),B=T.material;if(Array.isArray(B)){let W=N.groups;for(let k=0,j=W.length;k<j;k++){let G=W[k],et=B[G.materialIndex];if(et&&et.visible){let it=S(T,et,b,_);T.onBeforeShadow(i,T,C,P,N,it,G),i.renderBufferDirect(P,null,N,it,T,G),T.onAfterShadow(i,T,C,P,N,it,G)}}}else if(B.visible){let W=S(T,B,b,_);T.onBeforeShadow(i,T,C,P,N,W,null),i.renderBufferDirect(P,null,N,W,T,null),T.onAfterShadow(i,T,C,P,N,W,null)}}let I=T.children;for(let N=0,B=I.length;N<B;N++)y(I[N],C,P,b,_)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let b=c[P],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Zg={[Va]:Ga,[Wa]:Ya,[Xa]:$a,[Fi]:qa,[Ga]:Va,[Ya]:Wa,[$a]:Xa,[qa]:Fi};function Jg(i,t){function e(){let L=!1,st=new de,X=null,Z=new de(0,0,0,0);return{setMask:function(ct){X!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),X=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ot,Pt,ce,Te){Te===!0&&(ct*=ce,ot*=ce,Pt*=ce),st.set(ct,ot,Pt,ce),Z.equals(st)===!1&&(i.clearColor(ct,ot,Pt,ce),Z.copy(st))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,st=!1,X=null,Z=null,ct=null;return{setReversed:function(ot){if(st!==ot){let Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ot){X!==ot&&!L&&(i.depthMask(ot),X=ot)},setFunc:function(ot){if(st&&(ot=Zg[ot]),Z!==ot){switch(ot){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(st&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){L=!1,X=null,Z=null,ct=null,st=!1}}}function s(){let L=!1,st=null,X=null,Z=null,ct=null,ot=null,Pt=null,ce=null,Te=null;return{setTest:function(Zt){L||(Zt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!L&&(i.stencilMask(Zt),st=Zt)},setFunc:function(Zt,qe,hn){(X!==Zt||Z!==qe||ct!==hn)&&(i.stencilFunc(Zt,qe,hn),X=Zt,Z=qe,ct=hn)},setOp:function(Zt,qe,hn){(ot!==Zt||Pt!==qe||ce!==hn)&&(i.stencilOp(Zt,qe,hn),ot=Zt,Pt=qe,ce=hn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){Te!==Zt&&(i.clearStencil(Zt),Te=Zt)},reset:function(){L=!1,st=null,X=null,Z=null,ct=null,ot=null,Pt=null,ce=null,Te=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,y=null,R=null,T=null,C=new xt(0,0,0),P=0,b=!1,_=null,w=null,I=null,N=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=j>=2);let et=null,it={},_t=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Xt=new de().fromArray(_t),q=new de().fromArray(Rt);function K(L,st,X,Z){let ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<X;Pt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}let vt={};vt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Fi),Bt(!1),zt(Hl),rt(i.CULL_FACE),F(cn);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Tt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ct(L,st){return u[L]!==st?(i.bindFramebuffer(L,st),u[L]=st,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(L,st){let X=p,Z=!1;if(L){X=f.get(st),X===void 0&&(X=[],f.set(st,X));let ct=L.textures;if(X.length!==ct.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Pt=ct.length;ot<Pt;ot++)X[ot]=i.COLOR_ATTACHMENT0+ot;X.length=ct.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function le(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Ht={[Qn]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};Ht[_u]=i.MIN,Ht[vu]=i.MAX;let ue={[xu]:i.ZERO,[yu]:i.ONE,[bu]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,st,X,Z,ct,ot,Pt,ce,Te,Zt){if(L===cn){v===!0&&(Tt(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),L!==pu){if(L!==m||Zt!==b){if((d!==Qn||y!==Qn)&&(i.blendEquation(i.FUNC_ADD),d=Qn,y=Qn),Zt)switch(L){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,R=null,T=null,C.set(0,0,0),P=0,m=L,b=Zt}return}ct=ct||st,ot=ot||X,Pt=Pt||Z,(st!==d||ct!==y)&&(i.blendEquationSeparate(Ht[st],Ht[ct]),d=st,y=ct),(X!==E||Z!==S||ot!==R||Pt!==T)&&(i.blendFuncSeparate(ue[X],ue[Z],ue[ot],ue[Pt]),E=X,S=Z,R=ot,T=Pt),(ce.equals(C)===!1||Te!==P)&&(i.blendColor(ce.r,ce.g,ce.b,Te),C.copy(ce),P=Te),m=L,b=!1}function Ve(L,st){L.side===Me?Tt(i.CULL_FACE):rt(i.CULL_FACE);let X=L.side===Ne;st&&(X=!X),Bt(X),L.blending===Li&&L.transparent===!1?F(cn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function zt(L){L!==uu?(rt(i.CULL_FACE),L!==w&&(L===Hl?i.cullFace(i.BACK):L===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),w=L}function St(L){L!==I&&(k&&i.lineWidth(L),I=L)}function ne(L,st,X){L?(rt(i.POLYGON_OFFSET_FILL),(N!==st||B!==X)&&(i.polygonOffset(st,X),N=st,B=X)):Tt(i.POLYGON_OFFSET_FILL)}function Mt(L){L?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),et!==L&&(i.activeTexture(L),et=L)}function x(L,st,X){X===void 0&&(et===null?X=i.TEXTURE0+W-1:X=et);let Z=it[X];Z===void 0&&(Z={type:void 0,texture:void 0},it[X]=Z),(Z.type!==L||Z.texture!==st)&&(et!==X&&(i.activeTexture(X),et=X),i.bindTexture(L,st||vt[L]),Z.type=L,Z.texture=st)}function z(){let L=it[et];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){Xt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Xt.copy(L))}function ft(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function kt(L,st){let X=c.get(st);X===void 0&&(X=new WeakMap,c.set(st,X));let Z=X.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(st,L.name),X.set(L,Z))}function Lt(L,st){let Z=c.get(st).get(L);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,L.__bindingPointIndex),l.set(st,Z))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,it={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,y=null,R=null,T=null,C=new xt(0,0,0),P=0,b=!1,_=null,w=null,I=null,N=null,B=null,Xt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Ct,drawBuffers:Ot,useProgram:le,setBlending:F,setMaterial:Ve,setFlipSided:Bt,setCullFace:zt,setLineWidth:St,setPolygonOffset:ne,setScissorTest:Mt,activeTexture:A,bindTexture:x,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:dt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Lt,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:wt,viewport:ft,reset:Qt}}function zc(i,t,e,n){let s=jg(n);switch(e){case rh:return i*t;case oh:return i*t;case lh:return i*t*2;case ml:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case ch:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case ah:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case vl:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case bo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hh:case So:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jg(i){switch(i){case bn:case nh:return{byteLength:1,components:1};case vs:case ih:case nn:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case ii:case dl:case ln:return{byteLength:4,components:1};case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):gr("canvas")}function v(A,x,z){let $=1,J=Mt(A);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Y=Math.floor($*J.width),yt=Math.floor($*J.height);u===void 0&&(u=g(Y,yt));let at=x?g(Y,yt):u;return at.width=Y,at.height=yt,at.getContext("2d").drawImage(A,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+yt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,x,z,$,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){let yt=J?zr:Ft.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=yt===$t?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(A,x){let z;return A?x===null||x===ii||x===ki?z=i.DEPTH24_STENCIL8:x===ln?z=i.DEPTH32F_STENCIL8:x===vs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===ki?z=i.DEPTH_COMPONENT24:x===ln?z=i.DEPTH_COMPONENT32F:x===vs&&(z=i.DEPTH_COMPONENT16),z}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){let x=A.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&h.delete(x)}function C(A){let x=A.target;x.removeEventListener("dispose",C),_(x)}function P(A){let x=n.get(A);if(x.__webglInit===void 0)return;let z=A.source,$=f.get(z);if($){let J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys($).length===0&&f.delete(z)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let z=A.source,$=f.get(z);delete $[x.__cacheKey],a.memory.textures--}function _(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let $=0,J=z.length;$<J;$++){let Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(A)}let w=0;function I(){w=0}function N(){let A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function B(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){let z=n.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,A,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function k(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function j(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function G(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let et={[ja]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},it={[ke]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},_t={[ku]:i.NEVER,[qu]:i.ALWAYS,[Hu]:i.LESS,[uh]:i.LEQUAL,[Vu]:i.EQUAL,[Xu]:i.GEQUAL,[Gu]:i.GREATER,[Wu]:i.NOTEQUAL};function Rt(A,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===ha||x.magFilter===Ls||x.magFilter===ni||x.minFilter===on||x.minFilter===ha||x.minFilter===Ls||x.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==Ls&&x.minFilter!==ni||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));let $=x.source,J=f.get($);J===void 0&&(J={},f.set($,J));let Y=B(x);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[Y].usedTimes++;let yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&b(x)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return z}function q(A,x,z){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let J=Xt(A,x),Y=x.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+z);let yt=n.get(Y);if(Y.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);let at=Ft.getPrimaries(Ft.workingColorSpace),ut=x.colorSpace===On?null:Ft.getPrimaries(x.colorSpace),Vt=x.colorSpace===On||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=v(x.image,!1,s.maxTextureSize);Q=ne(x,Q);let dt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),wt=S(x.internalFormat,dt,Et,x.colorSpace,x.isVideoTexture);Rt($,x);let ft,kt=x.mipmaps,Lt=x.isVideoTexture!==!0,Qt=yt.__version===void 0||J===!0,L=Y.dataReady,st=R(x,Q);if(x.isDepthTexture)wt=y(x.format===Hi,x.type),Qt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,dt,Et,null));else if(x.isDataTexture)if(kt.length>0){Lt&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,wt,kt[0].width,kt[0].height);for(let X=0,Z=kt.length;X<Z;X++)ft=kt[X],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,X,wt,ft.width,ft.height,0,dt,Et,ft.data);x.generateMipmaps=!1}else Lt?(Qt&&e.texStorage2D(i.TEXTURE_2D,st,wt,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Et,Q.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,dt,Et,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,wt,kt[0].width,kt[0].height,Q.depth);for(let X=0,Z=kt.length;X<Z;X++)if(ft=kt[X],x.format!==Qe)if(dt!==null)if(Lt){if(L)if(x.layerUpdates.size>0){let ct=zc(ft.width,ft.height,x.format,x.type);for(let ot of x.layerUpdates){let Pt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ot,ft.width,ft.height,1,dt,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,wt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ft.width,ft.height,Q.depth,dt,Et,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,wt,ft.width,ft.height,Q.depth,0,dt,Et,ft.data)}else{Lt&&Qt&&e.texStorage2D(i.TEXTURE_2D,st,wt,kt[0].width,kt[0].height);for(let X=0,Z=kt.length;X<Z;X++)ft=kt[X],x.format!==Qe?dt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,X,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,X,wt,ft.width,ft.height,0,dt,Et,ft.data)}else if(x.isDataArrayTexture)if(Lt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,wt,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){let X=zc(Q.width,Q.height,x.format,x.type);for(let Z of x.layerUpdates){let ct=Q.data.subarray(Z*X/Q.data.BYTES_PER_ELEMENT,(Z+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,dt,Et,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Et,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,dt,Et,Q.data);else if(x.isData3DTexture)Lt?(Qt&&e.texStorage3D(i.TEXTURE_3D,st,wt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Et,Q.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,dt,Et,Q.data);else if(x.isFramebufferTexture){if(Qt)if(Lt)e.texStorage2D(i.TEXTURE_2D,st,wt,Q.width,Q.height);else{let X=Q.width,Z=Q.height;for(let ct=0;ct<st;ct++)e.texImage2D(i.TEXTURE_2D,ct,wt,X,Z,0,dt,Et,null),X>>=1,Z>>=1}}else if(kt.length>0){if(Lt&&Qt){let X=Mt(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,wt,X.width,X.height)}for(let X=0,Z=kt.length;X<Z;X++)ft=kt[X],Lt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,Et,ft):e.texImage2D(i.TEXTURE_2D,X,wt,dt,Et,ft);x.generateMipmaps=!1}else if(Lt){if(Qt){let X=Mt(Q);e.texStorage2D(i.TEXTURE_2D,st,wt,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,Q)}else e.texImage2D(i.TEXTURE_2D,0,wt,dt,Et,Q);m(x)&&d($),yt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function K(A,x,z){if(x.image.length!==6)return;let $=Xt(A,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let Y=n.get(J);if(J.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+z);let yt=Ft.getPrimaries(Ft.workingColorSpace),at=x.colorSpace===On?null:Ft.getPrimaries(x.colorSpace),ut=x.colorSpace===On||yt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Vt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Vt&&!Q?dt[Z]=v(x.image[Z],!0,s.maxCubemapSize):dt[Z]=Q?x.image[Z].image:x.image[Z],dt[Z]=ne(x,dt[Z]);let Et=dt[0],wt=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),kt=S(x.internalFormat,wt,ft,x.colorSpace),Lt=x.isVideoTexture!==!0,Qt=Y.__version===void 0||$===!0,L=J.dataReady,st=R(x,Et);Rt(i.TEXTURE_CUBE_MAP,x);let X;if(Vt){Lt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Et.width,Et.height);for(let Z=0;Z<6;Z++){X=dt[Z].mipmaps;for(let ct=0;ct<X.length;ct++){let ot=X[ct];x.format!==Qe?wt!==null?Lt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,wt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,ot.width,ot.height,0,wt,ft,ot.data)}}}else{if(X=x.mipmaps,Lt&&Qt){X.length>0&&st++;let Z=Mt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,wt,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,dt[Z].width,dt[Z].height,0,wt,ft,dt[Z].data);for(let ct=0;ct<X.length;ct++){let Pt=X[ct].image[Z].image;Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Pt.width,Pt.height,wt,ft,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,Pt.width,Pt.height,0,wt,ft,Pt.data)}}else{Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,wt,ft,dt[Z]);for(let ct=0;ct<X.length;ct++){let ot=X[ct];Lt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,wt,ft,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,wt,ft,ot.image[Z])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function vt(A,x,z,$,J,Y){let yt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ut=S(z.internalFormat,yt,at,z.colorSpace),Vt=n.get(x),Q=n.get(z);if(Q.__renderTarget=x,!Vt.__hasExternalTextures){let dt=Math.max(1,x.width>>Y),Et=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ut,dt,Et,x.depth,0,yt,at,null):e.texImage2D(J,Y,ut,dt,Et,0,yt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,Bt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=y(x.stencilBuffer,J),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Bt(x);zt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{let $=x.textures;for(let J=0;J<$.length;J++){let Y=$[J],yt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ut=S(Y.internalFormat,yt,at,Y.colorSpace),Vt=Bt(x);z&&zt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ut,x.width,x.height):zt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let J=$.__webglTexture,Y=Bt(x);if(x.depthTexture.format===Ni)zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Hi)zt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(A){let x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[$],A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,z){let $=n.get(A);x!==void 0&&vt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ct(A)}function le(A){let x=A.texture,z=n.get(A),$=n.get(x);A.addEventListener("dispose",C);let J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)z.__webglFramebuffer[at][ut]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(yt)for(let at=0,ut=J.length;at<ut;at++){let Vt=n.get(J[at]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&zt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){let ut=J[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);let Vt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=S(ut.internalFormat,Vt,Q,ut.colorSpace,A.isXRRenderTarget===!0),Et=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)vt(z.__webglFramebuffer[at][ut],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else vt(z.__webglFramebuffer[at],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let at=0,ut=J.length;at<ut;at++){let Vt=J[at],Q=n.get(Vt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Rt(i.TEXTURE_2D,Vt),vt(z.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Vt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Rt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)vt(z.__webglFramebuffer[ut],A,x,i.COLOR_ATTACHMENT0,at,ut);else vt(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,at,0);m(x)&&d(at),e.unbindTexture()}A.depthBuffer&&Ct(A)}function Ht(A){let x=A.textures;for(let z=0,$=x.length;z<$;z++){let J=x[z];if(m(J)){let Y=E(A),yt=n.get(J).__webglTexture;e.bindTexture(Y,yt),d(Y),e.unbindTexture()}}}let ue=[],F=[];function Ve(A){if(A.samples>0){if(zt(A)===!1){let x=A.textures,z=A.width,$=A.height,J=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),at=x.length>1;if(at)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);let Vt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,J,i.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);let Vt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ne(A,x){let z=A.colorSpace,$=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Zi&&z!==On&&(Ft.getTransfer(z)===$t?($!==Qe||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Mt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=zt}function Qg(i,t){function e(n,s=On){let r,a=Ft.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===ah)return i.RGB;if(n===Qe)return i.RGBA;if(n===oh)return i.LUMINANCE;if(n===lh)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===bo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===So||n===Eo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ho=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new oe({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Go=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new Vo,m=e.getContextAttributes(),d=null,E=null,S=[],y=[],R=new ht,T=null,C=new De;C.viewport=new de;let P=new De;P.viewport=new de;let b=[C,P],_=new Ho,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=S[q];return K===void 0&&(K=new _s,S[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=S[q];return K===void 0&&(K=new _s,S[q]=K),K.getGripSpace()},this.getHand=function(q){let K=S[q];return K===void 0&&(K=new _s,S[q]=K),K.getHandSpace()};function N(q){let K=y.indexOf(q.inputSource);if(K===-1)return;let vt=S[K];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){let K=y[q];K!==null&&(y[q]=null,S[q].disconnect(K))}w=null,I=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ie(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Hi:Ni,vt=m.stencil?ki:ii);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ie(f.textureWidth,f.textureHeight,{format:Qe,type:bn,depthTexture:new wr(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(q){for(let K=0;K<q.removed.length;K++){let vt=q.removed[K],rt=y.indexOf(vt);rt>=0&&(y[rt]=null,S[rt].disconnect(vt))}for(let K=0;K<q.added.length;K++){let vt=q.added[K],rt=y.indexOf(vt);if(rt===-1){for(let Ct=0;Ct<S.length;Ct++)if(Ct>=y.length){y.push(vt),rt=Ct;break}else if(y[Ct]===null){y[Ct]=vt,rt=Ct;break}if(rt===-1)break}let Tt=S[rt];Tt&&Tt.connect(vt)}}let k=new D,j=new D;function G(q,K,vt){k.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let rt=k.distanceTo(j),Tt=K.projectionMatrix.elements,Ct=vt.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),le=Tt[14]/(Tt[10]+1),Ht=(Tt[9]+1)/Tt[5],ue=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],Ve=(Ct[8]+1)/Ct[0],Bt=Ot*F,zt=Ot*Ve,St=rt/(-F+Ve),ne=St*-F;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ne),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Mt=Ot+St,A=le+St,x=Bt-ne,z=zt+(rt-ne),$=Ht*le/A*Mt,J=ue*le/A*Mt;q.projectionMatrix.makePerspective(x,z,$,J,Mt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,vt=q.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),_.near=P.near=C.near=K,_.far=P.far=C.far=vt,(w!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,I=_.far),C.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,_.layers.mask=C.layers.mask|P.layers.mask;let rt=q.parent,Tt=_.cameras;et(_,rt);for(let Ct=0;Ct<Tt.length;Ct++)et(Tt[Ct],rt);Tt.length===2?G(_,C,P):_.projectionMatrix.copy(C.projectionMatrix),it(q,_,rt)};function it(q,K,vt){vt===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _t=null;function Rt(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Ct=0;Ct<vt.length;Ct++){let Ot=vt[Ct],le=null;if(p!==null)le=p.getViewport(Ot);else{let ue=u.getViewSubImage(f,Ot);le=ue.viewport,Ct===0&&(t.setRenderTargetTextures(E,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(E))}let Ht=b[Ct];Ht===void 0&&(Ht=new De,Ht.layers.enable(Ct),Ht.viewport=new de,b[Ct]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Ht)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Ct=u.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,s.renderState)}}for(let vt=0;vt<S.length;vt++){let rt=y[vt],Tt=S[vt];rt!==null&&Tt!==void 0&&Tt.update(rt,K,c||a)}_t&&_t(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Xt=new gh;Xt.setAnimationLoop(Rt),this.setAnimationLoop=function(q){_t=q},this.dispose=function(){}}},jn=new Tn,i0=new ee;function s0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),S=E.envMap,y=E.envMapRotation;S&&(m.envMap.value=S,jn.copy(y),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let y=S.program;n.uniformBlockBinding(E,y)}function c(E,S){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));let R=S.program;n.updateUBOMapping(E,R);let T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){let S=u();E.__bindingPointIndex=S;let y=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],y=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,C=y.length;T<C;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,_=P.length;b<_;b++){let w=P[b];if(p(w,T,b,R)===!0){let I=w.__offset,N=Array.isArray(w.value)?w.value:[w.value],B=0;for(let W=0;W<N.length;W++){let k=N[W],j=v(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+B,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,y,R){let T=E.value,C=S+"_"+y;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){let S=E.uniforms,y=0,R=16;for(let C=0,P=S.length;C<P;C++){let b=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,w=b.length;_<w;_++){let I=b[_],N=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=N.length;B<W;B++){let k=N[B],j=v(k),G=y%R,et=G%j.boundary,it=G+et;y+=et,it!==0&&R-it<j.storage&&(y+=R-it),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=j.storage}}}let T=y%R;return T>0&&(y+=R-T),E.__size=y,E.__cache={},this}function v(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ar=class{constructor(t={}){let{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Bn,this.toneMappingExposure=1;let y=this,R=!1,T=0,C=0,P=null,b=-1,_=null,w=new de,I=new de,N=null,B=new xt(0),W=0,k=e.width,j=e.height,G=1,et=null,it=null,_t=new de(0,0,k,j),Rt=new de(0,0,k,j),Xt=!1,q=new Sr,K=!1,vt=!1,rt=new ee,Tt=new ee,Ct=new D,Ot=new de,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ue(){return P===null?G:1}let F=n;function Ve(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){let U="webgl2";if(F=Ve(U,M),F===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,zt,St,ne,Mt,A,x,z,$,J,Y,yt,at,ut,Vt,Q,dt,Et,wt,ft,kt,Lt,Qt,L;function st(){Bt=new bm(F),Bt.init(),Lt=new Qg(F,Bt),zt=new mm(F,Bt,t,Lt),St=new Jg(F,Bt),zt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),ne=new Em(F),Mt=new Fg,A=new Kg(F,Bt,St,Mt,zt,Lt,ne),x=new _m(y),z=new ym(y),$=new Pd(F),Qt=new fm(F,$),J=new Mm(F,$,ne,Qt),Y=new wm(F,J,$,ne),wt=new Tm(F,zt,A),Q=new gm(Mt),yt=new Og(y,x,z,Bt,zt,Qt,Q),at=new s0(y,Mt),ut=new zg,Vt=new Xg(Bt),Et=new dm(y,x,z,St,Y,p,l),dt=new $g(y,Y,zt),L=new r0(F,ne,zt,St),ft=new pm(F,Bt,ne),kt=new Sm(F,Bt,ne),ne.programs=yt.programs,y.capabilities=zt,y.extensions=Bt,y.properties=Mt,y.renderLists=ut,y.shadowMap=dt,y.state=St,y.info=ne}st();let X=new Go(y,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(k,j,!1))},this.getSize=function(M){return M.set(k,j)},this.setSize=function(M,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,j=U,e.width=Math.floor(M*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(k*G,j*G).floor()},this.setDrawingBufferSize=function(M,U,H){k=M,j=U,G=H,e.width=Math.floor(M*H),e.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,U,H,V){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,U,H,V),St.viewport(w.copy(_t).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Rt)},this.setScissor=function(M,U,H,V){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,U,H,V),St.scissor(I.copy(Rt).multiplyScalar(G).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(M){St.setScissorTest(Xt=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){it=M},this.getClearColor=function(M){return M.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let O=!1;if(P!==null){let tt=P.texture.format;O=tt===vl||tt===_l||tt===gl}if(O){let tt=P.texture.type,lt=tt===bn||tt===ii||tt===vs||tt===ki||tt===fl||tt===pl,pt=Et.getClearColor(),mt=Et.getClearAlpha(),At=pt.r,Dt=pt.g,gt=pt.b;lt?(g[0]=At,g[1]=Dt,g[2]=gt,g[3]=mt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=At,v[1]=Dt,v[2]=gt,v[3]=mt,F.clearBufferiv(F.COLOR,0,v))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Vt.dispose(),Mt.dispose(),x.dispose(),z.dispose(),Y.dispose(),Qt.dispose(),L.dispose(),yt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ll),X.removeEventListener("sessionend",Nl),Xn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=ne.autoReset,U=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,O=dt.type;st(),ne.autoReset=M,dt.enabled=U,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=O}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pt(M){let U=M.target;U.removeEventListener("dispose",Pt),ce(U)}function ce(M){Te(M),Mt.remove(M)}function Te(M){let U=Mt.get(M).programs;U!==void 0&&(U.forEach(function(H){yt.releaseProgram(H)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,O,tt){U===null&&(U=le);let lt=O.isMesh&&O.matrixWorld.determinant()<0,pt=nu(M,U,H,V,O);St.setMaterial(V,lt);let mt=H.index,At=1;if(V.wireframe===!0){if(mt=J.getWireframeAttribute(H),mt===void 0)return;At=2}let Dt=H.drawRange,gt=H.attributes.position,Gt=Dt.start*At,te=(Dt.start+Dt.count)*At;tt!==null&&(Gt=Math.max(Gt,tt.start*At),te=Math.min(te,(tt.start+tt.count)*At)),mt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,mt.count)):gt!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,gt.count));let ie=te-Gt;if(ie<0||ie===1/0)return;Qt.setup(O,V,pt,H,mt);let Le,qt=ft;if(mt!==null&&(Le=$.get(mt),qt=kt,qt.setIndex(Le)),O.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*ue()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(O.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),St.setLineWidth(bt*ue()),O.isLineSegments?qt.setMode(F.LINES):O.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else O.isPoints?qt.setMode(F.POINTS):O.isSprite&&qt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))qt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let bt=O._multiDrawStarts,un=O._multiDrawCounts,Yt=O._multiDrawCount,Ye=mt?$.get(mt).bytesPerElement:1,di=Mt.get(V).currentProgram.getUniforms();for(let Fe=0;Fe<Yt;Fe++)di.setValue(F,"_gl_DrawID",Fe),qt.render(bt[Fe]/Ye,un[Fe])}else if(O.isInstancedMesh)qt.renderInstances(Gt,ie,O.count);else if(H.isInstancedBufferGeometry){let bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,un=Math.min(H.instanceCount,bt);qt.renderInstances(Gt,ie,un)}else qt.render(Gt,ie)};function Zt(M,U,H){M.transparent===!0&&M.side===Me&&M.forceSinglePass===!1?(M.side=Ne,M.needsUpdate=!0,Is(M,U,H),M.side=zn,M.needsUpdate=!0,Is(M,U,H),M.side=Me):Is(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),d=Vt.get(H),d.init(U),S.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==H&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let V=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let tt=O.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let pt=tt[lt];Zt(pt,H,O),V.add(pt)}else Zt(tt,H,O),V.add(tt)}),S.pop(),d=null,V},this.compileAsync=function(M,U,H=null){let V=this.compile(M,U,H);return new Promise(O=>{function tt(){if(V.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){O(M);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qe=null;function hn(M){qe&&qe(M)}function Ll(){Xn.stop()}function Nl(){Xn.start()}let Xn=new gh;Xn.setAnimationLoop(hn),typeof self!="undefined"&&Xn.setContext(self),this.setAnimationLoop=function(M){qe=M,X.setAnimationLoop(M),M===null?Xn.stop():Xn.start()},X.addEventListener("sessionstart",Ll),X.addEventListener("sessionend",Nl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,P),d=Vt.get(M,S.length),d.init(U),S.push(d),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Tt),vt=this.localClippingEnabled,K=Q.init(this.clippingPlanes,vt),m=ut.get(M,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&la(tt,U,-1/0,y.sortObjects)}la(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,it),Ht=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ht&&Et.addToRenderList(m,M),this.info.render.frame++,K===!0&&Q.beginShadows();let H=d.state.shadowsArray;dt.render(H,M,U),K===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){let tt=U.cameras;if(O.length>0)for(let lt=0,pt=tt.length;lt<pt;lt++){let mt=tt[lt];Ol(V,O,M,mt)}Ht&&Et.render(M);for(let lt=0,pt=tt.length;lt<pt;lt++){let mt=tt[lt];Ul(m,M,mt,mt.viewport)}}else O.length>0&&Ol(V,O,M,U),Ht&&Et.render(M),Ul(m,M,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,U),Qt.resetDefaultState(),b=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],K===!0&&Q.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function la(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){V&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Tt);let lt=Y.update(M),pt=M.material;pt.visible&&m.push(M,lt,pt,H,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let lt=Y.update(M),pt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(Tt)),Array.isArray(pt)){let mt=lt.groups;for(let At=0,Dt=mt.length;At<Dt;At++){let gt=mt[At],Gt=pt[gt.materialIndex];Gt&&Gt.visible&&m.push(M,lt,Gt,H,Ot.z,gt)}}else pt.visible&&m.push(M,lt,pt,H,Ot.z,null)}}let tt=M.children;for(let lt=0,pt=tt.length;lt<pt;lt++)la(tt[lt],U,H,V)}function Ul(M,U,H,V){let O=M.opaque,tt=M.transmissive,lt=M.transparent;d.setupLightsView(H),K===!0&&Q.setGlobalState(y.clippingPlanes,H),V&&St.viewport(w.copy(V)),O.length>0&&Ds(O,U,H),tt.length>0&&Ds(tt,U,H),lt.length>0&&Ds(lt,U,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ol(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Ie(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?nn:bn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));let tt=d.state.transmissionRenderTarget[V.id],lt=V.viewport||w;tt.setSize(lt.z,lt.w);let pt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(B),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&Et.render(H);let mt=y.toneMapping;y.toneMapping=Bn;let At=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),K===!0&&Q.setGlobalState(y.clippingPlanes,V),Ds(M,H,V),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let gt=0,Gt=U.length;gt<Gt;gt++){let te=U[gt],ie=te.object,Le=te.geometry,qt=te.material,bt=te.group;if(qt.side===Me&&ie.layers.test(V.layers)){let un=qt.side;qt.side=Ne,qt.needsUpdate=!0,Fl(ie,H,V,Le,qt,bt),qt.side=un,qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}y.setRenderTarget(pt),y.setClearColor(B,W),At!==void 0&&(V.viewport=At),y.toneMapping=mt}function Ds(M,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,tt=M.length;O<tt;O++){let lt=M[O],pt=lt.object,mt=lt.geometry,At=V===null?lt.material:V,Dt=lt.group;pt.layers.test(H.layers)&&Fl(pt,U,H,mt,At,Dt)}}function Fl(M,U,H,V,O,tt){M.onBeforeRender(y,U,H,V,O,tt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,U,H,V,M,tt),O.transparent===!0&&O.side===Me&&O.forceSinglePass===!1?(O.side=Ne,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,M,tt),O.side=zn,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,M,tt),O.side=Me):y.renderBufferDirect(H,U,V,O,M,tt),M.onAfterRender(y,U,H,V,O,tt)}function Is(M,U,H){U.isScene!==!0&&(U=le);let V=Mt.get(M),O=d.state.lights,tt=d.state.shadowsArray,lt=O.state.version,pt=yt.getParameters(M,O.state,tt,U,H),mt=yt.getProgramCacheKey(pt),At=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?z:x).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",Pt),At=new Map,V.programs=At);let Dt=At.get(mt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===lt)return zl(M,pt),Dt}else pt.uniforms=yt.getUniforms(M),M.onBeforeCompile(pt,y),Dt=yt.acquireProgram(pt,mt),At.set(mt,Dt),V.uniforms=pt.uniforms;let gt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(gt.clippingPlanes=Q.uniform),zl(M,pt),V.needsLights=su(M),V.lightsStateVersion=lt,V.needsLights&&(gt.ambientLightColor.value=O.state.ambient,gt.lightProbe.value=O.state.probe,gt.directionalLights.value=O.state.directional,gt.directionalLightShadows.value=O.state.directionalShadow,gt.spotLights.value=O.state.spot,gt.spotLightShadows.value=O.state.spotShadow,gt.rectAreaLights.value=O.state.rectArea,gt.ltc_1.value=O.state.rectAreaLTC1,gt.ltc_2.value=O.state.rectAreaLTC2,gt.pointLights.value=O.state.point,gt.pointLightShadows.value=O.state.pointShadow,gt.hemisphereLights.value=O.state.hemi,gt.directionalShadowMap.value=O.state.directionalShadowMap,gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,gt.spotShadowMap.value=O.state.spotShadowMap,gt.spotLightMatrix.value=O.state.spotLightMatrix,gt.spotLightMap.value=O.state.spotLightMap,gt.pointShadowMap.value=O.state.pointShadowMap,gt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function Bl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Oi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function zl(M,U){let H=Mt.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function nu(M,U,H,V,O){U.isScene!==!0&&(U=le),A.resetTextureUnits();let tt=U.fog,lt=V.isMeshStandardMaterial?U.environment:null,pt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zi,mt=(V.isMeshStandardMaterial?z:x).get(V.envMap||lt),At=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),gt=!!H.morphAttributes.position,Gt=!!H.morphAttributes.normal,te=!!H.morphAttributes.color,ie=Bn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ie=y.toneMapping);let Le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=Le!==void 0?Le.length:0,bt=Mt.get(V),un=d.state.lights;if(K===!0&&(vt===!0||M!==_)){let Ge=M===_&&V.id===b;Q.setState(V,M,Ge)}let Yt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==un.state.version||bt.outputColorSpace!==pt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==mt||V.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==At||bt.vertexTangents!==Dt||bt.morphTargets!==gt||bt.morphNormals!==Gt||bt.morphColors!==te||bt.toneMapping!==ie||bt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,bt.__version=V.version);let Ye=bt.currentProgram;Yt===!0&&(Ye=Is(V,U,O));let di=!1,Fe=!1,es=!1,se=Ye.getUniforms(),rn=bt.uniforms;if(St.useProgram(Ye.program)&&(di=!0,Fe=!0,es=!0),V.id!==b&&(b=V.id,Fe=!0),di||_!==M){St.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),ud(rt),dd(rt),se.setValue(F,"projectionMatrix",rt)):se.setValue(F,"projectionMatrix",M.projectionMatrix),se.setValue(F,"viewMatrix",M.matrixWorldInverse);let Cn=se.map.cameraPosition;Cn!==void 0&&Cn.setValue(F,Ct.setFromMatrixPosition(M.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&se.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Fe=!0,es=!0)}if(O.isSkinnedMesh){se.setOptional(F,O,"bindMatrix"),se.setOptional(F,O,"bindMatrixInverse");let Ge=O.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),se.setValue(F,"boneTexture",Ge.boneTexture,A))}O.isBatchedMesh&&(se.setOptional(F,O,"batchingTexture"),se.setValue(F,"batchingTexture",O._matricesTexture,A),se.setOptional(F,O,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",O._indirectTexture,A),se.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",O._colorsTexture,A));let ns=H.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&wt.update(O,H,Ye),(Fe||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,se.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=mt,rn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Fe&&(se.setValue(F,"toneMappingExposure",y.toneMappingExposure),bt.needsLights&&iu(rn,es),tt&&V.fog===!0&&at.refreshFogUniforms(rn,tt),at.refreshMaterialUniforms(rn,V,G,j,d.state.transmissionRenderTarget[M.id]),Oi.upload(F,Bl(bt),rn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Oi.upload(F,Bl(bt),rn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&se.setValue(F,"center",O.center),se.setValue(F,"modelViewMatrix",O.modelViewMatrix),se.setValue(F,"normalMatrix",O.normalMatrix),se.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ge=V.uniformsGroups;for(let Cn=0,Rn=Ge.length;Cn<Rn;Cn++){let kl=Ge[Cn];L.update(kl,Ye),L.bind(kl,Ye)}}return Ye}function iu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,H){Mt.get(M.texture).__webglTexture=U,Mt.get(M.depthTexture).__webglTexture=H;let V=Mt.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let H=Mt.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){P=M,T=U,C=H;let V=!0,O=null,tt=!1,lt=!1;if(M){let mt=Mt.get(M);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(mt.__hasExternalTextures)A.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let gt=M.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&Mt.has(gt)&&(M.width!==gt.image.width||M.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);let Dt=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?O=Dt[U][H]:O=Dt[U],tt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?O=Mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[H]:O=Dt,w.copy(M.viewport),I.copy(M.scissor),N=M.scissorTest}else w.copy(_t).multiplyScalar(G).floor(),I.copy(Rt).multiplyScalar(G).floor(),N=Xt;if(St.bindFramebuffer(F.FRAMEBUFFER,O)&&V&&St.drawBuffers(M,O),St.viewport(w),St.scissor(I),St.setScissorTest(N),tt){let mt=Mt.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,H)}else if(lt){let mt=Mt.get(M.texture),At=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,H||0,At)}b=-1},this.readRenderTargetPixels=function(M,U,H,V,O,tt,lt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){St.bindFramebuffer(F.FRAMEBUFFER,pt);try{let mt=M.texture,At=mt.format,Dt=mt.type;if(!zt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-O&&F.readPixels(U,H,V,O,Lt.convert(At),Lt.convert(Dt),tt)}finally{let mt=P!==null?Mt.get(P).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,O,tt,lt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let mt=M.texture,At=mt.format,Dt=mt.type;if(!zt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-O){St.bindFramebuffer(F.FRAMEBUFFER,pt);let gt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,H,V,O,Lt.convert(At),Lt.convert(Dt),0);let Gt=P!==null?Mt.get(P).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,Gt);let te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hd(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(gt),F.deleteSync(te),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let V=Math.pow(2,-H),O=Math.floor(M.image.width*V),tt=Math.floor(M.image.height*V),lt=U!==null?U.x:0,pt=U!==null?U.y:0;A.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,lt,pt,O,tt),St.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,V=null,O=0){M.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let tt,lt,pt,mt,At,Dt,gt,Gt,te,ie=M.isCompressedTexture?M.mipmaps[O]:M.image;H!==null?(tt=H.max.x-H.min.x,lt=H.max.y-H.min.y,pt=H.isBox3?H.max.z-H.min.z:1,mt=H.min.x,At=H.min.y,Dt=H.isBox3?H.min.z:0):(tt=ie.width,lt=ie.height,pt=ie.depth||1,mt=0,At=0,Dt=0),V!==null?(gt=V.x,Gt=V.y,te=V.z):(gt=0,Gt=0,te=0);let Le=Lt.convert(U.format),qt=Lt.convert(U.type),bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let un=F.getParameter(F.UNPACK_ROW_LENGTH),Yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ye=F.getParameter(F.UNPACK_SKIP_PIXELS),di=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt);let es=M.isDataArrayTexture||M.isData3DTexture,se=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let rn=Mt.get(M),ns=Mt.get(U),Ge=Mt.get(rn.__renderTarget),Cn=Mt.get(ns.__renderTarget);St.bindFramebuffer(F.READ_FRAMEBUFFER,Ge.__webglFramebuffer),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<pt;Rn++)es&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.get(M).__webglTexture,O,Dt+Rn),M.isDepthTexture?(se&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,O,te+Rn),F.blitFramebuffer(mt,At,tt,lt,gt,Gt,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):se?F.copyTexSubImage3D(bt,O,gt,Gt,te+Rn,mt,At,tt,lt):F.copyTexSubImage2D(bt,O,gt,Gt,te+Rn,mt,At,tt,lt);St.bindFramebuffer(F.READ_FRAMEBUFFER,null),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else se?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,qt,ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,ie.data):F.texSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,qt,ie):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,gt,Gt,tt,lt,Le,qt,ie.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,gt,Gt,ie.width,ie.height,Le,ie.data):F.texSubImage2D(F.TEXTURE_2D,O,gt,Gt,tt,lt,Le,qt,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,un),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,di),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),O===0&&U.generateMipmaps&&F.generateMipmap(bt),St.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,O=0){return M.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],O=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,O)},this.initRenderTarget=function(M){Mt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,St.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ft._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ft._getUnpackColorSpace()}};var Cr=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Re=new D,Rr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hn=class extends wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ai,os=new D,Ci=new D,Ri=new D,Pi=new ht,ls=new ht,bh=new ee,tr=new D,cs=new D,er=new D,kc=new ht,Ba=new ht,Hc=new ht,si=class extends _e{constructor(t=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wo(e,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new Rr(n,3,0,!1)),Ai.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=Ai,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Ri.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;nr(tr.set(-.5,-.5,0),Ri,a,Ci,s,r),nr(cs.set(.5,-.5,0),Ri,a,Ci,s,r),nr(er.set(.5,.5,0),Ri,a,Ci,s,r),kc.set(0,0),Ba.set(1,0),Hc.set(1,1);let o=t.ray.intersectTriangle(tr,cs,er,!1,os);if(o===null&&(nr(cs.set(-.5,.5,0),Ri,a,Ci,s,r),Ba.set(0,1),o=t.ray.intersectTriangle(tr,er,cs,!1,os),o===null))return;let l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:Fn.getInterpolation(os,tr,cs,er,kc,Ba,Hc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function nr(i,t,e,n,s,r){Pi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ls.x=r*Pi.x-s*Pi.y,ls.y=s*Pi.x+r*Pi.y):ls.copy(Pi),i.copy(t),i.x+=ls.x,i.y+=ls.y,i.applyMatrix4(bh)}var Xo=class extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new ee,Vc=new ee,ir=[],Gc=new Sn,a0=new ee,hs=new re,us=new En,ai=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Gc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Gc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),us.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Vc.multiplyMatrices(n,Di),hs.matrixWorld=Vc,hs.raycast(t,ir);for(let a=0,o=ir.length;a<o;a++){let l=ir[a];l.instanceId=r,l.object=this,e.push(l)}ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xo(new Float32Array(s*this.count),s,this.count,ml,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gi=class extends wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pr=new D,Dr=new D,Wc=new ee,ds=new kn,sr=new En,za=new D,Xc=new D,qo=class extends _e{constructor(t=new fe,e=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Dr);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Wc.copy(s).invert(),ds.copy(t.ray).applyMatrix4(Wc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=h.getX(v),E=h.getX(v+1),S=rr(this,t,ds,l,d,E);S&&e.push(S)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=rr(this,t,ds,l,v,m);d&&e.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=rr(this,t,ds,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){let v=rr(this,t,ds,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rr(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Pr.fromBufferAttribute(a,s),Dr.fromBufferAttribute(a,r),e.distanceSqToSegment(Pr,Dr,za,Xc)>n)return;za.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:Xc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var qc=new D,Yc=new D,Ss=class extends qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qc.fromBufferAttribute(e,s),Yc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(Yc);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Es=class extends wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$c=new ee,Yo=new kn,ar=new En,or=new D,Ir=class extends _e{constructor(t=new fe,e=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;$c.copy(s).invert(),Yo.copy(t.ray).applyMatrix4($c);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);or.fromBufferAttribute(u,m),Zc(or,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)or.fromBufferAttribute(u,g),Zc(or,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zc(i,t,e,n,s,r,a){let o=Yo.distanceSqToPoint(i);if(o<e){let l=new D;Yo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var An=class extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function E(){let y=new D,R=new D,T=0,C=(e-t)/n;for(let P=0;P<=r;P++){let b=[],_=P/r,w=_*(e-t)+t;for(let I=0;I<=s;I++){let N=I/s,B=N*l+o,W=Math.sin(B),k=Math.cos(B);R.x=w*W,R.y=-_*n+m,R.z=w*k,u.push(R.x,R.y,R.z),y.set(W,C,k).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-_),b.push(g++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let _=v[b][P],w=v[b+1][P],I=v[b+1][P+1],N=v[b][P+1];(t>0||b!==0)&&(h.push(_,w,N),T+=3),(e>0||b!==r-1)&&(h.push(w,I,N),T+=3)}c.addGroup(d,T,0),d+=T}function S(y){let R=g,T=new ht,C=new D,P=0,b=y===!0?t:e,_=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;let w=g;for(let I=0;I<=s;I++){let B=I/s*l+o,W=Math.cos(B),k=Math.sin(B);C.x=b*k,C.y=m*_,C.z=b*W,u.push(C.x,C.y,C.z),f.push(0,_,0),T.x=W*.5+.5,T.y=k*.5*_+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){let N=R+I,B=w+I;y===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}c.addGroup(d,P,y===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lr=class i extends Wi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$o=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let S=new D,y=new D,R=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],y),p(e[T+2],R),l(S,y,R,E)}function l(E,S,y,R){let T=R+1,C=[];for(let P=0;P<=T;P++){C[P]=[];let b=E.clone().lerp(y,P/T),_=S.clone().lerp(y,P/T),w=T-P;for(let I=0;I<=w;I++)I===0&&P===T?C[P][I]=b:C[P][I]=b.clone().lerp(_,I/w)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){let _=Math.floor(b/2);b%2===0?(f(C[P][_+1]),f(C[P+1][_]),f(C[P][_])):(f(C[P][_+1]),f(C[P+1][_+1]),f(C[P+1][_]))}}function c(E){let S=new D;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(E),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let E=new D;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let y=m(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){let S=a[E+0],y=a[E+2],R=a[E+4],T=Math.max(S,y,R),C=Math.min(S,y,R);T>.9&&C<.1&&(S<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),R<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,S){let y=E*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){let E=new D,S=new D,y=new D,R=new D,T=new ht,C=new ht,P=new ht;for(let b=0,_=0;b<r.length;b+=9,_+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),R.copy(E).add(S).add(y).divideScalar(3);let w=m(R);v(T,_+0,E,w),v(C,_+2,S,w),v(P,_+4,y,w)}}function v(E,S,y,R){R<0&&E.x===1&&(a[S]=E.x-1),y.x===0&&y.z===0&&(a[S]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xi=class i extends $o{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vn=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new D,g=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let E=d+m,S=E,y=E+n+1,R=E+n+2,T=E+1;o.push(S,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var qi=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],S=d/n,y=0;d===0&&a===0?y=.5/e:d===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-S),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let S=h[d][E+1],y=h[d][E],R=h[d+1][E],T=h[d+1][E+1];(d!==0||a>0)&&p.push(S,y,T),(d!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class extends oe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function lr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xl:r=t,o=2*e-n;break;case ql:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:a=t,l=2*n-e;break;case ql:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let R=0;R!==o;++R)r[R]=d*a[h+R]+E*a[c+R]+S*a[l+R]+y*a[u+R];return r}},Jo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},jo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case wo:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&o0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=wo;var oi=class extends en{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=pr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends en{};Ko.prototype.ValueTypeName="color";var Qo=class extends en{};Qo.prototype.ValueTypeName="number";var tl=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends en{InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=pr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends en{};el.prototype.ValueTypeName="vector";var nl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},l0=new nl,il=class{constructor(t){this.manager=t!==void 0?t:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Jc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Jc(){return performance.now()}var bl="\\[\\]\\.:\\/",c0=new RegExp("["+bl+"]","g"),Ml="[^"+bl+"]",h0="[^"+bl.replace("\\.","")+"]",u0=/((?:WC+[\/:])*)/.source.replace("WC",Ml),d0=/(WCOD+)?/.source.replace("WCOD",h0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),m0=new RegExp("^"+u0+d0+f0+p0+"$"),g0=["material","materials","bones","map"],sl=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let e=m0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=sl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var jc=new ee,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new kn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(t,e=!0,n=[]){return rl(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rl(t[s],this,n,e);return n.sort(Kc),n}};function Kc(i,t){return i.distance-t.distance}function rl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)rl(r[a],t,e,!0)}}var Ts=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fr=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);var Mh={type:"change"},El={type:"start"},Eh={type:"end"},Hr=new kn,Sh=new je,_0=Math.cos(70*dh.DEG2RAD),ye=new D,Oe=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sl=1e-6,Vr=class extends Fr{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new tn,this._lastTargetPosition=new D,this._quat=new tn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new D,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new D,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=x0.bind(this),this._onPointerDown=v0.bind(this),this._onPointerUp=y0.bind(this),this._onContextMenu=A0.bind(this),this._onMouseWheel=S0.bind(this),this._onKeyDown=E0.bind(this),this._onTouchStart=T0.bind(this),this._onTouchMove=w0.bind(this),this._onMouseDown=b0.bind(this),this._onMouseMove=M0.bind(this),this._interceptControlDown=C0.bind(this),this._interceptControlUp=R0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mh),this.update(),this.state=Kt.NONE}update(t=null){let e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ye.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<_0?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sl||this._lastTargetPosition.distanceToSquared(this.target)>Sl?(this.dispatchEvent(Mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function v0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function x0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function y0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eh),this.state=Kt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function b0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Kt.DOLLY;break;case ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}break;case ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(El)}function M0(i){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function S0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eh))}function E0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function T0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Kt.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Kt.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(El)}function w0(i){switch(this._trackPointer(i),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Kt.NONE}}function A0(i){this.enabled!==!1&&i.preventDefault()}function C0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var He=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},P0=new Ms(-1,1,1,-1,0,1),Tl=class extends fe{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}},D0=new Tl,Wn=class{constructor(t){this._mesh=new re(D0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wr=class extends He{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gn.clone(t.uniforms),this.material=new oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cs=class extends He{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xr=class extends He{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var qr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Ie(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wr(Gr),this.copyPass.material.blending=cn,this.clock=new $i}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cs!==void 0&&(a instanceof Cs?n=!0:a instanceof Xr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yr=class extends He{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Th={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ki=class i extends He{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ie(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ie(r,a,{type:nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ie(r,a,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Th;this.highPassUniforms=Gn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gr;this.copyUniforms=Gn.clone(h.uniforms),this.blendMaterial=new oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:he,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new Ee,this.fsQuad=new Wn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ki.BlurDirectionX=new ht(1,0);Ki.BlurDirectionY=new ht(0,1);var wh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var $r=class extends He{constructor(){super();let t=wh;this.uniforms=Gn.clone(t.uniforms),this.material=new Nr({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ol?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ws?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ul&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var I0=new Set(["project","projects","\u043F\u0440\u043E\u0435\u043A\u0442","\u043F\u0440\u043E\u0435\u043A\u0442\u044B"]),L0=new Set(["project","projects","\u043F\u0440\u043E\u0435\u043A\u0442","\u043F\u0440\u043E\u0435\u043A\u0442\u044B"]);function wl(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return(t>>>0)%360/360}function Zr(i,t=.82,e=.62){let n=t*Math.min(e,1-e),s=l=>{let c=(l+i*12)%12;return e-n*Math.max(-1,Math.min(c-3,9-c,1))},r=Math.round(s(0)*255),a=Math.round(s(8)*255),o=Math.round(s(4)*255);return r<<16|a<<8|o}function N0(i){let t=i.split("/");return t.length>1?t[0]:""}function Jr(i,t){if(Array.isArray(t))for(let e of t)typeof e=="string"&&i.add(e.replace(/^#/,"").toLowerCase());else if(typeof t=="string")for(let e of t.split(/[,\s]+/))e&&i.add(e.replace(/^#/,"").toLowerCase())}function Ah(i,t){var a,o,l,c,h;if(t.path.toLowerCase().split("/").slice(0,-1).some(u=>I0.has(u)))return!0;let n=i.metadataCache.getFileCache(t),s=new Set;if(n!=null&&n.tags)for(let u of n.tags)s.add(u.tag.replace(/^#/,"").toLowerCase());Jr(s,(a=n==null?void 0:n.frontmatter)==null?void 0:a.tags),Jr(s,(o=n==null?void 0:n.frontmatter)==null?void 0:o.tag);for(let u of s)if(L0.has(u.split("/")[0]))return!0;let r=(h=(l=n==null?void 0:n.frontmatter)==null?void 0:l.type)!=null?h:(c=n==null?void 0:n.frontmatter)==null?void 0:c.kind;return typeof r=="string"&&r.toLowerCase()==="project"}function jr(i,t,e=!0){var T,C,P,b,_;let n=i.vault.getMarkdownFiles(),s=i.metadataCache.resolvedLinks,r=0,a=new Set,o=new Map;for(let w of n){Ah(i,w)&&r++;let I=i.metadataCache.getFileCache(w),N=new Set;if(I!=null&&I.tags)for(let B of I.tags)N.add(B.tag.replace(/^#/,"").toLowerCase());Jr(N,(T=I==null?void 0:I.frontmatter)==null?void 0:T.tags),Jr(N,(C=I==null?void 0:I.frontmatter)==null?void 0:C.tag);for(let B of N){a.add(B);let W=o.get(B);W||(W=[],o.set(B,W)),W.push(w.path)}}let l=new Map,c=0;for(let[w,I]of Object.entries(s))for(let[N,B]of Object.entries(I))l.set(w,((P=l.get(w))!=null?P:0)+B),l.set(N,((b=l.get(N))!=null?b:0)+B),c++;let h=[...n].sort((w,I)=>{var W,k;let N=(W=l.get(w.path))!=null?W:0,B=(k=l.get(I.path))!=null?k:0;return B!==N?B-N:I.stat.mtime-w.stat.mtime}),u=Math.max(1,Math.floor(t)),f=h.slice(0,u),p=new Map;f.forEach((w,I)=>p.set(w.path,I));let g=n.reduce((w,I)=>Math.max(w,I.stat.mtime),0),v=f.map(w=>{var it;let I=N0(w.path),N=Ah(i,w),B=(it=l.get(w.path))!=null?it:0,W=Math.max(0,(g-w.stat.mtime)/864e5),k=Math.max(0,Math.min(1,1-W/45)),j=N?Zr(.085,.85,.6+.08*k):Zr(I?wl(I):.56,.62+.14*k,.56+.12*k),G,et;return N?(G="gas_giant",et=.36+Math.min(.32,Math.log2(1+B)*.075)+k*.05):B>=10?(G="star",et=.42+Math.min(.42,Math.log2(1+B)*.085)+k*.06):B>=4?(G="gas_giant",et=.3+Math.min(.24,Math.log2(1+B)*.06)+k*.04):B>=2?(G="planet",et=.22+Math.min(.18,Math.log2(1+B)*.05)+k*.03):(G="asteroid",et=.14+k*.03),{path:w.path,title:w.basename,kind:N?"project":"note",celestialType:G,folder:I||"\xB7",degree:B,recency:k,color:j,size:et,x:0,y:0,z:0}}),m=e?[...o.entries()].filter(([w,I])=>I.length>=2).sort((w,I)=>I[1].length-w[1].length).slice(0,30):[];for(let[w,I]of m){let N=v.length,B=I.length;p.set(`tag:${w}`,N);let W=.48+Math.min(.75,Math.log2(1+B)*.14);v.push({path:`tag:${w}`,title:`#${w}`,kind:"tag",celestialType:"star",folder:"tags",degree:B,recency:.85,color:Zr(wl(w),.95,.68),size:W,x:0,y:0,z:0})}let d=[],E=new Set;for(let[w,I]of Object.entries(s)){let N=p.get(w);if(N!==void 0)for(let B of Object.keys(I)){let W=p.get(B);if(W===void 0||W===N)continue;let k=N<W?`${N}:${W}`:`${W}:${N}`;E.has(k)||(E.add(k),d.push({source:N,target:W}))}}if(e)for(let[w,I]of m){let N=p.get(`tag:${w}`);if(N!==void 0)for(let B of I){let W=p.get(B);if(W===void 0)continue;let k=W<N?`${W}:${N}`:`${N}:${W}`;E.has(k)||(E.add(k),d.push({source:W,target:N}))}}let S=new Map;for(let w of v)w.folder!=="\xB7"&&S.set(w.folder,((_=S.get(w.folder))!=null?_:0)+1);let y=[...S.entries()].map(([w,I])=>({name:w,count:I,color:Zr(wl(w),.7,.66)})).sort((w,I)=>I.count-w.count).slice(0,6),R=v.filter(w=>w.degree>0&&w.kind!=="tag").slice(0,8).map(w=>({title:w.title,path:w.path,degree:w.degree}));return{nodes:v,links:d,totalNotes:n.length,totalProjects:r,totalLinks:c,totalTags:a.size,folders:y,topHubs:R}}function U0(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ch=(i,t,e)=>Math.imul(i,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791)|0;function Rh(i,t,e={}){var v,m,d,E,S;let n=i.length;if(n===0)return;let s=(v=e.iterations)!=null?v:n>600?70:100,r=(m=e.minRadius)!=null?m:12,a=(d=e.maxRadius)!=null?d:38,o=(E=e.cellSize)!=null?E:6,l=(S=e.activityBias)!=null?S:0,c=U0(523124044),h=Math.PI*(3-Math.sqrt(5));for(let y=0;y<n;y++){let R=i[y],T=1-2*((y+.5)/n),C=Math.sqrt(Math.max(0,1-T*T)),P=y*h,b=l>0?(1-(R.recency||0))*9*l:0,_=(R.kind==="project"?r:r+5)+b,w=Math.min(a-2,_+c()*Math.max(2,a-_-4));R.x=Math.cos(P)*C*w,R.y=T*w*.75,R.z=Math.sin(P)*C*w}let u=new Float32Array(n),f=new Float32Array(n),p=new Float32Array(n),g=new Map;for(let y=0;y<s;y++){g.clear();for(let R=0;R<n;R++){let T=i[R],C=Math.floor(T.x/o),P=Math.floor(T.y/o),b=Math.floor(T.z/o),_=Ch(C,P,b),w=g.get(_);w?w.push(R):g.set(_,[R])}for(let R=0;R<n;R++){let T=i[R],C=Math.floor(T.x/o),P=Math.floor(T.y/o),b=Math.floor(T.z/o);for(let _=-1;_<=1;_++)for(let w=-1;w<=1;w++)for(let I=-1;I<=1;I++){let N=g.get(Ch(C+_,P+w,b+I));if(N)for(let B=0;B<N.length;B++){let W=N[B];if(W<=R)continue;let k=i[W],j=k.x-T.x,G=k.y-T.y,et=k.z-T.z,it=j*j+G*G+et*et;if(it>o*o*4)continue;it<.05&&(j=c()-.5,G=c()-.5,et=c()-.5,it=.05);let _t=1/Math.sqrt(it),Rt=(9+4*(T.size+k.size))/(it+2),Xt=j*_t*Rt,q=G*_t*Rt,K=et*_t*Rt;u[R]-=Xt,f[R]-=q,p[R]-=K,u[W]+=Xt,f[W]+=q,p[W]+=K}}}for(let R of t){let T=i[R.source],C=i[R.target];if(!T||!C)continue;let P=C.x-T.x,b=C.y-T.y,_=C.z-T.z,w=Math.sqrt(P*P+b*b+_*_)||.001,I=5.5+T.size+C.size,N=(w-I)*.022,B=1/w,W=P*B*N,k=b*B*N,j=_*B*N;u[R.source]+=W,f[R.source]+=k,p[R.source]+=j,u[R.target]-=W,f[R.target]-=k,p[R.target]-=j}for(let R=0;R<n;R++){let T=i[R];if(u[R]*=.86,f[R]*=.86,p[R]*=.86,u[R]-=T.x*.0035,f[R]-=T.y*.0035,p[R]-=T.z*.0035,l>0){let b=1-(T.recency||0),_=r+4+b*(a-r-8),w=Math.sqrt(T.x*T.x+T.z*T.z)||.001,I=(_-w)*.006*l;u[R]+=T.x/w*I,p[R]+=T.z/w*I}let C=Math.sqrt(T.x*T.x+T.y*T.y+T.z*T.z)||.001;if(C>a){let b=(C-a)*.03;u[R]-=T.x/C*b,f[R]-=T.y/C*b,p[R]-=T.z/C*b}else if(C<r){let b=(r-C)*.03;u[R]+=T.x/C*b,f[R]+=T.y/C*b,p[R]+=T.z/C*b}let P=1.4;T.x+=Math.max(-P,Math.min(P,u[R])),T.y+=Math.max(-P,Math.min(P,f[R])),T.z+=Math.max(-P,Math.min(P,p[R]))}}for(let y of i){y.y*=.7;let R=Math.sqrt(y.x*y.x+y.z*y.z)||.001;if(R<r){let T=r/R;y.x*=T,y.z*=T}}}var O0=`
varying vec3 vPos;
void main() {
	vPos = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,F0=`
precision highp float;

uniform float uTime;
uniform float uSpeed;
uniform float uInner;
uniform float uOuter;
uniform float uAlpha;
uniform vec3 uColorHot;
uniform vec3 uColorMid;
uniform vec3 uColorCold;

varying vec3 vPos;

float hash(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}

float noise(vec2 p) {
	vec2 i = floor(p);
	vec2 f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
	float v = 0.0;
	float amp = 0.5;
	for (int i = 0; i < 4; i++) {
		v += amp * noise(p);
		p *= 2.07;
		amp *= 0.5;
	}
	return v;
}

void main() {
	float r = length(vPos.xy);
	float a = atan(vPos.y, vPos.x);
	float t = (r - uInner) / max(uOuter - uInner, 0.001);
	if (t < 0.0 || t > 1.0) discard;

	// Differential rotation: the inner edge spins noticeably faster.
	float speed = 1.7 / pow(max(r, 0.001), 1.15);
	float ang = a + uTime * uSpeed * speed * 2.4;

	float n = fbm(vec2(ang * 2.6, r * 1.35 - uTime * uSpeed * 0.12));
	float fine = fbm(vec2(ang * 9.0, r * 5.0 + uTime * uSpeed * 0.3));
	float streaks = pow(clamp(n * 0.75 + fine * 0.45, 0.0, 1.0), 1.7);

	float heat = pow(1.0 - t, 1.15);
	vec3 col = mix(uColorCold, uColorMid, smoothstep(0.15, 0.65, heat));
	col = mix(col, uColorHot, smoothstep(0.72, 1.0, heat));

	// Relativistic beaming: one side of the ring looks brighter.
	float beam = 0.7 + 0.5 * pow(0.5 + 0.5 * cos(a - 0.9), 2.2);

	float edge = smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.5, 1.0, t));
	float alpha = (0.12 + 0.9 * streaks) * edge * (0.45 + 0.9 * heat) * beam * uAlpha;

	gl_FragColor = vec4(col * (0.35 + 0.85 * heat), alpha);
}
`,Al={gargantua:{hot:[1,.92,.82],mid:[1,.55,.18],cold:[.55,.12,.05],haloColor:14674431,speedMult:1},pulsar:{hot:[.9,.96,1],mid:[.18,.65,1],cold:[.04,.18,.55],haloColor:9098495,speedMult:1.5},singularity:{hot:[.98,.92,1],mid:[.72,.22,.95],cold:[.28,.04,.45],haloColor:14325503,speedMult:.8}};function B0(){let t=createEl("canvas");t.width=256,t.height=256;let e=t.getContext("2d");if(e){let r=e.createRadialGradient(128,128,76.8,128,128,128);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.52,"rgba(170,210,255,0.04)"),r.addColorStop(.74,"rgba(255,244,224,0.65)"),r.addColorStop(.82,"rgba(140,190,255,0.22)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,256,256)}let n=new An(t);return n.colorSpace=me,n}function z0(){let t=createEl("canvas");t.width=64,t.height=64;let e=t.getContext("2d");if(e){let r=e.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.32,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,64,64)}let n=new An(t);return n.colorSpace=me,n}function k0(i,t){let e=new Float32Array(i*3),n=new Float32Array(i*3),s=new xt;for(let l=0;l<i;l++){let c=150+Math.random()*170,h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);e[l*3]=c*Math.sin(u)*Math.cos(h),e[l*3+1]=c*Math.cos(u)*.8,e[l*3+2]=c*Math.sin(u)*Math.sin(h);let f=Math.random();f>.9?s.setHex(16767392):f>.76?s.setHex(11127039):s.setHex(16777215);let p=.45+Math.random()*.55;n[l*3]=s.r*p,n[l*3+1]=s.g*p,n[l*3+2]=s.b*p}let r=new fe;r.setAttribute("position",new ge(e,3)),r.setAttribute("color",new ge(n,3));let a=new Es({size:2.4,sizeAttenuation:!1,map:t,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:he}),o=new Ir(r,a);return o.frustumCulled=!1,o}var Kr=class{constructor(t="gargantua"){this.group=new Se;this.materials=[];this.themeSpeedMult=1;let e=new Se;e.rotation.x=.1,e.rotation.z=.16,this.group.add(e);let r=this.createDisk(2.2,11.5,1,1);e.add(r);let a=this.createDisk(3,22,.22,.55);a.scale.setScalar(1.02),e.add(a),this.core=new re(new qi(2,48,48),new Ee({color:0})),e.add(this.core),this.haloTexture=B0(),this.halo=new si(new Hn({map:this.haloTexture,color:14674431,transparent:!0,opacity:.75,depthWrite:!1,blending:he})),this.halo.scale.setScalar(6.8),e.add(this.halo),this.starsTexture=z0(),this.stars=k0(2600,this.starsTexture),this.group.add(this.stars),this.setTheme(t)}setTheme(t){let e=Object.prototype.hasOwnProperty.call(Al,t)?t:"gargantua",n=Al[e];this.themeSpeedMult=n.speedMult;for(let s of this.materials){let r=s.uniforms.uColorHot.value,a=s.uniforms.uColorMid.value,o=s.uniforms.uColorCold.value;r.setRGB(...n.hot),a.setRGB(...n.mid),o.setRGB(...n.cold)}this.halo.material.color.setHex(n.haloColor)}createDisk(t,e,n,s){let r=new Vn(t,e,320,8),a=Al.gargantua,o=new oe({vertexShader:O0,fragmentShader:F0,uniforms:{uTime:{value:0},uSpeed:{value:s},uInner:{value:t},uOuter:{value:e},uAlpha:{value:n},uColorHot:{value:new xt(...a.hot)},uColorMid:{value:new xt(...a.mid)},uColorCold:{value:new xt(...a.cold)}},transparent:!0,depthWrite:!1,blending:he,side:Me});this.materials.push(o);let l=new re(r,o);return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,l}update(t,e=1){for(let s of this.materials)s.uniforms.uTime.value=t*this.themeSpeedMult*e;let n=1+Math.sin(t*.7)*.012;this.halo.scale.setScalar(6.8*n)}dispose(){this.group.traverse(t=>{let e=t;e.geometry&&e.geometry.dispose();let n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n&&n.dispose()}),this.haloTexture.dispose(),this.starsTexture.dispose()}};var Ph=`
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
`,Dh=`
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
`;var Ih=`
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
`,Lh=`
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
`;var H0=1.9,V0=.34,G0=.35,Qr=class{constructor(t,e,n,s=!0){this.group=new Se;this.ringMesh=null;this.gasGiantIndices=[];this.dummy=new _e;this.ringDummy=new _e;this.hovered=-1;this.focalIndex=-1;this.folderFilter=null;this.highlightLines=null;this.orbitalMotion=!0;this.nodes=t,this.linkList=e,this.baseScale=n,this.orbitalMotion=s;let r=t.length;this.phases=new Float32Array(r),this.initialX=new Float32Array(r),this.initialY=new Float32Array(r),this.initialZ=new Float32Array(r),this.radii=new Float32Array(r),this.azimuths=new Float32Array(r),this.angSpeeds=new Float32Array(r),this.currentPositions=new Float32Array(r*3);for(let p=0;p<r;p++){this.phases[p]=Math.random()*Math.PI*2;let g=t[p];this.initialX[p]=g.x,this.initialY[p]=g.y,this.initialZ[p]=g.z;let v=Math.hypot(g.x,g.z);this.radii[p]=v,this.azimuths[p]=Math.atan2(g.z,g.x),this.angSpeeds[p]=.16/Math.pow(1+v/16,1.35),this.currentPositions[p*3]=g.x,this.currentPositions[p*3+1]=g.y,this.currentPositions[p*3+2]=g.z,g.celestialType==="gas_giant"&&this.gasGiantIndices.push(p)}let a=new Xi(1,4),o=new Float32Array(r),l=new Float32Array(r);for(let p=0;p<r;p++){let g=t[p].celestialType;o[p]=g==="star"?3:g==="gas_giant"?2:g==="planet"?1:0,l[p]=(p*137.5+42)%100}a.setAttribute("aCelestialType",new ri(o,1)),a.setAttribute("aSeed",new ri(l,1)),this.celestialMaterial=new oe({vertexShader:Ph,fragmentShader:Dh,uniforms:{uTime:{value:0}}}),this.mesh=new ai(a,this.celestialMaterial,Math.max(1,r)),this.mesh.instanceMatrix.setUsage(As),this.mesh.frustumCulled=!1,this.mesh.count=r;let c=new xt;for(let p=0;p<r;p++)c.setHex(t[p].color),t[p].celestialType==="star"&&c.multiplyScalar(1.25),this.mesh.setColorAt(p,c);if(this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.group.add(this.mesh),this.gasGiantIndices.length>0){let p=new Vn(1.3,2.3,48);p.rotateX(Math.PI/2);let g=new oe({vertexShader:Ih,fragmentShader:Lh,side:Me,transparent:!0,depthWrite:!1,blending:he});this.ringMesh=new ai(p,g,this.gasGiantIndices.length),this.ringMesh.instanceMatrix.setUsage(As),this.ringMesh.frustumCulled=!1,this.ringMesh.count=this.gasGiantIndices.length;let v=new xt;for(let m=0;m<this.gasGiantIndices.length;m++){let d=this.gasGiantIndices[m];v.setHex(t[d].color).offsetHSL(.04,.1,.05),this.ringMesh.setColorAt(m,v)}this.ringMesh.instanceColor&&(this.ringMesh.instanceColor.needsUpdate=!0),this.group.add(this.ringMesh)}let h=new Float32Array(e.length*6),u=new fe;u.setAttribute("position",new ge(h,3));let f=new Gi({color:7310847,transparent:!0,opacity:.12,depthWrite:!1,blending:he});this.edges=new Ss(u,f),this.edges.frustumCulled=!1,this.group.add(this.edges),this.writeEdges()}writeEdges(){let t=this.edges.geometry.getAttribute("position"),e=t.array,n=this.currentPositions;for(let s=0;s<this.linkList.length;s++){let r=this.linkList[s],a=r.source*3,o=r.target*3,l=s*6;e[l]=n[a],e[l+1]=n[a+1],e[l+2]=n[a+2],e[l+3]=n[o],e[l+4]=n[o+1],e[l+5]=n[o+2]}t.needsUpdate=!0}setFocalNode(t){this.focalIndex=t}getFocalNode(){return this.focalIndex}nodeScaleAt(t,e){let n=this.nodes[t];if(!n)return .001;let s=n.size*this.baseScale;return this.folderFilter&&n.folder!==this.folderFilter&&(s*=V0),t===this.hovered&&(s*=H0),t===this.focalIndex&&(s*=1.4),n.celestialType==="star"&&(s*=1+.08*Math.sin(e*2.2+this.phases[t])),Math.max(.001,s)}update(t){this.celestialMaterial.uniforms.uTime.value=t;let e=this.nodes.length,n=this.currentPositions,s=0,r=0,a=0;for(let o=0;o<e;o++){let l=Math.sin(t*.55+this.phases[o])*G0,c,h=this.initialY[o]+l,u;if(this.orbitalMotion){let f=this.azimuths[o]+this.angSpeeds[o]*t,p=this.radii[o];c=p*Math.cos(f),u=p*Math.sin(f)}else c=this.initialX[o],u=this.initialZ[o];n[o*3]=c,n[o*3+1]=h,n[o*3+2]=u,o===this.focalIndex&&(s=c,r=h,a=u)}if(this.focalIndex>=0)for(let o=0;o<e;o++)n[o*3]-=s,n[o*3+1]-=r,n[o*3+2]-=a;for(let o=0;o<e;o++){let l=o*3;this.dummy.position.set(n[l],n[l+1],n[l+2]),this.dummy.scale.setScalar(this.nodeScaleAt(o,t)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(o,this.dummy.matrix)}if(this.mesh.instanceMatrix.needsUpdate=!0,this.ringMesh&&this.gasGiantIndices.length>0){for(let o=0;o<this.gasGiantIndices.length;o++){let l=this.gasGiantIndices[o],c=l*3,h=this.nodeScaleAt(l,t);this.ringDummy.position.set(n[c],n[c+1],n[c+2]),this.ringDummy.scale.setScalar(h),this.ringDummy.rotation.set(.35,.2,.1),this.ringDummy.updateMatrix(),this.ringMesh.setMatrixAt(o,this.ringDummy.matrix)}this.ringMesh.instanceMatrix.needsUpdate=!0}(this.orbitalMotion||this.focalIndex>=0)&&this.writeEdges()}setHovered(t){t!==this.hovered&&(this.hovered=t,this.refreshHighlight())}getHovered(){return this.hovered}setFolderFilter(t){this.folderFilter=t}setNodeScale(t){this.baseScale=Math.max(.05,t)}refreshHighlight(){if(this.highlightLines&&(this.group.remove(this.highlightLines),this.highlightLines.geometry.dispose(),this.highlightLines.material.dispose(),this.highlightLines=null),this.hovered<0)return;let t=this.currentPositions,e=[],n=this.hovered*3,s=t[n],r=t[n+1],a=t[n+2];for(let c of this.linkList){let h=-1;if(c.source===this.hovered?h=c.target:c.target===this.hovered&&(h=c.source),h<0)continue;let u=h*3;e.push(s,r,a,t[u],t[u+1],t[u+2])}if(e.length===0)return;let o=new fe;o.setAttribute("position",new jt(e,3));let l=new Gi({color:11126015,transparent:!0,opacity:.65,depthWrite:!1,blending:he});this.highlightLines=new Ss(o,l),this.highlightLines.frustumCulled=!1,this.group.add(this.highlightLines)}worldPosition(t,e,n){if(t<0||t>=this.nodes.length)return n.set(0,0,0);let s=t*3;return n.set(this.currentPositions[s],this.currentPositions[s+1],this.currentPositions[s+2]),n.applyMatrix4(this.group.matrixWorld)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.ringMesh&&(this.ringMesh.geometry.dispose(),this.ringMesh.material.dispose()),this.edges.geometry.dispose(),this.edges.material.dispose(),this.highlightLines&&(this.highlightLines.geometry.dispose(),this.highlightLines.material.dispose())}};var Cl=26,Nh=.42,W0=.012,Rl=new xt("#ffcf7a"),X0=new xt("#fff2d0"),q0=new xt("#8f2a12"),Rs=null;function Y0(){if(Rs)return Rs;let i=createEl("canvas");i.width=64,i.height=64;let t=i.getContext("2d");if(t){let e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,236,200,0.55)"),e.addColorStop(1,"rgba(255,180,90,0)"),t.fillStyle=e,t.fillRect(0,0,64,64)}return Rs=new An(i),Rs.colorSpace=me,Rs}var ta=class{constructor(t,e=.72){this.group=new Se;this.progress=0;this.sinceSpawn=0;this.trailIndex=0;this.sprites=[];this.ages=[];this.color=new xt;this.startColor=new xt;this.currentPos=new D;this.firedArrive=!1;this.duration=Math.max(.2,e),this.radius=Math.max(6,Math.hypot(t.position.x,t.position.z)),this.startY=t.position.y,this.theta=Math.atan2(t.position.z,t.position.x),this.color.setHex(t.color),this.startColor.setHex(t.color);let n=Y0();for(let s=0;s<Cl;s++){let r=new si(new Hn({map:n,color:Rl,transparent:!0,opacity:0,blending:he,depthWrite:!1}));r.scale.setScalar(.001),this.sprites.push(r),this.ages.push(Nh),this.group.add(r)}this.head=new re(new qi(.8,20,14),new Ee({color:Rl,transparent:!0})),this.group.add(this.head),this.halo=new si(new Hn({map:n,color:Rl,transparent:!0,blending:he,depthWrite:!1})),this.group.add(this.halo),this.ring=new re(new Vn(1.6,2,64),new Ee({color:new xt("#ffe9c0"),transparent:!0,opacity:0,side:Me,blending:he,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.group.add(this.ring)}get bloomBoost(){return this.progress<.72?0:(this.progress-.72)/.28}get finished(){return this.progress>=1}takeArrive(){return this.firedArrive||this.progress<.86?!1:(this.firedArrive=!0,!0)}update(t){if(this.finished)return;let e=Math.min(t,.08);this.progress=Math.min(1,this.progress+e/this.duration);let n=this.progress,s=2.4+(this.radius-2.4)*Math.pow(1-n,1.45),r=900/(s*s)*(e/this.duration);this.theta+=Math.min(r,1.2);let a=this.startY*Math.pow(1-n,1.9),o=this.currentPos.set(s*Math.cos(this.theta),a,s*Math.sin(this.theta));this.color.copy(this.startColor).lerp(X0,Math.min(1,n*2.2)),n>.55&&this.color.lerp(q0,(n-.55)/.45*.75),this.head.position.copy(o),this.head.rotation.y=-Math.atan2(o.z,o.x)+Math.PI/2,this.head.scale.set(1+6*Math.pow(n,3),Math.max(.35,1-.4*n),Math.max(.35,1-.4*n)),this.head.material.color.copy(this.color),this.halo.position.copy(o);let l=4.2+2.6*n;if(this.halo.scale.set(l,l,1),this.halo.material.color.copy(this.color),this.halo.material.opacity=.9,this.sinceSpawn+=e/this.duration,this.sinceSpawn>=W0){this.sinceSpawn=0;let h=this.trailIndex;this.trailIndex=(this.trailIndex+1)%Cl,this.sprites[h].position.copy(o),this.sprites[h].material.color.copy(this.color),this.ages[h]=0}for(let h=0;h<Cl;h++){this.ages[h]+=e;let u=1-this.ages[h]/Nh;if(u<=0){this.sprites[h].material.opacity=0,this.sprites[h].scale.setScalar(.001);continue}this.sprites[h].material.opacity=.75*u,this.sprites[h].scale.setScalar(1.4+2.6*(1-u))}let c=this.ring.material;if(n>.72){let h=(n-.72)/.28;this.ring.visible=!0,this.ring.scale.setScalar(1+7*h),c.opacity=.8*(1-h)}else this.ring.visible=!1}dispose(){this.head.geometry.dispose(),this.head.material.dispose(),this.halo.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose();for(let t of this.sprites)t.material.dispose()}};var $0="#b78bff",Z0="#eaf2ff",J0="#ffd9a0",Ps=null;function j0(){if(Ps)return Ps;let i=createEl("canvas");i.width=128,i.height=128;let t=i.getContext("2d");if(t){let e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(215,232,255,0.95)"),e.addColorStop(.4,"rgba(150,170,255,0.32)"),e.addColorStop(1,"rgba(90,60,180,0)"),t.fillStyle=e,t.fillRect(0,0,128,128)}return Ps=new An(i),Ps.colorSpace=me,Ps}var K0=new D(0,1,0),ea=class{constructor(){this.group=new Se;this.halos=[];this.cores=[];this.dir=new D;this.feed=null;this.power=0;this.group.visible=!1;let t=new Ee({map:j0(),color:$0,transparent:!0,opacity:.45,side:Me,blending:he,depthWrite:!1}),e=new Ee({color:Z0,transparent:!0,opacity:.7,blending:he,depthWrite:!1});for(let n of[1,-1]){let s=new re(new Lr(3.2,30,28,1,!0),t);s.position.y=n*30/2,n<0&&(s.rotation.x=Math.PI),this.halos.push(s),this.group.add(s);let r=new re(new Wi(.16,.16,26,12,1,!0),e);r.position.y=n*26/2,this.cores.push(r),this.group.add(r)}}setPower(t){this.power=Math.max(0,Math.min(1,t)),this.group.visible=this.power>.02;let e=.55+.45*this.power;for(let n of this.halos)n.scale.set(.6+.4*this.power,e,.6+.4*this.power);for(let n of this.cores)n.scale.set(1,e,1)}setFeed(t){if(!t||t.length()<.001){this.feed&&(this.group.remove(this.feed),this.feed.geometry.dispose(),this.feed.material.dispose(),this.feed=null);return}this.feed||(this.feed=new re(new Wi(.07,.07,1,8,1,!0),new Ee({color:J0,transparent:!0,opacity:.32,blending:he,depthWrite:!1})),this.group.add(this.feed));let e=t.length();this.feed.position.copy(t).multiplyScalar(.5),this.feed.scale.set(1,e,1),this.feed.quaternion.setFromUnitVectors(K0,this.dir.copy(t).normalize())}update(t){if(!this.group.visible)return;let e=1+.05*Math.sin(t*1.7);for(let n of this.cores)n.scale.x=n.scale.z=e;this.feed&&(this.feed.material.opacity=.24+.12*this.power)}dispose(){for(let t of this.halos)t.geometry.dispose();for(let t of this.cores)t.geometry.dispose();this.halos.length&&this.halos[0].material.dispose(),this.cores.length&&this.cores[0].material.dispose(),this.feed&&(this.feed.geometry.dispose(),this.feed.material.dispose())}};var na=class{constructor(t,e=120){this.group=new Se;this.dummy=new _e;this.links=t,this.count=Math.min(e,Math.max(10,Math.floor(t.length*.4)));let n=new Xi(.18,1),s=new Ee({color:10209279,transparent:!0,opacity:.9,depthWrite:!1,blending:he});this.mesh=new ai(n,s,Math.max(1,this.count)),this.mesh.instanceMatrix.setUsage(As),this.mesh.frustumCulled=!1,this.mesh.count=this.links.length>0?this.count:0,this.pulses=new Array(this.count);let r=new xt;for(let a=0;a<this.count;a++){let o=this.links.length>0?Math.floor(Math.random()*this.links.length):0;this.pulses[a]={linkIndex:o,progress:Math.random(),speed:.35+Math.random()*.45,size:.8+Math.random()*.6,reverse:Math.random()>.5};let l=Math.random()>.3?.58+Math.random()*.08:.12+Math.random()*.05;r.setHSL(l,.9,.75),this.mesh.setColorAt(a,r)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.group.add(this.mesh)}update(t,e){var r,a,o,l,c,h;if(this.links.length===0||!this.mesh)return;let n=e.currentPositions,s=this.links.length;for(let u=0;u<this.count;u++){let f=this.pulses[u];f.progress+=f.speed*t,f.progress>=1&&(f.progress=0,f.linkIndex=Math.floor(Math.random()*s),f.speed=.35+Math.random()*.45,f.reverse=Math.random()>.5);let p=this.links[f.linkIndex];if(!p)continue;let g=(f.reverse?p.target:p.source)*3,v=(f.reverse?p.source:p.target)*3,m=(r=n[g])!=null?r:0,d=(a=n[g+1])!=null?a:0,E=(o=n[g+2])!=null?o:0,S=(l=n[v])!=null?l:0,y=(c=n[v+1])!=null?c:0,R=(h=n[v+2])!=null?h:0,T=f.progress,C=m+(S-m)*T,P=d+(y-d)*T,b=E+(R-E)*T,_=Math.sin(T*Math.PI),w=f.size*Math.max(.001,_);this.dummy.position.set(C,P,b),this.dummy.scale.setScalar(w),this.dummy.updateMatrix(),this.mesh.setMatrixAt(u,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};var jh=require("obsidian");var Zh=require("obsidian");var Q0={locale:"en-US",ribbonOpen:"Note Galaxy: open the 3D graph",commandOpen:"Open 3D graph",commandOpenDashboard:"Open galaxy dashboard",commandRebuild:"Rebuild 3D graph",viewTitle:"Note Galaxy",dashboardTitle:"Galaxy Dashboard",greetingMorning:"Good morning",greetingDay:"Good afternoon",greetingEvening:"Good evening",greetingNight:"Good night",eyebrow:"NOTE GALAXY",statNotes:"notes",statProjects:"projects",statLinks:"links",statTags:"tags",sectionFolders:"Constellations",sectionRecent:"Recent",chipAll:"all",emptyRecent:"Nothing here yet \u2014 create your first note.",tabOverview:"Overview",tabHubs:"Hubs",tabRecent:"Recent",sectionHubs:"Major hubs",hint:"Drag to orbit \xB7 scroll to zoom \xB7 click a star to open a note",toolbarRebuild:"Rebuild graph",toolbarReset:"Reset view",toolbarDashboard:"Dashboard",actionMakeCenter:"Set as system center",actionResetCenter:"Reset galactic core",settingLanguage:"Language",settingLanguageDesc:"Interface language. \u201CAuto\u201D follows the Obsidian language.",languageAuto:"Auto",settingCoreTheme:"Celestial core",settingCoreThemeDesc:"Visual theme of the central black hole and accretion disk.",themeGargantua:"Gargantua (Amber)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularity (Ultraviolet)",settingName:"Name for the greeting",settingNameDesc:"Shown as \u201CGood evening, \u2026\u201D. Leave empty to show the greeting only.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Panel with greeting, stats and recent notes.",settingLabels:"Note labels",settingLabelsDesc:"Show titles of the most connected notes in space.",settingBloom:"Glow (bloom)",settingBloomDesc:"Strength of the halo around stars and the disk.",settingDisk:"Disk speed",settingDiskDesc:"How fast the accretion disk swirls.",settingStars:"Star size",settingStarsDesc:"Scale of note dots.",settingOrbit:"Galaxy rotation",settingOrbitDesc:"0 keeps the note cloud still.",settingMaxNodes:"Maximum notes",settingMaxNodesDesc:"How many of the most connected notes to render in 3D.",settingTransition:"Open-note animation",settingTransitionDesc:"The note spirals into the horizon as the file opens.",settingQuasar:"Quasar jets",settingQuasarDesc:"The most connected note powers jets above the black hole.",settingActivity:"Recent notes orbit closer",settingActivityDesc:"Freshly edited notes sit near the disk, stale ones drift outward.",settingAdaptive:"Adaptive quality",settingAdaptiveDesc:"Ease glow and detail automatically when frames drop.",settingIncludeTags:"Include tags as stars",settingIncludeTagsDesc:"Render popular tags as shining stellar bodies attracting notes.",settingOrbitalMotion:"Keplerian orbital motion",settingOrbitalMotionDesc:"Inner planets orbit faster than outer planets according to Kepler's laws.",settingPulses:"Light pulses along links",settingPulsesDesc:"Animate glowing photons traveling between connected notes.",bodyStar:"Star",bodyGasGiant:"Gas Giant",bodyPlanet:"Planet",bodyAsteroid:"Asteroid",contextLost:"3D context was lost \u2014 restoring the view\u2026",whenJustNow:"just now",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} mo`,noteCount:i=>`${i} ${i===1?"note":"notes"}`,linkCount:i=>`${i} ${i===1?"link":"links"}`},Uh=Q0;function Oh(i,t,e,n){let s=i%10,r=i%100;return s===1&&r!==11?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var t_={locale:"ru-RU",ribbonOpen:"Note Galaxy: \u043E\u0442\u043A\u0440\u044B\u0442\u044C 3D-\u0433\u0440\u0430\u0444",commandOpen:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C 3D-\u0433\u0440\u0430\u0444",commandOpenDashboard:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u0430\u0448\u0431\u043E\u0440\u0434 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",commandRebuild:"\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0438\u0442\u044C 3D-\u0433\u0440\u0430\u0444",viewTitle:"Note Galaxy",dashboardTitle:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",greetingMorning:"\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",greetingDay:"\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C",greetingEvening:"\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440",greetingNight:"\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0438",eyebrow:"NOTE GALAXY",statNotes:"\u0437\u0430\u043C\u0435\u0442\u043A\u0438",statProjects:"\u043F\u0440\u043E\u0435\u043A\u0442\u044B",statLinks:"\u0441\u0432\u044F\u0437\u0438",statTags:"\u0442\u0435\u0433\u0438",sectionFolders:"\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F",sectionRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",chipAll:"\u0432\u0441\u0435",emptyRecent:"\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E \u2014 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0437\u0430\u043C\u0435\u0442\u043A\u0443.",tabOverview:"\u041E\u0431\u0437\u043E\u0440",tabHubs:"\u0425\u0430\u0431\u044B",tabRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",sectionHubs:"\u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u0445\u0430\u0431\u044B",hint:"\u0422\u044F\u043D\u0438\u0442\u0435 \u2014 \u043E\u0440\u0431\u0438\u0442\u0430 \xB7 \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 \u043A\u043B\u0438\u043A \u043F\u043E \u0437\u0432\u0435\u0437\u0434\u0435 \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443",toolbarRebuild:"\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0433\u0440\u0430\u0444",toolbarReset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0438\u0434",toolbarDashboard:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434",actionMakeCenter:"\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u044B",actionResetCenter:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u0435",settingLanguage:"\u042F\u0437\u044B\u043A",settingLanguageDesc:"\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \xAB\u0410\u0432\u0442\u043E\xBB \u2014 \u043A\u0430\u043A \u0432 Obsidian.",languageAuto:"\u0410\u0432\u0442\u043E",settingCoreTheme:"\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u044F\u0434\u0440\u043E",settingCoreThemeDesc:"\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B \u0438 \u0430\u043A\u043A\u0440\u0435\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430.",themeGargantua:"\u0413\u0430\u0440\u0433\u0430\u043D\u0442\u044E\u0430 (\u044F\u043D\u0442\u0430\u0440\u043D\u044B\u0439)",themePulsar:"\u041F\u0443\u043B\u044C\u0441\u0430\u0440 (\u0433\u043E\u043B\u0443\u0431\u043E\u0439)",themeSingularity:"\u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C (\u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442)",settingName:"\u0418\u043C\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F",settingNameDesc:"\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \xAB\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440, \u2026\xBB. \u041F\u0443\u0441\u0442\u043E \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0435.",settingNamePlaceholder:"\u042D\u043C\u0438\u0440",settingDashboard:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434",settingDashboardDesc:"\u041F\u0430\u043D\u0435\u043B\u044C \u0441 \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043C, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u0439 \u0438 \u043D\u0435\u0434\u0430\u0432\u043D\u0438\u043C\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438.",settingLabels:"\u041F\u043E\u0434\u043F\u0438\u0441\u0438 \u0437\u0430\u043C\u0435\u0442\u043E\u043A",settingLabelsDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0441\u0430\u043C\u044B\u0445 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u0440\u044F\u043C\u043E \u0432 \u043A\u043E\u0441\u043C\u043E\u0441\u0435.",settingBloom:"\u0421\u0432\u0435\u0447\u0435\u043D\u0438\u0435 (bloom)",settingBloomDesc:"\u0421\u0438\u043B\u0430 \u043E\u0440\u0435\u043E\u043B\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0437\u0432\u0451\u0437\u0434 \u0438 \u0434\u0438\u0441\u043A\u0430.",settingDisk:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0434\u0438\u0441\u043A\u0430",settingDiskDesc:"\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u0437\u0430\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u043A\u0440\u0435\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u0438\u0441\u043A.",settingStars:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0432\u0451\u0437\u0434",settingStarsDesc:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0442\u043E\u0447\u0435\u043A-\u0437\u0430\u043C\u0435\u0442\u043E\u043A.",settingOrbit:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",settingOrbitDesc:"0 \u2014 \u043E\u0431\u043B\u0430\u043A\u043E \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435.",settingMaxNodes:"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u0430\u043C\u0435\u0442\u043E\u043A",settingMaxNodesDesc:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u044B\u0445 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 3D.",settingTransition:"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0438",settingTransitionDesc:"\u0417\u0430\u043C\u0435\u0442\u043A\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u0441\u043F\u0438\u0440\u0430\u043B\u0438 \u0432 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442, \u043A\u043E\u0433\u0434\u0430 \u0444\u0430\u0439\u043B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F.",settingQuasar:"\u0414\u0436\u0435\u0442\u044B \u043A\u0432\u0430\u0437\u0430\u0440\u0430",settingQuasarDesc:"\u0421\u0430\u043C\u0430\u044F \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043F\u0438\u0442\u0430\u0435\u0442 \u0434\u0436\u0435\u0442\u044B \u043D\u0430\u0434 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u043E\u0439.",settingActivity:"\u0421\u0432\u0435\u0436\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443",settingActivityDesc:"\u041D\u0435\u0434\u0430\u0432\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0432\u0441\u0442\u0430\u044E\u0442 \u0431\u043B\u0438\u0436\u0435 \u043A \u0434\u0438\u0441\u043A\u0443, \u0441\u0442\u0430\u0440\u044B\u0435 \u0443\u043F\u043B\u044B\u0432\u0430\u044E\u0442 \u043D\u0430\u0440\u0443\u0436\u0443.",settingAdaptive:"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",settingAdaptiveDesc:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043D\u0438\u0436\u0430\u0442\u044C \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0434\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0430\u0434\u043A\u0430\u0445 \u043A\u0430\u0434\u0440\u043E\u0432.",settingIncludeTags:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0442\u0435\u0433\u0438 \u043A\u0430\u043A \u0437\u0432\u0451\u0437\u0434\u044B",settingIncludeTagsDesc:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u0435\u0433\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0438\u044F\u044E\u0449\u0438\u0445 \u0437\u0432\u0451\u0437\u0434, \u043F\u0440\u0438\u0442\u044F\u0433\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0437\u0430\u043C\u0435\u0442\u043A\u0438.",settingOrbitalMotion:"\u041A\u0435\u043F\u043B\u0435\u0440\u043E\u0432\u0441\u043A\u043E\u0435 \u043E\u0440\u0431\u0438\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435",settingOrbitalMotionDesc:"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043F\u043E \u0437\u0430\u043A\u043E\u043D\u0430\u043C \u041A\u0435\u043F\u043B\u0435\u0440\u0430.",settingPulses:"\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u0438\u043C\u043F\u0443\u043B\u044C\u0441\u044B \u0441\u0432\u044F\u0437\u0435\u0439",settingPulsesDesc:"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0444\u043E\u0442\u043E\u043D\u043E\u0432, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438.",bodyStar:"\u0417\u0432\u0435\u0437\u0434\u0430",bodyGasGiant:"\u0413\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0438\u0433\u0430\u043D\u0442",bodyPlanet:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430",bodyAsteroid:"\u0410\u0441\u0442\u0435\u0440\u043E\u0438\u0434",contextLost:"3D-\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D \u2014 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0432\u0438\u0434\u2026",whenJustNow:"\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E",whenMinutes:i=>`${i} \u043C\u0438\u043D`,whenHours:i=>`${i} \u0447`,whenDays:i=>`${i} \u0434\u043D`,whenMonths:i=>`${i} \u043C\u0435\u0441`,noteCount:i=>Oh(i,"\u0437\u0430\u043C\u0435\u0442\u043A\u0430","\u0437\u0430\u043C\u0435\u0442\u043A\u0438","\u0437\u0430\u043C\u0435\u0442\u043E\u043A"),linkCount:i=>Oh(i,"\u0441\u0432\u044F\u0437\u044C","\u0441\u0432\u044F\u0437\u0438","\u0441\u0432\u044F\u0437\u0435\u0439")},Fh=t_;function Bh(i,t,e,n){let s=i%10,r=i%100;return s===1&&r!==11?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var e_={locale:"uk-UA",ribbonOpen:"Note Galaxy: \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 3D-\u0433\u0440\u0430\u0444",commandOpen:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 3D-\u0433\u0440\u0430\u0444",commandOpenDashboard:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0434\u0430\u0448\u0431\u043E\u0440\u0434 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",commandRebuild:"\u041F\u0435\u0440\u0435\u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 3D-\u0433\u0440\u0430\u0444",viewTitle:"Note Galaxy",dashboardTitle:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",greetingMorning:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443",greetingDay:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0434\u043D\u044F",greetingEvening:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0432\u0435\u0447\u043E\u0440\u0430",greetingNight:"\u0414\u043E\u0431\u0440\u043E\u0457 \u043D\u043E\u0447\u0456",eyebrow:"NOTE GALAXY",statNotes:"\u0437\u0430\u043C\u0456\u0442\u043A\u0438",statProjects:"\u043F\u0440\u043E\u0454\u043A\u0442\u0438",statLinks:"\u0437\u0432'\u044F\u0437\u043A\u0438",statTags:"\u0442\u0435\u0433\u0438",sectionFolders:"\u0421\u0443\u0437\u0456\u0440'\u044F",sectionRecent:"\u041D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u0456",chipAll:"\u0443\u0441\u0456",emptyRecent:"\u041F\u043E\u043A\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044C\u043E \u2014 \u0441\u0442\u0432\u043E\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0443 \u0437\u0430\u043C\u0456\u0442\u043A\u0443.",tabOverview:"\u041E\u0433\u043B\u044F\u0434",tabHubs:"\u0425\u0430\u0431\u0438",tabRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0456",sectionHubs:"\u0413\u043E\u043B\u043E\u0432\u043D\u0456 \u0445\u0430\u0431\u0438",hint:"\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u2014 \u043E\u0440\u0431\u0456\u0442\u0430 \xB7 \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 \u043A\u043B\u0456\u043A \u043F\u043E \u0437\u0456\u0440\u0446\u0456 \u2014 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u043C\u0456\u0442\u043A\u0443",toolbarRebuild:"\u041F\u0435\u0440\u0435\u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 \u0433\u0440\u0430\u0444",toolbarReset:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0438\u0434",toolbarDashboard:"\u041F\u0430\u043D\u0435\u043B\u044C",actionMakeCenter:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0438",actionResetCenter:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0434\u043E \u0447\u043E\u0440\u043D\u043E\u0457 \u0434\u0456\u0440\u0438",settingLanguage:"\u041C\u043E\u0432\u0430",settingLanguageDesc:"\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443. \xAB\u0410\u0432\u0442\u043E\xBB \u2014 \u044F\u043A \u0432 Obsidian.",languageAuto:"\u0410\u0432\u0442\u043E",settingCoreTheme:"\u041A\u043E\u0441\u043C\u0456\u0447\u043D\u0435 \u044F\u0434\u0440\u043E",settingCoreThemeDesc:"\u0412\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0438\u043B\u044C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0457 \u0447\u043E\u0440\u043D\u043E\u0457 \u0434\u0456\u0440\u0438 \u0442\u0430 \u0430\u043A\u0440\u0435\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430.",themeGargantua:"\u0490\u0430\u0440\u0491\u0430\u043D\u0442\u044E\u0430 (\u0431\u0443\u0440\u0448\u0442\u0438\u043D\u043E\u0432\u0438\u0439)",themePulsar:"\u041F\u0443\u043B\u044C\u0441\u0430\u0440 (\u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439)",themeSingularity:"\u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u0456\u0441\u0442\u044C (\u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0456\u043E\u043B\u0435\u0442)",settingName:"\u0406\u043C'\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F",settingNameDesc:"\u041F\u0456\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \xAB\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0432\u0435\u0447\u043E\u0440\u0430, \u2026\xBB. \u041F\u043E\u0440\u043E\u0436\u043D\u044C\u043E \u2014 \u043B\u0438\u0448\u0435 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F.",settingNamePlaceholder:"\u0415\u043C\u0456\u0440",settingDashboard:"\u041F\u0430\u043D\u0435\u043B\u044C",settingDashboardDesc:"\u041F\u0430\u043D\u0435\u043B\u044C \u0456\u0437 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F\u043C, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u044E \u0442\u0430 \u043D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u0456\u043C\u0438 \u0437\u0430\u043C\u0456\u0442\u043A\u0430\u043C\u0438.",settingLabels:"\u041F\u0456\u0434\u043F\u0438\u0441\u0438 \u0437\u0430\u043C\u0456\u0442\u043E\u043A",settingLabelsDesc:"\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0437\u0432\u0438 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u0445 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u0443 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456.",settingBloom:"\u0421\u0432\u0456\u0442\u0456\u043D\u043D\u044F (bloom)",settingBloomDesc:"\u0421\u0438\u043B\u0430 \u043E\u0440\u0435\u043E\u043B\u0443 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0437\u0456\u0440\u043E\u043A \u0456 \u0434\u0438\u0441\u043A\u0430.",settingDisk:"\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0434\u0438\u0441\u043A\u0430",settingDiskDesc:"\u042F\u043A \u0448\u0432\u0438\u0434\u043A\u043E \u043E\u0431\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u0430\u043A\u0440\u0435\u0446\u0456\u0439\u043D\u0438\u0439 \u0434\u0438\u0441\u043A.",settingStars:"\u0420\u043E\u0437\u043C\u0456\u0440 \u0437\u0456\u0440\u043E\u043A",settingStarsDesc:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0442\u043E\u0447\u043E\u043A-\u0437\u0430\u043C\u0456\u0442\u043E\u043A.",settingOrbit:"\u041E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",settingOrbitDesc:"0 \u2014 \u0445\u043C\u0430\u0440\u0430 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u0441\u0442\u043E\u0457\u0442\u044C \u043D\u0430 \u043C\u0456\u0441\u0446\u0456.",settingMaxNodes:"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u0430\u043C\u0456\u0442\u043E\u043A",settingMaxNodesDesc:"\u0421\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u0445 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432 3D.",settingTransition:"\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F \u0437\u0430\u043C\u0456\u0442\u043A\u0438",settingTransitionDesc:"\u0417\u0430\u043C\u0456\u0442\u043A\u0430 \u0439\u0434\u0435 \u0441\u043F\u0456\u0440\u0430\u043B\u043B\u044E \u0432 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442, \u043A\u043E\u043B\u0438 \u0444\u0430\u0439\u043B \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F.",settingQuasar:"\u0414\u0436\u0435\u0442\u0438 \u043A\u0432\u0430\u0437\u0430\u0440\u0430",settingQuasarDesc:"\u041D\u0430\u0439\u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0456\u0448\u0430 \u0437\u0430\u043C\u0456\u0442\u043A\u0430 \u0436\u0438\u0432\u0438\u0442\u044C \u0434\u0436\u0435\u0442\u0438 \u043D\u0430\u0434 \u0447\u043E\u0440\u043D\u043E\u044E \u0434\u0456\u0440\u043E\u044E.",settingActivity:"\u0421\u0432\u0456\u0436\u0456 \u0437\u0430\u043C\u0456\u0442\u043A\u0438 \u0431\u043B\u0438\u0436\u0447\u0435 \u0434\u043E \u0446\u0435\u043D\u0442\u0440\u0443",settingActivityDesc:"\u041D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u0456 \u0437\u0430\u043C\u0456\u0442\u043A\u0438 \u0441\u0442\u0430\u044E\u0442\u044C \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0434\u043E \u0434\u0438\u0441\u043A\u0430, \u0441\u0442\u0430\u0440\u0456 \u0432\u0456\u0434\u0434\u0430\u043B\u044F\u044E\u0442\u044C\u0441\u044F.",settingAdaptive:"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430 \u044F\u043A\u0456\u0441\u0442\u044C",settingAdaptiveDesc:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0437\u043C\u0435\u043D\u0448\u0443\u0432\u0430\u0442\u0438 \u0441\u044F\u0439\u0432\u043E \u0439 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0456\u0434\u0430\u043D\u043D\u0456 \u043A\u0430\u0434\u0440\u0456\u0432.",settingIncludeTags:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u0442\u0435\u0433\u0438 \u044F\u043A \u0437\u043E\u0440\u0456",settingIncludeTagsDesc:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u0442\u0435\u0433\u0438 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0441\u044F\u044E\u0447\u0438\u0445 \u0437\u0456\u0440, \u0449\u043E \u043F\u0440\u0438\u0442\u044F\u0433\u0443\u044E\u0442\u044C \u043D\u043E\u0442\u0430\u0442\u043A\u0438.",settingOrbitalMotion:"\u041A\u0435\u043F\u043B\u0435\u0440\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043E\u0440\u0431\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0443\u0445",settingOrbitalMotionDesc:"\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043F\u043B\u0430\u043D\u0435\u0442\u0438 \u043E\u0431\u0435\u0440\u0442\u0430\u044E\u0442\u044C\u0441\u044F \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u0437\u0430 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438 \u041A\u0435\u043F\u043B\u0435\u0440\u0430.",settingPulses:"\u0421\u0432\u0456\u0442\u043B\u043E\u0432\u0456 \u0456\u043C\u043F\u0443\u043B\u044C\u0441\u0438 \u0437\u0432'\u044F\u0437\u043A\u0456\u0432",settingPulsesDesc:"\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u0444\u043E\u0442\u043E\u043D\u0456\u0432, \u0449\u043E \u0440\u0443\u0445\u0430\u044E\u0442\u044C\u0441\u044F \u043C\u0456\u0436 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u043C\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u043C\u0438.",bodyStar:"\u0417\u043E\u0440\u044F",bodyGasGiant:"\u0413\u0430\u0437\u043E\u0432\u0438\u0439 \u0433\u0456\u0433\u0430\u043D\u0442",bodyPlanet:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430",bodyAsteroid:"\u0410\u0441\u0442\u0435\u0440\u043E\u0457\u0434",contextLost:"3D-\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0432\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u2014 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u044E\u044E \u0432\u0438\u0433\u043B\u044F\u0434\u2026",whenJustNow:"\u0449\u043E\u0439\u043D\u043E",whenMinutes:i=>`${i} \u0445\u0432`,whenHours:i=>`${i} \u0433\u043E\u0434`,whenDays:i=>`${i} \u0434\u043D`,whenMonths:i=>`${i} \u043C\u0456\u0441`,noteCount:i=>Bh(i,"\u0437\u0430\u043C\u0456\u0442\u043A\u0430","\u0437\u0430\u043C\u0456\u0442\u043A\u0438","\u0437\u0430\u043C\u0456\u0442\u043E\u043A"),linkCount:i=>Bh(i,"\u0437\u0432'\u044F\u0437\u043E\u043A","\u0437\u0432'\u044F\u0437\u043A\u0438","\u0437\u0432'\u044F\u0437\u043A\u0456\u0432")},zh=e_;var n_={locale:"de-DE",ribbonOpen:"Note Galaxy: 3D-Graph \xF6ffnen",commandOpen:"3D-Graph \xF6ffnen",commandOpenDashboard:"Galaxie-Dashboard \xF6ffnen",commandRebuild:"3D-Graph neu aufbauen",viewTitle:"Note Galaxy",dashboardTitle:"Galaxie-Dashboard",greetingMorning:"Guten Morgen",greetingDay:"Guten Tag",greetingEvening:"Guten Abend",greetingNight:"Gute Nacht",eyebrow:"NOTE GALAXY",statNotes:"Notizen",statProjects:"Projekte",statLinks:"Verbindungen",statTags:"Tags",sectionFolders:"Konstellationen",sectionRecent:"Zuletzt",chipAll:"alle",emptyRecent:"Noch nichts hier \u2014 erstelle deine erste Notiz.",tabOverview:"\xDCbersicht",tabHubs:"Hubs",tabRecent:"Zuletzt",sectionHubs:"Wichtige Hubs",hint:"Ziehen \u2014 Orbit \xB7 Scrollen \u2014 Zoom \xB7 Stern anklicken \u2014 Notiz \xF6ffnen",toolbarRebuild:"Graph neu aufbauen",toolbarReset:"Ansicht zur\xFCcksetzen",toolbarDashboard:"Dashboard",actionMakeCenter:"Als Systemzentrum festlegen",actionResetCenter:"Galaktischen Kern zur\xFCcksetzen",settingLanguage:"Sprache",settingLanguageDesc:"Sprache der Oberfl\xE4che. \u201EAuto\u201C folgt der Obsidian-Sprache.",languageAuto:"Auto",settingCoreTheme:"Kosmischer Kern",settingCoreThemeDesc:"Visueller Stil des zentralen Schwarzen Lochs und der Akkretionsscheibe.",themeGargantua:"Gargantua (Bernstein)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularit\xE4t (Ultraviolett)",settingName:"Name f\xFCr die Begr\xFC\xDFung",settingNameDesc:"Erscheint als \u201EGuten Abend, \u2026\u201C. Leer lassen, um nur die Begr\xFC\xDFung zu zeigen.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Panel mit Begr\xFC\xDFung, Statistik und letzten Notizen.",settingLabels:"Notizbeschriftungen",settingLabelsDesc:"Titel der am st\xE4rksten verkn\xFCpften Notizen im Raum anzeigen.",settingBloom:"Leuchten (Bloom)",settingBloomDesc:"St\xE4rke des Scheins um Sterne und Scheibe.",settingDisk:"Scheibengeschwindigkeit",settingDiskDesc:"Wie schnell die Akkretionsscheibe rotiert.",settingStars:"Sternengr\xF6\xDFe",settingStarsDesc:"Gr\xF6\xDFe der Notizpunkte.",settingOrbit:"Galaxienrotation",settingOrbitDesc:"0 h\xE4lt die Notizwolke still.",settingMaxNodes:"Maximale Notizen",settingMaxNodesDesc:"Wie viele der am st\xE4rksten verkn\xFCpften Notizen in 3D erscheinen.",settingTransition:"Animation beim \xD6ffnen",settingTransitionDesc:"Die Notiz spiralt in den Horizont, w\xE4hrend die Datei ge\xF6ffnet wird.",settingQuasar:"Quasar-Jets",settingQuasarDesc:"Die am st\xE4rksten verkn\xFCpfte Notiz speist die Jets \xFCber dem schwarzen Loch.",settingActivity:"Neue Notizen n\xE4her am Zentrum",settingActivityDesc:"K\xFCrzlich bearbeitete Notizen liegen nahe an der Scheibe, \xE4ltere driften nach au\xDFen.",settingAdaptive:"Adaptive Qualit\xE4t",settingAdaptiveDesc:"Leuchtkraft und Details bei Einbr\xFCchen automatisch reduzieren.",settingIncludeTags:"Tags als Sterne anzeigen",settingIncludeTagsDesc:"Beliebte Tags als leuchtende Sterne darstellen, die Notizen anziehen.",settingOrbitalMotion:"Keplersche Orbitalbewegung",settingOrbitalMotionDesc:"Innere Planeten kreisen nach Keplers Gesetzen schneller als \xE4u\xDFere.",settingPulses:"Lichtimpulse entlang der Links",settingPulsesDesc:"Lichtteilchen zwischen verbundenen Notizen animieren.",bodyStar:"Stern",bodyGasGiant:"Gasriese",bodyPlanet:"Planet",bodyAsteroid:"Asteroid",contextLost:"3D-Kontext verloren \u2014 Ansicht wird wiederhergestellt\u2026",whenJustNow:"gerade eben",whenMinutes:i=>`${i} Min.`,whenHours:i=>`${i} Std.`,whenDays:i=>`${i} T.`,whenMonths:i=>`${i} Mon.`,noteCount:i=>`${i} ${i===1?"Notiz":"Notizen"}`,linkCount:i=>`${i} ${i===1?"Verbindung":"Verbindungen"}`},kh=n_;var i_={locale:"es-ES",ribbonOpen:"Note Galaxy: abrir el grafo 3D",commandOpen:"Abrir grafo 3D",commandOpenDashboard:"Abrir panel de galaxia",commandRebuild:"Reconstruir grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Panel de Galaxia",greetingMorning:"Buenos d\xEDas",greetingDay:"Buenas tardes",greetingEvening:"Buenas noches",greetingNight:"Buenas noches",eyebrow:"NOTE GALAXY",statNotes:"notas",statProjects:"proyectos",statLinks:"enlaces",statTags:"etiquetas",sectionFolders:"Constelaciones",sectionRecent:"Recientes",chipAll:"todas",emptyRecent:"A\xFAn no hay nada: crea tu primera nota.",tabOverview:"Resumen",tabHubs:"Nodos",tabRecent:"Recientes",sectionHubs:"Nodos principales",hint:"Arrastra \u2014 \xF3rbita \xB7 rueda \u2014 zoom \xB7 clic en una estrella \u2014 abrir nota",toolbarRebuild:"Reconstruir grafo",toolbarReset:"Restablecer vista",toolbarDashboard:"Panel",actionMakeCenter:"Fijar como centro del sistema",actionResetCenter:"Restablecer n\xFAcleo gal\xE1ctico",settingLanguage:"Idioma",settingLanguageDesc:"Idioma de la interfaz. \xABAuto\xBB sigue el idioma de Obsidian.",languageAuto:"Auto",settingCoreTheme:"N\xFAcleo c\xF3smico",settingCoreThemeDesc:"Estilo visual del agujero negro central y del disco de acreci\xF3n.",themeGargantua:"Gargant\xFAa (\xC1mbar)",themePulsar:"P\xFAlsar (Cian)",themeSingularity:"Singularidad (Ultravioleta)",settingName:"Nombre para el saludo",settingNameDesc:"Se muestra como \xABBuenas noches, \u2026\xBB. D\xE9jalo vac\xEDo para mostrar solo el saludo.",settingNamePlaceholder:"Emir",settingDashboard:"Panel",settingDashboardDesc:"Panel con saludo, estad\xEDsticas y notas recientes.",settingLabels:"Nombres de notas",settingLabelsDesc:"Mostrar los t\xEDtulos de las notas m\xE1s conectadas en el espacio.",settingBloom:"Brillo (bloom)",settingBloomDesc:"Intensidad del halo alrededor de estrellas y disco.",settingDisk:"Velocidad del disco",settingDiskDesc:"Con qu\xE9 rapidez gira el disco de acreci\xF3n.",settingStars:"Tama\xF1o de estrellas",settingStarsDesc:"Escala de los puntos de notas.",settingOrbit:"Rotaci\xF3n de la galaxia",settingOrbitDesc:"0 deja quieta la nube de notas.",settingMaxNodes:"M\xE1ximo de notas",settingMaxNodesDesc:"Cu\xE1ntas de las notas m\xE1s conectadas mostrar en 3D.",settingTransition:"Animaci\xF3n al abrir",settingTransitionDesc:"La nota espirala hacia el horizonte mientras se abre el archivo.",settingQuasar:"Jets de qu\xE1sar",settingQuasarDesc:"La nota m\xE1s conectada alimenta los jets sobre el agujero negro.",settingActivity:"Notas recientes m\xE1s cerca",settingActivityDesc:"Las notas editadas hace poco quedan cerca del disco; las antiguas se alejan.",settingAdaptive:"Calidad adaptativa",settingAdaptiveDesc:"Reduce el brillo y el detalle autom\xE1ticamente si bajan los fotogramas.",settingIncludeTags:"Incluir etiquetas como estrellas",settingIncludeTagsDesc:"Representar etiquetas populares como estrellas brillantes que atraen notas.",settingOrbitalMotion:"Movimiento orbital kepleriano",settingOrbitalMotionDesc:"Los planetas interiores orbitan m\xE1s r\xE1pido seg\xFAn las leyes de Kepler.",settingPulses:"Pulsos de luz en enlaces",settingPulsesDesc:"Animar fotones luminosos viajando entre notas conectadas.",bodyStar:"Estrella",bodyGasGiant:"Gigante gaseoso",bodyPlanet:"Planeta",bodyAsteroid:"Asteroide",contextLost:"Se perdi\xF3 el contexto 3D \u2014 restaurando la vista\u2026",whenJustNow:"ahora mismo",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} mes`,noteCount:i=>`${i} ${i===1?"nota":"notas"}`,linkCount:i=>`${i} ${i===1?"enlace":"enlaces"}`},Hh=i_;var s_={locale:"fr-FR",ribbonOpen:"Note Galaxy : ouvrir le graphe 3D",commandOpen:"Ouvrir le graphe 3D",commandOpenDashboard:"Ouvrir le tableau de bord",commandRebuild:"Reconstruire le graphe 3D",viewTitle:"Note Galaxy",dashboardTitle:"Tableau de Bord Galaxie",greetingMorning:"Bonjour",greetingDay:"Bon apr\xE8s-midi",greetingEvening:"Bonsoir",greetingNight:"Bonne nuit",eyebrow:"NOTE GALAXY",statNotes:"notes",statProjects:"projets",statLinks:"liens",statTags:"tags",sectionFolders:"Constellations",sectionRecent:"R\xE9centes",chipAll:"toutes",emptyRecent:"Rien pour l'instant \u2014 cr\xE9ez votre premi\xE8re note.",tabOverview:"Aper\xE7u",tabHubs:"P\xF4les",tabRecent:"R\xE9cents",sectionHubs:"P\xF4les majeurs",hint:"Glisser \u2014 orbite \xB7 molette \u2014 zoom \xB7 clic sur une \xE9toile \u2014 ouvrir la note",toolbarRebuild:"Reconstruire le graphe",toolbarReset:"R\xE9initialiser la vue",toolbarDashboard:"Tableau de bord",actionMakeCenter:"D\xE9finir comme centre du syst\xE8me",actionResetCenter:"R\xE9initialiser le noyau galactique",settingLanguage:"Langue",settingLanguageDesc:"Langue de l'interface. \xAB Auto \xBB suit la langue d'Obsidian.",languageAuto:"Auto",settingCoreTheme:"C\u0153ur cosmique",settingCoreThemeDesc:"Style visuel du trou noir central et du disque d'accr\xE9tion.",themeGargantua:"Gargantua (Ambre)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularit\xE9 (Ultraviolet)",settingName:"Nom pour le salut",settingNameDesc:"Affich\xE9 comme \xAB Bonsoir, \u2026 \xBB. Laissez vide pour n'afficher que le salut.",settingNamePlaceholder:"Emir",settingDashboard:"Tableau de bord",settingDashboardDesc:"Panneau avec salut, statistiques et notes r\xE9centes.",settingLabels:"Libell\xE9s des notes",settingLabelsDesc:"Afficher les titres des notes les plus connect\xE9es dans l'espace.",settingBloom:"\xC9clat (bloom)",settingBloomDesc:"Intensit\xE9 du halo autour des \xE9toiles et du disque.",settingDisk:"Vitesse du disque",settingDiskDesc:"Vitesse de rotation du disque d'accr\xE9tion.",settingStars:"Taille des \xE9toiles",settingStarsDesc:"\xC9chelle des points de notes.",settingOrbit:"Rotation de la galaxie",settingOrbitDesc:"0 fige le nuage de notes.",settingMaxNodes:"Notes maximum",settingMaxNodesDesc:"Combien de notes parmi les plus connect\xE9es afficher en 3D.",settingTransition:"Animation d'ouverture",settingTransitionDesc:"La note spirale vers l'horizon \xE0 l'ouverture du fichier.",settingQuasar:"Jets de quasar",settingQuasarDesc:"La note la plus reli\xE9e alimente les jets au-dessus du trou noir.",settingActivity:"Notes r\xE9centes plus proches",settingActivityDesc:"Les notes modifi\xE9es r\xE9cemment se placent pr\xE8s du disque, les anciennes d\xE9rivent vers l'ext\xE9rieur.",settingAdaptive:"Qualit\xE9 adaptative",settingAdaptiveDesc:"R\xE9duit automatiquement l'\xE9clat et les d\xE9tails quand les images chutent.",settingIncludeTags:"Inclure les \xE9tiquettes comme \xE9toiles",settingIncludeTagsDesc:"Afficher les \xE9tiquettes populaires sous forme d'\xE9toiles lumineuses.",settingOrbitalMotion:"Mouvement orbital k\xE9pl\xE9rien",settingOrbitalMotionDesc:"Les plan\xE8tes int\xE9rieures orbitent plus vite selon les lois de Kepler.",settingPulses:"Impulsions lumineuses des liens",settingPulsesDesc:"Animer des photons lumineux voyageant entre les notes connect\xE9es.",bodyStar:"\xC9toile",bodyGasGiant:"G\xE9ante gazeuse",bodyPlanet:"Plan\xE8te",bodyAsteroid:"Ast\xE9ro\xEFde",contextLost:"Contexte 3D perdu \u2014 restauration de la vue\u2026",whenJustNow:"\xE0 l'instant",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} j`,whenMonths:i=>`${i} mois`,noteCount:i=>`${i} note${i>1?"s":""}`,linkCount:i=>`${i} lien${i>1?"s":""}`},Vh=s_;var r_={locale:"it-IT",ribbonOpen:"Note Galaxy: apri il grafo 3D",commandOpen:"Apri grafo 3D",commandOpenDashboard:"Apri dashboard galassia",commandRebuild:"Ricostruisci grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Dashboard Galassia",greetingMorning:"Buongiorno",greetingDay:"Buon pomeriggio",greetingEvening:"Buonasera",greetingNight:"Buonanotte",eyebrow:"NOTE GALAXY",statNotes:"note",statProjects:"progetti",statLinks:"collegamenti",statTags:"tag",sectionFolders:"Costellazioni",sectionRecent:"Recenti",chipAll:"tutte",emptyRecent:"Ancora nulla \u2014 crea la tua prima nota.",tabOverview:"Panoramica",tabHubs:"Hub",tabRecent:"Recenti",sectionHubs:"Hub principali",hint:"Trascina \u2014 orbita \xB7 rotella \u2014 zoom \xB7 clic su una stella \u2014 apri la nota",toolbarRebuild:"Ricostruisci grafo",toolbarReset:"Reimposta vista",toolbarDashboard:"Dashboard",actionMakeCenter:"Imposta come centro del sistema",actionResetCenter:"Ripristina nucleo galattico",settingLanguage:"Lingua",settingLanguageDesc:"Lingua dell'interfaccia. \xABAuto\xBB segue la lingua di Obsidian.",languageAuto:"Auto",settingCoreTheme:"Nucleo cosmico",settingCoreThemeDesc:"Stile visivo del buco nero centrale e del disco di accrescimento.",themeGargantua:"Gargantua (Ambra)",themePulsar:"Pulsar (Ciano)",themeSingularity:"Singolarit\xE0 (Ultravioletto)",settingName:"Nome per il saluto",settingNameDesc:"Mostrato come \xABBuonasera, \u2026\xBB. Lascia vuoto per mostrare solo il saluto.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Pannello con saluto, statistiche e note recenti.",settingLabels:"Nomi delle note",settingLabelsDesc:"Mostra i titoli delle note pi\xF9 collegate nello spazio.",settingBloom:"Bagliore (bloom)",settingBloomDesc:"Intensit\xE0 dell'alone attorno a stelle e disco.",settingDisk:"Velocit\xE0 del disco",settingDiskDesc:"Quanto velocemente ruota il disco di accrescimento.",settingStars:"Dimensione stelle",settingStarsDesc:"Scala dei punti delle note.",settingOrbit:"Rotazione della galassia",settingOrbitDesc:"0 mantiene ferma la nuvola di note.",settingMaxNodes:"Note massime",settingMaxNodesDesc:"Quante delle note pi\xF9 collegate mostrare in 3D.",settingTransition:"Animazione di apertura",settingTransitionDesc:"La nota spirale verso l'orizzonte mentre il file si apre.",settingQuasar:"Getti del quasar",settingQuasarDesc:"La nota pi\xF9 collegata alimenta i getti sopra il buco nero.",settingActivity:"Note recenti pi\xF9 vicine",settingActivityDesc:"Le note modificate di recente si avvicinano al disco, le altre derivano verso l'esterno.",settingAdaptive:"Qualit\xE0 adaptativa",settingAdaptiveDesc:"Riduce automaticamente bagliore e dettagli quando i frame calano.",settingIncludeTags:"Includi tag come stelle",settingIncludeTagsDesc:"Rappresenta i tag popolari come stelle brillanti che attraggono le note.",settingOrbitalMotion:"Moto orbitale kepleriano",settingOrbitalMotionDesc:"I pianeti interni orbitano pi\xF9 velocemente secondo le leggi di Keplero.",settingPulses:"Impulsi luminosi sui collegamenti",settingPulsesDesc:"Anima fotoni luminosi che viaggiano tra le note collegate.",bodyStar:"Stella",bodyGasGiant:"Gigante gassoso",bodyPlanet:"Pianeta",bodyAsteroid:"Asteroide",contextLost:"Contesto 3D perso \u2014 ripristino della vista\u2026",whenJustNow:"adesso",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} g`,whenMonths:i=>`${i} mesi`,noteCount:i=>`${i} ${i===1?"nota":"note"}`,linkCount:i=>`${i} ${i===1?"collegamento":"collegamenti"}`},Gh=r_;var a_={locale:"pt-BR",ribbonOpen:"Note Galaxy: abrir o grafo 3D",commandOpen:"Abrir grafo 3D",commandOpenDashboard:"Abrir painel da gal\xE1xia",commandRebuild:"Reconstruir grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Painel da Gal\xE1xia",greetingMorning:"Bom dia",greetingDay:"Boa tarde",greetingEvening:"Boa noite",greetingNight:"Boa noite",eyebrow:"NOTE GALAXY",statNotes:"notas",statProjects:"projetos",statLinks:"conex\xF5es",statTags:"tags",sectionFolders:"Constela\xE7\xF5es",sectionRecent:"Recentes",chipAll:"todas",emptyRecent:"Nada por aqui ainda \u2014 crie sua primeira nota.",tabOverview:"Vis\xE3o geral",tabHubs:"Conex\xF5es",tabRecent:"Recentes",sectionHubs:"Principais conex\xF5es",hint:"Arraste \u2014 \xF3rbita \xB7 rolagem \u2014 zoom \xB7 clique numa estrela \u2014 abrir nota",toolbarRebuild:"Reconstruir grafo",toolbarReset:"Redefinir vis\xE3o",toolbarDashboard:"Painel",actionMakeCenter:"Definir como centro do sistema",actionResetCenter:"Redefinir n\xFAcleo gal\xE1ctico",settingLanguage:"Idioma",settingLanguageDesc:"Idioma da interface. \xABAuto\xBB segue o idioma do Obsidian.",languageAuto:"Auto",settingCoreTheme:"N\xFAcleo c\xF3smico",settingCoreThemeDesc:"Estilo visual do buraco negro central e do disco de acre\xE7\xE3o.",themeGargantua:"Garg\xE2ntua (\xC2mbar)",themePulsar:"Pulsar (Ciano)",themeSingularity:"Singularidade (Ultravioleta)",settingName:"Nome para a sauda\xE7\xE3o",settingNameDesc:"Exibido como \xABBoa noite, \u2026\xBB. Deixe vazio para mostrar apenas a sauda\xE7\xE3o.",settingNamePlaceholder:"Emir",settingDashboard:"Painel",settingDashboardDesc:"Painel com sauda\xE7\xE3o, estat\xEDsticas e notas recentes.",settingLabels:"Nomes das notas",settingLabelsDesc:"Mostrar os t\xEDtulos das notas mais conectadas no espa\xE7o.",settingBloom:"Brilho (bloom)",settingBloomDesc:"Intensidade do halo ao redor das estrelas e do disco.",settingDisk:"Velocidade do disco",settingDiskDesc:"Qu\xE3o r\xE1pido o disco de acre\xE7\xE3o gira.",settingStars:"Tamanho das estrelas",settingStarsDesc:"Escala dos pontos das notas.",settingOrbit:"Rota\xE7\xE3o da gal\xE1xia",settingOrbitDesc:"0 mant\xE9m a nuvem de notas parada.",settingMaxNodes:"M\xE1ximo de notas",settingMaxNodesDesc:"Quantas das notas mais conectadas mostrar em 3D.",settingTransition:"Anima\xE7\xE3o de abertura",settingTransitionDesc:"A nota espirala para o horizonte enquanto o arquivo abre.",settingQuasar:"Jatos de quasar",settingQuasarDesc:"A nota mais conectada alimenta os jatos acima do buraco negro.",settingActivity:"Notas recentes mais pr\xF3ximas",settingActivityDesc:"Notas editadas h\xE1 pouco ficam perto do disco; as antigas derivam para fora.",settingAdaptive:"Qualidade adaptativa",settingAdaptiveDesc:"Reduz brilho e detalhe automaticamente quando os quadros caem.",settingIncludeTags:"Incluir tags como estrelas",settingIncludeTagsDesc:"Renderizar tags populares como estrelas brilhantes atraindo notas.",settingOrbitalMotion:"Movimento orbital kepleriano",settingOrbitalMotionDesc:"Planetas internos orbitam mais r\xE1pido de acordo com as leis de Kepler.",settingPulses:"Pulsos de luz nas conex\xF5es",settingPulsesDesc:"Animar f\xF3tons luminosos viajando entre notas conectadas.",bodyStar:"Estrela",bodyGasGiant:"Gigante gasoso",bodyPlanet:"Planeta",bodyAsteroid:"Asteroide",contextLost:"Contexto 3D perdido \u2014 restaurando a visualiza\xE7\xE3o\u2026",whenJustNow:"agora mesmo",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} ${i===1?"m\xEAs":"meses"}`,noteCount:i=>`${i} ${i===1?"nota":"notas"}`,linkCount:i=>`${i} ${i===1?"conex\xE3o":"conex\xF5es"}`},Wh=a_;function Xh(i,t,e,n){let s=i%10,r=i%100;return i===1?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var o_={locale:"pl-PL",ribbonOpen:"Note Galaxy: otw\xF3rz graf 3D",commandOpen:"Otw\xF3rz graf 3D",commandOpenDashboard:"Otw\xF3rz panel galaktyki",commandRebuild:"Przebuduj graf 3D",viewTitle:"Note Galaxy",dashboardTitle:"Panel Galaktyki",greetingMorning:"Dzie\u0144 dobry",greetingDay:"Dzie\u0144 dobry",greetingEvening:"Dobry wiecz\xF3r",greetingNight:"Dobrej nocy",eyebrow:"NOTE GALAXY",statNotes:"notatki",statProjects:"projekty",statLinks:"po\u0142\u0105czenia",statTags:"tagi",sectionFolders:"Konstelacje",sectionRecent:"Ostatnie",chipAll:"wszystkie",emptyRecent:"Jeszcze nic tu nie ma \u2014 utw\xF3rz pierwsz\u0105 notatk\u0119.",tabOverview:"Przegl\u0105d",tabHubs:"W\u0119z\u0142y",tabRecent:"Ostatnie",sectionHubs:"G\u0142\xF3wne w\u0119z\u0142y",hint:"Przeci\u0105gnij \u2014 orbita \xB7 k\xF3\u0142ko \u2014 zoom \xB7 kliknij gwiazd\u0119 \u2014 otw\xF3rz notatk\u0119",toolbarRebuild:"Przebuduj graf",toolbarReset:"Przywr\xF3\u0107 widok",toolbarDashboard:"Panel",actionMakeCenter:"Ustaw jako centrum uk\u0142adu",actionResetCenter:"Zresetuj j\u0105dro galaktyki",settingLanguage:"J\u0119zyk",settingLanguageDesc:"J\u0119zyk interfejsu. \u201EAuto\u201D pod\u0105\u017Ca za j\u0119zykiem Obsidiana.",languageAuto:"Auto",settingCoreTheme:"Kosmiczne j\u0105dro",settingCoreThemeDesc:"Styl wizualny centralnej czarnej dziury i dysku akrecyjnego.",themeGargantua:"Gargantua (Bursztyn)",themePulsar:"Pulsar (Cyjan)",themeSingularity:"Osobliwo\u015B\u0107 (Ultrafiolet)",settingName:"Imi\u0119 do powitania",settingNameDesc:"Wy\u015Bwietlane jako \u201EDobry wiecz\xF3r, \u2026\u201D. Puste \u2014 tylko powitanie.",settingNamePlaceholder:"Emir",settingDashboard:"Panel",settingDashboardDesc:"Panel z powitaniem, statystykami i ostatnimi notatkami.",settingLabels:"Nazwy notatek",settingLabelsDesc:"Pokazuj tytu\u0142y najlepiej po\u0142\u0105czonych notatek w przestrzeni.",settingBloom:"Po\u015Bwiata (bloom)",settingBloomDesc:"Si\u0142a aureoli wok\xF3\u0142 gwiazd i dysku.",settingDisk:"Pr\u0119dko\u015B\u0107 dysku",settingDiskDesc:"Jak szybko wiruje dysk akrecyjny.",settingStars:"Rozmiar gwiazd",settingStarsDesc:"Skala kropek notatek.",settingOrbit:"Obr\xF3t galaktyki",settingOrbitDesc:"0 zatrzymuje chmur\u0119 notatek.",settingMaxNodes:"Maksymalnie notatek",settingMaxNodesDesc:"Ile najlepiej po\u0142\u0105czonych notatek pokazywa\u0107 w 3D.",settingTransition:"Animacja otwarcia",settingTransitionDesc:"Notatka spiralnie wpada do horyzontu podczas otwierania pliku.",settingQuasar:"D\u017Cety kwazara",settingQuasarDesc:"D\u017Cety nad czarn\u0105 dziur\u0105 nap\u0119dza najbardziej po\u0142\u0105czona notatka.",settingActivity:"\u015Awie\u017Ce notatki bli\u017Cej \u015Brodka",settingActivityDesc:"Ostatnio edytowane notatki trafiaj\u0105 bli\u017Cej dysku, stare dryfuj\u0105 na zewn\u0105trz.",settingAdaptive:"Jako\u015B\u0107 adaptacyjna",settingAdaptiveDesc:"Automatycznie obni\u017Ca po\u015Bwiat\u0119 i detale, gdy spada liczba klatek.",settingIncludeTags:"Uwzgl\u0119dnij tagi jako gwiazdy",settingIncludeTagsDesc:"Wy\u015Bwietlaj popularne tagi jako \u015Bwiec\u0105ce gwiazdy przyci\u0105gaj\u0105ce notatki.",settingOrbitalMotion:"Ruch orbitalny Keplera",settingOrbitalMotionDesc:"Planety wewn\u0119trzne kr\u0105\u017C\u0105 szybciej zgodnie z prawami Keplera.",settingPulses:"Impulsy \u015Bwietlne na \u0142\u0105czach",settingPulsesDesc:"Animuj fotony w\u0119druj\u0105ce mi\u0119dzy po\u0142\u0105czonymi notatkami.",bodyStar:"Gwiazda",bodyGasGiant:"Gazowy olbrzym",bodyPlanet:"Planeta",bodyAsteroid:"Asteroida",contextLost:"Utracono kontekst 3D \u2014 przywracam widok\u2026",whenJustNow:"przed chwil\u0105",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} godz.`,whenDays:i=>`${i} dn.`,whenMonths:i=>`${i} mies.`,noteCount:i=>Xh(i,"notatka","notatki","notatek"),linkCount:i=>Xh(i,"po\u0142\u0105czenie","po\u0142\u0105czenia","po\u0142\u0105cze\u0144")},qh=o_;var l_={locale:"zh-CN",ribbonOpen:"Note Galaxy\uFF1A\u6253\u5F00 3D \u56FE\u8C31",commandOpen:"\u6253\u5F00 3D \u56FE\u8C31",commandOpenDashboard:"\u6253\u5F00\u661F\u7CFB\u4EEA\u8868\u76D8",commandRebuild:"\u91CD\u5EFA 3D \u56FE\u8C31",viewTitle:"Note Galaxy",dashboardTitle:"\u661F\u7CFB\u4EEA\u8868\u76D8",greetingMorning:"\u65E9\u4E0A\u597D",greetingDay:"\u4E0B\u5348\u597D",greetingEvening:"\u665A\u4E0A\u597D",greetingNight:"\u665A\u5B89",eyebrow:"NOTE GALAXY",statNotes:"\u7B14\u8BB0",statProjects:"\u9879\u76EE",statLinks:"\u94FE\u63A5",statTags:"\u6807\u7B7E",sectionFolders:"\u661F\u5EA7",sectionRecent:"\u6700\u8FD1",chipAll:"\u5168\u90E8",emptyRecent:"\u8FD9\u91CC\u8FD8\u7A7A\u7740\u2014\u2014\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u6761\u7B14\u8BB0\u3002",tabOverview:"\u6982\u89C8",tabHubs:"\u6838\u5FC3",tabRecent:"\u6700\u8FD1",sectionHubs:"\u4E3B\u8981\u6838\u5FC3",hint:"\u62D6\u52A8\u2014\u2014\u73AF\u7ED5 \xB7 \u6EDA\u8F6E\u2014\u2014\u7F29\u653E \xB7 \u70B9\u51FB\u661F\u70B9\u2014\u2014\u6253\u5F00\u7B14\u8BB0",toolbarRebuild:"\u91CD\u5EFA\u56FE\u8C31",toolbarReset:"\u91CD\u7F6E\u89C6\u56FE",toolbarDashboard:"\u4EEA\u8868\u76D8",actionMakeCenter:"\u8BBE\u4E3A\u7CFB\u7EDF\u4E2D\u5FC3",actionResetCenter:"\u91CD\u7F6E\u94F6\u6CB3\u6838\u5FC3",settingLanguage:"\u8BED\u8A00",settingLanguageDesc:"\u754C\u9762\u8BED\u8A00\u3002\u300C\u81EA\u52A8\u300D\u8DDF\u968F Obsidian \u7684\u8BED\u8A00\u3002",languageAuto:"\u81EA\u52A8",settingCoreTheme:"\u5B87\u5B99\u6838\u5FC3",settingCoreThemeDesc:"\u4E2D\u5FC3\u9ED1\u6D1E\u4E0E\u5438\u79EF\u76D8\u7684\u89C6\u89C9\u98CE\u683C\u3002",themeGargantua:"\u5361\u5188\u56FE\u96C5\uFF08\u7425\u73C0\uFF09",themePulsar:"\u8109\u51B2\u661F\uFF08\u9752\u8272\uFF09",themeSingularity:"\u5947\u70B9\uFF08\u7D2B\u5916\uFF09",settingName:"\u95EE\u5019\u8BED\u4E2D\u7684\u540D\u5B57",settingNameDesc:"\u663E\u793A\u4E3A\u300C\u665A\u4E0A\u597D\uFF0C\u2026\u2026\u300D\u3002\u7559\u7A7A\u5219\u53EA\u663E\u793A\u95EE\u5019\u8BED\u3002",settingNamePlaceholder:"Emir",settingDashboard:"\u4EEA\u8868\u76D8",settingDashboardDesc:"\u5305\u542B\u95EE\u5019\u3001\u7EDF\u8BA1\u548C\u6700\u8FD1\u7B14\u8BB0\u7684\u9762\u677F\u3002",settingLabels:"\u7B14\u8BB0\u540D\u79F0",settingLabelsDesc:"\u5728\u7A7A\u95F4\u4E2D\u663E\u793A\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u6807\u9898\u3002",settingBloom:"\u8F89\u5149\uFF08bloom\uFF09",settingBloomDesc:"\u661F\u661F\u548C\u5438\u79EF\u76D8\u5468\u56F4\u5149\u6655\u7684\u5F3A\u5EA6\u3002",settingDisk:"\u5438\u79EF\u76D8\u901F\u5EA6",settingDiskDesc:"\u5438\u79EF\u76D8\u65CB\u8F6C\u7684\u5FEB\u6162\u3002",settingStars:"\u661F\u70B9\u5927\u5C0F",settingStarsDesc:"\u7B14\u8BB0\u70B9\u7684\u7F29\u653E\u3002",settingOrbit:"\u661F\u7CFB\u65CB\u8F6C",settingOrbitDesc:"0 \u8868\u793A\u7B14\u8BB0\u4E91\u9759\u6B62\u4E0D\u52A8\u3002",settingMaxNodes:"\u6700\u5927\u7B14\u8BB0\u6570",settingMaxNodesDesc:"\u5728 3D \u4E2D\u663E\u793A\u591A\u5C11\u6761\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u3002",settingTransition:"\u6253\u5F00\u7B14\u8BB0\u52A8\u753B",settingTransitionDesc:"\u6253\u5F00\u6587\u4EF6\u65F6,\u7B14\u8BB0\u6CBF\u87BA\u65CB\u5760\u5165\u4E8B\u4EF6\u89C6\u754C\u3002",settingQuasar:"\u7C7B\u661F\u4F53\u55B7\u6D41",settingQuasarDesc:"\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u4E3A\u9ED1\u6D1E\u4E0A\u65B9\u7684\u55B7\u6D41\u4F9B\u80FD\u3002",settingActivity:"\u8FD1\u671F\u7B14\u8BB0\u66F4\u9760\u8FD1\u4E2D\u5FC3",settingActivityDesc:"\u6700\u8FD1\u7F16\u8F91\u7684\u7B14\u8BB0\u505C\u5728\u5438\u79EF\u76D8\u9644\u8FD1,\u4E45\u672A\u7F16\u8F91\u7684\u6F02\u5411\u5916\u5708\u3002",settingAdaptive:"\u81EA\u9002\u5E94\u753B\u8D28",settingAdaptiveDesc:"\u5E27\u7387\u4E0B\u964D\u65F6\u81EA\u52A8\u964D\u4F4E\u8F89\u5149\u4E0E\u7EC6\u8282\u3002",settingIncludeTags:"\u5C06\u6807\u7B7E\u663E\u793A\u4E3A\u6052\u661F",settingIncludeTagsDesc:"\u5C06\u70ED\u95E8\u6807\u7B7E\u6E32\u67D3\u4E3A\u5438\u5F15\u7B14\u8BB0\u7684\u53D1\u5149\u6052\u661F\u3002",settingOrbitalMotion:"\u5F00\u666E\u52D2\u8F68\u9053\u8FD0\u52A8",settingOrbitalMotionDesc:"\u5185\u4FA7\u884C\u661F\u6839\u636E\u5F00\u666E\u52D2\u5B9A\u5F8B\u6BD4\u5916\u4FA7\u884C\u661F\u516C\u8F6C\u66F4\u5FEB\u3002",settingPulses:"\u8FDE\u63A5\u5149\u8109\u51B2",settingPulsesDesc:"\u5728\u5173\u8054\u7B14\u8BB0\u4E4B\u95F4\u6D41\u52A8\u663E\u793A\u53D1\u5149\u5149\u5B50\u52A8\u753B\u3002",bodyStar:"\u6052\u661F",bodyGasGiant:"\u6C14\u6001\u5DE8\u884C\u661F",bodyPlanet:"\u884C\u661F",bodyAsteroid:"\u5C0F\u884C\u661F",contextLost:"3D \u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u6062\u590D\u89C6\u56FE\u2026",whenJustNow:"\u521A\u521A",whenMinutes:i=>`${i} \u5206\u949F`,whenHours:i=>`${i} \u5C0F\u65F6`,whenDays:i=>`${i} \u5929`,whenMonths:i=>`${i} \u4E2A\u6708`,noteCount:i=>`${i} \u6761\u7B14\u8BB0`,linkCount:i=>`${i} \u6761\u94FE\u63A5`},Yh=l_;var c_={locale:"ja-JP",ribbonOpen:"Note Galaxy\uFF1A3D\u30B0\u30E9\u30D5\u3092\u958B\u304F",commandOpen:"3D\u30B0\u30E9\u30D5\u3092\u958B\u304F",commandOpenDashboard:"\u9280\u6CB3\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u3092\u958B\u304F",commandRebuild:"3D\u30B0\u30E9\u30D5\u3092\u518D\u69CB\u7BC9",viewTitle:"Note Galaxy",dashboardTitle:"\u9280\u6CB3\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",greetingMorning:"\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059",greetingDay:"\u3053\u3093\u306B\u3061\u306F",greetingEvening:"\u3053\u3093\u3070\u3093\u306F",greetingNight:"\u304A\u3084\u3059\u307F\u306A\u3055\u3044",eyebrow:"NOTE GALAXY",statNotes:"\u30CE\u30FC\u30C8",statProjects:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",statLinks:"\u30EA\u30F3\u30AF",statTags:"\u30BF\u30B0",sectionFolders:"\u661F\u5EA7",sectionRecent:"\u6700\u8FD1",chipAll:"\u3059\u3079\u3066",emptyRecent:"\u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093 \u2014 \u6700\u521D\u306E\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u3087\u3046\u3002",tabOverview:"\u6982\u8981",tabHubs:"\u62E0\u70B9",tabRecent:"\u6700\u8FD1",sectionHubs:"\u4E3B\u8981\u306A\u62E0\u70B9",hint:"\u30C9\u30E9\u30C3\u30B0 \u2014 \u5468\u56DE \xB7 \u30DB\u30A4\u30FC\u30EB \u2014 \u30BA\u30FC\u30E0 \xB7 \u661F\u3092\u30AF\u30EA\u30C3\u30AF \u2014 \u30CE\u30FC\u30C8\u3092\u958B\u304F",toolbarRebuild:"\u30B0\u30E9\u30D5\u3092\u518D\u69CB\u7BC9",toolbarReset:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8",toolbarDashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",actionMakeCenter:"\u30B7\u30B9\u30C6\u30E0\u306E\u4E2D\u5FC3\u306B\u8A2D\u5B9A",actionResetCenter:"\u9280\u6CB3\u6838\u3092\u30EA\u30BB\u30C3\u30C8",settingLanguage:"\u8A00\u8A9E",settingLanguageDesc:"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u8A00\u8A9E\u3002\u300C\u81EA\u52D5\u300D\u306F Obsidian \u306E\u8A00\u8A9E\u306B\u5408\u308F\u305B\u307E\u3059\u3002",languageAuto:"\u81EA\u52D5",settingCoreTheme:"\u5B87\u5B99\u6838",settingCoreThemeDesc:"\u4E2D\u5FC3\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB\u3068\u964D\u7740\u5186\u76E4\u306E\u30D3\u30B8\u30E5\u30A2\u30EB\u30C6\u30FC\u30DE\u3002",themeGargantua:"\u30AC\u30EB\u30AC\u30F3\u30C1\u30E5\u30A2\uFF08\u7425\u73C0\uFF09",themePulsar:"\u30D1\u30EB\u30B5\u30FC\uFF08\u30B7\u30A2\u30F3\uFF09",themeSingularity:"\u7279\u7570\u70B9\uFF08\u7D2B\u5916\u7DDA\uFF09",settingName:"\u6328\u62F6\u306B\u4F7F\u3046\u540D\u524D",settingNameDesc:"\u300C\u3053\u3093\u3070\u3093\u306F\u3001\u2026\u300D\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u7A7A\u6B04\u306A\u3089\u6328\u62F6\u306E\u307F\u3002",settingNamePlaceholder:"Emir",settingDashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",settingDashboardDesc:"\u6328\u62F6\u30FB\u7D71\u8A08\u30FB\u6700\u8FD1\u306E\u30CE\u30FC\u30C8\u3092\u8868\u793A\u3059\u308B\u30D1\u30CD\u30EB\u3002",settingLabels:"\u30CE\u30FC\u30C8\u306E\u30E9\u30D9\u30EB",settingLabelsDesc:"\u6700\u3082\u591A\u304F\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u7A7A\u9593\u306B\u8868\u793A\u3057\u307E\u3059\u3002",settingBloom:"\u30B0\u30ED\u30FC\uFF08bloom\uFF09",settingBloomDesc:"\u661F\u3068\u5186\u76E4\u306E\u5468\u56F2\u306E\u5149\u306E\u5F37\u3055\u3002",settingDisk:"\u5186\u76E4\u306E\u901F\u5EA6",settingDiskDesc:"\u964D\u7740\u5186\u76E4\u304C\u56DE\u8EE2\u3059\u308B\u901F\u3055\u3002",settingStars:"\u661F\u306E\u30B5\u30A4\u30BA",settingStarsDesc:"\u30CE\u30FC\u30C8\u306E\u70B9\u306E\u5927\u304D\u3055\u3002",settingOrbit:"\u9280\u6CB3\u306E\u56DE\u8EE2",settingOrbitDesc:"0 \u306B\u3059\u308B\u3068\u30CE\u30FC\u30C8\u306E\u96F2\u304C\u9759\u6B62\u3057\u307E\u3059\u3002",settingMaxNodes:"\u6700\u5927\u30CE\u30FC\u30C8\u6570",settingMaxNodesDesc:"3D \u306B\u8868\u793A\u3059\u308B\u3001\u30EA\u30F3\u30AF\u306E\u591A\u3044\u30CE\u30FC\u30C8\u306E\u6570\u3002",settingTransition:"\u30CE\u30FC\u30C8\u3092\u958B\u304F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",settingTransitionDesc:"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3068\u3001\u30CE\u30FC\u30C8\u304C\u6E26\u3092\u5DFB\u3044\u3066\u5730\u5E73\u3078\u843D\u3061\u307E\u3059\u3002",settingQuasar:"\u30AF\u30A7\u30FC\u30B5\u30FC\u306E\u30B8\u30A7\u30C3\u30C8",settingQuasarDesc:"\u6700\u3082\u30EA\u30F3\u30AF\u306E\u591A\u3044\u30CE\u30FC\u30C8\u304C\u3001\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB\u306E\u4E0A\u90E8\u306E\u30B8\u30A7\u30C3\u30C8\u3092\u8F1D\u304B\u305B\u307E\u3059\u3002",settingActivity:"\u6700\u8FD1\u66F4\u65B0\u3057\u305F\u30CE\u30FC\u30C8\u3092\u5185\u5074\u306B",settingActivityDesc:"\u6700\u8FD1\u66F4\u65B0\u3057\u305F\u30CE\u30FC\u30C8\u306F\u5186\u76E4\u306E\u8FD1\u304F\u3078\u3001\u53E4\u3044\u30CE\u30FC\u30C8\u306F\u5916\u5074\u3078\u6D41\u308C\u307E\u3059\u3002",settingAdaptive:"\u81EA\u52D5\u753B\u8CEA\u8ABF\u6574",settingAdaptiveDesc:"\u30D5\u30EC\u30FC\u30E0\u304C\u843D\u3061\u305F\u3068\u304D\u3001\u767A\u5149\u3068\u30C7\u30A3\u30C6\u30FC\u30EB\u3092\u81EA\u52D5\u3067\u6291\u3048\u307E\u3059\u3002",settingIncludeTags:"\u30BF\u30B0\u3092\u6052\u661F\u3068\u3057\u3066\u8868\u793A",settingIncludeTagsDesc:"\u4EBA\u6C17\u306E\u30BF\u30B0\u3092\u30CE\u30FC\u30C8\u3092\u5F15\u304D\u5BC4\u305B\u308B\u8F1D\u304F\u6052\u661F\u3068\u3057\u3066\u63CF\u753B\u3057\u307E\u3059\u3002",settingOrbitalMotion:"\u30B1\u30D7\u30E9\u30FC\u8ECC\u9053\u904B\u52D5",settingOrbitalMotionDesc:"\u30B1\u30D7\u30E9\u30FC\u306E\u6CD5\u5247\u306B\u5F93\u3044\u3001\u5185\u5074\u306E\u60D1\u661F\u307B\u3069\u901F\u304F\u516C\u8EE2\u3057\u307E\u3059\u3002",settingPulses:"\u30EA\u30F3\u30AF\u306E\u5149\u30D1\u30EB\u30B9",settingPulsesDesc:"\u63A5\u7D9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u9593\u3092\u5149\u5B50\u304C\u79FB\u52D5\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002",bodyStar:"\u6052\u661F",bodyGasGiant:"\u5DE8\u5927\u30AC\u30B9\u60D1\u661F",bodyPlanet:"\u60D1\u661F",bodyAsteroid:"\u5C0F\u60D1\u661F",contextLost:"3D \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5931\u308F\u308C\u307E\u3057\u305F \u2014 \u30D3\u30E5\u30FC\u3092\u5FA9\u5143\u4E2D\u2026",whenJustNow:"\u305F\u3063\u305F\u4ECA",whenMinutes:i=>`${i} \u5206`,whenHours:i=>`${i} \u6642\u9593`,whenDays:i=>`${i} \u65E5`,whenMonths:i=>`${i} \u304B\u6708`,noteCount:i=>`${i} \u4EF6\u306E\u30CE\u30FC\u30C8`,linkCount:i=>`${i} \u4EF6\u306E\u30EA\u30F3\u30AF`},$h=c_;var Jh={en:Uh,ru:Fh,uk:zh,de:kh,es:Hh,fr:Vh,it:Gh,"pt-BR":Wh,pl:qh,"zh-CN":Yh,ja:$h},ia=[{code:"en",label:"English"},{code:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{code:"uk",label:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},{code:"de",label:"Deutsch"},{code:"es",label:"Espa\xF1ol"},{code:"fr",label:"Fran\xE7ais"},{code:"it",label:"Italiano"},{code:"pt-BR",label:"Portugu\xEAs (Brasil)"},{code:"pl",label:"Polski"},{code:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587"},{code:"ja",label:"\u65E5\u672C\u8A9E"}],Pl="en";function h_(i){return i in Jh}function u_(i){let t=i.trim().toLowerCase().replace(/_/g,"-");if(!t)return null;if(h_(t))return t;for(let n of ia)if(n.code.toLowerCase()===t)return n.code;let e=t.split("-")[0];for(let n of ia)if(n.code.toLowerCase().split("-")[0]===e)return n.code;return null}function d_(i){var e;if(i!=="auto")return i;let t="";try{t=(0,Zh.getLanguage)()}catch{t=""}return!t&&typeof navigator!="undefined"&&(t=navigator.language||"en"),(e=u_(t))!=null?e:"en"}function Dl(i){return Pl=d_(i),Pl}function Wt(){return Jh[Pl]}function Ut(i,t,e){let n=createEl(i,t?{cls:t}:{});return e!==void 0&&(n.textContent=e),n}function f_(i){return`#${i.toString(16).padStart(6,"0")}`}function p_(i){let t=Wt();return i>=5&&i<12?t.greetingMorning:i>=12&&i<18?t.greetingDay:i>=18&&i<23?t.greetingEvening:t.greetingNight}var Qi=class{constructor(t,e){this.handlers=e;this.cardLabels=[];this.activeTab="overview";this.activeFolder=null;this.folders=[];this.recent=[];this.hubs=[];this.dataName="";let n=Wt();this.root=Ut("div","ng-dashboard"),t.appendChild(this.root);let s=Ut("div","ng-head");this.eyebrowEl=Ut("div","ng-eyebrow",n.eyebrow),this.greetingEl=Ut("div","ng-greeting"),this.subEl=Ut("div","ng-sub"),s.append(this.eyebrowEl,this.greetingEl,this.subEl),this.root.appendChild(s);let r=Ut("div","ng-meta");this.clockEl=Ut("div","ng-clock"),this.dateEl=Ut("div","ng-date"),r.append(this.clockEl,this.dateEl),this.root.appendChild(r);let a=Ut("div","ng-tabs");this.tabOverviewBtn=Ut("button","ng-tab-btn is-active",n.tabOverview),this.tabHubsBtn=Ut("button","ng-tab-btn",n.tabHubs),this.tabRecentBtn=Ut("button","ng-tab-btn",n.tabRecent),this.tabOverviewBtn.addEventListener("click",()=>this.setTab("overview")),this.tabHubsBtn.addEventListener("click",()=>this.setTab("hubs")),this.tabRecentBtn.addEventListener("click",()=>this.setTab("recent")),a.append(this.tabOverviewBtn,this.tabHubsBtn,this.tabRecentBtn),this.root.appendChild(a),this.cardsEl=Ut("div","ng-cards");let o=l=>{let c=Ut("div","ng-card"),h=Ut("span","ng-num","0"),u=Ut("span","ng-lbl",l);return c.append(h,u),this.cardsEl.appendChild(c),this.cardLabels.push(u),h};this.statNotes=o(n.statNotes),this.statProjects=o(n.statProjects),this.statLinks=o(n.statLinks),this.statTags=o(n.statTags),this.root.appendChild(this.cardsEl),this.folderSection=Ut("div","ng-section"),this.folderTitleEl=Ut("div","ng-section-title",n.sectionFolders),this.foldersEl=Ut("div","ng-chips"),this.folderSection.append(this.folderTitleEl,this.foldersEl),this.root.appendChild(this.folderSection),this.hubsSection=Ut("div","ng-section is-hidden"),this.hubsTitleEl=Ut("div","ng-section-title",n.sectionHubs),this.hubsEl=Ut("div","ng-recent"),this.hubsSection.append(this.hubsTitleEl,this.hubsEl),this.root.appendChild(this.hubsSection),this.recentSection=Ut("div","ng-section is-hidden"),this.recentTitleEl=Ut("div","ng-section-title",n.sectionRecent),this.recentEl=Ut("div","ng-recent"),this.recentSection.append(this.recentTitleEl,this.recentEl),this.root.appendChild(this.recentSection),this.hintEl=Ut("div","ng-hint",n.hint),this.root.appendChild(this.hintEl),this.updateClock(),this.clockTimer=window.setInterval(()=>this.updateClock(),2e4)}setTab(t){this.activeTab=t,this.tabOverviewBtn.classList.toggle("is-active",t==="overview"),this.tabHubsBtn.classList.toggle("is-active",t==="hubs"),this.tabRecentBtn.classList.toggle("is-active",t==="recent"),this.cardsEl.classList.toggle("is-hidden",t!=="overview"),this.folderSection.classList.toggle("is-hidden",t!=="overview"),this.hubsSection.classList.toggle("is-hidden",t!=="hubs"),this.recentSection.classList.toggle("is-hidden",t!=="recent")}updateClock(){let t=Wt(),e=new Date;this.clockEl.textContent=e.toLocaleTimeString(t.locale,{hour:"2-digit",minute:"2-digit"}),this.dateEl.textContent=e.toLocaleDateString(t.locale,{weekday:"long",day:"numeric",month:"long"});let n=p_(e.getHours());this.greetingEl.textContent=this.dataName?`${n}, ${this.dataName}`:n}setVisible(t){this.root.classList.toggle("is-hidden",!t)}isVisible(){return!this.root.classList.contains("is-hidden")}relocalize(){let t=Wt();this.eyebrowEl.textContent=t.eyebrow,this.tabOverviewBtn.textContent=t.tabOverview,this.tabHubsBtn.textContent=t.tabHubs,this.tabRecentBtn.textContent=t.tabRecent,this.folderTitleEl.textContent=t.sectionFolders,this.hubsTitleEl.textContent=t.sectionHubs,this.recentTitleEl.textContent=t.sectionRecent,this.hintEl.textContent=t.hint;let e=[t.statNotes,t.statProjects,t.statLinks,t.statTags];this.cardLabels.forEach((n,s)=>{var r;n.textContent=(r=e[s])!=null?r:""}),this.updateClock(),this.renderFolders(),this.renderHubs(),this.renderRecent(this.recent)}update(t){var n;let e=Wt();this.dataName=t.userName,this.updateClock(),this.subEl.textContent=`${e.noteCount(t.notes)} \xB7 ${e.linkCount(t.links)}`,this.statNotes.textContent=String(t.notes),this.statProjects.textContent=String(t.projects),this.statLinks.textContent=String(t.links),this.statTags.textContent=String(t.tags),this.folders=t.folders,this.recent=t.recent,this.hubs=(n=t.hubs)!=null?n:[],this.renderFolders(),this.renderHubs(),this.renderRecent(t.recent)}renderFolders(){this.foldersEl.empty();let t=Ut("button","ng-chip",Wt().chipAll);t.classList.toggle("is-active",this.activeFolder===null),t.addEventListener("click",()=>{this.activeFolder=null,this.handlers.onFolder(null),this.renderFolders()}),this.foldersEl.appendChild(t);for(let e of this.folders){let n=Ut("button","ng-chip");n.classList.toggle("is-active",this.activeFolder===e.name);let s=Ut("span","ng-dot");s.setCssStyles({background:f_(e.color)});let r=Ut("span","ng-chip-label",e.name),a=Ut("span","ng-chip-count",String(e.count));n.append(s,r,a),n.title=`${e.name} \u2014 ${e.count}`,n.addEventListener("click",()=>{this.activeFolder=this.activeFolder===e.name?null:e.name,this.handlers.onFolder(this.activeFolder),this.renderFolders()}),this.foldersEl.appendChild(n)}}renderHubs(){if(this.hubsEl.empty(),this.hubs.length===0){this.hubsEl.appendChild(Ut("div","ng-empty",Wt().emptyRecent));return}for(let t of this.hubs){let e=Ut("button","ng-recent-item"),n=Ut("span","ng-recent-title",t.title),s=Ut("span","ng-recent-when",Wt().linkCount(t.degree));e.append(n,s),e.title=t.path,e.addEventListener("click",()=>this.handlers.onOpenNote(t.path)),this.hubsEl.appendChild(e)}}renderRecent(t){if(this.recentEl.empty(),t.length===0){this.recentEl.appendChild(Ut("div","ng-empty",Wt().emptyRecent));return}for(let e of t){let n=Ut("button","ng-recent-item"),s=Ut("span","ng-recent-title",e.title),r=Ut("span","ng-recent-when",e.when);n.append(s,r),n.title=e.path,n.addEventListener("click",()=>this.handlers.onOpenNote(e.path)),this.recentEl.appendChild(n)}}destroy(){window.clearInterval(this.clockTimer),this.root.remove()}};function Kh(i,t,e){let n=createEl("button",{cls:"ng-tool",title:t,attr:{"aria-label":t}});return(0,jh.setIcon)(n,i),n.addEventListener("click",e),n}var Xe="note-galaxy-view",m_=60;function Il(i){let t=Wt(),e=Date.now()-i,n=Math.floor(e/6e4);if(n<1)return t.whenJustNow;if(n<60)return t.whenMinutes(n);let s=Math.floor(n/60);if(s<24)return t.whenHours(s);let r=Math.floor(s/24);return r<30?t.whenDays(r):t.whenMonths(Math.floor(r/30))}var sn=class extends sa.ItemView{constructor(e,n){super(e);this.notes=null;this.pulses=null;this.jets=null;this.infall=null;this.infallPath=null;this.noticeEl=null;this.quality=1;this.activityLayoutApplied=!0;this.hubIndex=-1;this.handleContextLost=e=>{var n;e.preventDefault(),window.cancelAnimationFrame(this.raf),(n=this.root)==null||n.addClass("is-context-lost")};this.handleContextRestored=()=>{this.restoreContext()};this.frameAvg=0;this.framesSinceCheck=0;this.labels=[];this.toolbarButtons=[];this.activeFolder=null;this.lastGraph=null;this.clock=new $i;this.raycaster=new Or;this.pointer=new ht;this.tmpVec=new D;this.tmpNdc=new D;this.time=0;this.raf=0;this.lastRaycast=0;this.rebuildTimer=0;this.downPoint=null;this.resizeObserver=null;this.plugin=n}getViewType(){return Xe}getDisplayText(){return Wt().viewTitle}getIcon(){return"orbit"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("ng-host"),this.root=this.contentEl.createDiv({cls:"ng-root"}),this.canvas=this.root.createEl("canvas",{cls:"ng-canvas"}),this.labelLayer=this.root.createDiv({cls:"ng-labels"}),this.hoverEl=this.labelLayer.createDiv({cls:"ng-label ng-label-hover is-hidden"}),this.noticeEl=this.root.createDiv({cls:"ng-notice",text:Wt().contextLost}),this.dashboard=new Qi(this.root,{onOpenNote:e=>this.openNote(e),onRefresh:()=>this.rebuild(),onReset:()=>this.resetView(),onToggle:()=>this.toggleDashboard(),onFolder:e=>{var n;this.activeFolder=e,(n=this.notes)==null||n.setFolderFilter(e)}}),this.dashboard.setVisible(this.plugin.settings.showDashboard),this.buildToolbar(),this.initScene(),this.rebuild(),this.attachEvents(),this.startLoop()}initScene(){let e=new Ar({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.toneMapping=ws,e.toneMappingExposure=1,e.setClearColor(197642,1),this.renderer=e,this.scene=new Cr,this.camera=new De(55,1,.1,600),this.camera.position.set(6,30,68),this.controls=new Vr(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.7,this.controls.minDistance=9,this.controls.maxDistance=130,this.controls.target.set(0,0,0),this.blackhole=new Kr(this.plugin.settings.coreTheme),this.scene.add(this.blackhole.group),this.jets=new ea,this.scene.add(this.jets.group),this.composer=new qr(e),this.composer.addPass(new Yr(this.scene,this.camera)),this.bloom=new Ki(new ht(1,1),this.plugin.settings.bloom,.35,.62),this.composer.addPass(this.bloom),this.composer.addPass(new $r),this.resize()}buildToolbar(){let e=this.root.createDiv({cls:"ng-toolbar"}),n=[["refresh-cw",()=>Wt().toolbarRebuild,()=>this.rebuild()],["crosshair",()=>Wt().toolbarReset,()=>this.resetView()],["sun",()=>this.notes&&this.notes.getFocalNode()>=0?Wt().actionResetCenter:Wt().actionMakeCenter,()=>this.toggleFocalHovered()],["layout-dashboard",()=>Wt().commandOpenDashboard,()=>void this.plugin.activateDashboardView()],["panel-left",()=>Wt().toolbarDashboard,()=>this.toggleDashboard()]];for(let[s,r,a]of n){let o=Kh(s,r(),a);this.toolbarButtons.push({el:o,title:r}),e.appendChild(o)}}attachEvents(){this.registerDomEvent(this.canvas,"pointermove",e=>this.handlePointerMove(e)),this.registerDomEvent(this.canvas,"pointerdown",e=>{this.downPoint={x:e.clientX,y:e.clientY}}),this.registerDomEvent(this.canvas,"pointerup",e=>this.handlePointerUp(e)),this.registerDomEvent(this.canvas,"pointerleave",()=>{var e;(e=this.notes)==null||e.setHovered(-1),this.canvas.toggleClass("is-hover-node",!1)}),this.registerDomEvent(this.canvas,"contextmenu",e=>{var s,r,a,o,l;e.preventDefault();let n=(r=(s=this.notes)==null?void 0:s.getHovered())!=null?r:-1;n>=0?((o=(a=this.notes)==null?void 0:a.getFocalNode())!=null?o:-1)===n?this.resetView():((l=this.notes)==null||l.setFocalNode(n),this.controls.target.set(0,0,0),this.controls.update()):this.resetView()}),this.canvas.addEventListener("webglcontextlost",this.handleContextLost),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.registerEvent(this.app.metadataCache.on("resolved",()=>{this.rebuildTimer&&window.clearTimeout(this.rebuildTimer),this.rebuildTimer=window.setTimeout(()=>{this.rebuildTimer=0,this.rebuild()},2500)}))}resize(){if(!this.root)return;let e=this.root.clientWidth||800,n=this.root.clientHeight||600;this.renderer.setSize(e,n,!1),this.composer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}rebuild(){if(!this.scene)return;let e=jr(this.app,this.plugin.settings.maxNodes,this.plugin.settings.includeTags);Rh(e.nodes,e.links,{minRadius:16,maxRadius:42,activityBias:this.plugin.settings.activityLayout?1:0}),this.lastGraph=e,this.activityLayoutApplied=this.plugin.settings.activityLayout,this.hubIndex=-1;for(let n=0;n<e.nodes.length;n++)(this.hubIndex<0||e.nodes[n].degree>e.nodes[this.hubIndex].degree)&&(this.hubIndex=n);this.notes&&(this.scene.remove(this.notes.group),this.notes.dispose(),this.notes=null),this.notes=new Qr(e.nodes,e.links,this.plugin.settings.nodeScale,this.plugin.settings.orbitalMotion),this.notes.setFolderFilter(this.activeFolder),this.scene.add(this.notes.group),this.pulses&&(this.scene.remove(this.pulses.group),this.pulses.dispose(),this.pulses=null),this.plugin.settings.linkPulses&&(this.pulses=new na(e.links),this.scene.add(this.pulses.group)),this.updateJets(),this.buildLabels(),this.refreshDashboard(e)}updateJets(){if(!this.jets)return;let e=this.lastGraph;if(!this.plugin.settings.quasar||!e||e.nodes.length===0){this.jets.setPower(0),this.jets.setFeed(null);return}let n=this.hubIndex;(n<0||n>=e.nodes.length)&&(n=0);let s=e.nodes[n];if(!s||s.degree<3){this.jets.setPower(0),this.jets.setFeed(null);return}this.jets.setPower(Math.min(1,Math.log2(1+s.degree)/8)),this.notes?(this.notes.worldPosition(n,this.time,this.tmpVec),this.jets.setFeed(this.tmpVec)):this.jets.setFeed(new D(s.x,s.y,s.z))}prefersReducedMotion(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}restoreContext(){var e,n,s;this.root&&(window.cancelAnimationFrame(this.raf),(e=this.infall)==null||e.dispose(),this.infall=null,this.infallPath=null,(n=this.jets)==null||n.dispose(),this.jets=null,(s=this.notes)==null||s.dispose(),this.notes=null,this.controls.dispose(),this.composer.dispose(),this.blackhole.dispose(),this.renderer.dispose(),this.quality=1,this.initScene(),this.rebuild(),this.startLoop(),this.root.removeClass("is-context-lost"))}buildLabels(){for(let n of this.labels)n.el.remove();if(this.labels=[],!this.notes||!this.plugin.settings.showLabels)return;let e=this.notes.nodes.map((n,s)=>({index:s,degree:n.degree})).sort((n,s)=>s.degree-n.degree).slice(0,m_);for(let{index:n}of e){let s=this.labelLayer.createDiv({cls:"ng-label",text:this.notes.nodes[n].title});this.labels.push({index:n,el:s})}}refreshDashboard(e){let n=[...this.app.vault.getMarkdownFiles()].sort((s,r)=>r.stat.mtime-s.stat.mtime).slice(0,8).map(s=>({title:s.basename,path:s.path,when:Il(s.stat.mtime)}));this.dashboard.update({userName:this.plugin.settings.userName,notes:e.totalNotes,projects:e.totalProjects,links:e.totalLinks,tags:e.totalTags,folders:e.folders,hubs:e.topHubs,recent:n})}trackFrameRate(e){if(!this.plugin.settings.adaptiveQuality){this.quality!==1&&this.setQuality(1);return}this.frameAvg=this.frameAvg===0?e:this.frameAvg*.92+e*.08,!(++this.framesSinceCheck<90)&&(this.framesSinceCheck=0,this.frameAvg>.033&&this.quality>.5?this.setQuality(.5):this.frameAvg<.02&&this.quality<1&&this.setQuality(1))}setQuality(e){this.quality=e,this.frameAvg=0,this.framesSinceCheck=0,this.renderer.setPixelRatio(e<1?1:Math.min(window.devicePixelRatio||1,1.75)),this.resize()}startLoop(){this.clock.start();let e=()=>{var s;this.raf=window.requestAnimationFrame(e);let n=Math.min(this.clock.getDelta(),.08);document.hidden||(this.time+=n,this.blackhole.update(this.time,this.plugin.settings.diskSpeed),this.notes&&(this.notes.group.rotation.y+=n*this.plugin.settings.orbitSpeed*.06,this.notes.update(this.time),this.notes.group.updateMatrixWorld(),this.updateLabels()),this.pulses&&this.notes&&this.pulses.update(n,this.notes),this.infall&&(this.infall.update(n),this.infall.takeArrive()&&this.infallPath&&this.openNote(this.infallPath),this.infall.finished&&((s=this.notes)==null||s.group.remove(this.infall.group),this.infall.dispose(),this.infall=null,this.infallPath=null)),this.jets&&(this.jets.update(this.time),this.plugin.settings.quasar&&this.notes&&this.lastGraph&&this.updateJets()),this.bloom.strength=this.plugin.settings.bloom*this.quality+(this.infall?this.infall.bloomBoost*.15:0),this.bloom.enabled=this.quality>=1&&this.bloom.strength>.01,this.trackFrameRate(n),this.controls.update(),this.composer.render())};this.raf=window.requestAnimationFrame(e)}updateLabels(){if(!this.notes)return;let e=this.canvas.clientWidth,n=this.canvas.clientHeight;if(e===0||n===0)return;let s=this.camera.position;for(let h of this.labels){let u=this.notes.worldPosition(h.index,this.time,this.tmpVec),f=u.distanceTo(s),p=this.tmpNdc.copy(u).project(this.camera);if(p.z>1||p.z<-1||f>90){h.el.setCssStyles({opacity:"0"});continue}let g=(p.x*.5+.5)*e,v=(-p.y*.5+.5)*n;h.el.setCssStyles({transform:`translate(-50%, -50%) translate(${g.toFixed(1)}px, ${v.toFixed(1)}px)`,opacity:String(Math.max(.18,Math.min(.95,1.3-f/85)))})}let r=this.notes.getHovered();if(r<0){this.hoverEl.addClass("is-hidden");return}let a=this.notes.worldPosition(r,this.time,this.tmpVec),o=this.tmpNdc.copy(a).project(this.camera);if(o.z>1||o.z<-1){this.hoverEl.addClass("is-hidden");return}let l=(o.x*.5+.5)*e,c=(-o.y*.5+.5)*n;this.hoverEl.textContent=this.notes.nodes[r].title,this.hoverEl.setCssStyles({transform:`translate(-50%, -50%) translate(${l.toFixed(1)}px, ${c.toFixed(1)}px)`}),this.hoverEl.removeClass("is-hidden")}handlePointerMove(e){let n=performance.now();if(n-this.lastRaycast<45||(this.lastRaycast=n,!this.notes))return;let s=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.raycaster.intersectObject(this.notes.mesh,!1),a=r.length>0?r[0].instanceId:void 0,o=typeof a=="number"?a:-1;this.notes.setHovered(o),this.canvas.toggleClass("is-hover-node",o>=0)}handlePointerUp(e){let n=this.downPoint;if(this.downPoint=null,!n||!this.notes||Math.hypot(e.clientX-n.x,e.clientY-n.y)>5)return;let s=this.notes.getHovered();if(s<0)return;let r=this.notes.nodes[s];if(r){if(r.kind==="tag"){this.focusNode(r.path);return}if(this.plugin.settings.transition&&!this.prefersReducedMotion()&&!this.infall){this.infall=new ta({position:new D(r.x,r.y,r.z),color:r.color}),this.notes.group.add(this.infall.group),this.infallPath=r.path;return}this.openNote(r.path)}}openNote(e){let n=this.app.vault.getAbstractFileByPath(e);n instanceof sa.TFile&&this.app.workspace.getLeaf(!1).openFile(n)}resetView(){var e;(e=this.notes)==null||e.setFocalNode(-1),this.camera.position.set(6,30,68),this.controls.target.set(0,0,0),this.controls.update()}setActiveFolder(e){var n;this.activeFolder=e,(n=this.notes)==null||n.setFolderFilter(e)}focusNode(e){if(!this.notes)return;let n=this.notes.nodes.findIndex(s=>s.path===e);n<0||(this.notes.setHovered(n),this.notes.worldPosition(n,this.time,this.tmpVec),this.controls.target.copy(this.tmpVec),this.controls.update())}toggleFocalHovered(){if(!this.notes)return;if(this.notes.getFocalNode()>=0){this.resetView();return}let n=this.notes.getHovered();n>=0&&(this.notes.setFocalNode(n),this.controls.target.set(0,0,0),this.controls.update())}toggleDashboard(){let e=!this.dashboard.isVisible();this.dashboard.setVisible(e),this.plugin.settings.showDashboard=e,this.plugin.saveSettings()}applySettings(){var n,s;if(!this.root)return;(n=this.blackhole)==null||n.setTheme(this.plugin.settings.coreTheme),this.bloom&&(this.bloom.strength=this.plugin.settings.bloom*this.quality,this.bloom.enabled=this.quality>=1&&this.bloom.strength>.01),this.notes&&(this.notes.setNodeScale(this.plugin.settings.nodeScale),this.notes.orbitalMotion=this.plugin.settings.orbitalMotion),this.pulses&&(this.pulses.group.visible=this.plugin.settings.linkPulses),this.dashboard.setVisible(this.plugin.settings.showDashboard),this.dashboard.relocalize(),this.noticeEl&&(this.noticeEl.textContent=Wt().contextLost),this.lastGraph&&this.refreshDashboard(this.lastGraph),this.updateJets(),this.lastGraph&&this.activityLayoutApplied!==this.plugin.settings.activityLayout&&this.rebuild();for(let r of this.toolbarButtons){let a=r.title();r.el.title=a,r.el.setAttribute("aria-label",a)}this.buildLabels();let e=this.leaf;(s=e.updateHeader)==null||s.call(e)}async onClose(){var e,n,s,r,a,o,l,c,h,u,f,p,g;window.cancelAnimationFrame(this.raf),(e=this.canvas)==null||e.removeEventListener("webglcontextlost",this.handleContextLost),(n=this.canvas)==null||n.removeEventListener("webglcontextrestored",this.handleContextRestored),this.rebuildTimer&&window.clearTimeout(this.rebuildTimer),(s=this.resizeObserver)==null||s.disconnect(),this.resizeObserver=null,(r=this.controls)==null||r.dispose(),(a=this.composer)==null||a.dispose(),(o=this.notes)==null||o.dispose(),this.notes=null,(l=this.pulses)==null||l.dispose(),this.pulses=null,(c=this.infall)==null||c.dispose(),this.infall=null,this.infallPath=null,(h=this.jets)==null||h.dispose(),this.jets=null,(u=this.blackhole)==null||u.dispose(),(f=this.dashboard)==null||f.destroy(),(p=this.renderer)==null||p.dispose(),(g=this.renderer)==null||g.forceContextLoss(),this.contentEl.removeClass("ng-host"),this.contentEl.empty()}};var ra=require("obsidian");var ui="note-galaxy-dashboard",ts=class extends ra.ItemView{constructor(t,e){super(t),this.plugin=e}getViewType(){return ui}getDisplayText(){return Wt().dashboardTitle}getIcon(){return"layout-dashboard"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("ng-host","ng-dashboard-host"),this.dashboard=new Qi(this.contentEl,{onOpenNote:t=>this.handleNoteClick(t),onRefresh:()=>this.refresh(),onReset:()=>this.focusGraphView(),onToggle:()=>{},onFolder:t=>this.filterFolderInGraph(t)}),this.dashboard.setVisible(!0),this.refresh(),this.registerEvent(this.app.metadataCache.on("resolved",()=>this.refresh()))}handleNoteClick(t){if(t.startsWith("tag:")){this.highlightTagInGraph(t);return}let e=this.app.vault.getAbstractFileByPath(t);e instanceof ra.TFile&&(this.focusNodeInGraph(t),this.app.workspace.getLeaf(!1).openFile(e))}focusGraphView(){for(let t of this.app.workspace.getLeavesOfType(Xe))t.view instanceof sn&&t.view.resetView()}focusNodeInGraph(t){for(let e of this.app.workspace.getLeavesOfType(Xe))e.view instanceof sn&&e.view.focusNode(t)}filterFolderInGraph(t){for(let e of this.app.workspace.getLeavesOfType(Xe))e.view instanceof sn&&e.view.setActiveFolder(t)}highlightTagInGraph(t){for(let e of this.app.workspace.getLeavesOfType(Xe))e.view instanceof sn&&e.view.focusNode(t)}refresh(t){if(!this.dashboard)return;let e=t!=null?t:jr(this.app,this.plugin.settings.maxNodes,this.plugin.settings.includeTags),n=[...this.app.vault.getMarkdownFiles()].sort((s,r)=>r.stat.mtime-s.stat.mtime).slice(0,8).map(s=>({title:s.basename,path:s.path,when:Il(s.stat.mtime)}));this.dashboard.update({userName:this.plugin.settings.userName,notes:e.totalNotes,projects:e.totalProjects,links:e.totalLinks,tags:e.totalTags,folders:e.folders,hubs:e.topHubs,recent:n})}relocalize(){var e,n;(e=this.dashboard)==null||e.relocalize(),this.refresh();let t=this.leaf;(n=t.updateHeader)==null||n.call(t)}async onClose(){var t;(t=this.dashboard)==null||t.destroy(),this.contentEl.removeClass("ng-host","ng-dashboard-host"),this.contentEl.empty()}};var Qh=require("obsidian");var tu={language:"auto",coreTheme:"gargantua",userName:"",showDashboard:!0,showLabels:!0,transition:!0,quasar:!0,activityLayout:!0,adaptiveQuality:!0,includeTags:!0,orbitalMotion:!0,linkPulses:!0,bloom:.32,diskSpeed:1,nodeScale:1,orbitSpeed:.6,maxNodes:1200},aa=class extends Qh.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}getSettingDefinitions(){let t=Wt(),e={auto:t.languageAuto};for(let n of ia)e[n.code]=n.label;return[{name:t.settingLanguage,desc:t.settingLanguageDesc,control:{key:"language",type:"dropdown",options:e}},{name:t.settingCoreTheme,desc:t.settingCoreThemeDesc,control:{key:"coreTheme",type:"dropdown",options:{gargantua:t.themeGargantua,pulsar:t.themePulsar,singularity:t.themeSingularity}}},{name:t.settingName,desc:t.settingNameDesc,control:{key:"userName",type:"text",placeholder:t.settingNamePlaceholder}},{name:t.settingDashboard,desc:t.settingDashboardDesc,control:{key:"showDashboard",type:"toggle"}},{name:t.settingLabels,desc:t.settingLabelsDesc,control:{key:"showLabels",type:"toggle"}},{name:t.settingTransition,desc:t.settingTransitionDesc,control:{key:"transition",type:"toggle"}},{name:t.settingQuasar,desc:t.settingQuasarDesc,control:{key:"quasar",type:"toggle"}},{name:t.settingActivity,desc:t.settingActivityDesc,control:{key:"activityLayout",type:"toggle"}},{name:t.settingAdaptive,desc:t.settingAdaptiveDesc,control:{key:"adaptiveQuality",type:"toggle"}},{name:t.settingIncludeTags,desc:t.settingIncludeTagsDesc,control:{key:"includeTags",type:"toggle"}},{name:t.settingOrbitalMotion,desc:t.settingOrbitalMotionDesc,control:{key:"orbitalMotion",type:"toggle"}},{name:t.settingPulses,desc:t.settingPulsesDesc,control:{key:"linkPulses",type:"toggle"}},{name:t.settingBloom,desc:t.settingBloomDesc,control:{key:"bloom",type:"slider",min:0,max:2,step:.05}},{name:t.settingDisk,desc:t.settingDiskDesc,control:{key:"diskSpeed",type:"slider",min:0,max:3,step:.05}},{name:t.settingStars,desc:t.settingStarsDesc,control:{key:"nodeScale",type:"slider",min:.4,max:2.2,step:.05}},{name:t.settingOrbit,desc:t.settingOrbitDesc,control:{key:"orbitSpeed",type:"slider",min:0,max:2,step:.05}},{name:t.settingMaxNodes,desc:t.settingMaxNodesDesc,control:{key:"maxNodes",type:"slider",min:100,max:3e3,step:100}}]}async setControlValue(t,e){let n=this.plugin.settings;switch(t){case"language":n.language=e;break;case"coreTheme":n.coreTheme=e!=null?e:"gargantua";break;case"userName":n.userName=String(e!=null?e:"").trim();break;case"showDashboard":n.showDashboard=!!e;break;case"showLabels":n.showLabels=!!e;break;case"transition":n.transition=!!e;break;case"quasar":n.quasar=!!e;break;case"activityLayout":n.activityLayout=!!e;break;case"adaptiveQuality":n.adaptiveQuality=!!e;break;case"includeTags":n.includeTags=!!e;break;case"orbitalMotion":n.orbitalMotion=!!e;break;case"linkPulses":n.linkPulses=!!e;break;case"bloom":case"diskSpeed":case"nodeScale":case"orbitSpeed":n[t]=Number(e);break;case"maxNodes":n.maxNodes=Math.round(Number(e));break;default:break}try{await this.plugin.saveSettings(),t==="language"?(this.plugin.applyLanguage(),this.update()):this.plugin.applySettingsToViews()}catch(s){console.error("Note Galaxy: failed to save settings",s)}}};var oa=class extends eu.Plugin{constructor(){super(...arguments);this.ribbonEl=null}async onload(){await this.loadSettings(),Dl(this.settings.language),this.registerView(Xe,e=>new sn(e,this)),this.registerView(ui,e=>new ts(e,this)),this.ribbonEl=this.addRibbonIcon("orbit",Wt().ribbonOpen,()=>{this.activateView()}),this.registerCommands(),this.addSettingTab(new aa(this.app,this))}registerCommands(){for(let e of["open","open-dashboard","rebuild"])typeof this.removeCommand=="function"&&this.removeCommand(e);this.addCommand({id:"open",name:Wt().commandOpen,callback:()=>{this.activateView()}}),this.addCommand({id:"open-dashboard",name:Wt().commandOpenDashboard,callback:()=>{this.activateDashboardView()}}),this.addCommand({id:"rebuild",name:Wt().commandRebuild,callback:()=>{for(let e of this.app.workspace.getLeavesOfType(Xe)){let n=e.view;n instanceof sn&&n.rebuild()}for(let e of this.app.workspace.getLeavesOfType(ui)){let n=e.view;n instanceof ts&&n.refresh()}}})}onunload(){}applyLanguage(){if(Dl(this.settings.language),this.registerCommands(),this.ribbonEl){let e=Wt().ribbonOpen;this.ribbonEl.setAttribute("aria-label",e),this.ribbonEl.setAttribute("title",e)}this.applySettingsToViews()}async activateView(){let{workspace:e}=this.app,n=e.getLeavesOfType(Xe)[0];n||(n=e.getLeaf("tab"),await n.setViewState({type:Xe,active:!0})),await e.revealLeaf(n)}async activateDashboardView(){var s;let{workspace:e}=this.app,n=e.getLeavesOfType(ui)[0];n||(n=(s=e.getRightLeaf(!1))!=null?s:e.getLeaf("tab"),await n.setViewState({type:ui,active:!0})),await e.revealLeaf(n)}applySettingsToViews(){for(let e of this.app.workspace.getLeavesOfType(Xe)){let n=e.view;n instanceof sn&&n.applySettings()}for(let e of this.app.workspace.getLeavesOfType(ui)){let n=e.view;n instanceof ts&&n.relocalize()}}async loadSettings(){let e=await this.loadData();this.settings=Object.assign({},tu,e)}async saveSettings(){await this.saveData(this.settings)}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
