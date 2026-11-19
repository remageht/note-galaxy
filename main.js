/*
Note Galaxy — bundled by esbuild.
Source: src/. Do not edit main.js by hand.
*/
var uo=Object.defineProperty;var cu=Object.getOwnPropertyDescriptor;var hu=Object.getOwnPropertyNames;var uu=Object.prototype.hasOwnProperty;var du=(i,t)=>{for(var e in t)uo(i,e,{get:t[e],enumerable:!0})},fu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of hu(t))!uu.call(i,s)&&s!==e&&uo(i,s,{get:()=>t[s],enumerable:!(n=cu(t,s))||n.enumerable});return i};var pu=i=>fu(uo({},"__esModule",{value:!0}),i);var yv={};du(yv,{default:()=>co});module.exports=pu(yv);var ru=require("obsidian");var oo=require("obsidian");var ll="170",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mu=0,Wl=1,gu=2;var nh=1,vu=2,vn=3,zn=0,Ne=1,Me=2,cn=0,Ni=1,he=2,ql=3,Xl=4,_u=5,Kn=100,xu=101,yu=102,bu=103,Mu=104,Su=200,Eu=201,Tu=202,wu=203,Go=204,Wo=205,Au=206,Cu=207,Ru=208,Pu=209,Du=210,Iu=211,Lu=212,Nu=213,Uu=214,qo=0,Xo=1,Yo=2,Bi=3,$o=4,Zo=5,Jo=6,jo=7,ih=0,Ou=1,Fu=2,Bn=0,cl=1,hl=2,ul=3,As=4,Bu=5,dl=6,fl=7;var sh=300,zi=301,ki=302,Qo=303,Ko=304,zr=306,ta=1e3,ei=1001,ea=1002,ke=1003,zu=1004;var Ns=1005;var an=1006,fo=1007;var ni=1008;var bn=1009,rh=1010,oh=1011,xs=1012,pl=1013,ii=1014,ln=1015,nn=1016,ml=1017,gl=1018,Hi=1020,ah=35902,lh=1021,ch=1022,Ke=1023,hh=1024,uh=1025,Ui=1026,Vi=1027,vl=1028,_l=1029,dh=1030,xl=1031;var yl=1033,hr=33776,ur=33777,dr=33778,fr=33779,na=35840,ia=35841,sa=35842,ra=35843,oa=36196,aa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,va=37816,_a=37817,xa=37818,ya=37819,ba=37820,Ma=37821,pr=36492,Sa=36494,Ea=36495,fh=36283,Ta=36284,wa=36285,Aa=36286;var mr=2300,Ca=2301,po=2302,Yl=2400,$l=2401,Zl=2402;var ku=3200,Hu=3201;var Vu=0,Gu=1,On="",me="srgb",Ji="srgb-linear",kr="linear",$t="srgb";var pi=7680;var Jl=519,Wu=512,qu=513,Xu=514,ph=515,Yu=516,$u=517,Zu=518,Ju=519,Ra=35044,Cs=35048;var jl="300 es",_n=2e3,gr=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,gs=Math.PI/180,ys=180/Math.PI;function xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function bl(i,t){return(i%t+t)%t}function ju(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qu(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function Ku(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(bl(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*gs}function ld(i){return i*ys}function cd(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mh={DEG2RAD:gs,RAD2DEG:ys,generateUUID:xn,clamp:Ce,euclideanModulo:bl,mapLinear:ju,inverseLerp:Qu,lerp:vs,damp:Ku,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:Jt,denormalize:Qe},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],S=s[4],y=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*v+a*E+l*R,r[3]=o*m+a*S+l*T,r[6]=o*d+a*y+l*C,r[1]=c*v+h*E+u*R,r[4]=c*m+h*S+u*T,r[7]=c*d+h*y+u*C,r[2]=f*v+p*E+g*R,r[5]=f*m+p*S+g*T,r[8]=f*d+p*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mo.makeScale(t,e)),this}rotate(t){return this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mo=new Lt;function gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){let i=vr("canvas");return i.style.display="block",i}var Kl={};function ps(i){i in Kl||(Kl[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ft={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?kr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tc=[.64,.33,.3,.6,.15,.06],ec=[.2126,.7152,.0722],nc=[.3127,.329],ic=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ft.define({[Ji]:{primaries:tc,whitePoint:nc,transfer:kr,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:ec,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:tc,whitePoint:nc,transfer:$t,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:ec,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});var mi,Pa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=vr("canvas")),mi.width=t.width,mi.height=t.height;let n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vd=0,_r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(go(s[o].image)):r.push(go(s[o]))}else r=go(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function go(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,Ue=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=an,o=ni,a=Ke,l=bn,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=xn(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=sh;Ue.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(p+1)/2,R=(d+1)/2,T=(h+f)/4,C=(u+v)/4,P=(g+m)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ie=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let R=Math.sqrt(S),T=Math.atan2(R,d*E);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let y=a*E;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new D,rc=new tn,Sn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Os.subVectors(this.max,ss),gi.subVectors(t.a,ss),vi.subVectors(t.b,ss),_i.subVectors(t.c,ss),Pn.subVectors(vi,gi),Dn.subVectors(_i,vi),Xn.subVectors(gi,_i);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Xn.z,Xn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Xn.z,0,-Xn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Xn.y,Xn.x,0];return!_o(e,gi,vi,_i,Os)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,gi,vi,_i,Os))?!1:(Fs.crossVectors(Pn,Dn),e=[Fs.x,Fs.y,Fs.z],_o(e,gi,vi,_i,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new D,new D,new D,new D,new D,new D,new D,new D],$e=new D,Us=new Sn,gi=new D,vi=new D,_i=new D,Pn=new D,Dn=new D,Xn=new D,ss=new D,Os=new D,Fs=new D,Yn=new D;function _o(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);let a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xd=new Sn,rs=new D,xo=new D,En=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(xo)),this.expandByPoint(rs.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new D,yo=new D,Bs=new D,In=new D,bo=new D,zs=new D,Mo=new D,kn=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yo.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=In.dot(this.direction),l=-In.dot(Bs),c=In.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yo).addScaledVector(Bs,f),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);let n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),zs.subVectors(n,t),Mo.crossVectors(bo,zs);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);let l=a*this.direction.dot(zs.crossVectors(In,zs));if(l<0)return null;let c=a*this.direction.dot(bo.cross(In));if(c<0||l+c>o)return null;let h=-a*In.dot(Mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,bd)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Ln.crossVectors(n,Be),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Ln.crossVectors(n,Be)),Ln.normalize(),ks.crossVectors(Be,Ln),s[0]=Ln.x,s[4]=ks.x,s[8]=Be.x,s[1]=Ln.y,s[5]=ks.y,s[9]=Be.y,s[2]=Ln.z,s[6]=ks.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],S=n[7],y=n[11],R=n[15],T=s[0],C=s[4],P=s[8],b=s[12],_=s[1],w=s[5],I=s[9],N=s[13],B=s[2],W=s[6],k=s[10],j=s[14],G=s[3],et=s[7],it=s[11],vt=s[15];return r[0]=o*T+a*_+l*B+c*G,r[4]=o*C+a*w+l*W+c*et,r[8]=o*P+a*I+l*k+c*it,r[12]=o*b+a*N+l*j+c*vt,r[1]=h*T+u*_+f*B+p*G,r[5]=h*C+u*w+f*W+p*et,r[9]=h*P+u*I+f*k+p*it,r[13]=h*b+u*N+f*j+p*vt,r[2]=g*T+v*_+m*B+d*G,r[6]=g*C+v*w+m*W+d*et,r[10]=g*P+v*I+m*k+d*it,r[14]=g*b+v*N+m*j+d*vt,r[3]=E*T+S*_+y*B+R*G,r[7]=E*C+S*w+y*W+R*et,r[11]=E*P+S*I+y*k+R*it,r[15]=E*b+S*N+y*j+R*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,S=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,y=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,R=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,T=e*E+n*S+s*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=E*C,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*C,t[4]=S*C,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=R*C,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,E=l*c,S=l*h,y=l*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(v+d))*R,s[1]=(p+y)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(f+d))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*C,s[9]=(m-E)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let c=1/r,h=1/o,u=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_n){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===_n)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===gr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h,g,v;if(a===_n)g=(o+r)*u,v=-2*u;else if(a===gr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new D,Ze=new ee,yd=new D(0,0,0),bd=new D(1,1,1),Ln=new D,ks=new D,Be=new D,oc=new ee,ac=new tn,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,lc=new D,yi=new tn,pn=new ee,Hs=new D,os=new D,Sd=new D,Ed=new tn,cc=new D(1,0,0),hc=new D(0,1,0),uc=new D(0,0,1),dc={type:"added"},Td={type:"removed"},bi={type:"childadded",child:null},So={type:"childremoved",child:null},ve=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Tn,n=new tn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Lt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(os,Hs,this.up):pn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(pn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new D,mn=new D,Eo=new D,gn=new D,Mi=new D,Si=new D,fc=new D,To=new D,wo=new D,Ao=new D,Co=new de,Ro=new de,Po=new de,Fn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),mn.subVectors(n,e),Eo.subVectors(t,e);let o=Je.dot(Je),a=Je.dot(mn),l=Je.dot(Eo),c=mn.dot(mn),h=mn.dot(Eo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Co.setScalar(0),Ro.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Ro,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),mn.subVectors(t,e),Je.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Mi.subVectors(s,n),Si.subVectors(r,n),To.subVectors(t,n);let l=Mi.dot(To),c=Si.dot(To);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);let h=Mi.dot(wo),u=Si.dot(wo);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Mi,o);Ao.subVectors(t,r);let p=Mi.dot(Ao),g=Si.dot(Ao);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Si,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return fc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(fc,a);let d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Do(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ft.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ft.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ft.workingColorSpace){if(t=bl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Do(o,r,t+1/3),this.g=Do(o,r,t),this.b=Do(o,r,t-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Ft.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ce(Ae.r*255,0,255))*65536+Math.round(Ce(Ae.g*255,0,255))*256+Math.round(Ce(Ae.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=me){Ft.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Vs);let n=vs(Nn.h,Vs.h,e),s=vs(Nn.s,Vs.s,e),r=vs(Nn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new xt;xt.NAMES=vh;var wd=0,wn=class extends Mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=xn(),this.name="",this.blending=Ni,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ee=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new D,Gs=new ht,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}};var yr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=0,We=new ee,Io=new ve,Ei=new D,ze=new Sn,as=new Sn,be=new D,fe=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?br:yr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(ze.min,as.min),ze.expandByPoint(be),be.addVectors(ze.max,as.max),ze.expandByPoint(be)):(ze.expandByPoint(as.min),ze.expandByPoint(as.max))}ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(t,c),be.add(Ei)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;let c=new D,h=new D,u=new D,f=new ht,p=new ht,g=new ht,v=new D,m=new D;function d(P,b,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(v),a[b].add(v),a[_].add(v),l[P].add(m),l[b].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,b=E.length;P<b;++P){let _=E[P],w=_.start,I=_.count;for(let N=w,B=w+I;N<B;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new D,y=new D,R=new D,T=new D;function C(P){R.fromBufferAttribute(s,P),T.copy(R);let b=a[P];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(T,b);let w=y.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,w)}for(let P=0,b=E.length;P<b;++P){let _=E[P],w=_.start,I=_.count;for(let N=w,B=w+I;N<B;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pc=new ee,$n=new kn,Ws=new En,mc=new D,qs=new D,Xs=new D,Ys=new D,Lo=new D,$s=new D,gc=new D,Zs=new D,re=class extends ve{constructor(t=new fe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Lo.fromBufferAttribute(u,t),o?$s.addScaledVector(Lo,h):$s.addScaledVector(Lo.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Ws.containsPoint($n.origin)===!1&&($n.intersectSphere(Ws,mc)===null||$n.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(r).invert(),$n.copy(t.ray).applyMatrix4(pc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,R=S;y<R;y+=3){let T=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);s=Js(this,d,t,n,c,h,u,T,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=Js(this,o,t,n,c,h,u,E,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,R=S;y<R;y+=3){let T=y,C=y+1,P=y+2;s=Js(this,d,t,n,c,h,u,T,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=m,S=m+1,y=m+2;s=Js(this,o,t,n,c,h,u,E,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cd(i,t,e,n,s,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Xs),i.getVertexPosition(c,Ys);let h=Cd(i,t,e,n,qs,Xs,Ys,gc);if(h){let u=new D;Fn.getBarycoord(gc,qs,Xs,Ys,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Fn.getNormal(qs,Xs,Ys,f.normal),h.face=f,h.barycoord=u}return h}var Ms=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(v,m,d,E,S,y,R,T,C,P,b){let _=y/C,w=R/P,I=y/2,N=R/2,B=T/2,W=C+1,k=P+1,j=0,G=0,et=new D;for(let it=0;it<k;it++){let vt=it*w-N;for(let Pt=0;Pt<W;Pt++){let qt=Pt*_-I;et[v]=qt*E,et[m]=vt*S,et[d]=B,c.push(et.x,et.y,et.z),et[v]=0,et[m]=0,et[d]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Pt/C),u.push(1-it/P),j+=1}}for(let it=0;it<P;it++)for(let vt=0;vt<C;vt++){let Pt=f+vt+W*it,qt=f+vt+W*(it+1),X=f+(vt+1)+W*(it+1),Q=f+(vt+1)+W*it;l.push(Pt,qt,Q),l.push(qt,X,Q),G+=6}a.addGroup(p,G,b),p+=G,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function Rd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var Gn={clone:Gi,merge:Pe},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mr=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new D,vc=new ht,_c=new ht,De=class extends Mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,vc,_c),e.subVectors(_c,vc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ti=-90,wi=1,La=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Ti,wi,t,e);s.layers=this.layers,this.add(s);let r=new De(Ti,wi,t,e);r.layers=this.layers,this.add(r);let o=new De(Ti,wi,t,e);o.layers=this.layers,this.add(o);let a=new De(Ti,wi,t,e);a.layers=this.layers,this.add(a);let l=new De(Ti,wi,t,e);l.layers=this.layers,this.add(l);let c=new De(Ti,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sr=class extends Ue{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Na=class extends Ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:cn});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=an),new La(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},No=new D,Id=new D,Ld=new Lt,je=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(Id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ld.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new En,js=new D,Er=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,o=new je){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],S=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-p,y-d).normalize(),n[1].setComponents(l+r,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+h,m+g,y+E).normalize(),n[3].setComponents(l-o,f-h,m-g,y-E).normalize(),n[4].setComponents(l-a,f-u,m-v,y-S).normalize(),e===_n)n[5].setComponents(l+a,f+u,m+v,y+S).normalize();else if(e===gr)n[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tr=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let S=0;S<c;S++){let y=S*u-r;g.push(y,-E,0),v.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let S=E+c*d,y=E+c*(d+1),R=E+1+c*(d+1),T=E+1+c*d;p.push(S,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,af=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Nf=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yp=`float getShadowMask() {
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
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,sm=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,am=`#define TOON
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
}`,lm=`#define TOON
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
}`,cm=`uniform float size;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,fm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ud,alphahash_pars_fragment:Od,alphamap_fragment:Fd,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:kd,aomap_fragment:Hd,aomap_pars_fragment:Vd,batching_pars_vertex:Gd,batching_vertex:Wd,begin_vertex:qd,beginnormal_vertex:Xd,bsdfs:Yd,iridescence_fragment:$d,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:Kd,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:af,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Cf,envmap_vertex:_f,fog_vertex:xf,fog_pars_vertex:yf,fog_fragment:bf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Rf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Df,lights_phong_pars_fragment:If,lights_physical_fragment:Lf,lights_physical_pars_fragment:Nf,lights_fragment_begin:Uf,lights_fragment_maps:Of,lights_fragment_end:Ff,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Wf,map_particle_pars_fragment:qf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:$f,morphcolor_vertex:Zf,morphnormal_vertex:Jf,morphtarget_pars_vertex:jf,morphtarget_vertex:Qf,normal_fragment_begin:Kf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:ap,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:_p,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:bp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Cp,transmission_fragment:Rp,transmission_pars_fragment:Pp,uv_pars_fragment:Dp,uv_pars_vertex:Ip,uv_vertex:Lp,worldpos_vertex:Np,background_vert:Up,background_frag:Op,backgroundCube_vert:Fp,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:kp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Wp,equirect_vert:qp,equirect_frag:Xp,linedashed_vert:Yp,linedashed_frag:$p,meshbasic_vert:Zp,meshbasic_frag:Jp,meshlambert_vert:jp,meshlambert_frag:Qp,meshmatcap_vert:Kp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},nt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},on={basic:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Pe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Pe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Pe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Pe([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Pe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Pe([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Pe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Pe([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Pe([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Pe([nt.lights,nt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};on.physical={uniforms:Pe([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Qs={r:0,b:0,g:0},Jn=new Tn,mm=new ee;function gm(i,t,e,n,s,r,o){let a=new xt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function v(E){let S=!1,y=g(E);y===null?d(a,l):y&&y.isColor&&(d(y,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let y=g(S);y&&(y.isCubeTexture||y.mapping===zr)?(h===void 0&&(h=new re(new Ms(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:Gi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(S.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(Jn)),h.material.toneMapped=Ft.getTransfer(y.colorSpace)!==$t,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new re(new Tr(2,2),new ae({name:"BackgroundMaterial",uniforms:Gi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(y.colorSpace)!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(Qs,_h(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:v,addToRenderList:m}}function vm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,w,I,N,B){let W=!1,k=u(N,I,w);r!==k&&(r=k,c(r.object)),W=p(_,N,I,B),W&&g(_,N,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(_,w,I,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,I){let N=I.wireframe===!0,B=n[_.id];B===void 0&&(B={},n[_.id]=B);let W=B[w.id];W===void 0&&(W={},B[w.id]=W);let k=W[N];return k===void 0&&(k=f(l()),W[N]=k),k}function f(_){let w=[],I=[],N=[];for(let B=0;B<e;B++)w[B]=0,I[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:N,object:_,attributes:{},index:null}}function p(_,w,I,N){let B=r.attributes,W=w.attributes,k=0,j=I.getAttributes();for(let G in j)if(j[G].location>=0){let it=B[G],vt=W[G];if(vt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),it===void 0||it.attribute!==vt||vt&&it.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function g(_,w,I,N){let B={},W=w.attributes,k=0,j=I.getAttributes();for(let G in j)if(j[G].location>=0){let it=W[G];it===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));let vt={};vt.attribute=it,it&&it.data&&(vt.data=it.data),B[G]=vt,k++}r.attributes=B,r.attributesNum=k,r.index=N}function v(){let _=r.newAttributes;for(let w=0,I=_.length;w<I;w++)_[w]=0}function m(_){d(_,0)}function d(_,w){let I=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;I[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),B[_]!==w&&(i.vertexAttribDivisor(_,w),B[_]=w)}function E(){let _=r.newAttributes,w=r.enabledAttributes;for(let I=0,N=w.length;I<N;I++)w[I]!==_[I]&&(i.disableVertexAttribArray(I),w[I]=0)}function S(_,w,I,N,B,W,k){k===!0?i.vertexAttribIPointer(_,w,I,B,W):i.vertexAttribPointer(_,w,I,N,B,W)}function y(_,w,I,N){v();let B=N.attributes,W=I.getAttributes(),k=w.defaultAttributeValues;for(let j in W){let G=W[j];if(G.location>=0){let et=B[j];if(et===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(et=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(et=_.instanceColor)),et!==void 0){let it=et.normalized,vt=et.itemSize,Pt=t.get(et);if(Pt===void 0)continue;let qt=Pt.buffer,X=Pt.type,Q=Pt.bytesPerElement,_t=X===i.INT||X===i.UNSIGNED_INT||et.gpuType===pl;if(et.isInterleavedBufferAttribute){let rt=et.data,wt=rt.stride,Rt=et.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)d(G.location+Ot,rt.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Ot=0;Ot<G.locationSize;Ot++)S(G.location+Ot,vt/G.locationSize,X,it,wt*Q,(Rt+vt/G.locationSize*Ot)*Q,_t)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)d(G.location+rt,et.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let rt=0;rt<G.locationSize;rt++)S(G.location+rt,vt/G.locationSize,X,it,vt*Q,vt/G.locationSize*rt*Q,_t)}}else if(k!==void 0){let it=k[j];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(G.location,it);break;case 3:i.vertexAttrib3fv(G.location,it);break;case 4:i.vertexAttrib4fv(G.location,it);break;default:i.vertexAttrib1fv(G.location,it)}}}}E()}function R(){P();for(let _ in n){let w=n[_];for(let I in w){let N=w[I];for(let B in N)h(N[B].object),delete N[B];delete w[I]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let I in w){let N=w[I];for(let B in N)h(N[B].object),delete N[B];delete w[I]}delete n[_.id]}function C(_){for(let w in n){let I=n[w];if(I[_.id]===void 0)continue;let N=I[_.id];for(let B in N)h(N[B].object),delete N[B];delete I[_.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function _m(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ke&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function ym(i){let t=this,e=null,n=0,s=!1,r=!1,o=new je,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,S=E*4,y=d.clippingState||null;l.value=y,y=h(g,f,S,p);for(let R=0;R!==S;++R)y[R]=e[R];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=p;S!==v;++S,y+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function bm(i){let t=new WeakMap;function e(o,a){return a===Qo?o.mapping=zi:a===Ko&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qo||a===Ko)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Na(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ss=class extends Mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Li=4,xc=[.125,.215,.35,.446,.526,.582],ti=20,Uo=new Ss,yc=new xt,Oo=null,Fo=0,Bo=0,zo=!1,Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,bc=[new D(-Qn,Ai,0),new D(Qn,Ai,0),new D(-Ai,0,Qn),new D(Ai,0,Qn),new D(0,Qn,-Ai),new D(0,Qn,Ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Fo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:nn,format:Ke,colorSpace:Ji,depthBuffer:!1},s=Mc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=Sm(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s){let a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yc),h.toneMapping=Bn,h.autoClear=!1;let p=new Ee({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new re(new Ms,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(yc),v=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let S=this._cubeSize;Ks(s,E*S,d>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bc[(s-r-1)%bc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);let d=[],E=0;for(let C=0;C<ti;++C){let P=C/v,b=Math.exp(-P*P/2);d.push(b),C===0?E+=b:C<m&&(E+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-Li?s-S+Li:0),T=4*(this._cubeSize-y);Ks(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Uo)}};function Mm(i){let t=[],e=[],n=[],s=i,r=i-Li+1+xc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Li?l=xc[o-i+Li-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),S=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,P=T>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(b,v*g*T),S.set(f,m*g*T);let _=[T,T,T,T,T,T];y.set(_,d*g*T)}let R=new fe;R.setAttribute("position",new ge(E,v)),R.setAttribute("uv",new ge(S,m)),R.setAttribute("faceIndex",new ge(y,d)),t.push(R),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mc(i,t,e){let n=new Ie(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){let n=new Float32Array(ti),s=new D(0,1,0);return new ae({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Sc(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ec(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function Em(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qo||l===Ko,h=l===zi||l===ki;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new wr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let S=0,y=E.length;S<y;S+=3){let R=E[S+0],T=E[S+1],C=E[S+2];f.push(R,T,T,C,C,R)}}else if(g!==void 0){let E=g.array;v=g.version;for(let S=0,y=E.length/3-1;S<y;S+=3){let R=S+0,T=S+1,C=S+2;f.push(R,T,T,C,C,R)}}else return;let m=new(gh(f)?br:yr)(f,1);m.version=v;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Am(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rm(i,t,e){let n=new WeakMap,s=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*u),C=new xr(T,y,R,u);C.type=ln,C.needsUpdate=!0;let P=S*4;for(let _=0;_<u;_++){let w=m[_],I=d[_],N=E[_],B=y*R*4*_;for(let W=0;W<w.count;W++){let k=W*P;p===!0&&(s.fromBufferAttribute(w,W),T[B+k+0]=s.x,T[B+k+1]=s.y,T[B+k+2]=s.z,T[B+k+3]=0),g===!0&&(s.fromBufferAttribute(I,W),T[B+k+4]=s.x,T[B+k+5]=s.y,T[B+k+6]=s.z,T[B+k+7]=0),v===!0&&(s.fromBufferAttribute(N,W),T[B+k+8]=s.x,T[B+k+9]=s.y,T[B+k+10]=s.z,T[B+k+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ht(y,R)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ar=class extends Ue{constructor(t,e,n,s,r,o,a,l,c,h=Ui){if(h!==Ui&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ii),n===void 0&&h===Vi&&(n=Hi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yh=new Ue,Tc=new Ar(1,1),bh=new xr,Mh=new Ia,Sh=new Sr,wc=[],Ac=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Pc=new Float32Array(4);function ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),xe(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Rc.set(n),i.uniformMatrix3fv(this.addr,!1,Rc),xe(e,n)}}function Fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),xe(e,n)}}function Bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=ph,r=Tc):r=yh,e.setTexture2D(t||r,s)}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mh,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bh,s)}function Jm(i){switch(i){case 5126:return Dm;case 35664:return Im;case 35665:return Lm;case 35666:return Nm;case 35674:return Um;case 35675:return Om;case 35676:return Fm;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}function jm(i,t){i.uniform1fv(this.addr,t)}function Qm(i,t){let e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Km(i,t){let e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){let e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){let e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){let e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){let e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function ag(i,t){i.uniform4iv(this.addr,t)}function lg(i,t){i.uniform1uiv(this.addr,t)}function cg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yh,r[o])}function fg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mh,r[o])}function pg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sh,r[o])}function mg(i,t,e){let n=this.cache,s=t.length,r=Hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bh,r[o])}function gg(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return Km;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var Ua=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jm(e.type)}},Oa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}},Fa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ko=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function vg(i,t,e){let n=i.name,s=n.length;for(ko.lastIndex=0;;){let r=ko.exec(n),o=ko.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dc(e,c===void 0?new Ua(a,i,t):new Oa(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Fa(a),Dc(e,u)),e=u}}}var Fi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ic(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _g=37297,xg=0;function yg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Lc=new Lt;function bg(i){Ft._getMatrix(Lc,Ft.workingColorSpace,i);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(i)){case kr:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(t),o)}else return s}function Mg(i,t){let e=bg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sg(i,t){let e;switch(t){case cl:e="Linear";break;case hl:e="Reinhard";break;case ul:e="Cineon";break;case As:e="ACESFilmic";break;case dl:e="AgX";break;case fl:e="Neutral";break;case Bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tr=new D;function Eg(){Ft.getLuminanceCoefficients(tr);let i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function wg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ms(i){return i!==""}function Uc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(Cg,Pg)}var Rg=new Map;function Pg(i,t){let e=Ut[t];if(e===void 0){let n=Rg.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(Dg,Ig)}function Ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function Fg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Lg(e),c=Ng(e),h=Ug(e),u=Og(e),f=Fg(e),p=Tg(e),g=wg(r),v=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),d.length>0&&(d+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),d=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Mg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),o=Ba(o),o=Uc(o,e),o=Oc(o,e),a=Ba(a),a=Uc(a,e),a=Oc(a,e),o=Fc(o),a=Fc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=E+m+o,y=E+d+a,R=Ic(s,s.VERTEX_SHADER,S),T=Ic(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),W=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{let j=Nc(s,R,"vertex"),G=Nc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+j+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||B==="")&&(k=!1);k&&(w.diagnostics={runnable:W,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(R),s.deleteShader(T),P=new Fi(s,v),b=Ag(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,_g)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var zg=0,za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ka(t),e.set(t,n)),n}},ka=class{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}};function kg(i,t,e,n,s,r,o){let a=new bs,l=new za,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,w,I,N){let B=I.fog,W=N.geometry,k=b.isMeshStandardMaterial?I.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),G=j&&j.mapping===zr?j.image.height:null,et=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=it!==void 0?it.length:0,Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let qt,X,Q,_t;if(et){let Zt=on[et];qt=Zt.vertexShader,X=Zt.fragmentShader}else qt=b.vertexShader,X=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),_t=l.getFragmentShaderID(b);let rt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,le=!!b.map,Ht=!!b.matcap,ue=!!j,F=!!b.aoMap,Ve=!!b.lightMap,Bt=!!b.bumpMap,zt=!!b.normalMap,Et=!!b.displacementMap,ne=!!b.emissiveMap,St=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,J=b.iridescence>0,Y=b.sheen>0,yt=b.transmission>0,ot=x&&!!b.anisotropyMap,ut=z&&!!b.clearcoatMap,Vt=z&&!!b.clearcoatNormalMap,K=z&&!!b.clearcoatRoughnessMap,dt=J&&!!b.iridescenceMap,Tt=J&&!!b.iridescenceThicknessMap,At=Y&&!!b.sheenColorMap,ft=Y&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Nt=!!b.specularColorMap,Kt=!!b.specularIntensityMap,L=yt&&!!b.transmissionMap,st=yt&&!!b.thicknessMap,q=!!b.gradientMap,Z=!!b.alphaMap,ct=b.alphaTest>0,at=!!b.alphaHash,Dt=!!b.extensions,ce=Bn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Te={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:X,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:_t,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ji,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:Ht,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ve,bumpMap:Bt,normalMap:zt,displacementMap:f&&Et,emissiveMap:ne,normalMapObjectSpace:zt&&b.normalMapType===Gu,normalMapTangentSpace:zt&&b.normalMapType===Vu,metalnessMap:St,roughnessMap:A,anisotropy:x,anisotropyMap:ot,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:K,dispersion:$,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:At,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:Nt,specularIntensityMap:Kt,transmission:yt,transmissionMap:L,thicknessMap:st,gradientMap:q,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:at,combine:b.combine,mapUv:le&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:Ve&&v(b.lightMap.channel),bumpMapUv:Bt&&v(b.bumpMap.channel),normalMapUv:zt&&v(b.normalMap.channel),displacementMapUv:Et&&v(b.displacementMap.channel),emissiveMapUv:ne&&v(b.emissiveMap.channel),metalnessMapUv:St&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:ot&&v(b.anisotropyMap.channel),clearcoatMapUv:ut&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ft&&v(b.sheenRoughnessMap.channel),specularMapUv:kt&&v(b.specularMap.channel),specularColorMapUv:Nt&&v(b.specularColorMap.channel),specularIntensityMapUv:Kt&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:st&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(zt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(le||Z),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Pt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===$t,decodeVideoTextureEmissive:ne&&b.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(b.emissiveMap.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Me,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function d(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let w in b.defines)_.push(w),_.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(E(_,b),S(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function E(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let _=g[b.type],w;if(_){let I=on[_];w=Gn.clone(I.uniforms)}else w=b.uniforms;return w}function R(b,_){let w;for(let I=0,N=h.length;I<N;I++){let B=h[I];if(B.cacheKey===_){w=B,++w.usedTimes;break}}return w===void 0&&(w=new Bg(i,_,b,r),h.push(w)),w}function T(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Hg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Vg),n.length>1&&n.sort(f||zc),s.length>1&&s.sort(f||zc)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new kc,i.set(n,[o])):s>=r.length?(o=new kc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new xt};break;case"SpotLight":e={position:new D,direction:new D,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $g(i){let t=new Wg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ee,o=new ee;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,S=0,y=0,R=0,T=0,C=0;c.sort(Yg);for(let b=0,_=c.length;b<_;b++){let w=c[b],I=w.color,N=w.intensity,B=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],N);C++}else if(w.isDirectionalLight){let k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=w.shadow.matrix,E++}n.directional[p]=k,p++}else if(w.isSpotLight){let k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(I).multiplyScalar(N),k.distance=B,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[v]=k;let j=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,j.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,w.castShadow){let G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=W,y++}v++}else if(w.isRectAreaLight){let k=t.get(w);k.color.copy(I).multiplyScalar(N),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=k,m++}else if(w.isPointLight){let k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){let j=w.shadow,G=e.get(w);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=k,g++}else if(w.isHemisphereLight){let k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(N),k.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=C,n.version=Xg++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let S=c[d];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(S.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Hc(i){let t=new $g(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hc(i),t.set(s,[a])):r>=o.length?(a=new Hc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ha=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(i,t,e){let n=new Er,s=new ht,r=new ht,o=new de,a=new Ha({depthPacking:Hu}),l=new Va,c={},h=e.maxTextureSize,u={[zn]:Ne,[Ne]:zn,[Me]:Me},f=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Jg,fragmentShader:jg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let d=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=d!==vn&&this.type===vn,B=d===vn&&this.type!==vn;for(let W=0,k=T.length;W<k;W++){let j=T[W],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();if(s.multiply(et),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,G.mapSize.y=r.y)),G.map===null||N===!0||B===!0){let vt=this.type!==vn?{minFilter:ke,magFilter:ke}:{};G.map!==null&&G.map.dispose(),G.map=new Ie(s.x,s.y,vt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let it=G.getViewportCount();for(let vt=0;vt<it;vt++){let Pt=G.getViewport(vt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),I.viewport(o),G.updateMatrices(j,vt),n=G.getFrustum(),y(C,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&E(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,w)};function E(T,C){let P=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ie(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,p,v,null)}function S(T,C,P,b){let _=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=_.uuid,N=C.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let W=B[N];W===void 0&&(W=_.clone(),B[N]=W,C.addEventListener("dispose",R)),_=W}if(_.visible=C.visible,_.wireframe=C.wireframe,b===vn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let I=i.properties.get(_);I.light=P}return _}function y(T,C,P,b,_){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),B=T.material;if(Array.isArray(B)){let W=N.groups;for(let k=0,j=W.length;k<j;k++){let G=W[k],et=B[G.materialIndex];if(et&&et.visible){let it=S(T,et,b,_);T.onBeforeShadow(i,T,C,P,N,it,G),i.renderBufferDirect(P,null,N,it,T,G),T.onAfterShadow(i,T,C,P,N,it,G)}}}else if(B.visible){let W=S(T,B,b,_);T.onBeforeShadow(i,T,C,P,N,W,null),i.renderBufferDirect(P,null,N,W,T,null),T.onAfterShadow(i,T,C,P,N,W,null)}}let I=T.children;for(let N=0,B=I.length;N<B;N++)y(I[N],C,P,b,_)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let b=c[P],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Kg={[qo]:Xo,[Yo]:Jo,[$o]:jo,[Bi]:Zo,[Xo]:qo,[Jo]:Yo,[jo]:$o,[Zo]:Bi};function t0(i,t){function e(){let L=!1,st=new de,q=null,Z=new de(0,0,0,0);return{setMask:function(ct){q!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),q=ct)},setLocked:function(ct){L=ct},setClear:function(ct,at,Dt,ce,Te){Te===!0&&(ct*=ce,at*=ce,Dt*=ce),st.set(ct,at,Dt,ce),Z.equals(st)===!1&&(i.clearColor(ct,at,Dt,ce),Z.copy(st))},reset:function(){L=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,st=!1,q=null,Z=null,ct=null;return{setReversed:function(at){if(st!==at){let Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let ce=ct;ct=null,this.setClear(ce)}st=at},getReversed:function(){return st},setTest:function(at){at?rt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(at){q!==at&&!L&&(i.depthMask(at),q=at)},setFunc:function(at){if(st&&(at=Kg[at]),Z!==at){switch(at){case qo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){L=at},setClear:function(at){ct!==at&&(st&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){L=!1,q=null,Z=null,ct=null,st=!1}}}function s(){let L=!1,st=null,q=null,Z=null,ct=null,at=null,Dt=null,ce=null,Te=null;return{setTest:function(Zt){L||(Zt?rt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!L&&(i.stencilMask(Zt),st=Zt)},setFunc:function(Zt,Xe,hn){(q!==Zt||Z!==Xe||ct!==hn)&&(i.stencilFunc(Zt,Xe,hn),q=Zt,Z=Xe,ct=hn)},setOp:function(Zt,Xe,hn){(at!==Zt||Dt!==Xe||ce!==hn)&&(i.stencilOp(Zt,Xe,hn),at=Zt,Dt=Xe,ce=hn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){Te!==Zt&&(i.clearStencil(Zt),Te=Zt)},reset:function(){L=!1,st=null,q=null,Z=null,ct=null,at=null,Dt=null,ce=null,Te=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,y=null,R=null,T=null,C=new xt(0,0,0),P=0,b=!1,_=null,w=null,I=null,N=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=j>=2);let et=null,it={},vt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),qt=new de().fromArray(vt),X=new de().fromArray(Pt);function Q(L,st,q,Z){let ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<q;Dt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}let _t={};_t[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Bi),Bt(!1),zt(Wl),rt(i.CULL_FACE),F(cn);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Rt(L,st){return u[L]!==st?(i.bindFramebuffer(L,st),u[L]=st,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(L,st){let q=p,Z=!1;if(L){q=f.get(st),q===void 0&&(q=[],f.set(st,q));let ct=L.textures;if(q.length!==ct.length||q[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Dt=ct.length;at<Dt;at++)q[at]=i.COLOR_ATTACHMENT0+at;q.length=ct.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function le(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Ht={[Kn]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};Ht[bu]=i.MIN,Ht[Mu]=i.MAX;let ue={[Su]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Au]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,st,q,Z,ct,at,Dt,ce,Te,Zt){if(L===cn){v===!0&&(wt(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),L!==_u){if(L!==m||Zt!==b){if((d!==Kn||y!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,y=Kn),Zt)switch(L){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,R=null,T=null,C.set(0,0,0),P=0,m=L,b=Zt}return}ct=ct||st,at=at||q,Dt=Dt||Z,(st!==d||ct!==y)&&(i.blendEquationSeparate(Ht[st],Ht[ct]),d=st,y=ct),(q!==E||Z!==S||at!==R||Dt!==T)&&(i.blendFuncSeparate(ue[q],ue[Z],ue[at],ue[Dt]),E=q,S=Z,R=at,T=Dt),(ce.equals(C)===!1||Te!==P)&&(i.blendColor(ce.r,ce.g,ce.b,Te),C.copy(ce),P=Te),m=L,b=!1}function Ve(L,st){L.side===Me?wt(i.CULL_FACE):rt(i.CULL_FACE);let q=L.side===Ne;st&&(q=!q),Bt(q),L.blending===Ni&&L.transparent===!1?F(cn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function zt(L){L!==mu?(rt(i.CULL_FACE),L!==w&&(L===Wl?i.cullFace(i.BACK):L===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),w=L}function Et(L){L!==I&&(k&&i.lineWidth(L),I=L)}function ne(L,st,q){L?(rt(i.POLYGON_OFFSET_FILL),(N!==st||B!==q)&&(i.polygonOffset(st,q),N=st,B=q)):wt(i.POLYGON_OFFSET_FILL)}function St(L){L?rt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+W-1),et!==L&&(i.activeTexture(L),et=L)}function x(L,st,q){q===void 0&&(et===null?q=i.TEXTURE0+W-1:q=et);let Z=it[q];Z===void 0&&(Z={type:void 0,texture:void 0},it[q]=Z),(Z.type!==L||Z.texture!==st)&&(et!==q&&(i.activeTexture(q),et=q),i.bindTexture(L,st||_t[L]),Z.type=L,Z.texture=st)}function z(){let L=it[et];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),qt.copy(L))}function ft(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function kt(L,st){let q=c.get(st);q===void 0&&(q=new WeakMap,c.set(st,q));let Z=q.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(st,L.name),q.set(L,Z))}function Nt(L,st){let Z=c.get(st).get(L);l.get(st)!==Z&&(i.uniformBlockBinding(st,Z,L.__bindingPointIndex),l.set(st,Z))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,it={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,y=null,R=null,T=null,C=new xt(0,0,0),P=0,b=!1,_=null,w=null,I=null,N=null,B=null,qt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Rt,drawBuffers:Ot,useProgram:le,setBlending:F,setMaterial:Ve,setFlipSided:Bt,setCullFace:zt,setLineWidth:Et,setPolygonOffset:ne,setScissorTest:St,activeTexture:A,bindTexture:x,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:dt,texImage3D:Tt,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:Vt,texStorage3D:K,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:ft,reset:Kt}}function Vc(i,t,e,n){let s=e0(n);switch(e){case lh:return i*t;case hh:return i*t;case uh:return i*t*2;case vl:return i*t/s.components*s.byteLength;case _l:return i*t/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case xl:return i*t*2/s.components*s.byteLength;case ch:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(t,8)/4;case na:case sa:return Math.max(i,8)*Math.max(t,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e0(i){switch(i){case bn:case rh:return{byteLength:1,components:1};case xs:case oh:case nn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case ii:case pl:case ln:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):vr("canvas")}function v(A,x,z){let $=1,J=St(A);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Y=Math.floor($*J.width),yt=Math.floor($*J.height);u===void 0&&(u=g(Y,yt));let ot=x?g(Y,yt):u;return ot.width=Y,ot.height=yt,ot.getContext("2d").drawImage(A,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+yt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,x,z,$,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){let yt=J?kr:Ft.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=yt===$t?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(A,x){let z;return A?x===null||x===ii||x===Hi?z=i.DEPTH24_STENCIL8:x===ln?z=i.DEPTH32F_STENCIL8:x===xs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===Hi?z=i.DEPTH_COMPONENT24:x===ln?z=i.DEPTH_COMPONENT32F:x===xs&&(z=i.DEPTH_COMPONENT16),z}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){let x=A.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&h.delete(x)}function C(A){let x=A.target;x.removeEventListener("dispose",C),_(x)}function P(A){let x=n.get(A);if(x.__webglInit===void 0)return;let z=A.source,$=f.get(z);if($){let J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys($).length===0&&f.delete(z)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let z=A.source,$=f.get(z);delete $[x.__cacheKey],o.memory.textures--}function _(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=A.textures;for(let $=0,J=z.length;$<J;$++){let Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(A)}let w=0;function I(){w=0}function N(){let A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function B(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){let z=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,A,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function k(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function j(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function G(A,x){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Q(z,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let et={[ta]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},it={[ke]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},vt={[Wu]:i.NEVER,[Ju]:i.ALWAYS,[qu]:i.LESS,[ph]:i.LEQUAL,[Xu]:i.EQUAL,[Zu]:i.GEQUAL,[Yu]:i.GREATER,[$u]:i.NOTEQUAL};function Pt(A,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===fo||x.magFilter===Ns||x.magFilter===ni||x.minFilter===an||x.minFilter===fo||x.minFilter===Ns||x.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==Ns&&x.minFilter!==ni||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));let $=x.source,J=f.get($);J===void 0&&(J={},f.set($,J));let Y=B(x);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[Y].usedTimes++;let yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&b(x)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return z}function X(A,x,z){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let J=qt(A,x),Y=x.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+z);let yt=n.get(Y);if(Y.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);let ot=Ft.getPrimaries(Ft.workingColorSpace),ut=x.colorSpace===On?null:Ft.getPrimaries(x.colorSpace),Vt=x.colorSpace===On||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let K=v(x.image,!1,s.maxTextureSize);K=ne(x,K);let dt=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),At=S(x.internalFormat,dt,Tt,x.colorSpace,x.isVideoTexture);Pt($,x);let ft,kt=x.mipmaps,Nt=x.isVideoTexture!==!0,Kt=yt.__version===void 0||J===!0,L=Y.dataReady,st=R(x,K);if(x.isDepthTexture)At=y(x.format===Vi,x.type),Kt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,At,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,At,K.width,K.height,0,dt,Tt,null));else if(x.isDataTexture)if(kt.length>0){Nt&&Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,kt[0].width,kt[0].height);for(let q=0,Z=kt.length;q<Z;q++)ft=kt[q],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,q,At,ft.width,ft.height,0,dt,Tt,ft.data);x.generateMipmaps=!1}else Nt?(Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,K.width,K.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,dt,Tt,K.data)):e.texImage2D(i.TEXTURE_2D,0,At,K.width,K.height,0,dt,Tt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,kt[0].width,kt[0].height,K.depth);for(let q=0,Z=kt.length;q<Z;q++)if(ft=kt[q],x.format!==Ke)if(dt!==null)if(Nt){if(L)if(x.layerUpdates.size>0){let ct=Vc(ft.width,ft.height,x.format,x.type);for(let at of x.layerUpdates){let Dt=ft.data.subarray(at*ct/ft.data.BYTES_PER_ELEMENT,(at+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,at,ft.width,ft.height,1,dt,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,K.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,At,ft.width,ft.height,K.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ft.width,ft.height,K.depth,dt,Tt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,At,ft.width,ft.height,K.depth,0,dt,Tt,ft.data)}else{Nt&&Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,kt[0].width,kt[0].height);for(let q=0,Z=kt.length;q<Z;q++)ft=kt[q],x.format!==Ke?dt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,q,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft.width,ft.height,dt,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,q,At,ft.width,ft.height,0,dt,Tt,ft.data)}else if(x.isDataArrayTexture)if(Nt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,K.width,K.height,K.depth),L)if(x.layerUpdates.size>0){let q=Vc(K.width,K.height,x.format,x.type);for(let Z of x.layerUpdates){let ct=K.data.subarray(Z*q/K.data.BYTES_PER_ELEMENT,(Z+1)*q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,K.width,K.height,1,dt,Tt,ct)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,Tt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,K.width,K.height,K.depth,0,dt,Tt,K.data);else if(x.isData3DTexture)Nt?(Kt&&e.texStorage3D(i.TEXTURE_3D,st,At,K.width,K.height,K.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,Tt,K.data)):e.texImage3D(i.TEXTURE_3D,0,At,K.width,K.height,K.depth,0,dt,Tt,K.data);else if(x.isFramebufferTexture){if(Kt)if(Nt)e.texStorage2D(i.TEXTURE_2D,st,At,K.width,K.height);else{let q=K.width,Z=K.height;for(let ct=0;ct<st;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,q,Z,0,dt,Tt,null),q>>=1,Z>>=1}}else if(kt.length>0){if(Nt&&Kt){let q=St(kt[0]);e.texStorage2D(i.TEXTURE_2D,st,At,q.width,q.height)}for(let q=0,Z=kt.length;q<Z;q++)ft=kt[q],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,dt,Tt,ft):e.texImage2D(i.TEXTURE_2D,q,At,dt,Tt,ft);x.generateMipmaps=!1}else if(Nt){if(Kt){let q=St(K);e.texStorage2D(i.TEXTURE_2D,st,At,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Tt,K)}else e.texImage2D(i.TEXTURE_2D,0,At,dt,Tt,K);m(x)&&d($),yt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,z){if(x.image.length!==6)return;let $=qt(A,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let Y=n.get(J);if(J.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+z);let yt=Ft.getPrimaries(Ft.workingColorSpace),ot=x.colorSpace===On?null:Ft.getPrimaries(x.colorSpace),ut=x.colorSpace===On||yt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Vt=x.isCompressedTexture||x.image[0].isCompressedTexture,K=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Vt&&!K?dt[Z]=v(x.image[Z],!0,s.maxCubemapSize):dt[Z]=K?x.image[Z].image:x.image[Z],dt[Z]=ne(x,dt[Z]);let Tt=dt[0],At=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),kt=S(x.internalFormat,At,ft,x.colorSpace),Nt=x.isVideoTexture!==!0,Kt=Y.__version===void 0||$===!0,L=J.dataReady,st=R(x,Tt);Pt(i.TEXTURE_CUBE_MAP,x);let q;if(Vt){Nt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){q=dt[Z].mipmaps;for(let ct=0;ct<q.length;ct++){let at=q[ct];x.format!==Ke?At!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,at.width,at.height,At,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,kt,at.width,at.height,0,At,ft,at.data)}}}else{if(q=x.mipmaps,Nt&&Kt){q.length>0&&st++;let Z=St(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(K){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,At,ft,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,dt[Z].width,dt[Z].height,0,At,ft,dt[Z].data);for(let ct=0;ct<q.length;ct++){let Dt=q[ct].image[Z].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Dt.width,Dt.height,At,ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,Dt.width,Dt.height,0,At,ft,Dt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,ft,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,At,ft,dt[Z]);for(let ct=0;ct<q.length;ct++){let at=q[ct];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,At,ft,at.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,kt,At,ft,at.image[Z])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function _t(A,x,z,$,J,Y){let yt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),ut=S(z.internalFormat,yt,ot,z.colorSpace),Vt=n.get(x),K=n.get(z);if(K.__renderTarget=x,!Vt.__hasExternalTextures){let dt=Math.max(1,x.width>>Y),Tt=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ut,dt,Tt,x.depth,0,yt,ot,null):e.texImage2D(J,Y,ut,dt,Tt,0,yt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,K.__webglTexture,0,Bt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,K.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=y(x.stencilBuffer,J),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Bt(x);zt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{let $=x.textures;for(let J=0;J<$.length;J++){let Y=$[J],yt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),ut=S(Y.internalFormat,yt,ot,Y.colorSpace),Vt=Bt(x);z&&zt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ut,x.width,x.height):zt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let J=$.__webglTexture,Y=Bt(x);if(x.depthTexture.format===Ui)zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Vi)zt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(A){let x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[$],A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,z){let $=n.get(A);x!==void 0&&_t($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Rt(A)}function le(A){let x=A.texture,z=n.get(A),$=n.get(x);A.addEventListener("dispose",C);let J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)z.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)z.__webglFramebuffer[ot]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ot=0,ut=J.length;ot<ut;ot++){let Vt=n.get(J[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&zt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){let ut=J[ot];z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let Vt=r.convert(ut.format,ut.colorSpace),K=r.convert(ut.type),dt=S(ut.internalFormat,Vt,K,ut.colorSpace,A.isXRRenderTarget===!0),Tt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(z.__webglFramebuffer[ot][ut],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(z.__webglFramebuffer[ot],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,ut=J.length;ot<ut;ot++){let Vt=J[ot],K=n.get(Vt);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),Pt(i.TEXTURE_2D,Vt),_t(z.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Vt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Pt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(z.__webglFramebuffer[ut],A,x,i.COLOR_ATTACHMENT0,ot,ut);else _t(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&d(ot),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Ht(A){let x=A.textures;for(let z=0,$=x.length;z<$;z++){let J=x[z];if(m(J)){let Y=E(A),yt=n.get(J).__webglTexture;e.bindTexture(Y,yt),d(Y),e.unbindTexture()}}}let ue=[],F=[];function Ve(A){if(A.samples>0){if(zt(A)===!1){let x=A.textures,z=A.width,$=A.height,J=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);let Vt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,J,i.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);let Vt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function zt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ne(A,x){let z=A.colorSpace,$=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ji&&z!==On&&(Ft.getTransfer(z)===$t?($!==Ke||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function St(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=zt}function i0(i,t){function e(n,s=On){let r,o=Ft.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.BYTE;if(n===oh)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===Ke)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===uh)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===dh)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===aa)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===ya||n===ba||n===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===Sa||n===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===Ta||n===wa||n===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ga=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
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

}`,Wa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ae({vertexShader:r0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qa=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new Wa,m=e.getContextAttributes(),d=null,E=null,S=[],y=[],R=new ht,T=null,C=new De;C.viewport=new de;let P=new De;P.viewport=new de;let b=[C,P],_=new Ga,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new _s,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new _s,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new _s,S[X]=Q),Q.getHandSpace()};function N(X){let Q=y.indexOf(X.inputSource);if(Q===-1)return;let _t=S[Q];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let X=0;X<S.length;X++){let Q=y[X];Q!==null&&(y[X]=null,S[X].disconnect(Q))}w=null,I=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ie(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,_t=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Vi:Ui,_t=m.stencil?Hi:ii);let wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ie(f.textureWidth,f.textureHeight,{format:Ke,type:bn,depthTexture:new Ar(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(X){for(let Q=0;Q<X.removed.length;Q++){let _t=X.removed[Q],rt=y.indexOf(_t);rt>=0&&(y[rt]=null,S[rt].disconnect(_t))}for(let Q=0;Q<X.added.length;Q++){let _t=X.added[Q],rt=y.indexOf(_t);if(rt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=y.length){y.push(_t),rt=Rt;break}else if(y[Rt]===null){y[Rt]=_t,rt=Rt;break}if(rt===-1)break}let wt=S[rt];wt&&wt.connect(_t)}}let k=new D,j=new D;function G(X,Q,_t){k.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let rt=k.distanceTo(j),wt=Q.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),le=wt[14]/(wt[10]+1),Ht=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],F=(wt[8]-1)/wt[0],Ve=(Rt[8]+1)/Rt[0],Bt=Ot*F,zt=Ot*Ve,Et=rt/(-F+Ve),ne=Et*-F;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let St=Ot+Et,A=le+Et,x=Bt-ne,z=zt+(rt-ne),$=Ht*le/A*St,J=ue*le/A*St;X.projectionMatrix.makePerspective(x,z,$,J,St,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function et(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,_t=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),_.near=P.near=C.near=Q,_.far=P.far=C.far=_t,(w!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,I=_.far),C.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,_.layers.mask=C.layers.mask|P.layers.mask;let rt=X.parent,wt=_.cameras;et(_,rt);for(let Rt=0;Rt<wt.length;Rt++)et(wt[Rt],rt);wt.length===2?G(_,C,P):_.projectionMatrix.copy(C.projectionMatrix),it(X,_,rt)};function it(X,Q,_t){_t===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let vt=null;function Pt(X,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;_t.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Rt=0;Rt<_t.length;Rt++){let Ot=_t[Rt],le=null;if(p!==null)le=p.getViewport(Ot);else{let ue=u.getViewSubImage(f,Ot);le=ue.viewport,Rt===0&&(t.setRenderTargetTextures(E,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(E))}let Ht=b[Rt];Ht===void 0&&(Ht=new De,Ht.layers.enable(Rt),Ht.viewport=new de,b[Rt]=Ht),Ht.matrix.fromArray(Ot.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ot.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(le.x,le.y,le.width,le.height),Rt===0&&(_.matrix.copy(Ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Ht)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){let Rt=u.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let _t=0;_t<S.length;_t++){let rt=y[_t],wt=S[_t];rt!==null&&wt!==void 0&&wt.update(rt,Q,c||o)}vt&&vt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let qt=new xh;qt.setAnimationLoop(Pt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}},jn=new Tn,a0=new ee;function l0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_h(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),S=E.envMap,y=E.envMapRotation;S&&(m.envMap.value=S,jn.copy(y),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let y=S.program;n.uniformBlockBinding(E,y)}function c(E,S){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));let R=S.program;n.updateUBOMapping(E,R);let T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){let S=u();E.__bindingPointIndex=S;let y=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],y=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,C=y.length;T<C;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,_=P.length;b<_;b++){let w=P[b];if(p(w,T,b,R)===!0){let I=w.__offset,N=Array.isArray(w.value)?w.value:[w.value],B=0;for(let W=0;W<N.length;W++){let k=N[W],j=v(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+B,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,y,R){let T=E.value,C=S+"_"+y;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){let S=E.uniforms,y=0,R=16;for(let C=0,P=S.length;C<P;C++){let b=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,w=b.length;_<w;_++){let I=b[_],N=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=N.length;B<W;B++){let k=N[B],j=v(k),G=y%R,et=G%j.boundary,it=G+et;y+=et,it!==0&&R-it<j.storage&&(y+=R-it),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=j.storage}}}let T=y%R;return T>0&&(y+=R-T),E.__size=y,E.__cache={},this}function v(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Cr=class{constructor(t={}){let{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Bn,this.toneMappingExposure=1;let y=this,R=!1,T=0,C=0,P=null,b=-1,_=null,w=new de,I=new de,N=null,B=new xt(0),W=0,k=e.width,j=e.height,G=1,et=null,it=null,vt=new de(0,0,k,j),Pt=new de(0,0,k,j),qt=!1,X=new Er,Q=!1,_t=!1,rt=new ee,wt=new ee,Rt=new D,Ot=new de,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ue(){return P===null?G:1}let F=n;function Ve(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),F===null){let U="webgl2";if(F=Ve(U,M),F===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,zt,Et,ne,St,A,x,z,$,J,Y,yt,ot,ut,Vt,K,dt,Tt,At,ft,kt,Nt,Kt,L;function st(){Bt=new Tm(F),Bt.init(),Nt=new i0(F,Bt),zt=new xm(F,Bt,t,Nt),Et=new t0(F,Bt),zt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),ne=new Cm(F),St=new Hg,A=new n0(F,Bt,Et,St,zt,Nt,ne),x=new bm(y),z=new Em(y),$=new Nd(F),Kt=new vm(F,$),J=new wm(F,$,ne,Kt),Y=new Pm(F,J,$,ne),At=new Rm(F,zt,A),K=new ym(St),yt=new kg(y,x,z,Bt,zt,Kt,K),ot=new l0(y,St),ut=new Gg,Vt=new Zg(Bt),Tt=new gm(y,x,z,Et,Y,p,l),dt=new Qg(y,Y,zt),L=new c0(F,ne,zt,Et),ft=new _m(F,Bt,ne),kt=new Am(F,Bt,ne),ne.programs=yt.programs,y.capabilities=zt,y.extensions=Bt,y.properties=St,y.renderLists=ut,y.shadowMap=dt,y.state=Et,y.info=ne}st();let q=new qa(y,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(k,j,!1))},this.getSize=function(M){return M.set(k,j)},this.setSize=function(M,U,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,j=U,e.width=Math.floor(M*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(k*G,j*G).floor()},this.setDrawingBufferSize=function(M,U,H){k=M,j=U,G=H,e.width=Math.floor(M*H),e.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(vt)},this.setViewport=function(M,U,H,V){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,U,H,V),Et.viewport(w.copy(vt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Pt)},this.setScissor=function(M,U,H,V){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,U,H,V),Et.scissor(I.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){Et.setScissorTest(qt=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){it=M},this.getClearColor=function(M){return M.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let O=!1;if(P!==null){let tt=P.texture.format;O=tt===yl||tt===xl||tt===_l}if(O){let tt=P.texture.type,lt=tt===bn||tt===ii||tt===xs||tt===Hi||tt===ml||tt===gl,pt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Ct=pt.r,It=pt.g,gt=pt.b;lt?(g[0]=Ct,g[1]=It,g[2]=gt,g[3]=mt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ct,v[1]=It,v[2]=gt,v[3]=mt,F.clearBufferiv(F.COLOR,0,v))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Vt.dispose(),St.dispose(),x.dispose(),z.dispose(),Y.dispose(),Kt.dispose(),L.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ol),q.removeEventListener("sessionend",Fl),qn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=ne.autoReset,U=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,O=dt.type;st(),ne.autoReset=M,dt.enabled=U,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=O}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dt(M){let U=M.target;U.removeEventListener("dispose",Dt),ce(U)}function ce(M){Te(M),St.remove(M)}function Te(M){let U=St.get(M).programs;U!==void 0&&(U.forEach(function(H){yt.releaseProgram(H)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,O,tt){U===null&&(U=le);let lt=O.isMesh&&O.matrixWorld.determinant()<0,pt=ou(M,U,H,V,O);Et.setMaterial(V,lt);let mt=H.index,Ct=1;if(V.wireframe===!0){if(mt=J.getWireframeAttribute(H),mt===void 0)return;Ct=2}let It=H.drawRange,gt=H.attributes.position,Gt=It.start*Ct,te=(It.start+It.count)*Ct;tt!==null&&(Gt=Math.max(Gt,tt.start*Ct),te=Math.min(te,(tt.start+tt.count)*Ct)),mt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,mt.count)):gt!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,gt.count));let ie=te-Gt;if(ie<0||ie===1/0)return;Kt.setup(O,V,pt,H,mt);let Le,Xt=ft;if(mt!==null&&(Le=$.get(mt),Xt=kt,Xt.setIndex(Le)),O.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*ue()),Xt.setMode(F.LINES)):Xt.setMode(F.TRIANGLES);else if(O.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Et.setLineWidth(bt*ue()),O.isLineSegments?Xt.setMode(F.LINES):O.isLineLoop?Xt.setMode(F.LINE_LOOP):Xt.setMode(F.LINE_STRIP)}else O.isPoints?Xt.setMode(F.POINTS):O.isSprite&&Xt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let bt=O._multiDrawStarts,un=O._multiDrawCounts,Yt=O._multiDrawCount,Ye=mt?$.get(mt).bytesPerElement:1,fi=St.get(V).currentProgram.getUniforms();for(let Fe=0;Fe<Yt;Fe++)fi.setValue(F,"_gl_DrawID",Fe),Xt.render(bt[Fe]/Ye,un[Fe])}else if(O.isInstancedMesh)Xt.renderInstances(Gt,ie,O.count);else if(H.isInstancedBufferGeometry){let bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,un=Math.min(H.instanceCount,bt);Xt.renderInstances(Gt,ie,un)}else Xt.render(Gt,ie)};function Zt(M,U,H){M.transparent===!0&&M.side===Me&&M.forceSinglePass===!1?(M.side=Ne,M.needsUpdate=!0,Ls(M,U,H),M.side=zn,M.needsUpdate=!0,Ls(M,U,H),M.side=Me):Ls(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),d=Vt.get(H),d.init(U),S.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==H&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let V=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let tt=O.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let pt=tt[lt];Zt(pt,H,O),V.add(pt)}else Zt(tt,H,O),V.add(tt)}),S.pop(),d=null,V},this.compileAsync=function(M,U,H=null){let V=this.compile(M,U,H);return new Promise(O=>{function tt(){if(V.forEach(function(lt){St.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){O(M);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Xe=null;function hn(M){Xe&&Xe(M)}function Ol(){qn.stop()}function Fl(){qn.start()}let qn=new xh;qn.setAnimationLoop(hn),typeof self!="undefined"&&qn.setContext(self),this.setAnimationLoop=function(M){Xe=M,q.setAnimationLoop(M),M===null?qn.stop():qn.start()},q.addEventListener("sessionstart",Ol),q.addEventListener("sessionend",Fl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,P),d=Vt.get(M,S.length),d.init(U),S.push(d),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,Q=K.init(this.clippingPlanes,_t),m=ut.get(M,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&ho(tt,U,-1/0,y.sortObjects)}ho(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,it),Ht=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ht&&Tt.addToRenderList(m,M),this.info.render.frame++,Q===!0&&K.beginShadows();let H=d.state.shadowsArray;dt.render(H,M,U),Q===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){let tt=U.cameras;if(O.length>0)for(let lt=0,pt=tt.length;lt<pt;lt++){let mt=tt[lt];zl(V,O,M,mt)}Ht&&Tt.render(M);for(let lt=0,pt=tt.length;lt<pt;lt++){let mt=tt[lt];Bl(m,M,mt,mt.viewport)}}else O.length>0&&zl(V,O,M,U),Ht&&Tt.render(M),Bl(m,M,U);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,U),Kt.resetDefaultState(),b=-1,_=null,S.pop(),S.length>0?(d=S[S.length-1],Q===!0&&K.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ho(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){V&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(wt);let lt=Y.update(M),pt=M.material;pt.visible&&m.push(M,lt,pt,H,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){let lt=Y.update(M),pt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){let mt=lt.groups;for(let Ct=0,It=mt.length;Ct<It;Ct++){let gt=mt[Ct],Gt=pt[gt.materialIndex];Gt&&Gt.visible&&m.push(M,lt,Gt,H,Ot.z,gt)}}else pt.visible&&m.push(M,lt,pt,H,Ot.z,null)}}let tt=M.children;for(let lt=0,pt=tt.length;lt<pt;lt++)ho(tt[lt],U,H,V)}function Bl(M,U,H,V){let O=M.opaque,tt=M.transmissive,lt=M.transparent;d.setupLightsView(H),Q===!0&&K.setGlobalState(y.clippingPlanes,H),V&&Et.viewport(w.copy(V)),O.length>0&&Is(O,U,H),tt.length>0&&Is(tt,U,H),lt.length>0&&Is(lt,U,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function zl(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Ie(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?nn:bn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));let tt=d.state.transmissionRenderTarget[V.id],lt=V.viewport||w;tt.setSize(lt.z,lt.w);let pt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(B),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&Tt.render(H);let mt=y.toneMapping;y.toneMapping=Bn;let Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),Q===!0&&K.setGlobalState(y.clippingPlanes,V),Is(M,H,V),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let gt=0,Gt=U.length;gt<Gt;gt++){let te=U[gt],ie=te.object,Le=te.geometry,Xt=te.material,bt=te.group;if(Xt.side===Me&&ie.layers.test(V.layers)){let un=Xt.side;Xt.side=Ne,Xt.needsUpdate=!0,kl(ie,H,V,Le,Xt,bt),Xt.side=un,Xt.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}y.setRenderTarget(pt),y.setClearColor(B,W),Ct!==void 0&&(V.viewport=Ct),y.toneMapping=mt}function Is(M,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,tt=M.length;O<tt;O++){let lt=M[O],pt=lt.object,mt=lt.geometry,Ct=V===null?lt.material:V,It=lt.group;pt.layers.test(H.layers)&&kl(pt,U,H,mt,Ct,It)}}function kl(M,U,H,V,O,tt){M.onBeforeRender(y,U,H,V,O,tt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,U,H,V,M,tt),O.transparent===!0&&O.side===Me&&O.forceSinglePass===!1?(O.side=Ne,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,M,tt),O.side=zn,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,M,tt),O.side=Me):y.renderBufferDirect(H,U,V,O,M,tt),M.onAfterRender(y,U,H,V,O,tt)}function Ls(M,U,H){U.isScene!==!0&&(U=le);let V=St.get(M),O=d.state.lights,tt=d.state.shadowsArray,lt=O.state.version,pt=yt.getParameters(M,O.state,tt,U,H),mt=yt.getProgramCacheKey(pt),Ct=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?z:x).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",Dt),Ct=new Map,V.programs=Ct);let It=Ct.get(mt);if(It!==void 0){if(V.currentProgram===It&&V.lightsStateVersion===lt)return Vl(M,pt),It}else pt.uniforms=yt.getUniforms(M),M.onBeforeCompile(pt,y),It=yt.acquireProgram(pt,mt),Ct.set(mt,It),V.uniforms=pt.uniforms;let gt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(gt.clippingPlanes=K.uniform),Vl(M,pt),V.needsLights=lu(M),V.lightsStateVersion=lt,V.needsLights&&(gt.ambientLightColor.value=O.state.ambient,gt.lightProbe.value=O.state.probe,gt.directionalLights.value=O.state.directional,gt.directionalLightShadows.value=O.state.directionalShadow,gt.spotLights.value=O.state.spot,gt.spotLightShadows.value=O.state.spotShadow,gt.rectAreaLights.value=O.state.rectArea,gt.ltc_1.value=O.state.rectAreaLTC1,gt.ltc_2.value=O.state.rectAreaLTC2,gt.pointLights.value=O.state.point,gt.pointLightShadows.value=O.state.pointShadow,gt.hemisphereLights.value=O.state.hemi,gt.directionalShadowMap.value=O.state.directionalShadowMap,gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,gt.spotShadowMap.value=O.state.spotShadowMap,gt.spotLightMatrix.value=O.state.spotLightMatrix,gt.spotLightMap.value=O.state.spotLightMap,gt.pointShadowMap.value=O.state.pointShadowMap,gt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=It,V.uniformsList=null,It}function Hl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Fi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Vl(M,U){let H=St.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ou(M,U,H,V,O){U.isScene!==!0&&(U=le),A.resetTextureUnits();let tt=U.fog,lt=V.isMeshStandardMaterial?U.environment:null,pt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ji,mt=(V.isMeshStandardMaterial?z:x).get(V.envMap||lt),Ct=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),gt=!!H.morphAttributes.position,Gt=!!H.morphAttributes.normal,te=!!H.morphAttributes.color,ie=Bn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ie=y.toneMapping);let Le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=Le!==void 0?Le.length:0,bt=St.get(V),un=d.state.lights;if(Q===!0&&(_t===!0||M!==_)){let Ge=M===_&&V.id===b;K.setState(V,M,Ge)}let Yt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==un.state.version||bt.outputColorSpace!==pt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==mt||V.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==K.numPlanes||bt.numIntersection!==K.numIntersection)||bt.vertexAlphas!==Ct||bt.vertexTangents!==It||bt.morphTargets!==gt||bt.morphNormals!==Gt||bt.morphColors!==te||bt.toneMapping!==ie||bt.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,bt.__version=V.version);let Ye=bt.currentProgram;Yt===!0&&(Ye=Ls(V,U,O));let fi=!1,Fe=!1,ns=!1,se=Ye.getUniforms(),rn=bt.uniforms;if(Et.useProgram(Ye.program)&&(fi=!0,Fe=!0,ns=!0),V.id!==b&&(b=V.id,Fe=!0),fi||_!==M){Et.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),md(rt),gd(rt),se.setValue(F,"projectionMatrix",rt)):se.setValue(F,"projectionMatrix",M.projectionMatrix),se.setValue(F,"viewMatrix",M.matrixWorldInverse);let Cn=se.map.cameraPosition;Cn!==void 0&&Cn.setValue(F,Rt.setFromMatrixPosition(M.matrixWorld)),zt.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&se.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Fe=!0,ns=!0)}if(O.isSkinnedMesh){se.setOptional(F,O,"bindMatrix"),se.setOptional(F,O,"bindMatrixInverse");let Ge=O.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),se.setValue(F,"boneTexture",Ge.boneTexture,A))}O.isBatchedMesh&&(se.setOptional(F,O,"batchingTexture"),se.setValue(F,"batchingTexture",O._matricesTexture,A),se.setOptional(F,O,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",O._indirectTexture,A),se.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",O._colorsTexture,A));let is=H.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&At.update(O,H,Ye),(Fe||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,se.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=mt,rn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Fe&&(se.setValue(F,"toneMappingExposure",y.toneMappingExposure),bt.needsLights&&au(rn,ns),tt&&V.fog===!0&&ot.refreshFogUniforms(rn,tt),ot.refreshMaterialUniforms(rn,V,G,j,d.state.transmissionRenderTarget[M.id]),Fi.upload(F,Hl(bt),rn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fi.upload(F,Hl(bt),rn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&se.setValue(F,"center",O.center),se.setValue(F,"modelViewMatrix",O.modelViewMatrix),se.setValue(F,"normalMatrix",O.normalMatrix),se.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ge=V.uniformsGroups;for(let Cn=0,Rn=Ge.length;Cn<Rn;Cn++){let Gl=Ge[Cn];L.update(Gl,Ye),L.bind(Gl,Ye)}}return Ye}function au(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function lu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,H){St.get(M.texture).__webglTexture=U,St.get(M.depthTexture).__webglTexture=H;let V=St.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let H=St.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){P=M,T=U,C=H;let V=!0,O=null,tt=!1,lt=!1;if(M){let mt=St.get(M);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(mt.__hasExternalTextures)A.rebindTextures(M,St.get(M.texture).__webglTexture,St.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let gt=M.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&St.has(gt)&&(M.width!==gt.image.width||M.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let It=St.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[U])?O=It[U][H]:O=It[U],tt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?O=St.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[H]:O=It,w.copy(M.viewport),I.copy(M.scissor),N=M.scissorTest}else w.copy(vt).multiplyScalar(G).floor(),I.copy(Pt).multiplyScalar(G).floor(),N=qt;if(Et.bindFramebuffer(F.FRAMEBUFFER,O)&&V&&Et.drawBuffers(M,O),Et.viewport(w),Et.scissor(I),Et.setScissorTest(N),tt){let mt=St.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,H)}else if(lt){let mt=St.get(M.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,H||0,Ct)}b=-1},this.readRenderTargetPixels=function(M,U,H,V,O,tt,lt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Et.bindFramebuffer(F.FRAMEBUFFER,pt);try{let mt=M.texture,Ct=mt.format,It=mt.type;if(!zt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-O&&F.readPixels(U,H,V,O,Nt.convert(Ct),Nt.convert(It),tt)}finally{let mt=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,O,tt,lt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){let mt=M.texture,Ct=mt.format,It=mt.type;if(!zt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-O){Et.bindFramebuffer(F.FRAMEBUFFER,pt);let gt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,H,V,O,Nt.convert(Ct),Nt.convert(It),0);let Gt=P!==null?St.get(P).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Gt);let te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pd(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,gt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(gt),F.deleteSync(te),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let V=Math.pow(2,-H),O=Math.floor(M.image.width*V),tt=Math.floor(M.image.height*V),lt=U!==null?U.x:0,pt=U!==null?U.y:0;A.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,lt,pt,O,tt),Et.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,V=null,O=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let tt,lt,pt,mt,Ct,It,gt,Gt,te,ie=M.isCompressedTexture?M.mipmaps[O]:M.image;H!==null?(tt=H.max.x-H.min.x,lt=H.max.y-H.min.y,pt=H.isBox3?H.max.z-H.min.z:1,mt=H.min.x,Ct=H.min.y,It=H.isBox3?H.min.z:0):(tt=ie.width,lt=ie.height,pt=ie.depth||1,mt=0,Ct=0,It=0),V!==null?(gt=V.x,Gt=V.y,te=V.z):(gt=0,Gt=0,te=0);let Le=Nt.convert(U.format),Xt=Nt.convert(U.type),bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let un=F.getParameter(F.UNPACK_ROW_LENGTH),Yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ye=F.getParameter(F.UNPACK_SKIP_PIXELS),fi=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,It);let ns=M.isDataArrayTexture||M.isData3DTexture,se=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let rn=St.get(M),is=St.get(U),Ge=St.get(rn.__renderTarget),Cn=St.get(is.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<pt;Rn++)ns&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(M).__webglTexture,O,It+Rn),M.isDepthTexture?(se&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(U).__webglTexture,O,te+Rn),F.blitFramebuffer(mt,Ct,tt,lt,gt,Gt,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):se?F.copyTexSubImage3D(bt,O,gt,Gt,te+Rn,mt,Ct,tt,lt):F.copyTexSubImage2D(bt,O,gt,Gt,te+Rn,mt,Ct,tt,lt);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else se?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,Xt,ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,ie.data):F.texSubImage3D(bt,O,gt,Gt,te,tt,lt,pt,Le,Xt,ie):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,gt,Gt,tt,lt,Le,Xt,ie.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,gt,Gt,ie.width,ie.height,Le,ie.data):F.texSubImage2D(F.TEXTURE_2D,O,gt,Gt,tt,lt,Le,Xt,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,un),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,fi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),O===0&&U.generateMipmaps&&F.generateMipmap(bt),Et.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,O=0){return M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],O=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,O)},this.initRenderTarget=function(M){St.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Et.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,Et.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ft._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ft._getUnpackColorSpace()}};var Rr=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Re=new D,Pr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hn=class extends wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ci,ls=new D,Ri=new D,Pi=new D,Di=new ht,cs=new ht,Eh=new ee,er=new D,hs=new D,nr=new D,Gc=new ht,Ho=new ht,Wc=new ht,si=class extends ve{constructor(t=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xa(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Pr(n,3,0,!1)),Ci.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Eh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Pi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ir(er.set(-.5,-.5,0),Pi,o,Ri,s,r),ir(hs.set(.5,-.5,0),Pi,o,Ri,s,r),ir(nr.set(.5,.5,0),Pi,o,Ri,s,r),Gc.set(0,0),Ho.set(1,0),Wc.set(1,1);let a=t.ray.intersectTriangle(er,hs,nr,!1,ls);if(a===null&&(ir(hs.set(-.5,.5,0),Pi,o,Ri,s,r),Ho.set(0,1),a=t.ray.intersectTriangle(er,nr,hs,!1,ls),a===null))return;let l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:Fn.getInterpolation(ls,er,hs,nr,Gc,Ho,Wc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ir(i,t,e,n,s,r){Di.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cs.x=r*Di.x-s*Di.y,cs.y=s*Di.x+r*Di.y):cs.copy(Di),i.copy(t),i.x+=cs.x,i.y+=cs.y,i.applyMatrix4(Eh)}var Ya=class extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,h=ke,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ii=new ee,qc=new ee,sr=[],Xc=new Sn,h0=new ee,us=new re,ds=new En,oi=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),Xc.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Xc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),ds.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),qc.multiplyMatrices(n,Ii),us.matrixWorld=qc,us.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){let l=sr[o];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,vl,ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wi=class extends wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new D,Ir=new D,Yc=new ee,fs=new kn,rr=new En,Vo=new D,$c=new D,$a=class extends ve{constructor(t=new fe,e=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ir);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Yc.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Yc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=h.getX(v),E=h.getX(v+1),S=or(this,t,fs,l,d,E);S&&e.push(S)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=or(this,t,fs,l,v,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){let d=or(this,t,fs,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){let v=or(this,t,fs,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function or(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ir,Vo,$c)>n)return;Vo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vo);if(!(l<t.near||l>t.far))return{distance:l,point:$c.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Zc=new D,Jc=new D,Es=class extends $a{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zc.fromBufferAttribute(e,s),Jc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zc.distanceTo(Jc);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ts=class extends wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jc=new ee,Za=new kn,ar=new En,lr=new D,Lr=class extends ve{constructor(t=new fe,e=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;jc.copy(s).invert(),Za.copy(t.ray).applyMatrix4(jc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);lr.fromBufferAttribute(u,m),Qc(lr,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)lr.fromBufferAttribute(u,g),Qc(lr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qc(i,t,e,n,s,r,o){let a=Za.distanceSqToPoint(i);if(a<e){let l=new D;Za.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function E(){let y=new D,R=new D,T=0,C=(e-t)/n;for(let P=0;P<=r;P++){let b=[],_=P/r,w=_*(e-t)+t;for(let I=0;I<=s;I++){let N=I/s,B=N*l+a,W=Math.sin(B),k=Math.cos(B);R.x=w*W,R.y=-_*n+m,R.z=w*k,u.push(R.x,R.y,R.z),y.set(W,C,k).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-_),b.push(g++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let _=v[b][P],w=v[b+1][P],I=v[b+1][P+1],N=v[b][P+1];(t>0||b!==0)&&(h.push(_,w,N),T+=3),(e>0||b!==r-1)&&(h.push(w,I,N),T+=3)}c.addGroup(d,T,0),d+=T}function S(y){let R=g,T=new ht,C=new D,P=0,b=y===!0?t:e,_=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;let w=g;for(let I=0;I<=s;I++){let B=I/s*l+a,W=Math.cos(B),k=Math.sin(B);C.x=b*k,C.y=m*_,C.z=b*W,u.push(C.x,C.y,C.z),f.push(0,_,0),T.x=W*.5+.5,T.y=k*.5*_+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){let N=R+I,B=w+I;y===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}c.addGroup(d,P,y===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nr=class i extends qi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let S=new D,y=new D,R=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],y),p(e[T+2],R),l(S,y,R,E)}function l(E,S,y,R){let T=R+1,C=[];for(let P=0;P<=T;P++){C[P]=[];let b=E.clone().lerp(y,P/T),_=S.clone().lerp(y,P/T),w=T-P;for(let I=0;I<=w;I++)I===0&&P===T?C[P][I]=b:C[P][I]=b.clone().lerp(_,I/w)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){let _=Math.floor(b/2);b%2===0?(f(C[P][_+1]),f(C[P+1][_]),f(C[P][_])):(f(C[P][_+1]),f(C[P+1][_+1]),f(C[P+1][_]))}}function c(E){let S=new D;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(E),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let E=new D;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let y=m(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;o.push(y,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let S=o[E+0],y=o[E+2],R=o[E+4],T=Math.max(S,y,R),C=Math.min(S,y,R);T>.9&&C<.1&&(S<.2&&(o[E+0]+=1),y<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,S){let y=E*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){let E=new D,S=new D,y=new D,R=new D,T=new ht,C=new ht,P=new ht;for(let b=0,_=0;b<r.length;b+=9,_+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(o[_+0],o[_+1]),C.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),R.copy(E).add(S).add(y).divideScalar(3);let w=m(R);v(T,_+0,E,w),v(C,_+2,S,w),v(P,_+4,y,w)}}function v(E,S,y,R){R<0&&E.x===1&&(o[S]=E.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xi=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vn=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new D,g=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let E=d+m,S=E,y=E+n+1,R=E+n+2,T=E+1;a.push(S,y,T),a.push(y,R,T)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Yi=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,f=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],S=d/n,y=0;d===0&&o===0?y=.5/e:d===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-S),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let S=h[d][E+1],y=h[d][E],R=h[d+1][E],T=h[d+1][E+1];(d!==0||o>0)&&p.push(S,y,T),(d!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ur=class extends ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}};function cr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function u0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=t,a=2*e-n;break;case Zl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:o=t,l=2*n-e;break;case Zl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let R=0;R!==a;++R)r[R]=d*o[h+R]+E*o[c+R]+S*o[l+R]+y*o[u+R];return r}},Qa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ka=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&u0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Ca;var ai=class extends en{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=mr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends en{};tl.prototype.ValueTypeName="color";var el=class extends en{};el.prototype.ValueTypeName="number";var nl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Or=class extends en{InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=mr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends en{};il.prototype.ValueTypeName="vector";var sl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},d0=new sl,rl=class{constructor(t){this.manager=t!==void 0?t:d0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Kc(){return performance.now()}var Sl="\\[\\]\\.:\\/",f0=new RegExp("["+Sl+"]","g"),El="[^"+Sl+"]",p0="[^"+Sl.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",El),g0=/(WCOD+)?/.source.replace("WCOD",p0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),x0=new RegExp("^"+m0+g0+v0+_0+"$"),y0=["material","materials","bones","map"],ol=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=ol;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);var th=new ee,Fr=class{constructor(t,e,n=0,s=1/0){this.ray=new kn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(eh),n}};function eh(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)al(r[o],t,e,!0)}}var ws=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Br=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);var Th={type:"change"},wl={type:"start"},Ah={type:"end"},Vr=new kn,wh=new je,b0=Math.cos(70*mh.DEG2RAD),ye=new D,Oe=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6,Gr=class extends Br{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new tn,this._lastTargetPosition=new D,this._quat=new tn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new D,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new D,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S0.bind(this),this._onPointerDown=M0.bind(this),this._onPointerUp=E0.bind(this),this._onContextMenu=D0.bind(this),this._onMouseWheel=A0.bind(this),this._onKeyDown=C0.bind(this),this._onTouchStart=R0.bind(this),this._onTouchMove=P0.bind(this),this._onMouseDown=T0.bind(this),this._onMouseMove=w0.bind(this),this._interceptControlDown=I0.bind(this),this._interceptControlUp=L0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=Qt.NONE}update(t=null){let e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ye.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<b0?this.object.lookAt(this.target):(wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(wh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function M0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function S0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ah),this.state=Qt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function T0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(wl)}function w0(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function A0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ah))}function C0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function R0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(wl)}function P0(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function D0(i){this.enabled!==!1&&i.preventDefault()}function I0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function L0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var He=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},N0=new Ss(-1,1,1,-1,0,1),Al=class extends fe{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}},U0=new Al,Wn=class{constructor(t){this._mesh=new re(U0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var qr=class extends He{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gn.clone(t.uniforms),this.material=new ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Rs=class extends He{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xr=class extends He{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Yr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Ie(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qr(Wr),this.copyPass.material.blending=cn,this.clock=new Zi}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rs!==void 0&&(o instanceof Rs?n=!0:o instanceof Xr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $r=class extends He{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ch={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ki=class i extends He{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ie(r,o,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ie(r,o,{type:nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ie(r,o,{type:nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Ch;this.highPassUniforms=Gn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wr;this.copyUniforms=Gn.clone(h.uniforms),this.blendMaterial=new ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:he,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new Ee,this.fsQuad=new Wn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ki.BlurDirectionX=new ht(1,0);Ki.BlurDirectionY=new ht(0,1);var Rh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zr=class extends He{constructor(){super();let t=Rh;this.uniforms=Gn.clone(t.uniforms),this.material=new Ur({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===As?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var O0=new Set(["project","projects","\u043F\u0440\u043E\u0435\u043A\u0442","\u043F\u0440\u043E\u0435\u043A\u0442\u044B"]),F0=new Set(["project","projects","\u043F\u0440\u043E\u0435\u043A\u0442","\u043F\u0440\u043E\u0435\u043A\u0442\u044B"]);function Cl(i){let t=0;for(let e=0;e<i.length;e++)t=t*31+i.charCodeAt(e)|0;return(t>>>0)%360/360}function Jr(i,t=.82,e=.62){let n=t*Math.min(e,1-e),s=l=>{let c=(l+i*12)%12;return e-n*Math.max(-1,Math.min(c-3,9-c,1))},r=Math.round(s(0)*255),o=Math.round(s(8)*255),a=Math.round(s(4)*255);return r<<16|o<<8|a}function B0(i){let t=i.split("/");return t.length>1?t[0]:""}function jr(i,t){if(Array.isArray(t))for(let e of t)typeof e=="string"&&i.add(e.replace(/^#/,"").toLowerCase());else if(typeof t=="string")for(let e of t.split(/[,\s]+/))e&&i.add(e.replace(/^#/,"").toLowerCase())}function Ph(i,t){var o,a,l,c,h;if(t.path.toLowerCase().split("/").slice(0,-1).some(u=>O0.has(u)))return!0;let n=i.metadataCache.getFileCache(t),s=new Set;if(n!=null&&n.tags)for(let u of n.tags)s.add(u.tag.replace(/^#/,"").toLowerCase());jr(s,(o=n==null?void 0:n.frontmatter)==null?void 0:o.tags),jr(s,(a=n==null?void 0:n.frontmatter)==null?void 0:a.tag);for(let u of s)if(F0.has(u.split("/")[0]))return!0;let r=(h=(l=n==null?void 0:n.frontmatter)==null?void 0:l.type)!=null?h:(c=n==null?void 0:n.frontmatter)==null?void 0:c.kind;return typeof r=="string"&&r.toLowerCase()==="project"}function Qr(i,t,e=!0){var T,C,P,b,_;let n=i.vault.getMarkdownFiles(),s=i.metadataCache.resolvedLinks,r=0,o=new Set,a=new Map;for(let w of n){Ph(i,w)&&r++;let I=i.metadataCache.getFileCache(w),N=new Set;if(I!=null&&I.tags)for(let B of I.tags)N.add(B.tag.replace(/^#/,"").toLowerCase());jr(N,(T=I==null?void 0:I.frontmatter)==null?void 0:T.tags),jr(N,(C=I==null?void 0:I.frontmatter)==null?void 0:C.tag);for(let B of N){o.add(B);let W=a.get(B);W||(W=[],a.set(B,W)),W.push(w.path)}}let l=new Map,c=0;for(let[w,I]of Object.entries(s))for(let[N,B]of Object.entries(I))l.set(w,((P=l.get(w))!=null?P:0)+B),l.set(N,((b=l.get(N))!=null?b:0)+B),c++;let h=[...n].sort((w,I)=>{var W,k;let N=(W=l.get(w.path))!=null?W:0,B=(k=l.get(I.path))!=null?k:0;return B!==N?B-N:I.stat.mtime-w.stat.mtime}),u=Math.max(1,Math.floor(t)),f=h.slice(0,u),p=new Map;f.forEach((w,I)=>p.set(w.path,I));let g=n.reduce((w,I)=>Math.max(w,I.stat.mtime),0),v=f.map(w=>{var it;let I=B0(w.path),N=Ph(i,w),B=(it=l.get(w.path))!=null?it:0,W=Math.max(0,(g-w.stat.mtime)/864e5),k=Math.max(0,Math.min(1,1-W/45)),j=N?Jr(.085,.85,.6+.08*k):Jr(I?Cl(I):.56,.62+.14*k,.56+.12*k),G,et;return N?(G="gas_giant",et=.36+Math.min(.32,Math.log2(1+B)*.075)+k*.05):B>=10?(G="star",et=.42+Math.min(.42,Math.log2(1+B)*.085)+k*.06):B>=4?(G="gas_giant",et=.3+Math.min(.24,Math.log2(1+B)*.06)+k*.04):B>=2?(G="planet",et=.22+Math.min(.18,Math.log2(1+B)*.05)+k*.03):(G="asteroid",et=.14+k*.03),{path:w.path,title:w.basename,kind:N?"project":"note",celestialType:G,folder:I||"\xB7",degree:B,recency:k,color:j,size:et,x:0,y:0,z:0}}),m=e?[...a.entries()].filter(([w,I])=>I.length>=2).sort((w,I)=>I[1].length-w[1].length).slice(0,30):[];for(let[w,I]of m){let N=v.length,B=I.length;p.set(`tag:${w}`,N);let W=.48+Math.min(.75,Math.log2(1+B)*.14);v.push({path:`tag:${w}`,title:`#${w}`,kind:"tag",celestialType:"star",folder:"tags",degree:B,recency:.85,color:Jr(Cl(w),.95,.68),size:W,x:0,y:0,z:0})}let d=[],E=new Set;for(let[w,I]of Object.entries(s)){let N=p.get(w);if(N!==void 0)for(let B of Object.keys(I)){let W=p.get(B);if(W===void 0||W===N)continue;let k=N<W?`${N}:${W}`:`${W}:${N}`;E.has(k)||(E.add(k),d.push({source:N,target:W}))}}if(e)for(let[w,I]of m){let N=p.get(`tag:${w}`);if(N!==void 0)for(let B of I){let W=p.get(B);if(W===void 0)continue;let k=W<N?`${W}:${N}`:`${N}:${W}`;E.has(k)||(E.add(k),d.push({source:W,target:N}))}}let S=new Map;for(let w of v)w.folder!=="\xB7"&&S.set(w.folder,((_=S.get(w.folder))!=null?_:0)+1);let y=[...S.entries()].map(([w,I])=>({name:w,count:I,color:Jr(Cl(w),.7,.66)})).sort((w,I)=>I.count-w.count).slice(0,6),R=v.filter(w=>w.degree>0&&w.kind!=="tag").slice(0,8).map(w=>({title:w.title,path:w.path,degree:w.degree}));return{nodes:v,links:d,totalNotes:n.length,totalProjects:r,totalLinks:c,totalTags:o.size,folders:y,topHubs:R}}function z0(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Dh=(i,t,e)=>Math.imul(i,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791)|0;function Ih(i,t,e={}){var v,m,d,E,S;let n=i.length;if(n===0)return;let s=(v=e.iterations)!=null?v:n>600?70:100,r=(m=e.minRadius)!=null?m:12,o=(d=e.maxRadius)!=null?d:38,a=(E=e.cellSize)!=null?E:6,l=(S=e.activityBias)!=null?S:0,c=z0(523124044),h=Math.PI*(3-Math.sqrt(5));for(let y=0;y<n;y++){let R=i[y],T=1-2*((y+.5)/n),C=Math.sqrt(Math.max(0,1-T*T)),P=y*h,b=l>0?(1-(R.recency||0))*9*l:0,_=(R.kind==="project"?r:r+5)+b,w=Math.min(o-2,_+c()*Math.max(2,o-_-4));R.x=Math.cos(P)*C*w,R.y=T*w*.75,R.z=Math.sin(P)*C*w}let u=new Float32Array(n),f=new Float32Array(n),p=new Float32Array(n),g=new Map;for(let y=0;y<s;y++){g.clear();for(let R=0;R<n;R++){let T=i[R],C=Math.floor(T.x/a),P=Math.floor(T.y/a),b=Math.floor(T.z/a),_=Dh(C,P,b),w=g.get(_);w?w.push(R):g.set(_,[R])}for(let R=0;R<n;R++){let T=i[R],C=Math.floor(T.x/a),P=Math.floor(T.y/a),b=Math.floor(T.z/a);for(let _=-1;_<=1;_++)for(let w=-1;w<=1;w++)for(let I=-1;I<=1;I++){let N=g.get(Dh(C+_,P+w,b+I));if(N)for(let B=0;B<N.length;B++){let W=N[B];if(W<=R)continue;let k=i[W],j=k.x-T.x,G=k.y-T.y,et=k.z-T.z,it=j*j+G*G+et*et;if(it>a*a*4)continue;it<.05&&(j=c()-.5,G=c()-.5,et=c()-.5,it=.05);let vt=1/Math.sqrt(it),Pt=(9+4*(T.size+k.size))/(it+2),qt=j*vt*Pt,X=G*vt*Pt,Q=et*vt*Pt;u[R]-=qt,f[R]-=X,p[R]-=Q,u[W]+=qt,f[W]+=X,p[W]+=Q}}}for(let R of t){let T=i[R.source],C=i[R.target];if(!T||!C)continue;let P=C.x-T.x,b=C.y-T.y,_=C.z-T.z,w=Math.sqrt(P*P+b*b+_*_)||.001,I=5.5+T.size+C.size,N=(w-I)*.022,B=1/w,W=P*B*N,k=b*B*N,j=_*B*N;u[R.source]+=W,f[R.source]+=k,p[R.source]+=j,u[R.target]-=W,f[R.target]-=k,p[R.target]-=j}for(let R=0;R<n;R++){let T=i[R];if(u[R]*=.86,f[R]*=.86,p[R]*=.86,u[R]-=T.x*.0035,f[R]-=T.y*.0035,p[R]-=T.z*.0035,l>0){let b=1-(T.recency||0),_=r+4+b*(o-r-8),w=Math.sqrt(T.x*T.x+T.z*T.z)||.001,I=(_-w)*.006*l;u[R]+=T.x/w*I,p[R]+=T.z/w*I}let C=Math.sqrt(T.x*T.x+T.y*T.y+T.z*T.z)||.001;if(C>o){let b=(C-o)*.03;u[R]-=T.x/C*b,f[R]-=T.y/C*b,p[R]-=T.z/C*b}else if(C<r){let b=(r-C)*.03;u[R]+=T.x/C*b,f[R]+=T.y/C*b,p[R]+=T.z/C*b}let P=1.4;T.x+=Math.max(-P,Math.min(P,u[R])),T.y+=Math.max(-P,Math.min(P,f[R])),T.z+=Math.max(-P,Math.min(P,p[R]))}}for(let y of i){y.y*=.7;let R=Math.sqrt(y.x*y.x+y.z*y.z)||.001;if(R<r){let T=r/R;y.x*=T,y.z*=T}}}var k0=`
varying vec3 vPos;
void main() {
	vPos = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,H0=`
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
`,Rl={gargantua:{hot:[1,.92,.82],mid:[1,.55,.18],cold:[.55,.12,.05],haloColor:14674431,speedMult:1},pulsar:{hot:[.9,.96,1],mid:[.18,.65,1],cold:[.04,.18,.55],haloColor:9098495,speedMult:1.5},singularity:{hot:[.98,.92,1],mid:[.72,.22,.95],cold:[.28,.04,.45],haloColor:14325503,speedMult:.8}};function V0(){let t=createEl("canvas");t.width=256,t.height=256;let e=t.getContext("2d");if(e){let r=e.createRadialGradient(128,128,76.8,128,128,128);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.52,"rgba(170,210,255,0.04)"),r.addColorStop(.74,"rgba(255,244,224,0.65)"),r.addColorStop(.82,"rgba(140,190,255,0.22)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,256,256)}let n=new An(t);return n.colorSpace=me,n}function G0(){let t=createEl("canvas");t.width=64,t.height=64;let e=t.getContext("2d");if(e){let r=e.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.32,"rgba(255,255,255,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,64,64)}let n=new An(t);return n.colorSpace=me,n}function W0(i,t){let e=new Float32Array(i*3),n=new Float32Array(i*3),s=new xt;for(let l=0;l<i;l++){let c=150+Math.random()*170,h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);e[l*3]=c*Math.sin(u)*Math.cos(h),e[l*3+1]=c*Math.cos(u)*.8,e[l*3+2]=c*Math.sin(u)*Math.sin(h);let f=Math.random();f>.9?s.setHex(16767392):f>.76?s.setHex(11127039):s.setHex(16777215);let p=.45+Math.random()*.55;n[l*3]=s.r*p,n[l*3+1]=s.g*p,n[l*3+2]=s.b*p}let r=new fe;r.setAttribute("position",new ge(e,3)),r.setAttribute("color",new ge(n,3));let o=new Ts({size:2.4,sizeAttenuation:!1,map:t,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:he}),a=new Lr(r,o);return a.frustumCulled=!1,a}var Kr=class{constructor(t="gargantua"){this.group=new Se;this.materials=[];this.themeSpeedMult=1;let e=new Se;e.rotation.x=.1,e.rotation.z=.16,this.group.add(e);let r=this.createDisk(2.2,11.5,1,1);e.add(r);let o=this.createDisk(3,22,.22,.55);o.scale.setScalar(1.02),e.add(o),this.core=new re(new Yi(2,48,48),new Ee({color:0})),e.add(this.core),this.haloTexture=V0(),this.halo=new si(new Hn({map:this.haloTexture,color:14674431,transparent:!0,opacity:.75,depthWrite:!1,blending:he})),this.halo.scale.setScalar(6.8),e.add(this.halo),this.starsTexture=G0(),this.stars=W0(2600,this.starsTexture),this.group.add(this.stars),this.setTheme(t)}setTheme(t){let e=Object.prototype.hasOwnProperty.call(Rl,t)?t:"gargantua",n=Rl[e];this.themeSpeedMult=n.speedMult;for(let s of this.materials){let r=s.uniforms.uColorHot.value,o=s.uniforms.uColorMid.value,a=s.uniforms.uColorCold.value;r.setRGB(...n.hot),o.setRGB(...n.mid),a.setRGB(...n.cold)}this.halo.material.color.setHex(n.haloColor)}createDisk(t,e,n,s){let r=new Vn(t,e,320,8),o=Rl.gargantua,a=new ae({vertexShader:k0,fragmentShader:H0,uniforms:{uTime:{value:0},uSpeed:{value:s},uInner:{value:t},uOuter:{value:e},uAlpha:{value:n},uColorHot:{value:new xt(...o.hot)},uColorMid:{value:new xt(...o.mid)},uColorCold:{value:new xt(...o.cold)}},transparent:!0,depthWrite:!1,blending:he,side:Me});this.materials.push(a);let l=new re(r,a);return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,l}update(t,e=1){for(let s of this.materials)s.uniforms.uTime.value=t*this.themeSpeedMult*e;let n=1+Math.sin(t*.7)*.012;this.halo.scale.setScalar(6.8*n)}dispose(){this.group.traverse(t=>{let e=t;e.geometry&&e.geometry.dispose();let n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n&&n.dispose()}),this.haloTexture.dispose(),this.starsTexture.dispose()}};var Lh=`
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
`,Nh=`
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
`;var Uh=`
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
`,Oh=`
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
`;var q0=1.9,X0=.34,Y0=.35,to=class{constructor(t,e,n,s=!0){this.group=new Se;this.ringMesh=null;this.gasGiantIndices=[];this.dummy=new ve;this.ringDummy=new ve;this.hovered=-1;this.focalIndex=-1;this.fallingIndex=-1;this.folderFilter=null;this.highlightLines=null;this.orbitalMotion=!0;this.nodes=t,this.linkList=e,this.baseScale=n,this.orbitalMotion=s;let r=t.length;this.phases=new Float32Array(r),this.initialX=new Float32Array(r),this.initialY=new Float32Array(r),this.initialZ=new Float32Array(r),this.radii=new Float32Array(r),this.azimuths=new Float32Array(r),this.angSpeeds=new Float32Array(r),this.currentPositions=new Float32Array(r*3);for(let p=0;p<r;p++){this.phases[p]=Math.random()*Math.PI*2;let g=t[p];this.initialX[p]=g.x,this.initialY[p]=g.y,this.initialZ[p]=g.z;let v=Math.hypot(g.x,g.z);this.radii[p]=v,this.azimuths[p]=Math.atan2(g.z,g.x),this.angSpeeds[p]=.16/Math.pow(1+v/16,1.35),this.currentPositions[p*3]=g.x,this.currentPositions[p*3+1]=g.y,this.currentPositions[p*3+2]=g.z,g.celestialType==="gas_giant"&&this.gasGiantIndices.push(p)}let o=new Xi(1,4),a=new Float32Array(r),l=new Float32Array(r);for(let p=0;p<r;p++){let g=t[p].celestialType;a[p]=g==="star"?3:g==="gas_giant"?2:g==="planet"?1:0,l[p]=(p*137.5+42)%100}o.setAttribute("aCelestialType",new ri(a,1)),o.setAttribute("aSeed",new ri(l,1)),this.celestialMaterial=new ae({vertexShader:Lh,fragmentShader:Nh,uniforms:{uTime:{value:0}}}),this.mesh=new oi(o,this.celestialMaterial,Math.max(1,r)),this.mesh.instanceMatrix.setUsage(Cs),this.mesh.frustumCulled=!1,this.mesh.count=r;let c=new xt;for(let p=0;p<r;p++)c.setHex(t[p].color),t[p].celestialType==="star"&&c.multiplyScalar(1.25),this.mesh.setColorAt(p,c);if(this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.group.add(this.mesh),this.gasGiantIndices.length>0){let p=new Vn(1.3,2.3,48);p.rotateX(Math.PI/2);let g=new ae({vertexShader:Uh,fragmentShader:Oh,side:Me,transparent:!0,depthWrite:!1,blending:he});this.ringMesh=new oi(p,g,this.gasGiantIndices.length),this.ringMesh.instanceMatrix.setUsage(Cs),this.ringMesh.frustumCulled=!1,this.ringMesh.count=this.gasGiantIndices.length;let v=new xt;for(let m=0;m<this.gasGiantIndices.length;m++){let d=this.gasGiantIndices[m];v.setHex(t[d].color).offsetHSL(.04,.1,.05),this.ringMesh.setColorAt(m,v)}this.ringMesh.instanceColor&&(this.ringMesh.instanceColor.needsUpdate=!0),this.group.add(this.ringMesh)}let h=new Float32Array(e.length*6),u=new fe;u.setAttribute("position",new ge(h,3));let f=new Wi({color:7310847,transparent:!0,opacity:.12,depthWrite:!1,blending:he});this.edges=new Es(u,f),this.edges.frustumCulled=!1,this.group.add(this.edges),this.writeEdges()}writeEdges(){let t=this.edges.geometry.getAttribute("position"),e=t.array,n=this.currentPositions;for(let s=0;s<this.linkList.length;s++){let r=this.linkList[s],o=r.source*3,a=r.target*3,l=s*6;e[l]=n[o],e[l+1]=n[o+1],e[l+2]=n[o+2],e[l+3]=n[a],e[l+4]=n[a+1],e[l+5]=n[a+2]}t.needsUpdate=!0}setFocalNode(t){this.focalIndex=t}getFocalNode(){return this.focalIndex}setFallingNode(t){this.fallingIndex=t}getFallingNode(){return this.fallingIndex}localPosition(t,e){if(t<0||t>=this.nodes.length)return e.set(0,0,0);let n=t*3;return e.set(this.currentPositions[n],this.currentPositions[n+1],this.currentPositions[n+2])}nodeScaleAt(t,e){if(t===this.fallingIndex)return 1e-4;let n=this.nodes[t];if(!n)return .001;let s=n.size*this.baseScale;return this.folderFilter&&n.folder!==this.folderFilter&&(s*=X0),t===this.hovered&&(s*=q0),t===this.focalIndex&&(s*=1.4),n.celestialType==="star"&&(s*=1+.08*Math.sin(e*2.2+this.phases[t])),Math.max(.001,s)}update(t){this.celestialMaterial.uniforms.uTime.value=t;let e=this.nodes.length,n=this.currentPositions,s=0,r=0,o=0;for(let a=0;a<e;a++){let l=Math.sin(t*.55+this.phases[a])*Y0,c,h=this.initialY[a]+l,u;if(this.orbitalMotion){let f=this.azimuths[a]+this.angSpeeds[a]*t,p=this.radii[a];c=p*Math.cos(f),u=p*Math.sin(f)}else c=this.initialX[a],u=this.initialZ[a];n[a*3]=c,n[a*3+1]=h,n[a*3+2]=u,a===this.focalIndex&&(s=c,r=h,o=u)}if(this.focalIndex>=0)for(let a=0;a<e;a++)n[a*3]-=s,n[a*3+1]-=r,n[a*3+2]-=o;for(let a=0;a<e;a++){let l=a*3;this.dummy.position.set(n[l],n[l+1],n[l+2]),this.dummy.scale.setScalar(this.nodeScaleAt(a,t)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(a,this.dummy.matrix)}if(this.mesh.instanceMatrix.needsUpdate=!0,this.ringMesh&&this.gasGiantIndices.length>0){for(let a=0;a<this.gasGiantIndices.length;a++){let l=this.gasGiantIndices[a],c=l*3,h=this.nodeScaleAt(l,t);this.ringDummy.position.set(n[c],n[c+1],n[c+2]),this.ringDummy.scale.setScalar(h),this.ringDummy.rotation.set(.35,.2,.1),this.ringDummy.updateMatrix(),this.ringMesh.setMatrixAt(a,this.ringDummy.matrix)}this.ringMesh.instanceMatrix.needsUpdate=!0}(this.orbitalMotion||this.focalIndex>=0)&&this.writeEdges()}setHovered(t){t!==this.hovered&&(this.hovered=t,this.refreshHighlight())}getHovered(){return this.hovered}setFolderFilter(t){this.folderFilter=t}setNodeScale(t){this.baseScale=Math.max(.05,t)}refreshHighlight(){if(this.highlightLines&&(this.group.remove(this.highlightLines),this.highlightLines.geometry.dispose(),this.highlightLines.material.dispose(),this.highlightLines=null),this.hovered<0)return;let t=this.currentPositions,e=[],n=this.hovered*3,s=t[n],r=t[n+1],o=t[n+2];for(let c of this.linkList){let h=-1;if(c.source===this.hovered?h=c.target:c.target===this.hovered&&(h=c.source),h<0)continue;let u=h*3;e.push(s,r,o,t[u],t[u+1],t[u+2])}if(e.length===0)return;let a=new fe;a.setAttribute("position",new jt(e,3));let l=new Wi({color:11126015,transparent:!0,opacity:.65,depthWrite:!1,blending:he});this.highlightLines=new Es(a,l),this.highlightLines.frustumCulled=!1,this.group.add(this.highlightLines)}worldPosition(t,e,n){if(t<0||t>=this.nodes.length)return n.set(0,0,0);let s=t*3;return n.set(this.currentPositions[s],this.currentPositions[s+1],this.currentPositions[s+2]),n.applyMatrix4(this.group.matrixWorld)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.ringMesh&&(this.ringMesh.geometry.dispose(),this.ringMesh.material.dispose()),this.edges.geometry.dispose(),this.edges.material.dispose(),this.highlightLines&&(this.highlightLines.geometry.dispose(),this.highlightLines.material.dispose())}};var Pl=26,Fh=.42,$0=.012,Dl=new xt("#ffcf7a"),Z0=new xt("#fff2d0"),J0=new xt("#8f2a12"),Ps=null;function j0(){if(Ps)return Ps;let i=createEl("canvas");i.width=64,i.height=64;let t=i.getContext("2d");if(t){let e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,236,200,0.55)"),e.addColorStop(1,"rgba(255,180,90,0)"),t.fillStyle=e,t.fillRect(0,0,64,64)}return Ps=new An(i),Ps.colorSpace=me,Ps}var eo=class{constructor(t,e=.72){this.group=new Se;this.progress=0;this.sinceSpawn=0;this.trailIndex=0;this.sprites=[];this.ages=[];this.color=new xt;this.startColor=new xt;this.currentPos=new D;this.firedArrive=!1;this.duration=Math.max(.2,e),this.radius=Math.max(2.6,Math.hypot(t.position.x,t.position.z)),this.startY=t.position.y,this.theta=Math.atan2(t.position.z,t.position.x),this.color.setHex(t.color),this.startColor.setHex(t.color);let n=j0();for(let s=0;s<Pl;s++){let r=new si(new Hn({map:n,color:Dl,transparent:!0,opacity:0,blending:he,depthWrite:!1}));r.scale.setScalar(.001),this.sprites.push(r),this.ages.push(Fh),this.group.add(r)}this.head=new re(new Yi(.8,20,14),new Ee({color:Dl,transparent:!0})),this.head.position.copy(t.position),this.group.add(this.head),this.halo=new si(new Hn({map:n,color:Dl,transparent:!0,blending:he,depthWrite:!1})),this.halo.position.copy(t.position),this.group.add(this.halo),this.ring=new re(new Vn(1.6,2,64),new Ee({color:new xt("#ffe9c0"),transparent:!0,opacity:0,side:Me,blending:he,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.group.add(this.ring)}get bloomBoost(){return this.progress<.72?0:(this.progress-.72)/.28}get finished(){return this.progress>=1}takeArrive(){return this.firedArrive||this.progress<.86?!1:(this.firedArrive=!0,!0)}update(t){if(this.finished)return;let e=Math.min(t,.08);this.progress=Math.min(1,this.progress+e/this.duration);let n=this.progress,s=2.4+(this.radius-2.4)*Math.pow(1-n,1.45),r=900/(s*s)*(e/this.duration);this.theta+=Math.min(r,1.2);let o=this.startY*Math.pow(1-n,1.9),a=this.currentPos.set(s*Math.cos(this.theta),o,s*Math.sin(this.theta));this.color.copy(this.startColor).lerp(Z0,Math.min(1,n*2.2)),n>.55&&this.color.lerp(J0,(n-.55)/.45*.75),this.head.position.copy(a),this.head.rotation.y=-Math.atan2(a.z,a.x)+Math.PI/2,this.head.scale.set(1+6*Math.pow(n,3),Math.max(.35,1-.4*n),Math.max(.35,1-.4*n)),this.head.material.color.copy(this.color),this.halo.position.copy(a);let l=4.2+2.6*n;if(this.halo.scale.set(l,l,1),this.halo.material.color.copy(this.color),this.halo.material.opacity=.9,this.sinceSpawn+=e/this.duration,this.sinceSpawn>=$0){this.sinceSpawn=0;let h=this.trailIndex;this.trailIndex=(this.trailIndex+1)%Pl,this.sprites[h].position.copy(a),this.sprites[h].material.color.copy(this.color),this.ages[h]=0}for(let h=0;h<Pl;h++){this.ages[h]+=e;let u=1-this.ages[h]/Fh;if(u<=0){this.sprites[h].material.opacity=0,this.sprites[h].scale.setScalar(.001);continue}this.sprites[h].material.opacity=.75*u,this.sprites[h].scale.setScalar(1.4+2.6*(1-u))}let c=this.ring.material;if(n>.72){let h=(n-.72)/.28;this.ring.visible=!0,this.ring.scale.setScalar(1+7*h),c.opacity=.8*(1-h)}else this.ring.visible=!1}dispose(){this.head.geometry.dispose(),this.head.material.dispose(),this.halo.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose();for(let t of this.sprites)t.material.dispose()}};var Q0="#b78bff",K0="#eaf2ff",tv="#ffd9a0",Ds=null;function ev(){if(Ds)return Ds;let i=createEl("canvas");i.width=128,i.height=128;let t=i.getContext("2d");if(t){let e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(215,232,255,0.95)"),e.addColorStop(.4,"rgba(150,170,255,0.32)"),e.addColorStop(1,"rgba(90,60,180,0)"),t.fillStyle=e,t.fillRect(0,0,128,128)}return Ds=new An(i),Ds.colorSpace=me,Ds}var nv=new D(0,1,0),no=class{constructor(){this.group=new Se;this.halos=[];this.cores=[];this.dir=new D;this.feed=null;this.power=0;this.group.visible=!1;let t=new Ee({map:ev(),color:Q0,transparent:!0,opacity:.45,side:Me,blending:he,depthWrite:!1}),e=new Ee({color:K0,transparent:!0,opacity:.7,blending:he,depthWrite:!1});for(let n of[1,-1]){let s=new re(new Nr(3.2,30,28,1,!0),t);s.position.y=n*30/2,n<0&&(s.rotation.x=Math.PI),this.halos.push(s),this.group.add(s);let r=new re(new qi(.16,.16,26,12,1,!0),e);r.position.y=n*26/2,this.cores.push(r),this.group.add(r)}}setPower(t){this.power=Math.max(0,Math.min(1,t)),this.group.visible=this.power>.02;let e=.55+.45*this.power;for(let n of this.halos)n.scale.set(.6+.4*this.power,e,.6+.4*this.power);for(let n of this.cores)n.scale.set(1,e,1)}setFeed(t){if(!t||t.length()<.001){this.feed&&(this.group.remove(this.feed),this.feed.geometry.dispose(),this.feed.material.dispose(),this.feed=null);return}this.feed||(this.feed=new re(new qi(.07,.07,1,8,1,!0),new Ee({color:tv,transparent:!0,opacity:.32,blending:he,depthWrite:!1})),this.group.add(this.feed));let e=t.length();this.feed.position.copy(t).multiplyScalar(.5),this.feed.scale.set(1,e,1),this.feed.quaternion.setFromUnitVectors(nv,this.dir.copy(t).normalize())}update(t){if(!this.group.visible)return;let e=1+.05*Math.sin(t*1.7);for(let n of this.cores)n.scale.x=n.scale.z=e;this.feed&&(this.feed.material.opacity=.24+.12*this.power)}dispose(){for(let t of this.halos)t.geometry.dispose();for(let t of this.cores)t.geometry.dispose();this.halos.length&&this.halos[0].material.dispose(),this.cores.length&&this.cores[0].material.dispose(),this.feed&&(this.feed.geometry.dispose(),this.feed.material.dispose())}};var io=class{constructor(t,e=120){this.group=new Se;this.dummy=new ve;this.links=t,this.count=Math.min(e,Math.max(10,Math.floor(t.length*.4)));let n=new Xi(.18,1),s=new Ee({color:10209279,transparent:!0,opacity:.9,depthWrite:!1,blending:he});this.mesh=new oi(n,s,Math.max(1,this.count)),this.mesh.instanceMatrix.setUsage(Cs),this.mesh.frustumCulled=!1,this.mesh.count=this.links.length>0?this.count:0,this.pulses=new Array(this.count);let r=new xt;for(let o=0;o<this.count;o++){let a=this.links.length>0?Math.floor(Math.random()*this.links.length):0;this.pulses[o]={linkIndex:a,progress:Math.random(),speed:.35+Math.random()*.45,size:.8+Math.random()*.6,reverse:Math.random()>.5};let l=Math.random()>.3?.58+Math.random()*.08:.12+Math.random()*.05;r.setHSL(l,.9,.75),this.mesh.setColorAt(o,r)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.group.add(this.mesh)}update(t,e){var r,o,a,l,c,h;if(this.links.length===0||!this.mesh)return;let n=e.currentPositions,s=this.links.length;for(let u=0;u<this.count;u++){let f=this.pulses[u];f.progress+=f.speed*t,f.progress>=1&&(f.progress=0,f.linkIndex=Math.floor(Math.random()*s),f.speed=.35+Math.random()*.45,f.reverse=Math.random()>.5);let p=this.links[f.linkIndex];if(!p)continue;let g=(f.reverse?p.target:p.source)*3,v=(f.reverse?p.source:p.target)*3,m=(r=n[g])!=null?r:0,d=(o=n[g+1])!=null?o:0,E=(a=n[g+2])!=null?a:0,S=(l=n[v])!=null?l:0,y=(c=n[v+1])!=null?c:0,R=(h=n[v+2])!=null?h:0,T=f.progress,C=m+(S-m)*T,P=d+(y-d)*T,b=E+(R-E)*T,_=Math.sin(T*Math.PI),w=f.size*Math.max(.001,_);this.dummy.position.set(C,P,b),this.dummy.scale.setScalar(w),this.dummy.updateMatrix(),this.mesh.setMatrixAt(u,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};var ui=require("obsidian");var Qh=require("obsidian");var iv={locale:"en-US",ribbonOpen:"Note Galaxy: open the 3D graph",commandOpen:"Open 3D graph",commandOpenDashboard:"Open galaxy dashboard",commandRebuild:"Rebuild 3D graph",viewTitle:"Note Galaxy",dashboardTitle:"Galaxy Dashboard",greetingMorning:"Good morning",greetingDay:"Good afternoon",greetingEvening:"Good evening",greetingNight:"Good night",eyebrow:"NOTE GALAXY",statNotes:"notes",statProjects:"projects",statLinks:"links",statTags:"tags",sectionFolders:"Constellations",sectionRecent:"Recent",chipAll:"all",emptyRecent:"Nothing here yet \u2014 create your first note.",tabOverview:"Overview",tabHubs:"Hubs",tabRecent:"Recent",sectionHubs:"Major hubs",hint:"Drag to orbit \xB7 scroll to zoom \xB7 click a star to open a note",toolbarRebuild:"Rebuild graph",toolbarReset:"Reset view",toolbarDashboard:"Dashboard",actionMakeCenter:"Set as system center",actionResetCenter:"Reset galactic core",settingLanguage:"Language",settingLanguageDesc:"Interface language. \u201CAuto\u201D follows the Obsidian language.",languageAuto:"Auto",settingCoreTheme:"Celestial core",settingCoreThemeDesc:"Visual theme of the central black hole and accretion disk.",themeGargantua:"Gargantua (Amber)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularity (Ultraviolet)",settingName:"Name for the greeting",settingNameDesc:"Shown as \u201CGood evening, \u2026\u201D. Leave empty to show the greeting only.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Panel with greeting, stats and recent notes.",settingLabels:"Note labels",settingLabelsDesc:"Show titles of the most connected notes in space.",settingBloom:"Glow (bloom)",settingBloomDesc:"Strength of the halo around stars and the disk.",settingDisk:"Disk speed",settingDiskDesc:"How fast the accretion disk swirls.",settingStars:"Star size",settingStarsDesc:"Scale of note dots.",settingOrbit:"Galaxy rotation",settingOrbitDesc:"0 keeps the note cloud still.",settingMaxNodes:"Maximum notes",settingMaxNodesDesc:"How many of the most connected notes to render in 3D.",settingTransition:"Open-note animation",settingTransitionDesc:"The note spirals into the horizon as the file opens.",settingQuasar:"Quasar jets",settingQuasarDesc:"The most connected note powers jets above the black hole.",settingActivity:"Recent notes orbit closer",settingActivityDesc:"Freshly edited notes sit near the disk, stale ones drift outward.",settingAdaptive:"Adaptive quality",settingAdaptiveDesc:"Ease glow and detail automatically when frames drop.",settingIncludeTags:"Include tags as stars",settingIncludeTagsDesc:"Render popular tags as shining stellar bodies attracting notes.",settingOrbitalMotion:"Keplerian orbital motion",settingOrbitalMotionDesc:"Inner planets orbit faster than outer planets according to Kepler's laws.",settingPulses:"Light pulses along links",settingPulsesDesc:"Animate glowing photons traveling between connected notes.",bodyStar:"Star",bodyGasGiant:"Gas Giant",bodyPlanet:"Planet",bodyAsteroid:"Asteroid",contextLost:"3D context was lost \u2014 restoring the view\u2026",quoteTitle:"Wisdom of the Day",quoteNext:"Next quote",quoteCopied:"Copied to clipboard",quoteCatAll:"All",quoteCatQuranSunnah:"Quran & Sunnah",quoteCatBible:"Scripture",quoteCatScience:"Science & Mind",quoteCatVault:"My Notes",quoteEmptyVault:"No quotes found in notes (add quotes to 'Quotes.md' or with #quote tag)",whenJustNow:"just now",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} mo`,noteCount:i=>`${i} ${i===1?"note":"notes"}`,linkCount:i=>`${i} ${i===1?"link":"links"}`},Bh=iv;function zh(i,t,e,n){let s=i%10,r=i%100;return s===1&&r!==11?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var sv={locale:"ru-RU",ribbonOpen:"Note Galaxy: \u043E\u0442\u043A\u0440\u044B\u0442\u044C 3D-\u0433\u0440\u0430\u0444",commandOpen:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C 3D-\u0433\u0440\u0430\u0444",commandOpenDashboard:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u0430\u0448\u0431\u043E\u0440\u0434 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",commandRebuild:"\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0438\u0442\u044C 3D-\u0433\u0440\u0430\u0444",viewTitle:"Note Galaxy",dashboardTitle:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",greetingMorning:"\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",greetingDay:"\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C",greetingEvening:"\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440",greetingNight:"\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0438",eyebrow:"NOTE GALAXY",statNotes:"\u0437\u0430\u043C\u0435\u0442\u043A\u0438",statProjects:"\u043F\u0440\u043E\u0435\u043A\u0442\u044B",statLinks:"\u0441\u0432\u044F\u0437\u0438",statTags:"\u0442\u0435\u0433\u0438",sectionFolders:"\u0421\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u044F",sectionRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",chipAll:"\u0432\u0441\u0435",emptyRecent:"\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E \u2014 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0437\u0430\u043C\u0435\u0442\u043A\u0443.",tabOverview:"\u041E\u0431\u0437\u043E\u0440",tabHubs:"\u0425\u0430\u0431\u044B",tabRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",sectionHubs:"\u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u0445\u0430\u0431\u044B",hint:"\u0422\u044F\u043D\u0438\u0442\u0435 \u2014 \u043E\u0440\u0431\u0438\u0442\u0430 \xB7 \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 \u043A\u043B\u0438\u043A \u043F\u043E \u0437\u0432\u0435\u0437\u0434\u0435 \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443",toolbarRebuild:"\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0433\u0440\u0430\u0444",toolbarReset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0438\u0434",toolbarDashboard:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434",actionMakeCenter:"\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u044B",actionResetCenter:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u0435",settingLanguage:"\u042F\u0437\u044B\u043A",settingLanguageDesc:"\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \xAB\u0410\u0432\u0442\u043E\xBB \u2014 \u043A\u0430\u043A \u0432 Obsidian.",languageAuto:"\u0410\u0432\u0442\u043E",settingCoreTheme:"\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u044F\u0434\u0440\u043E",settingCoreThemeDesc:"\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B \u0438 \u0430\u043A\u043A\u0440\u0435\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430.",themeGargantua:"\u0413\u0430\u0440\u0433\u0430\u043D\u0442\u044E\u0430 (\u044F\u043D\u0442\u0430\u0440\u043D\u044B\u0439)",themePulsar:"\u041F\u0443\u043B\u044C\u0441\u0430\u0440 (\u0433\u043E\u043B\u0443\u0431\u043E\u0439)",themeSingularity:"\u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C (\u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442)",settingName:"\u0418\u043C\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F",settingNameDesc:"\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \xAB\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440, \u2026\xBB. \u041F\u0443\u0441\u0442\u043E \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0435.",settingNamePlaceholder:"\u042D\u043C\u0438\u0440",settingDashboard:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434",settingDashboardDesc:"\u041F\u0430\u043D\u0435\u043B\u044C \u0441 \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043C, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u0439 \u0438 \u043D\u0435\u0434\u0430\u0432\u043D\u0438\u043C\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438.",settingLabels:"\u041F\u043E\u0434\u043F\u0438\u0441\u0438 \u0437\u0430\u043C\u0435\u0442\u043E\u043A",settingLabelsDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0441\u0430\u043C\u044B\u0445 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u0440\u044F\u043C\u043E \u0432 \u043A\u043E\u0441\u043C\u043E\u0441\u0435.",settingBloom:"\u0421\u0432\u0435\u0447\u0435\u043D\u0438\u0435 (bloom)",settingBloomDesc:"\u0421\u0438\u043B\u0430 \u043E\u0440\u0435\u043E\u043B\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0437\u0432\u0451\u0437\u0434 \u0438 \u0434\u0438\u0441\u043A\u0430.",settingDisk:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0434\u0438\u0441\u043A\u0430",settingDiskDesc:"\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u0437\u0430\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u043A\u0440\u0435\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u0438\u0441\u043A.",settingStars:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0432\u0451\u0437\u0434",settingStarsDesc:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0442\u043E\u0447\u0435\u043A-\u0437\u0430\u043C\u0435\u0442\u043E\u043A.",settingOrbit:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",settingOrbitDesc:"0 \u2014 \u043E\u0431\u043B\u0430\u043A\u043E \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435.",settingMaxNodes:"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u0430\u043C\u0435\u0442\u043E\u043A",settingMaxNodesDesc:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u044B\u0445 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 3D.",settingTransition:"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0438",settingTransitionDesc:"\u0417\u0430\u043C\u0435\u0442\u043A\u0430 \u0443\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u0441\u043F\u0438\u0440\u0430\u043B\u0438 \u0432 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442, \u043A\u043E\u0433\u0434\u0430 \u0444\u0430\u0439\u043B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F.",settingQuasar:"\u0414\u0436\u0435\u0442\u044B \u043A\u0432\u0430\u0437\u0430\u0440\u0430",settingQuasarDesc:"\u0421\u0430\u043C\u0430\u044F \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430 \u043F\u0438\u0442\u0430\u0435\u0442 \u0434\u0436\u0435\u0442\u044B \u043D\u0430\u0434 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u043E\u0439.",settingActivity:"\u0421\u0432\u0435\u0436\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0431\u043B\u0438\u0436\u0435 \u043A \u0446\u0435\u043D\u0442\u0440\u0443",settingActivityDesc:"\u041D\u0435\u0434\u0430\u0432\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0432\u0441\u0442\u0430\u044E\u0442 \u0431\u043B\u0438\u0436\u0435 \u043A \u0434\u0438\u0441\u043A\u0443, \u0441\u0442\u0430\u0440\u044B\u0435 \u0443\u043F\u043B\u044B\u0432\u0430\u044E\u0442 \u043D\u0430\u0440\u0443\u0436\u0443.",settingAdaptive:"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",settingAdaptiveDesc:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043D\u0438\u0436\u0430\u0442\u044C \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0434\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0430\u0434\u043A\u0430\u0445 \u043A\u0430\u0434\u0440\u043E\u0432.",settingIncludeTags:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0442\u0435\u0433\u0438 \u043A\u0430\u043A \u0437\u0432\u0451\u0437\u0434\u044B",settingIncludeTagsDesc:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u0435\u0433\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0438\u044F\u044E\u0449\u0438\u0445 \u0437\u0432\u0451\u0437\u0434, \u043F\u0440\u0438\u0442\u044F\u0433\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0437\u0430\u043C\u0435\u0442\u043A\u0438.",settingOrbitalMotion:"\u041A\u0435\u043F\u043B\u0435\u0440\u043E\u0432\u0441\u043A\u043E\u0435 \u043E\u0440\u0431\u0438\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435",settingOrbitalMotionDesc:"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043F\u043E \u0437\u0430\u043A\u043E\u043D\u0430\u043C \u041A\u0435\u043F\u043B\u0435\u0440\u0430.",settingPulses:"\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u0438\u043C\u043F\u0443\u043B\u044C\u0441\u044B \u0441\u0432\u044F\u0437\u0435\u0439",settingPulsesDesc:"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0444\u043E\u0442\u043E\u043D\u043E\u0432, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u043C\u0438.",bodyStar:"\u0417\u0432\u0435\u0437\u0434\u0430",bodyGasGiant:"\u0413\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0438\u0433\u0430\u043D\u0442",bodyPlanet:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430",bodyAsteroid:"\u0410\u0441\u0442\u0435\u0440\u043E\u0438\u0434",contextLost:"3D-\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D \u2014 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E \u0432\u0438\u0434\u2026",quoteTitle:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C \u0434\u043D\u044F",quoteNext:"\u0414\u0440\u0443\u0433\u0430\u044F \u0446\u0438\u0442\u0430\u0442\u0430",quoteCopied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440",quoteCatAll:"\u0412\u0441\u0435",quoteCatQuranSunnah:"\u041A\u043E\u0440\u0430\u043D \u0438 \u0421\u0443\u043D\u043D\u0430",quoteCatBible:"\u041F\u0438\u0441\u0430\u043D\u0438\u0435",quoteCatScience:"\u041D\u0430\u0443\u043A\u0430 \u0438 \u0440\u0430\u0437\u0443\u043C",quoteCatVault:"\u041C\u043E\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438",quoteEmptyVault:"\u0412 \u0437\u0430\u043C\u0435\u0442\u043A\u0430\u0445 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0446\u0438\u0442\u0430\u0442 (\u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0445 \u0432 \xAB\u0426\u0438\u0442\u0430\u0442\u044B.md\xBB \u0438\u043B\u0438 \u0441 \u0442\u0435\u0433\u043E\u043C #\u0446\u0438\u0442\u0430\u0442\u0430)",whenJustNow:"\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E",whenMinutes:i=>`${i} \u043C\u0438\u043D`,whenHours:i=>`${i} \u0447`,whenDays:i=>`${i} \u0434\u043D`,whenMonths:i=>`${i} \u043C\u0435\u0441`,noteCount:i=>zh(i,"\u0437\u0430\u043C\u0435\u0442\u043A\u0430","\u0437\u0430\u043C\u0435\u0442\u043A\u0438","\u0437\u0430\u043C\u0435\u0442\u043E\u043A"),linkCount:i=>zh(i,"\u0441\u0432\u044F\u0437\u044C","\u0441\u0432\u044F\u0437\u0438","\u0441\u0432\u044F\u0437\u0435\u0439")},kh=sv;function Hh(i,t,e,n){let s=i%10,r=i%100;return s===1&&r!==11?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var rv={locale:"uk-UA",ribbonOpen:"Note Galaxy: \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 3D-\u0433\u0440\u0430\u0444",commandOpen:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 3D-\u0433\u0440\u0430\u0444",commandOpenDashboard:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0434\u0430\u0448\u0431\u043E\u0440\u0434 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",commandRebuild:"\u041F\u0435\u0440\u0435\u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 3D-\u0433\u0440\u0430\u0444",viewTitle:"Note Galaxy",dashboardTitle:"\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",greetingMorning:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443",greetingDay:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0434\u043D\u044F",greetingEvening:"\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0432\u0435\u0447\u043E\u0440\u0430",greetingNight:"\u0414\u043E\u0431\u0440\u043E\u0457 \u043D\u043E\u0447\u0456",eyebrow:"NOTE GALAXY",statNotes:"\u0437\u0430\u043C\u0456\u0442\u043A\u0438",statProjects:"\u043F\u0440\u043E\u0454\u043A\u0442\u0438",statLinks:"\u0437\u0432'\u044F\u0437\u043A\u0438",statTags:"\u0442\u0435\u0433\u0438",sectionFolders:"\u0421\u0443\u0437\u0456\u0440'\u044F",sectionRecent:"\u041D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u0456",chipAll:"\u0443\u0441\u0456",emptyRecent:"\u041F\u043E\u043A\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044C\u043E \u2014 \u0441\u0442\u0432\u043E\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0443 \u0437\u0430\u043C\u0456\u0442\u043A\u0443.",tabOverview:"\u041E\u0433\u043B\u044F\u0434",tabHubs:"\u0425\u0430\u0431\u0438",tabRecent:"\u041D\u0435\u0434\u0430\u0432\u043D\u0456",sectionHubs:"\u0413\u043E\u043B\u043E\u0432\u043D\u0456 \u0445\u0430\u0431\u0438",hint:"\u0422\u044F\u0433\u043D\u0456\u0442\u044C \u2014 \u043E\u0440\u0431\u0456\u0442\u0430 \xB7 \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 \u043A\u043B\u0456\u043A \u043F\u043E \u0437\u0456\u0440\u0446\u0456 \u2014 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0437\u0430\u043C\u0456\u0442\u043A\u0443",toolbarRebuild:"\u041F\u0435\u0440\u0435\u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 \u0433\u0440\u0430\u0444",toolbarReset:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0438\u0434",toolbarDashboard:"\u041F\u0430\u043D\u0435\u043B\u044C",actionMakeCenter:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0438",actionResetCenter:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0434\u043E \u0447\u043E\u0440\u043D\u043E\u0457 \u0434\u0456\u0440\u0438",settingLanguage:"\u041C\u043E\u0432\u0430",settingLanguageDesc:"\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443. \xAB\u0410\u0432\u0442\u043E\xBB \u2014 \u044F\u043A \u0432 Obsidian.",languageAuto:"\u0410\u0432\u0442\u043E",settingCoreTheme:"\u041A\u043E\u0441\u043C\u0456\u0447\u043D\u0435 \u044F\u0434\u0440\u043E",settingCoreThemeDesc:"\u0412\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0442\u0438\u043B\u044C \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0457 \u0447\u043E\u0440\u043D\u043E\u0457 \u0434\u0456\u0440\u0438 \u0442\u0430 \u0430\u043A\u0440\u0435\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u043A\u0430.",themeGargantua:"\u0490\u0430\u0440\u0491\u0430\u043D\u0442\u044E\u0430 (\u0431\u0443\u0440\u0448\u0442\u0438\u043D\u043E\u0432\u0438\u0439)",themePulsar:"\u041F\u0443\u043B\u044C\u0441\u0430\u0440 (\u0431\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439)",themeSingularity:"\u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u0456\u0441\u0442\u044C (\u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0456\u043E\u043B\u0435\u0442)",settingName:"\u0406\u043C'\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F",settingNameDesc:"\u041F\u0456\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \xAB\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0432\u0435\u0447\u043E\u0440\u0430, \u2026\xBB. \u041F\u043E\u0440\u043E\u0436\u043D\u044C\u043E \u2014 \u043B\u0438\u0448\u0435 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F.",settingNamePlaceholder:"\u0415\u043C\u0456\u0440",settingDashboard:"\u041F\u0430\u043D\u0435\u043B\u044C",settingDashboardDesc:"\u041F\u0430\u043D\u0435\u043B\u044C \u0456\u0437 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F\u043C, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u044E \u0442\u0430 \u043D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u0456\u043C\u0438 \u0437\u0430\u043C\u0456\u0442\u043A\u0430\u043C\u0438.",settingLabels:"\u041F\u0456\u0434\u043F\u0438\u0441\u0438 \u0437\u0430\u043C\u0456\u0442\u043E\u043A",settingLabelsDesc:"\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0437\u0432\u0438 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u0445 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u0443 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456.",settingBloom:"\u0421\u0432\u0456\u0442\u0456\u043D\u043D\u044F (bloom)",settingBloomDesc:"\u0421\u0438\u043B\u0430 \u043E\u0440\u0435\u043E\u043B\u0443 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0437\u0456\u0440\u043E\u043A \u0456 \u0434\u0438\u0441\u043A\u0430.",settingDisk:"\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0434\u0438\u0441\u043A\u0430",settingDiskDesc:"\u042F\u043A \u0448\u0432\u0438\u0434\u043A\u043E \u043E\u0431\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u0430\u043A\u0440\u0435\u0446\u0456\u0439\u043D\u0438\u0439 \u0434\u0438\u0441\u043A.",settingStars:"\u0420\u043E\u0437\u043C\u0456\u0440 \u0437\u0456\u0440\u043E\u043A",settingStarsDesc:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0442\u043E\u0447\u043E\u043A-\u0437\u0430\u043C\u0456\u0442\u043E\u043A.",settingOrbit:"\u041E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",settingOrbitDesc:"0 \u2014 \u0445\u043C\u0430\u0440\u0430 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u0441\u0442\u043E\u0457\u0442\u044C \u043D\u0430 \u043C\u0456\u0441\u0446\u0456.",settingMaxNodes:"\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0437\u0430\u043C\u0456\u0442\u043E\u043A",settingMaxNodesDesc:"\u0421\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u0445 \u0437\u0430\u043C\u0456\u0442\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432 3D.",settingTransition:"\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u044F \u0437\u0430\u043C\u0456\u0442\u043A\u0438",settingTransitionDesc:"\u0417\u0430\u043C\u0456\u0442\u043A\u0430 \u0439\u0434\u0435 \u0441\u043F\u0456\u0440\u0430\u043B\u043B\u044E \u0432 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442, \u043A\u043E\u043B\u0438 \u0444\u0430\u0439\u043B \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F.",settingQuasar:"\u0414\u0436\u0435\u0442\u0438 \u043A\u0432\u0430\u0437\u0430\u0440\u0430",settingQuasarDesc:"\u041D\u0430\u0439\u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0456\u0448\u0430 \u0437\u0430\u043C\u0456\u0442\u043A\u0430 \u0436\u0438\u0432\u0438\u0442\u044C \u0434\u0436\u0435\u0442\u0438 \u043D\u0430\u0434 \u0447\u043E\u0440\u043D\u043E\u044E \u0434\u0456\u0440\u043E\u044E.",settingActivity:"\u0421\u0432\u0456\u0436\u0456 \u0437\u0430\u043C\u0456\u0442\u043A\u0438 \u0431\u043B\u0438\u0436\u0447\u0435 \u0434\u043E \u0446\u0435\u043D\u0442\u0440\u0443",settingActivityDesc:"\u041D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u0456 \u0437\u0430\u043C\u0456\u0442\u043A\u0438 \u0441\u0442\u0430\u044E\u0442\u044C \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0434\u043E \u0434\u0438\u0441\u043A\u0430, \u0441\u0442\u0430\u0440\u0456 \u0432\u0456\u0434\u0434\u0430\u043B\u044F\u044E\u0442\u044C\u0441\u044F.",settingAdaptive:"\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430 \u044F\u043A\u0456\u0441\u0442\u044C",settingAdaptiveDesc:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u0437\u043C\u0435\u043D\u0448\u0443\u0432\u0430\u0442\u0438 \u0441\u044F\u0439\u0432\u043E \u0439 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u0440\u0438 \u043F\u0440\u043E\u0441\u0456\u0434\u0430\u043D\u043D\u0456 \u043A\u0430\u0434\u0440\u0456\u0432.",settingIncludeTags:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u0442\u0435\u0433\u0438 \u044F\u043A \u0437\u043E\u0440\u0456",settingIncludeTagsDesc:"\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u0442\u0435\u0433\u0438 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0441\u044F\u044E\u0447\u0438\u0445 \u0437\u0456\u0440, \u0449\u043E \u043F\u0440\u0438\u0442\u044F\u0433\u0443\u044E\u0442\u044C \u043D\u043E\u0442\u0430\u0442\u043A\u0438.",settingOrbitalMotion:"\u041A\u0435\u043F\u043B\u0435\u0440\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043E\u0440\u0431\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0443\u0445",settingOrbitalMotionDesc:"\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043F\u043B\u0430\u043D\u0435\u0442\u0438 \u043E\u0431\u0435\u0440\u0442\u0430\u044E\u0442\u044C\u0441\u044F \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u0437\u0430 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438 \u041A\u0435\u043F\u043B\u0435\u0440\u0430.",settingPulses:"\u0421\u0432\u0456\u0442\u043B\u043E\u0432\u0456 \u0456\u043C\u043F\u0443\u043B\u044C\u0441\u0438 \u0437\u0432'\u044F\u0437\u043A\u0456\u0432",settingPulsesDesc:"\u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u0444\u043E\u0442\u043E\u043D\u0456\u0432, \u0449\u043E \u0440\u0443\u0445\u0430\u044E\u0442\u044C\u0441\u044F \u043C\u0456\u0436 \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0438\u043C\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u043C\u0438.",bodyStar:"\u0417\u043E\u0440\u044F",bodyGasGiant:"\u0413\u0430\u0437\u043E\u0432\u0438\u0439 \u0433\u0456\u0433\u0430\u043D\u0442",bodyPlanet:"\u041F\u043B\u0430\u043D\u0435\u0442\u0430",bodyAsteroid:"\u0410\u0441\u0442\u0435\u0440\u043E\u0457\u0434",contextLost:"3D-\u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0432\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u2014 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u044E\u044E \u0432\u0438\u0433\u043B\u044F\u0434\u2026",quoteTitle:"\u041C\u0443\u0434\u0440\u0456\u0441\u0442\u044C \u0434\u043D\u044F",quoteNext:"\u0406\u043D\u0448\u0430 \u0446\u0438\u0442\u0430\u0442\u0430",quoteCopied:"\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440",quoteCatAll:"\u0412\u0441\u0456",quoteCatQuranSunnah:"\u041A\u043E\u0440\u0430\u043D \u0456 \u0421\u0443\u043D\u043D\u0430",quoteCatBible:"\u041F\u0438\u0441\u0430\u043D\u043D\u044F",quoteCatScience:"\u041D\u0430\u0443\u043A\u0430 \u0456 \u0440\u043E\u0437\u0443\u043C",quoteCatVault:"\u041C\u043E\u0457 \u043D\u043E\u0442\u0430\u0442\u043A\u0438",quoteEmptyVault:"\u0423 \u043D\u043E\u0442\u0430\u0442\u043A\u0430\u0445 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u0446\u0438\u0442\u0430\u0442 (\u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0457\u0445 \u0443 \xAB\u0426\u0438\u0442\u0430\u0442\u0438.md\xBB \u0430\u0431\u043E \u0437 \u0442\u0435\u0433\u043E\u043C #\u0446\u0438\u0442\u0430\u0442\u0430)",whenJustNow:"\u0449\u043E\u0439\u043D\u043E",whenMinutes:i=>`${i} \u0445\u0432`,whenHours:i=>`${i} \u0433\u043E\u0434`,whenDays:i=>`${i} \u0434\u043D`,whenMonths:i=>`${i} \u043C\u0456\u0441`,noteCount:i=>Hh(i,"\u0437\u0430\u043C\u0456\u0442\u043A\u0430","\u0437\u0430\u043C\u0456\u0442\u043A\u0438","\u0437\u0430\u043C\u0456\u0442\u043E\u043A"),linkCount:i=>Hh(i,"\u0437\u0432'\u044F\u0437\u043E\u043A","\u0437\u0432'\u044F\u0437\u043A\u0438","\u0437\u0432'\u044F\u0437\u043A\u0456\u0432")},Vh=rv;var ov={locale:"de-DE",ribbonOpen:"Note Galaxy: 3D-Graph \xF6ffnen",commandOpen:"3D-Graph \xF6ffnen",commandOpenDashboard:"Galaxie-Dashboard \xF6ffnen",commandRebuild:"3D-Graph neu aufbauen",viewTitle:"Note Galaxy",dashboardTitle:"Galaxie-Dashboard",greetingMorning:"Guten Morgen",greetingDay:"Guten Tag",greetingEvening:"Guten Abend",greetingNight:"Gute Nacht",eyebrow:"NOTE GALAXY",statNotes:"Notizen",statProjects:"Projekte",statLinks:"Verbindungen",statTags:"Tags",sectionFolders:"Konstellationen",sectionRecent:"Zuletzt",chipAll:"alle",emptyRecent:"Noch nichts hier \u2014 erstelle deine erste Notiz.",tabOverview:"\xDCbersicht",tabHubs:"Hubs",tabRecent:"Zuletzt",sectionHubs:"Wichtige Hubs",hint:"Ziehen \u2014 Orbit \xB7 Scrollen \u2014 Zoom \xB7 Stern anklicken \u2014 Notiz \xF6ffnen",toolbarRebuild:"Graph neu aufbauen",toolbarReset:"Ansicht zur\xFCcksetzen",toolbarDashboard:"Dashboard",actionMakeCenter:"Als Systemzentrum festlegen",actionResetCenter:"Galaktischen Kern zur\xFCcksetzen",settingLanguage:"Sprache",settingLanguageDesc:"Sprache der Oberfl\xE4che. \u201EAuto\u201C folgt der Obsidian-Sprache.",languageAuto:"Auto",settingCoreTheme:"Kosmischer Kern",settingCoreThemeDesc:"Visueller Stil des zentralen Schwarzen Lochs und der Akkretionsscheibe.",themeGargantua:"Gargantua (Bernstein)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularit\xE4t (Ultraviolett)",settingName:"Name f\xFCr die Begr\xFC\xDFung",settingNameDesc:"Erscheint als \u201EGuten Abend, \u2026\u201C. Leer lassen, um nur die Begr\xFC\xDFung zu zeigen.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Panel mit Begr\xFC\xDFung, Statistik und letzten Notizen.",settingLabels:"Notizbeschriftungen",settingLabelsDesc:"Titel der am st\xE4rksten verkn\xFCpften Notizen im Raum anzeigen.",settingBloom:"Leuchten (Bloom)",settingBloomDesc:"St\xE4rke des Scheins um Sterne und Scheibe.",settingDisk:"Scheibengeschwindigkeit",settingDiskDesc:"Wie schnell die Akkretionsscheibe rotiert.",settingStars:"Sternengr\xF6\xDFe",settingStarsDesc:"Gr\xF6\xDFe der Notizpunkte.",settingOrbit:"Galaxienrotation",settingOrbitDesc:"0 h\xE4lt die Notizwolke still.",settingMaxNodes:"Maximale Notizen",settingMaxNodesDesc:"Wie viele der am st\xE4rksten verkn\xFCpften Notizen in 3D erscheinen.",settingTransition:"Animation beim \xD6ffnen",settingTransitionDesc:"Die Notiz spiralt in den Horizont, w\xE4hrend die Datei ge\xF6ffnet wird.",settingQuasar:"Quasar-Jets",settingQuasarDesc:"Die am st\xE4rksten verkn\xFCpfte Notiz speist die Jets \xFCber dem schwarzen Loch.",settingActivity:"Neue Notizen n\xE4her am Zentrum",settingActivityDesc:"K\xFCrzlich bearbeitete Notizen liegen nahe an der Scheibe, \xE4ltere driften nach au\xDFen.",settingAdaptive:"Adaptive Qualit\xE4t",settingAdaptiveDesc:"Leuchtkraft und Details bei Einbr\xFCchen automatisch reduzieren.",settingIncludeTags:"Tags als Sterne anzeigen",settingIncludeTagsDesc:"Beliebte Tags als leuchtende Sterne darstellen, die Notizen anziehen.",settingOrbitalMotion:"Keplersche Orbitalbewegung",settingOrbitalMotionDesc:"Innere Planeten kreisen nach Keplers Gesetzen schneller als \xE4u\xDFere.",settingPulses:"Lichtimpulse entlang der Links",settingPulsesDesc:"Lichtteilchen zwischen verbundenen Notizen animieren.",bodyStar:"Stern",bodyGasGiant:"Gasriese",bodyPlanet:"Planet",bodyAsteroid:"Asteroid",contextLost:"3D-Kontext verloren \u2014 Ansicht wird wiederhergestellt\u2026",quoteTitle:"Weisheit des Tages",quoteNext:"N\xE4chstes Zitat",quoteCopied:"In Zwischenablage kopiert",quoteCatAll:"Alle",quoteCatQuranSunnah:"Koran & Sunna",quoteCatBible:"Schrift",quoteCatScience:"Wissenschaft & Geist",quoteCatVault:"Meine Notizen",quoteEmptyVault:"Keine Zitate in Notizen gefunden (in 'Zitate.md' oder mit #quote Tag hinzuf\xFCgen)",whenJustNow:"gerade eben",whenMinutes:i=>`${i} Min.`,whenHours:i=>`${i} Std.`,whenDays:i=>`${i} T.`,whenMonths:i=>`${i} Mon.`,noteCount:i=>`${i} ${i===1?"Notiz":"Notizen"}`,linkCount:i=>`${i} ${i===1?"Verbindung":"Verbindungen"}`},Gh=ov;var av={locale:"es-ES",ribbonOpen:"Note Galaxy: abrir el grafo 3D",commandOpen:"Abrir grafo 3D",commandOpenDashboard:"Abrir panel de galaxia",commandRebuild:"Reconstruir grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Panel de Galaxia",greetingMorning:"Buenos d\xEDas",greetingDay:"Buenas tardes",greetingEvening:"Buenas noches",greetingNight:"Buenas noches",eyebrow:"NOTE GALAXY",statNotes:"notas",statProjects:"proyectos",statLinks:"enlaces",statTags:"etiquetas",sectionFolders:"Constelaciones",sectionRecent:"Recientes",chipAll:"todas",emptyRecent:"A\xFAn no hay nada: crea tu primera nota.",tabOverview:"Resumen",tabHubs:"Nodos",tabRecent:"Recientes",sectionHubs:"Nodos principales",hint:"Arrastra \u2014 \xF3rbita \xB7 rueda \u2014 zoom \xB7 clic en una estrella \u2014 abrir nota",toolbarRebuild:"Reconstruir grafo",toolbarReset:"Restablecer vista",toolbarDashboard:"Panel",actionMakeCenter:"Fijar como centro del sistema",actionResetCenter:"Restablecer n\xFAcleo gal\xE1ctico",settingLanguage:"Idioma",settingLanguageDesc:"Idioma de la interfaz. \xABAuto\xBB sigue el idioma de Obsidian.",languageAuto:"Auto",settingCoreTheme:"N\xFAcleo c\xF3smico",settingCoreThemeDesc:"Estilo visual del agujero negro central y del disco de acreci\xF3n.",themeGargantua:"Gargant\xFAa (\xC1mbar)",themePulsar:"P\xFAlsar (Cian)",themeSingularity:"Singularidad (Ultravioleta)",settingName:"Nombre para el saludo",settingNameDesc:"Se muestra como \xABBuenas noches, \u2026\xBB. D\xE9jalo vac\xEDo para mostrar solo el saludo.",settingNamePlaceholder:"Emir",settingDashboard:"Panel",settingDashboardDesc:"Panel con saludo, estad\xEDsticas y notas recientes.",settingLabels:"Nombres de notas",settingLabelsDesc:"Mostrar los t\xEDtulos de las notas m\xE1s conectadas en el espacio.",settingBloom:"Brillo (bloom)",settingBloomDesc:"Intensidad del halo alrededor de estrellas y disco.",settingDisk:"Velocidad del disco",settingDiskDesc:"Con qu\xE9 rapidez gira el disco de acreci\xF3n.",settingStars:"Tama\xF1o de estrellas",settingStarsDesc:"Escala de los puntos de notas.",settingOrbit:"Rotaci\xF3n de la galaxia",settingOrbitDesc:"0 deja quieta la nube de notas.",settingMaxNodes:"M\xE1ximo de notas",settingMaxNodesDesc:"Cu\xE1ntas de las notas m\xE1s conectadas mostrar en 3D.",settingTransition:"Animaci\xF3n al abrir",settingTransitionDesc:"La nota espirala hacia el horizonte mientras se abre el archivo.",settingQuasar:"Jets de qu\xE1sar",settingQuasarDesc:"La nota m\xE1s conectada alimenta los jets sobre el agujero negro.",settingActivity:"Notas recientes m\xE1s cerca",settingActivityDesc:"Las notas editadas hace poco quedan cerca del disco; las antiguas se alejan.",settingAdaptive:"Calidad adaptativa",settingAdaptiveDesc:"Reduce el brillo y el detalle autom\xE1ticamente si bajan los fotogramas.",settingIncludeTags:"Incluir etiquetas como estrellas",settingIncludeTagsDesc:"Representar etiquetas populares como estrellas brillantes que atraen notas.",settingOrbitalMotion:"Movimiento orbital kepleriano",settingOrbitalMotionDesc:"Los planetas interiores orbitan m\xE1s r\xE1pido seg\xFAn las leyes de Kepler.",settingPulses:"Pulsos de luz en enlaces",settingPulsesDesc:"Animar fotones luminosos viajando entre notas conectadas.",bodyStar:"Estrella",bodyGasGiant:"Gigante gaseoso",bodyPlanet:"Planeta",bodyAsteroid:"Asteroide",contextLost:"Se perdi\xF3 el contexto 3D \u2014 restaurando la vista\u2026",quoteTitle:"Sabidur\xEDa del d\xEDa",quoteNext:"Siguiente cita",quoteCopied:"Copiado al portapapeles",quoteCatAll:"Todo",quoteCatQuranSunnah:"Cor\xE1n y Sunna",quoteCatBible:"Escrituras",quoteCatScience:"Ciencia y mente",quoteCatVault:"Mis notas",quoteEmptyVault:"No se encontraron citas en las notas (agr\xE9guelas en 'Citas.md' o con #quote)",whenJustNow:"ahora mismo",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} mes`,noteCount:i=>`${i} ${i===1?"nota":"notas"}`,linkCount:i=>`${i} ${i===1?"enlace":"enlaces"}`},Wh=av;var lv={locale:"fr-FR",ribbonOpen:"Note Galaxy : ouvrir le graphe 3D",commandOpen:"Ouvrir le graphe 3D",commandOpenDashboard:"Ouvrir le tableau de bord",commandRebuild:"Reconstruire le graphe 3D",viewTitle:"Note Galaxy",dashboardTitle:"Tableau de Bord Galaxie",greetingMorning:"Bonjour",greetingDay:"Bon apr\xE8s-midi",greetingEvening:"Bonsoir",greetingNight:"Bonne nuit",eyebrow:"NOTE GALAXY",statNotes:"notes",statProjects:"projets",statLinks:"liens",statTags:"tags",sectionFolders:"Constellations",sectionRecent:"R\xE9centes",chipAll:"toutes",emptyRecent:"Rien pour l'instant \u2014 cr\xE9ez votre premi\xE8re note.",tabOverview:"Aper\xE7u",tabHubs:"P\xF4les",tabRecent:"R\xE9cents",sectionHubs:"P\xF4les majeurs",hint:"Glisser \u2014 orbite \xB7 molette \u2014 zoom \xB7 clic sur une \xE9toile \u2014 ouvrir la note",toolbarRebuild:"Reconstruire le graphe",toolbarReset:"R\xE9initialiser la vue",toolbarDashboard:"Tableau de bord",actionMakeCenter:"D\xE9finir comme centre du syst\xE8me",actionResetCenter:"R\xE9initialiser le noyau galactique",settingLanguage:"Langue",settingLanguageDesc:"Langue de l'interface. \xAB Auto \xBB suit la langue d'Obsidian.",languageAuto:"Auto",settingCoreTheme:"C\u0153ur cosmique",settingCoreThemeDesc:"Style visuel du trou noir central et du disque d'accr\xE9tion.",themeGargantua:"Gargantua (Ambre)",themePulsar:"Pulsar (Cyan)",themeSingularity:"Singularit\xE9 (Ultraviolet)",settingName:"Nom pour le salut",settingNameDesc:"Affich\xE9 comme \xAB Bonsoir, \u2026 \xBB. Laissez vide pour n'afficher que le salut.",settingNamePlaceholder:"Emir",settingDashboard:"Tableau de bord",settingDashboardDesc:"Panneau avec salut, statistiques et notes r\xE9centes.",settingLabels:"Libell\xE9s des notes",settingLabelsDesc:"Afficher les titres des notes les plus connect\xE9es dans l'espace.",settingBloom:"\xC9clat (bloom)",settingBloomDesc:"Intensit\xE9 du halo autour des \xE9toiles et du disque.",settingDisk:"Vitesse du disque",settingDiskDesc:"Vitesse de rotation du disque d'accr\xE9tion.",settingStars:"Taille des \xE9toiles",settingStarsDesc:"\xC9chelle des points de notes.",settingOrbit:"Rotation de la galaxie",settingOrbitDesc:"0 fige le nuage de notes.",settingMaxNodes:"Notes maximum",settingMaxNodesDesc:"Combien de notes parmi les plus connect\xE9es afficher en 3D.",settingTransition:"Animation d'ouverture",settingTransitionDesc:"La note spirale vers l'horizon \xE0 l'ouverture du fichier.",settingQuasar:"Jets de quasar",settingQuasarDesc:"La note la plus reli\xE9e alimente les jets au-dessus du trou noir.",settingActivity:"Notes r\xE9centes plus proches",settingActivityDesc:"Les notes modifi\xE9es r\xE9cemment se placent pr\xE8s du disque, les anciennes d\xE9rivent vers l'ext\xE9rieur.",settingAdaptive:"Qualit\xE9 adaptative",settingAdaptiveDesc:"R\xE9duit automatiquement l'\xE9clat et les d\xE9tails quand les images chutent.",settingIncludeTags:"Inclure les \xE9tiquettes comme \xE9toiles",settingIncludeTagsDesc:"Afficher les \xE9tiquettes populaires sous forme d'\xE9toiles lumineuses.",settingOrbitalMotion:"Mouvement orbital k\xE9pl\xE9rien",settingOrbitalMotionDesc:"Les plan\xE8tes int\xE9rieures orbitent plus vite selon les lois de Kepler.",settingPulses:"Impulsions lumineuses des liens",settingPulsesDesc:"Animer des photons lumineux voyageant entre les notes connect\xE9es.",bodyStar:"\xC9toile",bodyGasGiant:"G\xE9ante gazeuse",bodyPlanet:"Plan\xE8te",bodyAsteroid:"Ast\xE9ro\xEFde",contextLost:"Contexte 3D perdu \u2014 restauration de la vue\u2026",quoteTitle:"Sagesse du jour",quoteNext:"Citation suivante",quoteCopied:"Copi\xE9 dans le presse-papiers",quoteCatAll:"Tout",quoteCatQuranSunnah:"Coran & Sunna",quoteCatBible:"\xC9critures",quoteCatScience:"Science & Esprit",quoteCatVault:"Mes notes",quoteEmptyVault:"Aucune citation trouv\xE9e dans les notes (ajoutez-en dans 'Citations.md' ou avec #quote)",whenJustNow:"\xE0 l'instant",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} j`,whenMonths:i=>`${i} mois`,noteCount:i=>`${i} note${i>1?"s":""}`,linkCount:i=>`${i} lien${i>1?"s":""}`},qh=lv;var cv={locale:"it-IT",ribbonOpen:"Note Galaxy: apri il grafo 3D",commandOpen:"Apri grafo 3D",commandOpenDashboard:"Apri dashboard galassia",commandRebuild:"Ricostruisci grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Dashboard Galassia",greetingMorning:"Buongiorno",greetingDay:"Buon pomeriggio",greetingEvening:"Buonasera",greetingNight:"Buonanotte",eyebrow:"NOTE GALAXY",statNotes:"note",statProjects:"progetti",statLinks:"collegamenti",statTags:"tag",sectionFolders:"Costellazioni",sectionRecent:"Recenti",chipAll:"tutte",emptyRecent:"Ancora nulla \u2014 crea la tua prima nota.",tabOverview:"Panoramica",tabHubs:"Hub",tabRecent:"Recenti",sectionHubs:"Hub principali",hint:"Trascina \u2014 orbita \xB7 rotella \u2014 zoom \xB7 clic su una stella \u2014 apri la nota",toolbarRebuild:"Ricostruisci grafo",toolbarReset:"Reimposta vista",toolbarDashboard:"Dashboard",actionMakeCenter:"Imposta come centro del sistema",actionResetCenter:"Ripristina nucleo galattico",settingLanguage:"Lingua",settingLanguageDesc:"Lingua dell'interfaccia. \xABAuto\xBB segue la lingua di Obsidian.",languageAuto:"Auto",settingCoreTheme:"Nucleo cosmico",settingCoreThemeDesc:"Stile visivo del buco nero centrale e del disco di accrescimento.",themeGargantua:"Gargantua (Ambra)",themePulsar:"Pulsar (Ciano)",themeSingularity:"Singolarit\xE0 (Ultravioletto)",settingName:"Nome per il saluto",settingNameDesc:"Mostrato come \xABBuonasera, \u2026\xBB. Lascia vuoto per mostrare solo il saluto.",settingNamePlaceholder:"Emir",settingDashboard:"Dashboard",settingDashboardDesc:"Pannello con saluto, statistiche e note recenti.",settingLabels:"Nomi delle note",settingLabelsDesc:"Mostra i titoli delle note pi\xF9 collegate nello spazio.",settingBloom:"Bagliore (bloom)",settingBloomDesc:"Intensit\xE0 dell'alone attorno a stelle e disco.",settingDisk:"Velocit\xE0 del disco",settingDiskDesc:"Quanto velocemente ruota il disco di accrescimento.",settingStars:"Dimensione stelle",settingStarsDesc:"Scala dei punti delle note.",settingOrbit:"Rotazione della galassia",settingOrbitDesc:"0 mantiene ferma la nuvola di note.",settingMaxNodes:"Note massime",settingMaxNodesDesc:"Quante delle note pi\xF9 collegate mostrare in 3D.",settingTransition:"Animazione di apertura",settingTransitionDesc:"La nota spirale verso l'orizzonte mentre il file si apre.",settingQuasar:"Getti del quasar",settingQuasarDesc:"La nota pi\xF9 collegata alimenta i getti sopra il buco nero.",settingActivity:"Note recenti pi\xF9 vicine",settingActivityDesc:"Le note modificate di recente si avvicinano al disco, le altre derivano verso l'esterno.",settingAdaptive:"Qualit\xE0 adaptativa",settingAdaptiveDesc:"Riduce automaticamente bagliore e dettagli quando i frame calano.",settingIncludeTags:"Includi tag come stelle",settingIncludeTagsDesc:"Rappresenta i tag popolari come stelle brillanti che attraggono le note.",settingOrbitalMotion:"Moto orbitale kepleriano",settingOrbitalMotionDesc:"I pianeti interni orbitano pi\xF9 velocemente secondo le leggi di Keplero.",settingPulses:"Impulsi luminosi sui collegamenti",settingPulsesDesc:"Anima fotoni luminosi che viaggiano tra le note collegate.",bodyStar:"Stella",bodyGasGiant:"Gigante gassoso",bodyPlanet:"Pianeta",bodyAsteroid:"Asteroide",contextLost:"Contesto 3D perso \u2014 ripristino della vista\u2026",quoteTitle:"Saggezza del giorno",quoteNext:"Prossima citazione",quoteCopied:"Copiato negli appunti",quoteCatAll:"Tutto",quoteCatQuranSunnah:"Corano e Sunna",quoteCatBible:"Scritture",quoteCatScience:"Scienza e mente",quoteCatVault:"Le mie note",quoteEmptyVault:"Nessuna citazione trovata nelle note (aggiungile a 'Citazioni.md' o con #quote)",whenJustNow:"adesso",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} g`,whenMonths:i=>`${i} mesi`,noteCount:i=>`${i} ${i===1?"nota":"note"}`,linkCount:i=>`${i} ${i===1?"collegamento":"collegamenti"}`},Xh=cv;var hv={locale:"pt-BR",ribbonOpen:"Note Galaxy: abrir o grafo 3D",commandOpen:"Abrir grafo 3D",commandOpenDashboard:"Abrir painel da gal\xE1xia",commandRebuild:"Reconstruir grafo 3D",viewTitle:"Note Galaxy",dashboardTitle:"Painel da Gal\xE1xia",greetingMorning:"Bom dia",greetingDay:"Boa tarde",greetingEvening:"Boa noite",greetingNight:"Boa noite",eyebrow:"NOTE GALAXY",statNotes:"notas",statProjects:"projetos",statLinks:"conex\xF5es",statTags:"tags",sectionFolders:"Constela\xE7\xF5es",sectionRecent:"Recentes",chipAll:"todas",emptyRecent:"Nada por aqui ainda \u2014 crie sua primeira nota.",tabOverview:"Vis\xE3o geral",tabHubs:"Conex\xF5es",tabRecent:"Recentes",sectionHubs:"Principais conex\xF5es",hint:"Arraste \u2014 \xF3rbita \xB7 rolagem \u2014 zoom \xB7 clique numa estrela \u2014 abrir nota",toolbarRebuild:"Reconstruir grafo",toolbarReset:"Redefinir vis\xE3o",toolbarDashboard:"Painel",actionMakeCenter:"Definir como centro do sistema",actionResetCenter:"Redefinir n\xFAcleo gal\xE1ctico",settingLanguage:"Idioma",settingLanguageDesc:"Idioma da interface. \xABAuto\xBB segue o idioma do Obsidian.",languageAuto:"Auto",settingCoreTheme:"N\xFAcleo c\xF3smico",settingCoreThemeDesc:"Estilo visual do buraco negro central e do disco de acre\xE7\xE3o.",themeGargantua:"Garg\xE2ntua (\xC2mbar)",themePulsar:"Pulsar (Ciano)",themeSingularity:"Singularidade (Ultravioleta)",settingName:"Nome para a sauda\xE7\xE3o",settingNameDesc:"Exibido como \xABBoa noite, \u2026\xBB. Deixe vazio para mostrar apenas a sauda\xE7\xE3o.",settingNamePlaceholder:"Emir",settingDashboard:"Painel",settingDashboardDesc:"Painel com sauda\xE7\xE3o, estat\xEDsticas e notas recentes.",settingLabels:"Nomes das notas",settingLabelsDesc:"Mostrar os t\xEDtulos das notas mais conectadas no espa\xE7o.",settingBloom:"Brilho (bloom)",settingBloomDesc:"Intensidade do halo ao redor das estrelas e do disco.",settingDisk:"Velocidade do disco",settingDiskDesc:"Qu\xE3o r\xE1pido o disco de acre\xE7\xE3o gira.",settingStars:"Tamanho das estrelas",settingStarsDesc:"Escala dos pontos das notas.",settingOrbit:"Rota\xE7\xE3o da gal\xE1xia",settingOrbitDesc:"0 mant\xE9m a nuvem de notas parada.",settingMaxNodes:"M\xE1ximo de notas",settingMaxNodesDesc:"Quantas das notas mais conectadas mostrar em 3D.",settingTransition:"Anima\xE7\xE3o de abertura",settingTransitionDesc:"A nota espirala para o horizonte enquanto o arquivo abre.",settingQuasar:"Jatos de quasar",settingQuasarDesc:"A nota mais conectada alimenta os jatos acima do buraco negro.",settingActivity:"Notas recentes mais pr\xF3ximas",settingActivityDesc:"Notas editadas h\xE1 pouco ficam perto do disco; as antigas derivam para fora.",settingAdaptive:"Qualidade adaptativa",settingAdaptiveDesc:"Reduz brilho e detalhe automaticamente quando os quadros caem.",settingIncludeTags:"Incluir tags como estrelas",settingIncludeTagsDesc:"Renderizar tags populares como estrelas brilhantes atraindo notas.",settingOrbitalMotion:"Movimento orbital kepleriano",settingOrbitalMotionDesc:"Planetas internos orbitam mais r\xE1pido de acordo com as leis de Kepler.",settingPulses:"Pulsos de luz nas conex\xF5es",settingPulsesDesc:"Animar f\xF3tons luminosos viajando entre notas conectadas.",bodyStar:"Estrela",bodyGasGiant:"Gigante gasoso",bodyPlanet:"Planeta",bodyAsteroid:"Asteroide",contextLost:"Contexto 3D perdido \u2014 restaurando a visualiza\xE7\xE3o\u2026",quoteTitle:"Sabedoria do dia",quoteNext:"Pr\xF3xima cita\xE7\xE3o",quoteCopied:"Copiado para a \xE1rea de transfer\xEAncia",quoteCatAll:"Tudo",quoteCatQuranSunnah:"Alcor\xE3o e Sunnah",quoteCatBible:"Escrituras",quoteCatScience:"Ci\xEAncia e mente",quoteCatVault:"Minhas notas",quoteEmptyVault:"Nenhuma cita\xE7\xE3o encontrada nas notas (adicione em 'Cita\xE7\xF5es.md' ou com #quote)",whenJustNow:"agora mesmo",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} h`,whenDays:i=>`${i} d`,whenMonths:i=>`${i} ${i===1?"m\xEAs":"meses"}`,noteCount:i=>`${i} ${i===1?"nota":"notas"}`,linkCount:i=>`${i} ${i===1?"conex\xE3o":"conex\xF5es"}`},Yh=hv;function $h(i,t,e,n){let s=i%10,r=i%100;return i===1?`${i} ${t}`:s>=2&&s<=4&&(r<12||r>14)?`${i} ${e}`:`${i} ${n}`}var uv={locale:"pl-PL",ribbonOpen:"Note Galaxy: otw\xF3rz graf 3D",commandOpen:"Otw\xF3rz graf 3D",commandOpenDashboard:"Otw\xF3rz panel galaktyki",commandRebuild:"Przebuduj graf 3D",viewTitle:"Note Galaxy",dashboardTitle:"Panel Galaktyki",greetingMorning:"Dzie\u0144 dobry",greetingDay:"Dzie\u0144 dobry",greetingEvening:"Dobry wiecz\xF3r",greetingNight:"Dobrej nocy",eyebrow:"NOTE GALAXY",statNotes:"notatki",statProjects:"projekty",statLinks:"po\u0142\u0105czenia",statTags:"tagi",sectionFolders:"Konstelacje",sectionRecent:"Ostatnie",chipAll:"wszystkie",emptyRecent:"Jeszcze nic tu nie ma \u2014 utw\xF3rz pierwsz\u0105 notatk\u0119.",tabOverview:"Przegl\u0105d",tabHubs:"W\u0119z\u0142y",tabRecent:"Ostatnie",sectionHubs:"G\u0142\xF3wne w\u0119z\u0142y",hint:"Przeci\u0105gnij \u2014 orbita \xB7 k\xF3\u0142ko \u2014 zoom \xB7 kliknij gwiazd\u0119 \u2014 otw\xF3rz notatk\u0119",toolbarRebuild:"Przebuduj graf",toolbarReset:"Przywr\xF3\u0107 widok",toolbarDashboard:"Panel",actionMakeCenter:"Ustaw jako centrum uk\u0142adu",actionResetCenter:"Zresetuj j\u0105dro galaktyki",settingLanguage:"J\u0119zyk",settingLanguageDesc:"J\u0119zyk interfejsu. \u201EAuto\u201D pod\u0105\u017Ca za j\u0119zykiem Obsidiana.",languageAuto:"Auto",settingCoreTheme:"Kosmiczne j\u0105dro",settingCoreThemeDesc:"Styl wizualny centralnej czarnej dziury i dysku akrecyjnego.",themeGargantua:"Gargantua (Bursztyn)",themePulsar:"Pulsar (Cyjan)",themeSingularity:"Osobliwo\u015B\u0107 (Ultrafiolet)",settingName:"Imi\u0119 do powitania",settingNameDesc:"Wy\u015Bwietlane jako \u201EDobry wiecz\xF3r, \u2026\u201D. Puste \u2014 tylko powitanie.",settingNamePlaceholder:"Emir",settingDashboard:"Panel",settingDashboardDesc:"Panel z powitaniem, statystykami i ostatnimi notatkami.",settingLabels:"Nazwy notatek",settingLabelsDesc:"Pokazuj tytu\u0142y najlepiej po\u0142\u0105czonych notatek w przestrzeni.",settingBloom:"Po\u015Bwiata (bloom)",settingBloomDesc:"Si\u0142a aureoli wok\xF3\u0142 gwiazd i dysku.",settingDisk:"Pr\u0119dko\u015B\u0107 dysku",settingDiskDesc:"Jak szybko wiruje dysk akrecyjny.",settingStars:"Rozmiar gwiazd",settingStarsDesc:"Skala kropek notatek.",settingOrbit:"Obr\xF3t galaktyki",settingOrbitDesc:"0 zatrzymuje chmur\u0119 notatek.",settingMaxNodes:"Maksymalnie notatek",settingMaxNodesDesc:"Ile najlepiej po\u0142\u0105czonych notatek pokazywa\u0107 w 3D.",settingTransition:"Animacja otwarcia",settingTransitionDesc:"Notatka spiralnie wpada do horyzontu podczas otwierania pliku.",settingQuasar:"D\u017Cety kwazara",settingQuasarDesc:"D\u017Cety nad czarn\u0105 dziur\u0105 nap\u0119dza najbardziej po\u0142\u0105czona notatka.",settingActivity:"\u015Awie\u017Ce notatki bli\u017Cej \u015Brodka",settingActivityDesc:"Ostatnio edytowane notatki trafiaj\u0105 bli\u017Cej dysku, stare dryfuj\u0105 na zewn\u0105trz.",settingAdaptive:"Jako\u015B\u0107 adaptacyjna",settingAdaptiveDesc:"Automatycznie obni\u017Ca po\u015Bwiat\u0119 i detale, gdy spada liczba klatek.",settingIncludeTags:"Uwzgl\u0119dnij tagi jako gwiazdy",settingIncludeTagsDesc:"Wy\u015Bwietlaj popularne tagi jako \u015Bwiec\u0105ce gwiazdy przyci\u0105gaj\u0105ce notatki.",settingOrbitalMotion:"Ruch orbitalny Keplera",settingOrbitalMotionDesc:"Planety wewn\u0119trzne kr\u0105\u017C\u0105 szybciej zgodnie z prawami Keplera.",settingPulses:"Impulsy \u015Bwietlne na \u0142\u0105czach",settingPulsesDesc:"Animuj fotony w\u0119druj\u0105ce mi\u0119dzy po\u0142\u0105czonymi notatkami.",bodyStar:"Gwiazda",bodyGasGiant:"Gazowy olbrzym",bodyPlanet:"Planeta",bodyAsteroid:"Asteroida",contextLost:"Utracono kontekst 3D \u2014 przywracam widok\u2026",quoteTitle:"M\u0105dro\u015B\u0107 dnia",quoteNext:"Kolejny cytat",quoteCopied:"Skopiowano do schowka",quoteCatAll:"Wszystko",quoteCatQuranSunnah:"Koran i Sunna",quoteCatBible:"Pismo",quoteCatScience:"Nauka i rozum",quoteCatVault:"Moje notatki",quoteEmptyVault:"Brak cytat\xF3w w notatkach (dodaj je w 'Cytaty.md' lub z tagiem #quote)",whenJustNow:"przed chwil\u0105",whenMinutes:i=>`${i} min`,whenHours:i=>`${i} godz.`,whenDays:i=>`${i} dn.`,whenMonths:i=>`${i} mies.`,noteCount:i=>$h(i,"notatka","notatki","notatek"),linkCount:i=>$h(i,"po\u0142\u0105czenie","po\u0142\u0105czenia","po\u0142\u0105cze\u0144")},Zh=uv;var dv={locale:"zh-CN",ribbonOpen:"Note Galaxy\uFF1A\u6253\u5F00 3D \u56FE\u8C31",commandOpen:"\u6253\u5F00 3D \u56FE\u8C31",commandOpenDashboard:"\u6253\u5F00\u661F\u7CFB\u4EEA\u8868\u76D8",commandRebuild:"\u91CD\u5EFA 3D \u56FE\u8C31",viewTitle:"Note Galaxy",dashboardTitle:"\u661F\u7CFB\u4EEA\u8868\u76D8",greetingMorning:"\u65E9\u4E0A\u597D",greetingDay:"\u4E0B\u5348\u597D",greetingEvening:"\u665A\u4E0A\u597D",greetingNight:"\u665A\u5B89",eyebrow:"NOTE GALAXY",statNotes:"\u7B14\u8BB0",statProjects:"\u9879\u76EE",statLinks:"\u94FE\u63A5",statTags:"\u6807\u7B7E",sectionFolders:"\u661F\u5EA7",sectionRecent:"\u6700\u8FD1",chipAll:"\u5168\u90E8",emptyRecent:"\u8FD9\u91CC\u8FD8\u7A7A\u7740\u2014\u2014\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u6761\u7B14\u8BB0\u3002",tabOverview:"\u6982\u89C8",tabHubs:"\u6838\u5FC3",tabRecent:"\u6700\u8FD1",sectionHubs:"\u4E3B\u8981\u6838\u5FC3",hint:"\u62D6\u52A8\u2014\u2014\u73AF\u7ED5 \xB7 \u6EDA\u8F6E\u2014\u2014\u7F29\u653E \xB7 \u70B9\u51FB\u661F\u70B9\u2014\u2014\u6253\u5F00\u7B14\u8BB0",toolbarRebuild:"\u91CD\u5EFA\u56FE\u8C31",toolbarReset:"\u91CD\u7F6E\u89C6\u56FE",toolbarDashboard:"\u4EEA\u8868\u76D8",actionMakeCenter:"\u8BBE\u4E3A\u7CFB\u7EDF\u4E2D\u5FC3",actionResetCenter:"\u91CD\u7F6E\u94F6\u6CB3\u6838\u5FC3",settingLanguage:"\u8BED\u8A00",settingLanguageDesc:"\u754C\u9762\u8BED\u8A00\u3002\u300C\u81EA\u52A8\u300D\u8DDF\u968F Obsidian \u7684\u8BED\u8A00\u3002",languageAuto:"\u81EA\u52A8",settingCoreTheme:"\u5B87\u5B99\u6838\u5FC3",settingCoreThemeDesc:"\u4E2D\u5FC3\u9ED1\u6D1E\u4E0E\u5438\u79EF\u76D8\u7684\u89C6\u89C9\u98CE\u683C\u3002",themeGargantua:"\u5361\u5188\u56FE\u96C5\uFF08\u7425\u73C0\uFF09",themePulsar:"\u8109\u51B2\u661F\uFF08\u9752\u8272\uFF09",themeSingularity:"\u5947\u70B9\uFF08\u7D2B\u5916\uFF09",settingName:"\u95EE\u5019\u8BED\u4E2D\u7684\u540D\u5B57",settingNameDesc:"\u663E\u793A\u4E3A\u300C\u665A\u4E0A\u597D\uFF0C\u2026\u2026\u300D\u3002\u7559\u7A7A\u5219\u53EA\u663E\u793A\u95EE\u5019\u8BED\u3002",settingNamePlaceholder:"Emir",settingDashboard:"\u4EEA\u8868\u76D8",settingDashboardDesc:"\u5305\u542B\u95EE\u5019\u3001\u7EDF\u8BA1\u548C\u6700\u8FD1\u7B14\u8BB0\u7684\u9762\u677F\u3002",settingLabels:"\u7B14\u8BB0\u540D\u79F0",settingLabelsDesc:"\u5728\u7A7A\u95F4\u4E2D\u663E\u793A\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u6807\u9898\u3002",settingBloom:"\u8F89\u5149\uFF08bloom\uFF09",settingBloomDesc:"\u661F\u661F\u548C\u5438\u79EF\u76D8\u5468\u56F4\u5149\u6655\u7684\u5F3A\u5EA6\u3002",settingDisk:"\u5438\u79EF\u76D8\u901F\u5EA6",settingDiskDesc:"\u5438\u79EF\u76D8\u65CB\u8F6C\u7684\u5FEB\u6162\u3002",settingStars:"\u661F\u70B9\u5927\u5C0F",settingStarsDesc:"\u7B14\u8BB0\u70B9\u7684\u7F29\u653E\u3002",settingOrbit:"\u661F\u7CFB\u65CB\u8F6C",settingOrbitDesc:"0 \u8868\u793A\u7B14\u8BB0\u4E91\u9759\u6B62\u4E0D\u52A8\u3002",settingMaxNodes:"\u6700\u5927\u7B14\u8BB0\u6570",settingMaxNodesDesc:"\u5728 3D \u4E2D\u663E\u793A\u591A\u5C11\u6761\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u3002",settingTransition:"\u6253\u5F00\u7B14\u8BB0\u52A8\u753B",settingTransitionDesc:"\u6253\u5F00\u6587\u4EF6\u65F6,\u7B14\u8BB0\u6CBF\u87BA\u65CB\u5760\u5165\u4E8B\u4EF6\u89C6\u754C\u3002",settingQuasar:"\u7C7B\u661F\u4F53\u55B7\u6D41",settingQuasarDesc:"\u8FDE\u63A5\u6700\u591A\u7684\u7B14\u8BB0\u4E3A\u9ED1\u6D1E\u4E0A\u65B9\u7684\u55B7\u6D41\u4F9B\u80FD\u3002",settingActivity:"\u8FD1\u671F\u7B14\u8BB0\u66F4\u9760\u8FD1\u4E2D\u5FC3",settingActivityDesc:"\u6700\u8FD1\u7F16\u8F91\u7684\u7B14\u8BB0\u505C\u5728\u5438\u79EF\u76D8\u9644\u8FD1,\u4E45\u672A\u7F16\u8F91\u7684\u6F02\u5411\u5916\u5708\u3002",settingAdaptive:"\u81EA\u9002\u5E94\u753B\u8D28",settingAdaptiveDesc:"\u5E27\u7387\u4E0B\u964D\u65F6\u81EA\u52A8\u964D\u4F4E\u8F89\u5149\u4E0E\u7EC6\u8282\u3002",settingIncludeTags:"\u5C06\u6807\u7B7E\u663E\u793A\u4E3A\u6052\u661F",settingIncludeTagsDesc:"\u5C06\u70ED\u95E8\u6807\u7B7E\u6E32\u67D3\u4E3A\u5438\u5F15\u7B14\u8BB0\u7684\u53D1\u5149\u6052\u661F\u3002",settingOrbitalMotion:"\u5F00\u666E\u52D2\u8F68\u9053\u8FD0\u52A8",settingOrbitalMotionDesc:"\u5185\u4FA7\u884C\u661F\u6839\u636E\u5F00\u666E\u52D2\u5B9A\u5F8B\u6BD4\u5916\u4FA7\u884C\u661F\u516C\u8F6C\u66F4\u5FEB\u3002",settingPulses:"\u8FDE\u63A5\u5149\u8109\u51B2",settingPulsesDesc:"\u5728\u5173\u8054\u7B14\u8BB0\u4E4B\u95F4\u6D41\u52A8\u663E\u793A\u53D1\u5149\u5149\u5B50\u52A8\u753B\u3002",bodyStar:"\u6052\u661F",bodyGasGiant:"\u6C14\u6001\u5DE8\u884C\u661F",bodyPlanet:"\u884C\u661F",bodyAsteroid:"\u5C0F\u884C\u661F",contextLost:"3D \u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931 \u2014 \u6B63\u5728\u6062\u590D\u89C6\u56FE\u2026",quoteTitle:"\u4ECA\u65E5\u7BB4\u8A00",quoteNext:"\u4E0B\u4E00\u53E5",quoteCopied:"\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",quoteCatAll:"\u5168\u90E8",quoteCatQuranSunnah:"\u53E4\u5170\u7ECF\u4E0E\u5723\u8BAD",quoteCatBible:"\u7ECF\u6587",quoteCatScience:"\u79D1\u5B66\u4E0E\u63A2\u7D22",quoteCatVault:"\u6211\u7684\u7B14\u8BB0",quoteEmptyVault:"\u7B14\u8BB0\u4E2D\u6682\u65E0\u5F15\u7528\uFF08\u5728\u201CQuotes.md\u201D\u6216\u4F7F\u7528 #quote \u6807\u7B7E\u6DFB\u52A0\uFF09",whenJustNow:"\u521A\u521A",whenMinutes:i=>`${i} \u5206\u949F`,whenHours:i=>`${i} \u5C0F\u65F6`,whenDays:i=>`${i} \u5929`,whenMonths:i=>`${i} \u4E2A\u6708`,noteCount:i=>`${i} \u6761\u7B14\u8BB0`,linkCount:i=>`${i} \u6761\u94FE\u63A5`},Jh=dv;var fv={locale:"ja-JP",ribbonOpen:"Note Galaxy\uFF1A3D\u30B0\u30E9\u30D5\u3092\u958B\u304F",commandOpen:"3D\u30B0\u30E9\u30D5\u3092\u958B\u304F",commandOpenDashboard:"\u9280\u6CB3\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u3092\u958B\u304F",commandRebuild:"3D\u30B0\u30E9\u30D5\u3092\u518D\u69CB\u7BC9",viewTitle:"Note Galaxy",dashboardTitle:"\u9280\u6CB3\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",greetingMorning:"\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059",greetingDay:"\u3053\u3093\u306B\u3061\u306F",greetingEvening:"\u3053\u3093\u3070\u3093\u306F",greetingNight:"\u304A\u3084\u3059\u307F\u306A\u3055\u3044",eyebrow:"NOTE GALAXY",statNotes:"\u30CE\u30FC\u30C8",statProjects:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",statLinks:"\u30EA\u30F3\u30AF",statTags:"\u30BF\u30B0",sectionFolders:"\u661F\u5EA7",sectionRecent:"\u6700\u8FD1",chipAll:"\u3059\u3079\u3066",emptyRecent:"\u307E\u3060\u4F55\u3082\u3042\u308A\u307E\u305B\u3093 \u2014 \u6700\u521D\u306E\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u3087\u3046\u3002",tabOverview:"\u6982\u8981",tabHubs:"\u62E0\u70B9",tabRecent:"\u6700\u8FD1",sectionHubs:"\u4E3B\u8981\u306A\u62E0\u70B9",hint:"\u30C9\u30E9\u30C3\u30B0 \u2014 \u5468\u56DE \xB7 \u30DB\u30A4\u30FC\u30EB \u2014 \u30BA\u30FC\u30E0 \xB7 \u661F\u3092\u30AF\u30EA\u30C3\u30AF \u2014 \u30CE\u30FC\u30C8\u3092\u958B\u304F",toolbarRebuild:"\u30B0\u30E9\u30D5\u3092\u518D\u69CB\u7BC9",toolbarReset:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8",toolbarDashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",actionMakeCenter:"\u30B7\u30B9\u30C6\u30E0\u306E\u4E2D\u5FC3\u306B\u8A2D\u5B9A",actionResetCenter:"\u9280\u6CB3\u6838\u3092\u30EA\u30BB\u30C3\u30C8",settingLanguage:"\u8A00\u8A9E",settingLanguageDesc:"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u8A00\u8A9E\u3002\u300C\u81EA\u52D5\u300D\u306F Obsidian \u306E\u8A00\u8A9E\u306B\u5408\u308F\u305B\u307E\u3059\u3002",languageAuto:"\u81EA\u52D5",settingCoreTheme:"\u5B87\u5B99\u6838",settingCoreThemeDesc:"\u4E2D\u5FC3\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB\u3068\u964D\u7740\u5186\u76E4\u306E\u30D3\u30B8\u30E5\u30A2\u30EB\u30C6\u30FC\u30DE\u3002",themeGargantua:"\u30AC\u30EB\u30AC\u30F3\u30C1\u30E5\u30A2\uFF08\u7425\u73C0\uFF09",themePulsar:"\u30D1\u30EB\u30B5\u30FC\uFF08\u30B7\u30A2\u30F3\uFF09",themeSingularity:"\u7279\u7570\u70B9\uFF08\u7D2B\u5916\u7DDA\uFF09",settingName:"\u6328\u62F6\u306B\u4F7F\u3046\u540D\u524D",settingNameDesc:"\u300C\u3053\u3093\u3070\u3093\u306F\u3001\u2026\u300D\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u7A7A\u6B04\u306A\u3089\u6328\u62F6\u306E\u307F\u3002",settingNamePlaceholder:"Emir",settingDashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",settingDashboardDesc:"\u6328\u62F6\u30FB\u7D71\u8A08\u30FB\u6700\u8FD1\u306E\u30CE\u30FC\u30C8\u3092\u8868\u793A\u3059\u308B\u30D1\u30CD\u30EB\u3002",settingLabels:"\u30CE\u30FC\u30C8\u306E\u30E9\u30D9\u30EB",settingLabelsDesc:"\u6700\u3082\u591A\u304F\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u7A7A\u9593\u306B\u8868\u793A\u3057\u307E\u3059\u3002",settingBloom:"\u30B0\u30ED\u30FC\uFF08bloom\uFF09",settingBloomDesc:"\u661F\u3068\u5186\u76E4\u306E\u5468\u56F2\u306E\u5149\u306E\u5F37\u3055\u3002",settingDisk:"\u5186\u76E4\u306E\u901F\u5EA6",settingDiskDesc:"\u964D\u7740\u5186\u76E4\u304C\u56DE\u8EE2\u3059\u308B\u901F\u3055\u3002",settingStars:"\u661F\u306E\u30B5\u30A4\u30BA",settingStarsDesc:"\u30CE\u30FC\u30C8\u306E\u70B9\u306E\u5927\u304D\u3055\u3002",settingOrbit:"\u9280\u6CB3\u306E\u56DE\u8EE2",settingOrbitDesc:"0 \u306B\u3059\u308B\u3068\u30CE\u30FC\u30C8\u306E\u96F2\u304C\u9759\u6B62\u3057\u307E\u3059\u3002",settingMaxNodes:"\u6700\u5927\u30CE\u30FC\u30C8\u6570",settingMaxNodesDesc:"3D \u306B\u8868\u793A\u3059\u308B\u3001\u30EA\u30F3\u30AF\u306E\u591A\u3044\u30CE\u30FC\u30C8\u306E\u6570\u3002",settingTransition:"\u30CE\u30FC\u30C8\u3092\u958B\u304F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",settingTransitionDesc:"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3068\u3001\u30CE\u30FC\u30C8\u304C\u6E26\u3092\u5DFB\u3044\u3066\u5730\u5E73\u3078\u843D\u3061\u307E\u3059\u3002",settingQuasar:"\u30AF\u30A7\u30FC\u30B5\u30FC\u306E\u30B8\u30A7\u30C3\u30C8",settingQuasarDesc:"\u6700\u3082\u30EA\u30F3\u30AF\u306E\u591A\u3044\u30CE\u30FC\u30C8\u304C\u3001\u30D6\u30E9\u30C3\u30AF\u30DB\u30FC\u30EB\u306E\u4E0A\u90E8\u306E\u30B8\u30A7\u30C3\u30C8\u3092\u8F1D\u304B\u305B\u307E\u3059\u3002",settingActivity:"\u6700\u8FD1\u66F4\u65B0\u3057\u305F\u30CE\u30FC\u30C8\u3092\u5185\u5074\u306B",settingActivityDesc:"\u6700\u8FD1\u66F4\u65B0\u3057\u305F\u30CE\u30FC\u30C8\u306F\u5186\u76E4\u306E\u8FD1\u304F\u3078\u3001\u53E4\u3044\u30CE\u30FC\u30C8\u306F\u5916\u5074\u3078\u6D41\u308C\u307E\u3059\u3002",settingAdaptive:"\u81EA\u52D5\u753B\u8CEA\u8ABF\u6574",settingAdaptiveDesc:"\u30D5\u30EC\u30FC\u30E0\u304C\u843D\u3061\u305F\u3068\u304D\u3001\u767A\u5149\u3068\u30C7\u30A3\u30C6\u30FC\u30EB\u3092\u81EA\u52D5\u3067\u6291\u3048\u307E\u3059\u3002",settingIncludeTags:"\u30BF\u30B0\u3092\u6052\u661F\u3068\u3057\u3066\u8868\u793A",settingIncludeTagsDesc:"\u4EBA\u6C17\u306E\u30BF\u30B0\u3092\u30CE\u30FC\u30C8\u3092\u5F15\u304D\u5BC4\u305B\u308B\u8F1D\u304F\u6052\u661F\u3068\u3057\u3066\u63CF\u753B\u3057\u307E\u3059\u3002",settingOrbitalMotion:"\u30B1\u30D7\u30E9\u30FC\u8ECC\u9053\u904B\u52D5",settingOrbitalMotionDesc:"\u30B1\u30D7\u30E9\u30FC\u306E\u6CD5\u5247\u306B\u5F93\u3044\u3001\u5185\u5074\u306E\u60D1\u661F\u307B\u3069\u901F\u304F\u516C\u8EE2\u3057\u307E\u3059\u3002",settingPulses:"\u30EA\u30F3\u30AF\u306E\u5149\u30D1\u30EB\u30B9",settingPulsesDesc:"\u63A5\u7D9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u9593\u3092\u5149\u5B50\u304C\u79FB\u52D5\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002",bodyStar:"\u6052\u661F",bodyGasGiant:"\u5DE8\u5927\u30AC\u30B9\u60D1\u661F",bodyPlanet:"\u60D1\u661F",bodyAsteroid:"\u5C0F\u60D1\u661F",contextLost:"3D \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5931\u308F\u308C\u307E\u3057\u305F \u2014 \u30D3\u30E5\u30FC\u3092\u5FA9\u5143\u4E2D\u2026",quoteTitle:"\u4ECA\u65E5\u306E\u540D\u8A00",quoteNext:"\u6B21\u306E\u540D\u8A00",quoteCopied:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",quoteCatAll:"\u3059\u3079\u3066",quoteCatQuranSunnah:"\u30B3\u30FC\u30E9\u30F3\u3068\u30B9\u30F3\u30CA",quoteCatBible:"\u8056\u66F8\u30FB\u683C\u8A00",quoteCatScience:"\u79D1\u5B66\u3068\u63A2\u6C42",quoteCatVault:"\u30DE\u30A4\u30CE\u30FC\u30C8",quoteEmptyVault:"\u30CE\u30FC\u30C8\u5185\u306B\u5F15\u7528\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\uFF08\u300CQuotes.md\u300D\u307E\u305F\u306F #quote \u30BF\u30B0\u3067\u8FFD\u52A0\uFF09",whenJustNow:"\u305F\u3063\u305F\u4ECA",whenMinutes:i=>`${i} \u5206`,whenHours:i=>`${i} \u6642\u9593`,whenDays:i=>`${i} \u65E5`,whenMonths:i=>`${i} \u304B\u6708`,noteCount:i=>`${i} \u4EF6\u306E\u30CE\u30FC\u30C8`,linkCount:i=>`${i} \u4EF6\u306E\u30EA\u30F3\u30AF`},jh=fv;var Kh={en:Bh,ru:kh,uk:Vh,de:Gh,es:Wh,fr:qh,it:Xh,"pt-BR":Yh,pl:Zh,"zh-CN":Jh,ja:jh},so=[{code:"en",label:"English"},{code:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{code:"uk",label:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},{code:"de",label:"Deutsch"},{code:"es",label:"Espa\xF1ol"},{code:"fr",label:"Fran\xE7ais"},{code:"it",label:"Italiano"},{code:"pt-BR",label:"Portugu\xEAs (Brasil)"},{code:"pl",label:"Polski"},{code:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587"},{code:"ja",label:"\u65E5\u672C\u8A9E"}],Il="en";function pv(i){return i in Kh}function mv(i){let t=i.trim().toLowerCase().replace(/_/g,"-");if(!t)return null;if(pv(t))return t;for(let n of so)if(n.code.toLowerCase()===t)return n.code;let e=t.split("-")[0];for(let n of so)if(n.code.toLowerCase().split("-")[0]===e)return n.code;return null}function gv(i){var e;if(i!=="auto")return i;let t="";try{t=(0,Qh.getLanguage)()}catch{t=""}return!t&&typeof navigator!="undefined"&&(t=navigator.language||"en"),(e=mv(t))!=null?e:"en"}function Ll(i){return Il=gv(i),Il}function Wt(){return Kh[Il]}var tu=[{id:"q-21-33",text:"\u0418 \u041E\u043D \u2014 \u0422\u043E\u0442, \u041A\u0442\u043E \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u043B \u043D\u043E\u0447\u044C \u0438 \u0434\u0435\u043D\u044C, \u0441\u043E\u043B\u043D\u0446\u0435 \u0438 \u043B\u0443\u043D\u0443. \u0412\u0441\u0435 \u043F\u043B\u044B\u0432\u0443\u0442 \u043F\u043E \u043E\u0440\u0431\u0438\u0442\u0430\u043C.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u043B\u044C-\u0410\u043D\u0431\u0438\u0439\u0430 (21:33)"},{id:"q-20-114",text:"\u0418 \u0433\u043E\u0432\u043E\u0440\u0438: \xAB\u0413\u043E\u0441\u043F\u043E\u0434\u0438! \u041F\u0440\u0438\u0443\u043C\u043D\u043E\u0436\u044C \u043C\u043D\u0435 \u0437\u043D\u0430\u043D\u0438\u0435\xBB.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0422\u0430 \u0425\u0430 (20:114)"},{id:"q-3-190",text:"\u0412\u043E\u0438\u0441\u0442\u0438\u043D\u0443, \u0432 \u0441\u043E\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0438 \u043D\u0435\u0431\u0435\u0441 \u0438 \u0437\u0435\u043C\u043B\u0438, \u0438 \u0432 \u0441\u043C\u0435\u043D\u0435 \u043D\u043E\u0447\u0438 \u0438 \u0434\u043D\u044F \u2014 \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u0445 \u0440\u0430\u0437\u0443\u043C\u043E\u043C.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u043B\u044C \u0418\u043C\u0440\u0430\u043D (3:190)"},{id:"q-6-97",text:"\u041E\u043D \u2014 \u0422\u043E\u0442, \u041A\u0442\u043E \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u043B \u0434\u043B\u044F \u0432\u0430\u0441 \u0437\u0432\u0451\u0437\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0438 \u043F\u043E \u043D\u0438\u043C \u043F\u0443\u0442\u044C \u0432\u043E \u043C\u0440\u0430\u043A\u0435 \u0441\u0443\u0448\u0438 \u0438 \u043C\u043E\u0440\u044F.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u043B\u044C-\u0410\u043D'\u0430\u043C (6:97)"},{id:"q-51-7",text:"\u041A\u043B\u044F\u043D\u0443\u0441\u044C \u043D\u0435\u0431\u043E\u043C, \u043F\u043E\u043B\u043D\u044B\u043C \u0437\u0432\u0451\u0437\u0434\u043D\u044B\u0445 \u043F\u0443\u0442\u0435\u0439 \u0438 \u0441\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u0439.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u0437-\u0417\u0430\u0440\u0438\u0439\u0430\u0442 (51:7)"},{id:"q-67-3",text:"\u0422\u043E\u0442, \u041A\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043B \u0441\u0435\u043C\u044C \u043D\u0435\u0431\u0435\u0441 \u043E\u0434\u043D\u043E \u043D\u0430\u0434 \u0434\u0440\u0443\u0433\u0438\u043C. \u0422\u044B \u043D\u0435 \u0443\u0432\u0438\u0434\u0438\u0448\u044C \u0432 \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0438 \u041C\u0438\u043B\u043E\u0441\u0442\u0438\u0432\u043E\u0433\u043E \u043D\u0438\u043A\u0430\u043A\u043E\u0439 \u043D\u0435\u0441\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u0438.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u043B\u044C-\u041C\u0443\u043B\u044C\u043A (67:3)"},{id:"q-6-96",text:"\u041E\u043D \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E \u0437\u0430\u0440\u044E. \u041E\u043D \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u043B \u043D\u043E\u0447\u044C \u0434\u043B\u044F \u043F\u043E\u043A\u043E\u044F, \u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0438 \u043B\u0443\u043D\u0443 \u2014 \u0434\u043B\u044F \u0438\u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u043B\u044C-\u0410\u043D'\u0430\u043C (6:96)"},{id:"q-55-5",text:"\u0421\u043E\u043B\u043D\u0446\u0435 \u0438 \u043B\u0443\u043D\u0430 \u0434\u0432\u0438\u0436\u0443\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0441\u0442\u0440\u043E\u0433\u043E\u043C\u0443 \u0440\u0430\u0441\u0447\u0435\u0442\u0443.",source:"\u041A\u043E\u0440\u0430\u043D",category:"quran_sunnah",reference:"\u0421\u0443\u0440\u0430 \u0410\u0440-\u0420\u0430\u0445\u043C\u0430\u043D (55:5)"},{id:"s-1",text:"\u041F\u043E\u0438\u0441\u043A \u0437\u043D\u0430\u043D\u0438\u044F \u2014 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043C\u0443\u0441\u0443\u043B\u044C\u043C\u0430\u043D\u0438\u043D\u0430.",source:"\u0425\u0430\u0434\u0438\u0441",category:"quran_sunnah",reference:"\u0421\u0443\u043D\u0430\u043D \u0418\u0431\u043D \u041C\u0430\u0434\u0436\u0430"},{id:"s-2",text:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C \u2014 \u044D\u0442\u043E \u0443\u0442\u0435\u0440\u044F\u043D\u043D\u043E\u0435 \u0434\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0432\u0435\u0440\u0443\u044E\u0449\u0435\u0433\u043E: \u0433\u0434\u0435 \u0431\u044B \u043E\u043D \u0435\u0451 \u043D\u0438 \u043D\u0430\u0448\u0451\u043B, \u043E\u043D \u0438\u043C\u0435\u0435\u0442 \u043D\u0430 \u043D\u0435\u0451 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u043F\u0440\u0430\u0432\u043E.",source:"\u0425\u0430\u0434\u0438\u0441",category:"quran_sunnah",reference:"\u0414\u0436\u0430\u043C\u0438 \u0430\u0442-\u0422\u0438\u0440\u043C\u0438\u0437\u0438"},{id:"s-3",text:"\u0422\u043E\u043C\u0443, \u043A\u0442\u043E \u0432\u0441\u0442\u0430\u043B \u043D\u0430 \u043F\u0443\u0442\u044C \u0432 \u043F\u043E\u0438\u0441\u043A\u0430\u0445 \u0437\u043D\u0430\u043D\u0438\u044F, \u0410\u043B\u043B\u0430\u0445 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442 \u043F\u0443\u0442\u044C \u0432 \u0420\u0430\u0439.",source:"\u0425\u0430\u0434\u0438\u0441",category:"quran_sunnah",reference:"\u0421\u0430\u0445\u0438\u0445 \u041C\u0443\u0441\u043B\u0438\u043C"},{id:"s-4",text:"\u0423\u0447\u0451\u043D\u044B\u0435 \u2014 \u043D\u0430\u0441\u043B\u0435\u0434\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0440\u043E\u043A\u043E\u0432, \u0430 \u043F\u0440\u043E\u0440\u043E\u043A\u0438 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0432 \u043D\u0430\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u043E \u043D\u0435 \u0434\u0438\u043D\u0430\u0440\u044B, \u0430 \u0437\u043D\u0430\u043D\u0438\u0435.",source:"\u0425\u0430\u0434\u0438\u0441",category:"quran_sunnah",reference:"\u0421\u0443\u043D\u0430\u043D \u0410\u0431\u0443 \u0414\u0430\u0432\u0443\u0434\u0430"},{id:"b-1",text:"\u041D\u0435\u0431\u0435\u0441\u0430 \u043F\u0440\u043E\u043F\u043E\u0432\u0435\u0434\u0443\u044E\u0442 \u0441\u043B\u0430\u0432\u0443 \u0411\u043E\u0436\u0438\u044E, \u0438 \u043E \u0434\u0435\u043B\u0430\u0445 \u0440\u0443\u043A \u0415\u0433\u043E \u0432\u0435\u0449\u0430\u0435\u0442 \u0442\u0432\u0435\u0440\u0434\u044C.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041F\u0441\u0430\u043B\u043E\u043C 18:2"},{id:"b-2",text:"\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u044C: \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0439 \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u044C, \u0438 \u0432\u0441\u0435\u043C \u0438\u043C\u0435\u043D\u0438\u0435\u043C \u0442\u0432\u043E\u0438\u043C \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0439 \u0440\u0430\u0437\u0443\u043C.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041F\u0440\u0438\u0442\u0447\u0438 4:7"},{id:"b-3",text:"\u041E\u043D \u0438\u0441\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0432\u0435\u0437\u0434; \u0432\u0441\u0435\u0445 \u0438\u0445 \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u0438\u0445.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041F\u0441\u0430\u043B\u043E\u043C 146:4"},{id:"b-4",text:"\u041F\u043E\u0434\u043D\u0438\u043C\u0438\u0442\u0435 \u0433\u043B\u0430\u0437\u0430 \u0432\u0430\u0448\u0438 \u043D\u0430 \u0432\u044B\u0441\u043E\u0442\u0443 \u043D\u0435\u0431\u0435\u0441 \u0438 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0442\u043E \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u043B \u0438\u0445? \u041E\u043D \u0432\u0441\u0435\u0445 \u0438\u0445 \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u043E \u0438\u043C\u0435\u043D\u0438.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041A\u043D\u0438\u0433\u0430 \u043F\u0440\u043E\u0440\u043E\u043A\u0430 \u0418\u0441\u0430\u0438\u0438 40:26"},{id:"b-5",text:"\u0421\u0435\u0440\u0434\u0446\u0435 \u0440\u0430\u0437\u0443\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442 \u0437\u043D\u0430\u043D\u0438\u0435, \u0438 \u0443\u0445\u043E \u043C\u0443\u0434\u0440\u044B\u0445 \u0438\u0449\u0435\u0442 \u0437\u043D\u0430\u043D\u0438\u044F.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041F\u0440\u0438\u0442\u0447\u0438 18:15"},{id:"b-6",text:"\u0418 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0438\u044F\u0442\u044C, \u043A\u0430\u043A \u0441\u0432\u0435\u0442\u0438\u043B\u0430 \u043D\u0430 \u0442\u0432\u0435\u0440\u0434\u0438, \u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0432\u0448\u0438\u0435 \u043C\u043D\u043E\u0433\u0438\u0445 \u043A \u043F\u0440\u0430\u0432\u0434\u0435 \u2014 \u043A\u0430\u043A \u0437\u0432\u0435\u0437\u0434\u044B, \u0432\u043E\u0432\u0435\u043A\u0438, \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",source:"\u0411\u0438\u0431\u043B\u0438\u044F",category:"bible",reference:"\u041A\u043D\u0438\u0433\u0430 \u043F\u0440\u043E\u0440\u043E\u043A\u0430 \u0414\u0430\u043D\u0438\u0438\u043B\u0430 12:3"},{id:"sci-1",text:"\u041C\u044B \u2014 \u0441\u043F\u043E\u0441\u043E\u0431 \u0434\u043B\u044F \u043A\u043E\u0441\u043C\u043E\u0441\u0430 \u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u0433\u043E \u0441\u0435\u0431\u044F.",source:"\u041A\u0430\u0440\u043B \u0421\u0430\u0433\u0430\u043D",category:"science",reference:"\u041A\u043E\u0441\u043C\u043E\u0441"},{id:"sci-2",text:"\u0421\u0430\u043C\u043E\u0435 \u043D\u0435\u043F\u043E\u0441\u0442\u0438\u0436\u0438\u043C\u043E\u0435 \u0432 \u044D\u0442\u043E\u043C \u043C\u0438\u0440\u0435 \u2014 \u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u043E\u043D \u043F\u043E\u0441\u0442\u0438\u0436\u0438\u043C.",source:"\u0410\u043B\u044C\u0431\u0435\u0440\u0442 \u042D\u0439\u043D\u0448\u0442\u0435\u0439\u043D",category:"science"},{id:"sci-3",text:"\u0417\u043D\u0430\u043D\u0438\u0435 \u2014 \u044D\u0442\u043E \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449\u043D\u0438\u0446\u0430, \u0430 \u043A\u043B\u044E\u0447 \u043A \u043D\u0435\u0439 \u2014 \u0432\u043E\u043F\u0440\u043E\u0448\u0430\u043D\u0438\u0435 \u0438 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435.",source:"\u0410\u0431\u0443 \u0420\u0430\u0439\u0445\u0430\u043D \u0430\u043B\u044C-\u0411\u0438\u0440\u0443\u043D\u0438",category:"science"},{id:"sci-4",text:"\u0422\u043E\u0442, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0438\u0441\u0442\u0438\u043D\u0443, \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0435\u0442\u044B, \u0430 \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u0430\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043B\u043E\u0433\u0438\u043A\u0443.",source:"\u0418\u0431\u043D \u0430\u043B\u044C-\u0425\u0430\u0439\u0441\u0430\u043C (\u0410\u043B\u044C\u0445\u0430\u0437\u0435\u043D)",category:"science"},{id:"sci-5",text:"\u0414\u0432\u0435 \u0432\u0435\u0449\u0438 \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0434\u0443\u0448\u0443 \u043D\u043E\u0432\u044B\u043C \u0443\u0434\u0438\u0432\u043B\u0435\u043D\u0438\u0435\u043C: \u0437\u0432\u0435\u0437\u0434\u043D\u043E\u0435 \u043D\u0435\u0431\u043E \u043D\u0430\u0434\u043E \u043C\u043D\u043E\u0439 \u0438 \u043D\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u043A\u043E\u043D \u0432\u043E \u043C\u043D\u0435.",source:"\u0418\u043C\u043C\u0430\u043D\u0443\u0438\u043B \u041A\u0430\u043D\u0442",category:"science",reference:"\u041A\u0440\u0438\u0442\u0438\u043A\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u0443\u043C\u0430"},{id:"sci-6",text:"\u041A\u043D\u0438\u0433\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 \u044F\u0437\u044B\u043A\u0435 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0438.",source:"\u0413\u0430\u043B\u0438\u043B\u0435\u043E \u0413\u0430\u043B\u0438\u043B\u0435\u0439",category:"science"},{id:"sci-7",text:"\u0412\u0440\u0435\u043C\u044F \u2014 \u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u043D\u0435 \u0434\u0430\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C \u0441\u043B\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0441\u0440\u0430\u0437\u0443, \u0430 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u2014 \u0442\u043E, \u0447\u0442\u043E \u043D\u0435 \u0434\u0430\u0435\u0442 \u0438\u043C \u0441\u043B\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435.",source:"\u0414\u0436\u043E\u043D \u0410\u0440\u0447\u0438\u0431\u0430\u043B\u044C\u0434 \u0423\u0438\u043B\u0435\u0440",category:"science"},{id:"sci-8",text:"\u041C\u044B \u0441\u0442\u043E\u0438\u043C \u043D\u0430 \u043F\u043B\u0435\u0447\u0430\u0445 \u0433\u0438\u0433\u0430\u043D\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430.",source:"\u0418\u0441\u0430\u0430\u043A \u041D\u044C\u044E\u0442\u043E\u043D",category:"science"}];async function ro(i){let t=[],e=i.vault.getMarkdownFiles(),n=new Set;for(let s of e){let r=s.basename.toLowerCase();if(r==="\u0446\u0438\u0442\u0430\u0442\u044B"||r==="quotes"||r==="quote"||r.includes("\u0446\u0438\u0442\u0430\u0442")){n.add(s);continue}let o=i.metadataCache.getFileCache(s);if(o!=null&&o.tags)for(let a of o.tags){let l=a.tag.toLowerCase();if(l==="#\u0446\u0438\u0442\u0430\u0442\u0430"||l==="#quote"||l==="#quotes"||l.startsWith("#\u0446\u0438\u0442\u0430\u0442")){n.add(s);break}}}for(let s of n)try{let o=(await i.vault.read(s)).split(/\r?\n/),a="";for(let l=0;l<o.length;l++){let c=o[l].trim();if(c.startsWith(">")){let h=c.replace(/^>+\s*/,"").trim();h&&(a?a+=" "+h:a=h)}else if(a&&(Nl(a,s.basename,t),a=""),(c.startsWith("-")||c.startsWith("*"))&&c.includes('"')){let h=c.replace(/^[-*]\s*/,"").trim();Nl(h,s.basename,t)}}a&&Nl(a,s.basename,t)}catch{}return t}function Nl(i,t,e){var o;if(!i||i.length<10)return;let n=i.split(/\s+[—–-]\s+/),s=n[0].trim(),r=((o=n[1])==null?void 0:o.trim())||t;s=s.replace(/^["«'“]+|["»'”]+$/g,"").trim(),s.length>=8&&e.push({id:`vault-${e.length+1}`,text:s,source:r,category:"vault",reference:t})}function eu(i,t,e){var a;let n=i==="vault"?t:i==="all"?[...tu,...t]:tu.filter(l=>l.category===i);if(n.length===0)return null;let s=n.length>1&&e?n.filter(l=>l.id!==e):n,r=s.length>0?s:n,o=Math.floor(Math.random()*r.length);return(a=r[o])!=null?a:null}function Mt(i,t,e){let n=createEl(i,t?{cls:t}:{});return e!==void 0&&(n.textContent=e),n}function vv(i){return`#${i.toString(16).padStart(6,"0")}`}function _v(i){let t=Wt();return i>=5&&i<12?t.greetingMorning:i>=12&&i<18?t.greetingDay:i>=18&&i<23?t.greetingEvening:t.greetingNight}var ts=class{constructor(t,e){this.handlers=e;this.cardLabels=[];this.activeTab="overview";this.activeFolder=null;this.activeQuoteCategory="all";this.currentQuote=null;this.vaultQuotes=[];this.folders=[];this.recent=[];this.hubs=[];this.dataName="";let n=Wt();this.root=Mt("div","ng-dashboard"),t.appendChild(this.root);let s=Mt("div","ng-head");this.eyebrowEl=Mt("div","ng-eyebrow",n.eyebrow),this.greetingEl=Mt("div","ng-greeting"),this.subEl=Mt("div","ng-sub"),s.append(this.eyebrowEl,this.greetingEl,this.subEl),this.root.appendChild(s);let r=Mt("div","ng-meta");this.clockEl=Mt("div","ng-clock"),this.dateEl=Mt("div","ng-date"),r.append(this.clockEl,this.dateEl),this.root.appendChild(r);let o=Mt("div","ng-tabs");this.tabOverviewBtn=Mt("button","ng-tab-btn is-active",n.tabOverview),this.tabHubsBtn=Mt("button","ng-tab-btn",n.tabHubs),this.tabRecentBtn=Mt("button","ng-tab-btn",n.tabRecent),this.tabOverviewBtn.addEventListener("click",()=>this.setTab("overview")),this.tabHubsBtn.addEventListener("click",()=>this.setTab("hubs")),this.tabRecentBtn.addEventListener("click",()=>this.setTab("recent")),o.append(this.tabOverviewBtn,this.tabHubsBtn,this.tabRecentBtn),this.root.appendChild(o),this.cardsEl=Mt("div","ng-cards");let a=p=>{let g=Mt("div","ng-card"),v=Mt("span","ng-num","0"),m=Mt("span","ng-lbl",p);return g.append(v,m),this.cardsEl.appendChild(g),this.cardLabels.push(m),v};this.statNotes=a(n.statNotes),this.statProjects=a(n.statProjects),this.statLinks=a(n.statLinks),this.statTags=a(n.statTags),this.root.appendChild(this.cardsEl),this.quoteCardEl=Mt("div","ng-quote-card");let l=Mt("div","ng-quote-header"),c=Mt("div","ng-quote-title-box"),h=Mt("span","ng-quote-icon");(0,ui.setIcon)(h,"sparkles"),this.quoteTitleEl=Mt("span","ng-quote-title",n.quoteTitle),c.append(h,this.quoteTitleEl);let u=Mt("div","ng-quote-actions");this.quoteNextBtn=Mt("button","ng-quote-btn",""),this.quoteNextBtn.title=n.quoteNext,this.quoteNextBtn.setAttribute("aria-label",n.quoteNext),(0,ui.setIcon)(this.quoteNextBtn,"refresh-cw"),this.quoteNextBtn.addEventListener("click",()=>this.nextQuote()),this.quoteCopyBtn=Mt("button","ng-quote-btn",""),this.quoteCopyBtn.title=n.quoteCopied,this.quoteCopyBtn.setAttribute("aria-label",n.quoteCopied),(0,ui.setIcon)(this.quoteCopyBtn,"copy"),this.quoteCopyBtn.addEventListener("click",()=>this.copyQuote()),u.append(this.quoteNextBtn,this.quoteCopyBtn),l.append(c,u),this.quoteCatsEl=Mt("div","ng-quote-cats"),this.renderQuoteCategories(),this.quoteTextEl=Mt("div","ng-quote-text");let f=Mt("div","ng-quote-footer");this.quoteSourceEl=Mt("span","ng-quote-source"),this.quoteRefEl=Mt("span","ng-quote-ref"),f.append(this.quoteSourceEl,this.quoteRefEl),this.quoteCardEl.append(l,this.quoteCatsEl,this.quoteTextEl,f),this.root.appendChild(this.quoteCardEl),this.folderSection=Mt("div","ng-section"),this.folderTitleEl=Mt("div","ng-section-title",n.sectionFolders),this.foldersEl=Mt("div","ng-chips"),this.folderSection.append(this.folderTitleEl,this.foldersEl),this.root.appendChild(this.folderSection),this.hubsSection=Mt("div","ng-section is-hidden"),this.hubsTitleEl=Mt("div","ng-section-title",n.sectionHubs),this.hubsEl=Mt("div","ng-recent"),this.hubsSection.append(this.hubsTitleEl,this.hubsEl),this.root.appendChild(this.hubsSection),this.recentSection=Mt("div","ng-section is-hidden"),this.recentTitleEl=Mt("div","ng-section-title",n.sectionRecent),this.recentEl=Mt("div","ng-recent"),this.recentSection.append(this.recentTitleEl,this.recentEl),this.root.appendChild(this.recentSection),this.hintEl=Mt("div","ng-hint",n.hint),this.root.appendChild(this.hintEl),this.updateClock(),this.clockTimer=window.setInterval(()=>this.updateClock(),2e4),this.nextQuote()}setTab(t){this.activeTab=t,this.tabOverviewBtn.classList.toggle("is-active",t==="overview"),this.tabHubsBtn.classList.toggle("is-active",t==="hubs"),this.tabRecentBtn.classList.toggle("is-active",t==="recent");let e=t==="overview",n=t==="hubs",s=t==="recent";this.cardsEl.classList.toggle("is-hidden",!e),this.quoteCardEl.classList.toggle("is-hidden",!e),this.folderSection.classList.toggle("is-hidden",!e),this.hintEl.classList.toggle("is-hidden",!e),this.hubsSection.classList.toggle("is-hidden",!n),this.recentSection.classList.toggle("is-hidden",!s)}renderQuoteCategories(){this.quoteCatsEl.empty();let t=Wt(),e=[["all",t.quoteCatAll],["quran_sunnah",t.quoteCatQuranSunnah],["bible",t.quoteCatBible],["science",t.quoteCatScience]];this.vaultQuotes.length>0&&e.push(["vault",t.quoteCatVault]);for(let[n,s]of e){let r=Mt("button","ng-quote-cat-btn",s);r.classList.toggle("is-active",this.activeQuoteCategory===n),r.addEventListener("click",()=>{this.activeQuoteCategory=n,this.renderQuoteCategories(),this.nextQuote()}),this.quoteCatsEl.appendChild(r)}}nextQuote(){var e;let t=eu(this.activeQuoteCategory,this.vaultQuotes,(e=this.currentQuote)==null?void 0:e.id);this.currentQuote=t,this.renderQuote()}renderQuote(){let t=Wt();if(!this.currentQuote){this.activeQuoteCategory==="vault"?(this.quoteTextEl.textContent=t.quoteEmptyVault,this.quoteSourceEl.textContent="",this.quoteRefEl.textContent=""):(this.quoteTextEl.textContent="",this.quoteSourceEl.textContent="",this.quoteRefEl.textContent="");return}this.quoteTextEl.textContent=`\xAB${this.currentQuote.text}\xBB`,this.quoteSourceEl.textContent=this.currentQuote.source,this.quoteRefEl.textContent=this.currentQuote.reference?`\xB7 ${this.currentQuote.reference}`:""}copyQuote(){if(!this.currentQuote)return;let t=`\xAB${this.currentQuote.text}\xBB \u2014 ${this.currentQuote.source}${this.currentQuote.reference?` (${this.currentQuote.reference})`:""}`;navigator.clipboard.writeText(t),(0,ui.setIcon)(this.quoteCopyBtn,"check"),this.quoteCopyBtn.classList.add("is-success"),window.setTimeout(()=>{(0,ui.setIcon)(this.quoteCopyBtn,"copy"),this.quoteCopyBtn.classList.remove("is-success")},1400)}updateClock(){let t=Wt(),e=new Date;this.clockEl.textContent=e.toLocaleTimeString(t.locale,{hour:"2-digit",minute:"2-digit"}),this.dateEl.textContent=e.toLocaleDateString(t.locale,{weekday:"long",day:"numeric",month:"long"});let n=_v(e.getHours());this.greetingEl.textContent=this.dataName?`${n}, ${this.dataName}`:n}setVisible(t){this.root.classList.toggle("is-hidden",!t)}isVisible(){return!this.root.classList.contains("is-hidden")}relocalize(){let t=Wt();this.eyebrowEl.textContent=t.eyebrow,this.tabOverviewBtn.textContent=t.tabOverview,this.tabHubsBtn.textContent=t.tabHubs,this.tabRecentBtn.textContent=t.tabRecent,this.quoteTitleEl.textContent=t.quoteTitle,this.quoteNextBtn.title=t.quoteNext,this.quoteCopyBtn.title=t.quoteCopied,this.folderTitleEl.textContent=t.sectionFolders,this.hubsTitleEl.textContent=t.sectionHubs,this.recentTitleEl.textContent=t.sectionRecent,this.hintEl.textContent=t.hint;let e=[t.statNotes,t.statProjects,t.statLinks,t.statTags];this.cardLabels.forEach((n,s)=>{var r;n.textContent=(r=e[s])!=null?r:""}),this.renderQuoteCategories(),this.renderQuote(),this.updateClock(),this.renderFolders(),this.renderHubs(),this.renderRecent(this.recent)}update(t){var n;let e=Wt();if(this.dataName=t.userName,this.updateClock(),this.subEl.textContent=`${e.noteCount(t.notes)} \xB7 ${e.linkCount(t.links)}`,this.statNotes.textContent=String(t.notes),this.statProjects.textContent=String(t.projects),this.statLinks.textContent=String(t.links),this.statTags.textContent=String(t.tags),t.vaultQuotes){let s=this.vaultQuotes.length;this.vaultQuotes=t.vaultQuotes,s===0&&t.vaultQuotes.length>0&&this.renderQuoteCategories()}this.currentQuote||this.nextQuote(),this.folders=t.folders,this.recent=t.recent,this.hubs=(n=t.hubs)!=null?n:[],this.renderFolders(),this.renderHubs(),this.renderRecent(t.recent)}renderFolders(){this.foldersEl.empty();let t=Mt("button","ng-chip",Wt().chipAll);t.classList.toggle("is-active",this.activeFolder===null),t.addEventListener("click",()=>{this.activeFolder=null,this.handlers.onFolder(null),this.renderFolders()}),this.foldersEl.appendChild(t);for(let e of this.folders){let n=Mt("button","ng-chip");n.classList.toggle("is-active",this.activeFolder===e.name);let s=Mt("span","ng-dot");s.setCssStyles({background:vv(e.color)});let r=Mt("span","ng-chip-label",e.name),o=Mt("span","ng-chip-count",String(e.count));n.append(s,r,o),n.title=`${e.name} \u2014 ${e.count}`,n.addEventListener("click",()=>{this.activeFolder=this.activeFolder===e.name?null:e.name,this.handlers.onFolder(this.activeFolder),this.renderFolders()}),this.foldersEl.appendChild(n)}}renderHubs(){if(this.hubsEl.empty(),this.hubs.length===0){this.hubsEl.appendChild(Mt("div","ng-empty",Wt().emptyRecent));return}for(let t of this.hubs){let e=Mt("button","ng-recent-item"),n=Mt("span","ng-recent-title",t.title),s=Mt("span","ng-recent-when",Wt().linkCount(t.degree));e.append(n,s),e.title=t.path,e.addEventListener("click",()=>this.handlers.onOpenNote(t.path)),this.hubsEl.appendChild(e)}}renderRecent(t){if(this.recentEl.empty(),t.length===0){this.recentEl.appendChild(Mt("div","ng-empty",Wt().emptyRecent));return}for(let e of t){let n=Mt("button","ng-recent-item"),s=Mt("span","ng-recent-title",e.title),r=Mt("span","ng-recent-when",e.when);n.append(s,r),n.title=e.path,n.addEventListener("click",()=>this.handlers.onOpenNote(e.path)),this.recentEl.appendChild(n)}}destroy(){window.clearInterval(this.clockTimer),this.root.remove()}};function nu(i,t,e){let n=createEl("button",{cls:"ng-tool",title:t,attr:{"aria-label":t}});return(0,ui.setIcon)(n,i),n.addEventListener("click",e),n}var qe="note-galaxy-view",xv=60;function Ul(i){let t=Wt(),e=Date.now()-i,n=Math.floor(e/6e4);if(n<1)return t.whenJustNow;if(n<60)return t.whenMinutes(n);let s=Math.floor(n/60);if(s<24)return t.whenHours(s);let r=Math.floor(s/24);return r<30?t.whenDays(r):t.whenMonths(Math.floor(r/30))}var sn=class extends oo.ItemView{constructor(e,n){super(e);this.notes=null;this.pulses=null;this.jets=null;this.infall=null;this.infallPath=null;this.noticeEl=null;this.quality=1;this.activityLayoutApplied=!0;this.hubIndex=-1;this.handleContextLost=e=>{var n;e.preventDefault(),window.cancelAnimationFrame(this.raf),(n=this.root)==null||n.addClass("is-context-lost")};this.handleContextRestored=()=>{this.restoreContext()};this.frameAvg=0;this.framesSinceCheck=0;this.labels=[];this.toolbarButtons=[];this.activeFolder=null;this.lastGraph=null;this.clock=new Zi;this.raycaster=new Fr;this.pointer=new ht;this.tmpVec=new D;this.tmpNdc=new D;this.time=0;this.raf=0;this.lastRaycast=0;this.rebuildTimer=0;this.downPoint=null;this.resizeObserver=null;this.plugin=n}getViewType(){return qe}getDisplayText(){return Wt().viewTitle}getIcon(){return"orbit"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("ng-host"),this.root=this.contentEl.createDiv({cls:"ng-root"}),this.canvas=this.root.createEl("canvas",{cls:"ng-canvas"}),this.labelLayer=this.root.createDiv({cls:"ng-labels"}),this.hoverEl=this.labelLayer.createDiv({cls:"ng-label ng-label-hover is-hidden"}),this.noticeEl=this.root.createDiv({cls:"ng-notice",text:Wt().contextLost}),this.dashboard=new ts(this.root,{onOpenNote:e=>this.openNote(e),onRefresh:()=>this.rebuild(),onReset:()=>this.resetView(),onToggle:()=>this.toggleDashboard(),onFolder:e=>{var n;this.activeFolder=e,(n=this.notes)==null||n.setFolderFilter(e)}}),this.dashboard.setVisible(this.plugin.settings.showDashboard),this.buildToolbar(),this.initScene(),this.rebuild(),this.attachEvents(),this.startLoop()}initScene(){let e=new Cr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.toneMapping=As,e.toneMappingExposure=1,e.setClearColor(197642,1),this.renderer=e,this.scene=new Rr,this.camera=new De(55,1,.1,600),this.camera.position.set(6,30,68),this.controls=new Gr(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.7,this.controls.minDistance=9,this.controls.maxDistance=130,this.controls.target.set(0,0,0),this.blackhole=new Kr(this.plugin.settings.coreTheme),this.scene.add(this.blackhole.group),this.jets=new no,this.scene.add(this.jets.group),this.composer=new Yr(e),this.composer.addPass(new $r(this.scene,this.camera)),this.bloom=new Ki(new ht(1,1),this.plugin.settings.bloom,.35,.62),this.composer.addPass(this.bloom),this.composer.addPass(new Zr),this.resize()}buildToolbar(){let e=this.root.createDiv({cls:"ng-toolbar"}),n=[["refresh-cw",()=>Wt().toolbarRebuild,()=>this.rebuild()],["crosshair",()=>Wt().toolbarReset,()=>this.resetView()],["sun",()=>this.notes&&this.notes.getFocalNode()>=0?Wt().actionResetCenter:Wt().actionMakeCenter,()=>this.toggleFocalHovered()],["layout-dashboard",()=>Wt().commandOpenDashboard,()=>void this.plugin.activateDashboardView()]];for(let[s,r,o]of n){let a=nu(s,r(),o);this.toolbarButtons.push({el:a,title:r}),e.appendChild(a)}}attachEvents(){this.registerDomEvent(this.canvas,"pointermove",e=>this.handlePointerMove(e)),this.registerDomEvent(this.canvas,"pointerdown",e=>{this.downPoint={x:e.clientX,y:e.clientY}}),this.registerDomEvent(this.canvas,"pointerup",e=>this.handlePointerUp(e)),this.registerDomEvent(this.canvas,"pointerleave",()=>{var e;(e=this.notes)==null||e.setHovered(-1),this.canvas.toggleClass("is-hover-node",!1)}),this.registerDomEvent(this.canvas,"contextmenu",e=>{var s,r,o,a,l;e.preventDefault();let n=(r=(s=this.notes)==null?void 0:s.getHovered())!=null?r:-1;n>=0?((a=(o=this.notes)==null?void 0:o.getFocalNode())!=null?a:-1)===n?this.resetView():((l=this.notes)==null||l.setFocalNode(n),this.controls.target.set(0,0,0),this.controls.update()):this.resetView()}),this.canvas.addEventListener("webglcontextlost",this.handleContextLost),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.registerEvent(this.app.metadataCache.on("resolved",()=>{this.rebuildTimer&&window.clearTimeout(this.rebuildTimer),this.rebuildTimer=window.setTimeout(()=>{this.rebuildTimer=0,this.rebuild()},2500)}))}resize(){if(!this.root)return;let e=this.root.clientWidth||800,n=this.root.clientHeight||600;this.renderer.setSize(e,n,!1),this.composer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}rebuild(){if(!this.scene)return;let e=Qr(this.app,this.plugin.settings.maxNodes,this.plugin.settings.includeTags);Ih(e.nodes,e.links,{minRadius:16,maxRadius:42,activityBias:this.plugin.settings.activityLayout?1:0}),this.lastGraph=e,this.activityLayoutApplied=this.plugin.settings.activityLayout,this.hubIndex=-1;for(let n=0;n<e.nodes.length;n++)(this.hubIndex<0||e.nodes[n].degree>e.nodes[this.hubIndex].degree)&&(this.hubIndex=n);this.notes&&(this.scene.remove(this.notes.group),this.notes.dispose(),this.notes=null),this.notes=new to(e.nodes,e.links,this.plugin.settings.nodeScale,this.plugin.settings.orbitalMotion),this.notes.setFolderFilter(this.activeFolder),this.scene.add(this.notes.group),this.pulses&&(this.scene.remove(this.pulses.group),this.pulses.dispose(),this.pulses=null),this.plugin.settings.linkPulses&&(this.pulses=new io(e.links),this.scene.add(this.pulses.group)),this.updateJets(),this.buildLabels(),this.refreshDashboard(e)}updateJets(){if(!this.jets)return;let e=this.lastGraph;if(!this.plugin.settings.quasar||!e||e.nodes.length===0){this.jets.setPower(0),this.jets.setFeed(null);return}let n=this.hubIndex;(n<0||n>=e.nodes.length)&&(n=0);let s=e.nodes[n];if(!s||s.degree<3){this.jets.setPower(0),this.jets.setFeed(null);return}this.jets.setPower(Math.min(1,Math.log2(1+s.degree)/8)),this.notes?(this.notes.worldPosition(n,this.time,this.tmpVec),this.jets.setFeed(this.tmpVec)):this.jets.setFeed(new D(s.x,s.y,s.z))}prefersReducedMotion(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}restoreContext(){var e,n,s;this.root&&(window.cancelAnimationFrame(this.raf),(e=this.infall)==null||e.dispose(),this.infall=null,this.infallPath=null,(n=this.jets)==null||n.dispose(),this.jets=null,(s=this.notes)==null||s.dispose(),this.notes=null,this.controls.dispose(),this.composer.dispose(),this.blackhole.dispose(),this.renderer.dispose(),this.quality=1,this.initScene(),this.rebuild(),this.startLoop(),this.root.removeClass("is-context-lost"))}buildLabels(){for(let n of this.labels)n.el.remove();if(this.labels=[],!this.notes||!this.plugin.settings.showLabels)return;let e=this.notes.nodes.map((n,s)=>({index:s,degree:n.degree})).sort((n,s)=>s.degree-n.degree).slice(0,xv);for(let{index:n}of e){let s=this.labelLayer.createDiv({cls:"ng-label",text:this.notes.nodes[n].title});this.labels.push({index:n,el:s})}}refreshDashboard(e){let n=[...this.app.vault.getMarkdownFiles()].sort((s,r)=>r.stat.mtime-s.stat.mtime).slice(0,8).map(s=>({title:s.basename,path:s.path,when:Ul(s.stat.mtime)}));ro(this.app).then(s=>{this.dashboard.update({userName:this.plugin.settings.userName,notes:e.totalNotes,projects:e.totalProjects,links:e.totalLinks,tags:e.totalTags,folders:e.folders,hubs:e.topHubs,recent:n,vaultQuotes:s})})}trackFrameRate(e){if(!this.plugin.settings.adaptiveQuality){this.quality!==1&&this.setQuality(1);return}this.frameAvg=this.frameAvg===0?e:this.frameAvg*.92+e*.08,!(++this.framesSinceCheck<90)&&(this.framesSinceCheck=0,this.frameAvg>.033&&this.quality>.5?this.setQuality(.5):this.frameAvg<.02&&this.quality<1&&this.setQuality(1))}setQuality(e){this.quality=e,this.frameAvg=0,this.framesSinceCheck=0,this.renderer.setPixelRatio(e<1?1:Math.min(window.devicePixelRatio||1,1.75)),this.resize()}startLoop(){this.clock.start();let e=()=>{var s,r;this.raf=window.requestAnimationFrame(e);let n=Math.min(this.clock.getDelta(),.08);document.hidden||(this.time+=n,this.blackhole.update(this.time,this.plugin.settings.diskSpeed),this.notes&&(this.notes.group.rotation.y+=n*this.plugin.settings.orbitSpeed*.06,this.notes.update(this.time),this.notes.group.updateMatrixWorld(),this.updateLabels()),this.pulses&&this.notes&&this.pulses.update(n,this.notes),this.infall&&(this.infall.update(n),this.infall.takeArrive()&&this.infallPath&&this.openNote(this.infallPath),this.infall.finished&&((s=this.notes)==null||s.group.remove(this.infall.group),this.infall.dispose(),this.infall=null,this.infallPath=null,(r=this.notes)==null||r.setFallingNode(-1))),this.jets&&(this.jets.update(this.time),this.plugin.settings.quasar&&this.notes&&this.lastGraph&&this.updateJets()),this.bloom.strength=this.plugin.settings.bloom*this.quality+(this.infall?this.infall.bloomBoost*.15:0),this.bloom.enabled=this.quality>=1&&this.bloom.strength>.01,this.trackFrameRate(n),this.controls.update(),this.composer.render())};this.raf=window.requestAnimationFrame(e)}updateLabels(){if(!this.notes)return;let e=this.canvas.clientWidth,n=this.canvas.clientHeight;if(e===0||n===0)return;let s=this.camera.position;for(let h of this.labels){let u=this.notes.worldPosition(h.index,this.time,this.tmpVec),f=u.distanceTo(s),p=this.tmpNdc.copy(u).project(this.camera);if(p.z>1||p.z<-1||f>90){h.el.setCssStyles({opacity:"0"});continue}let g=(p.x*.5+.5)*e,v=(-p.y*.5+.5)*n;h.el.setCssStyles({transform:`translate(-50%, -50%) translate(${g.toFixed(1)}px, ${v.toFixed(1)}px)`,opacity:String(Math.max(.18,Math.min(.95,1.3-f/85)))})}let r=this.notes.getHovered();if(r<0){this.hoverEl.addClass("is-hidden");return}let o=this.notes.worldPosition(r,this.time,this.tmpVec),a=this.tmpNdc.copy(o).project(this.camera);if(a.z>1||a.z<-1){this.hoverEl.addClass("is-hidden");return}let l=(a.x*.5+.5)*e,c=(-a.y*.5+.5)*n;this.hoverEl.textContent=this.notes.nodes[r].title,this.hoverEl.setCssStyles({transform:`translate(-50%, -50%) translate(${l.toFixed(1)}px, ${c.toFixed(1)}px)`}),this.hoverEl.removeClass("is-hidden")}handlePointerMove(e){let n=performance.now();if(n-this.lastRaycast<45||(this.lastRaycast=n,!this.notes))return;let s=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.raycaster.intersectObject(this.notes.mesh,!1),o=r.length>0?r[0].instanceId:void 0,a=typeof o=="number"?o:-1;this.notes.setHovered(a),this.canvas.toggleClass("is-hover-node",a>=0)}handlePointerUp(e){let n=this.downPoint;if(this.downPoint=null,!n||!this.notes||Math.hypot(e.clientX-n.x,e.clientY-n.y)>5)return;let s=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-s.left)/s.width*2-1,-((e.clientY-s.top)/s.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.raycaster.intersectObject(this.notes.mesh,!1),o=r.length>0&&typeof r[0].instanceId=="number"?r[0].instanceId:this.notes.getHovered();if(o<0)return;let a=this.notes.nodes[o];if(a){if(a.kind==="tag"){this.focusNode(a.path);return}if(this.plugin.settings.transition&&!this.prefersReducedMotion()&&!this.infall){let l=this.notes.localPosition(o,this.tmpVec);this.notes.setFallingNode(o),this.infall=new eo({position:l.clone(),color:a.color}),this.notes.group.add(this.infall.group),this.infallPath=a.path;return}this.openNote(a.path)}}openNote(e){let n=this.app.vault.getAbstractFileByPath(e);n instanceof oo.TFile&&this.app.workspace.getLeaf(!1).openFile(n)}resetView(){var e,n,s;(e=this.notes)==null||e.setFocalNode(-1),(n=this.notes)==null||n.setFallingNode(-1),this.infall&&((s=this.notes)==null||s.group.remove(this.infall.group),this.infall.dispose(),this.infall=null,this.infallPath=null),this.camera.position.set(6,30,68),this.controls.target.set(0,0,0),this.controls.update()}setActiveFolder(e){var n;this.activeFolder=e,(n=this.notes)==null||n.setFolderFilter(e)}focusNode(e){if(!this.notes)return;let n=this.notes.nodes.findIndex(s=>s.path===e);n<0||(this.notes.setHovered(n),this.notes.worldPosition(n,this.time,this.tmpVec),this.controls.target.copy(this.tmpVec),this.controls.update())}toggleFocalHovered(){if(!this.notes)return;if(this.notes.getFocalNode()>=0){this.resetView();return}let n=this.notes.getHovered();n>=0&&(this.notes.setFocalNode(n),this.controls.target.set(0,0,0),this.controls.update())}toggleDashboard(){let e=!this.dashboard.isVisible();this.dashboard.setVisible(e),this.plugin.settings.showDashboard=e,this.plugin.saveSettings()}applySettings(){var n,s;if(!this.root)return;(n=this.blackhole)==null||n.setTheme(this.plugin.settings.coreTheme),this.bloom&&(this.bloom.strength=this.plugin.settings.bloom*this.quality,this.bloom.enabled=this.quality>=1&&this.bloom.strength>.01),this.notes&&(this.notes.setNodeScale(this.plugin.settings.nodeScale),this.notes.orbitalMotion=this.plugin.settings.orbitalMotion),this.pulses&&(this.pulses.group.visible=this.plugin.settings.linkPulses),this.dashboard.setVisible(this.plugin.settings.showDashboard),this.dashboard.relocalize(),this.noticeEl&&(this.noticeEl.textContent=Wt().contextLost),this.lastGraph&&this.refreshDashboard(this.lastGraph),this.updateJets(),this.lastGraph&&this.activityLayoutApplied!==this.plugin.settings.activityLayout&&this.rebuild();for(let r of this.toolbarButtons){let o=r.title();r.el.title=o,r.el.setAttribute("aria-label",o)}this.buildLabels();let e=this.leaf;(s=e.updateHeader)==null||s.call(e)}async onClose(){var e,n,s,r,o,a,l,c,h,u,f,p,g;window.cancelAnimationFrame(this.raf),(e=this.canvas)==null||e.removeEventListener("webglcontextlost",this.handleContextLost),(n=this.canvas)==null||n.removeEventListener("webglcontextrestored",this.handleContextRestored),this.rebuildTimer&&window.clearTimeout(this.rebuildTimer),(s=this.resizeObserver)==null||s.disconnect(),this.resizeObserver=null,(r=this.controls)==null||r.dispose(),(o=this.composer)==null||o.dispose(),(a=this.notes)==null||a.dispose(),this.notes=null,(l=this.pulses)==null||l.dispose(),this.pulses=null,(c=this.infall)==null||c.dispose(),this.infall=null,this.infallPath=null,(h=this.jets)==null||h.dispose(),this.jets=null,(u=this.blackhole)==null||u.dispose(),(f=this.dashboard)==null||f.destroy(),(p=this.renderer)==null||p.dispose(),(g=this.renderer)==null||g.forceContextLoss(),this.contentEl.removeClass("ng-host"),this.contentEl.empty()}};var ao=require("obsidian");var di="note-galaxy-dashboard",es=class extends ao.ItemView{constructor(t,e){super(t),this.plugin=e}getViewType(){return di}getDisplayText(){return Wt().dashboardTitle}getIcon(){return"layout-dashboard"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("ng-host","ng-dashboard-host"),this.dashboard=new ts(this.contentEl,{onOpenNote:t=>this.handleNoteClick(t),onRefresh:()=>void this.refresh(),onReset:()=>this.focusGraphView(),onToggle:()=>{},onFolder:t=>this.filterFolderInGraph(t)}),this.dashboard.setVisible(!0),this.refresh(),this.registerEvent(this.app.metadataCache.on("resolved",()=>void this.refresh()))}handleNoteClick(t){if(t.startsWith("tag:")){this.highlightTagInGraph(t);return}let e=this.app.vault.getAbstractFileByPath(t);e instanceof ao.TFile&&(this.focusNodeInGraph(t),this.app.workspace.getLeaf(!1).openFile(e))}focusGraphView(){for(let t of this.app.workspace.getLeavesOfType(qe))t.view instanceof sn&&t.view.resetView()}focusNodeInGraph(t){for(let e of this.app.workspace.getLeavesOfType(qe))e.view instanceof sn&&e.view.focusNode(t)}filterFolderInGraph(t){for(let e of this.app.workspace.getLeavesOfType(qe))e.view instanceof sn&&e.view.setActiveFolder(t)}highlightTagInGraph(t){for(let e of this.app.workspace.getLeavesOfType(qe))e.view instanceof sn&&e.view.focusNode(t)}async refresh(t){if(!this.dashboard)return;let e=t!=null?t:Qr(this.app,this.plugin.settings.maxNodes,this.plugin.settings.includeTags),n=[...this.app.vault.getMarkdownFiles()].sort((r,o)=>o.stat.mtime-r.stat.mtime).slice(0,8).map(r=>({title:r.basename,path:r.path,when:Ul(r.stat.mtime)})),s=await ro(this.app);this.dashboard.update({userName:this.plugin.settings.userName,notes:e.totalNotes,projects:e.totalProjects,links:e.totalLinks,tags:e.totalTags,folders:e.folders,hubs:e.topHubs,recent:n,vaultQuotes:s})}relocalize(){var e,n;(e=this.dashboard)==null||e.relocalize(),this.refresh();let t=this.leaf;(n=t.updateHeader)==null||n.call(t)}async onClose(){var t;(t=this.dashboard)==null||t.destroy(),this.contentEl.removeClass("ng-host","ng-dashboard-host"),this.contentEl.empty()}};var iu=require("obsidian");var su={language:"auto",coreTheme:"gargantua",userName:"",showDashboard:!1,showLabels:!0,transition:!0,quasar:!0,activityLayout:!0,adaptiveQuality:!0,includeTags:!0,orbitalMotion:!0,linkPulses:!0,bloom:.32,diskSpeed:1,nodeScale:1,orbitSpeed:.6,maxNodes:1200},lo=class extends iu.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}getSettingDefinitions(){let t=Wt(),e={auto:t.languageAuto};for(let n of so)e[n.code]=n.label;return[{name:t.settingLanguage,desc:t.settingLanguageDesc,control:{key:"language",type:"dropdown",options:e}},{name:t.settingCoreTheme,desc:t.settingCoreThemeDesc,control:{key:"coreTheme",type:"dropdown",options:{gargantua:t.themeGargantua,pulsar:t.themePulsar,singularity:t.themeSingularity}}},{name:t.settingName,desc:t.settingNameDesc,control:{key:"userName",type:"text",placeholder:t.settingNamePlaceholder}},{name:t.settingDashboard,desc:t.settingDashboardDesc,control:{key:"showDashboard",type:"toggle"}},{name:t.settingLabels,desc:t.settingLabelsDesc,control:{key:"showLabels",type:"toggle"}},{name:t.settingTransition,desc:t.settingTransitionDesc,control:{key:"transition",type:"toggle"}},{name:t.settingQuasar,desc:t.settingQuasarDesc,control:{key:"quasar",type:"toggle"}},{name:t.settingActivity,desc:t.settingActivityDesc,control:{key:"activityLayout",type:"toggle"}},{name:t.settingAdaptive,desc:t.settingAdaptiveDesc,control:{key:"adaptiveQuality",type:"toggle"}},{name:t.settingIncludeTags,desc:t.settingIncludeTagsDesc,control:{key:"includeTags",type:"toggle"}},{name:t.settingOrbitalMotion,desc:t.settingOrbitalMotionDesc,control:{key:"orbitalMotion",type:"toggle"}},{name:t.settingPulses,desc:t.settingPulsesDesc,control:{key:"linkPulses",type:"toggle"}},{name:t.settingBloom,desc:t.settingBloomDesc,control:{key:"bloom",type:"slider",min:0,max:2,step:.05}},{name:t.settingDisk,desc:t.settingDiskDesc,control:{key:"diskSpeed",type:"slider",min:0,max:3,step:.05}},{name:t.settingStars,desc:t.settingStarsDesc,control:{key:"nodeScale",type:"slider",min:.4,max:2.2,step:.05}},{name:t.settingOrbit,desc:t.settingOrbitDesc,control:{key:"orbitSpeed",type:"slider",min:0,max:2,step:.05}},{name:t.settingMaxNodes,desc:t.settingMaxNodesDesc,control:{key:"maxNodes",type:"slider",min:100,max:3e3,step:100}}]}async setControlValue(t,e){let n=this.plugin.settings;switch(t){case"language":n.language=e;break;case"coreTheme":n.coreTheme=e!=null?e:"gargantua";break;case"userName":n.userName=String(e!=null?e:"").trim();break;case"showDashboard":n.showDashboard=!!e;break;case"showLabels":n.showLabels=!!e;break;case"transition":n.transition=!!e;break;case"quasar":n.quasar=!!e;break;case"activityLayout":n.activityLayout=!!e;break;case"adaptiveQuality":n.adaptiveQuality=!!e;break;case"includeTags":n.includeTags=!!e;break;case"orbitalMotion":n.orbitalMotion=!!e;break;case"linkPulses":n.linkPulses=!!e;break;case"bloom":case"diskSpeed":case"nodeScale":case"orbitSpeed":n[t]=Number(e);break;case"maxNodes":n.maxNodes=Math.round(Number(e));break;default:break}try{await this.plugin.saveSettings(),t==="language"?(this.plugin.applyLanguage(),this.update()):this.plugin.applySettingsToViews()}catch(s){console.error("Note Galaxy: failed to save settings",s)}}};var co=class extends ru.Plugin{constructor(){super(...arguments);this.ribbonEl=null}async onload(){await this.loadSettings(),Ll(this.settings.language),this.registerView(qe,e=>new sn(e,this)),this.registerView(di,e=>new es(e,this)),this.ribbonEl=this.addRibbonIcon("orbit",Wt().ribbonOpen,()=>{this.activateView()}),this.registerCommands(),this.addSettingTab(new lo(this.app,this))}registerCommands(){for(let e of["open","open-dashboard","rebuild"])typeof this.removeCommand=="function"&&this.removeCommand(e);this.addCommand({id:"open",name:Wt().commandOpen,callback:()=>{this.activateView()}}),this.addCommand({id:"open-dashboard",name:Wt().commandOpenDashboard,callback:()=>{this.activateDashboardView()}}),this.addCommand({id:"rebuild",name:Wt().commandRebuild,callback:()=>{for(let e of this.app.workspace.getLeavesOfType(qe)){let n=e.view;n instanceof sn&&n.rebuild()}for(let e of this.app.workspace.getLeavesOfType(di)){let n=e.view;n instanceof es&&n.refresh()}}})}onunload(){}applyLanguage(){if(Ll(this.settings.language),this.registerCommands(),this.ribbonEl){let e=Wt().ribbonOpen;this.ribbonEl.setAttribute("aria-label",e),this.ribbonEl.setAttribute("title",e)}this.applySettingsToViews()}async activateView(){let{workspace:e}=this.app,n=e.getLeavesOfType(qe)[0];n||(n=e.getLeaf("tab"),await n.setViewState({type:qe,active:!0})),await e.revealLeaf(n)}async activateDashboardView(){var s;let{workspace:e}=this.app,n=e.getLeavesOfType(di)[0];n||(n=(s=e.getRightLeaf(!1))!=null?s:e.getLeaf("tab"),await n.setViewState({type:di,active:!0})),await e.revealLeaf(n)}applySettingsToViews(){for(let e of this.app.workspace.getLeavesOfType(qe)){let n=e.view;n instanceof sn&&n.applySettings()}for(let e of this.app.workspace.getLeavesOfType(di)){let n=e.view;n instanceof es&&n.relocalize()}}async loadSettings(){let e=await this.loadData();this.settings=Object.assign({},su,e)}async saveSettings(){await this.saveData(this.settings)}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
