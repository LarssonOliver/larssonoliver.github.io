import{d as f,T as R,c as d,o as p,F as S,p as k,a as V,b as l,r as z,R as A,e as u,f as o,n as b,g as M,h as C,t as I,i as F,j as T,k as $,w as g,l as O}from"./vendor.021c4823.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=c(i);fetch(i.href,n)}};W();function D(t){return function(){let e=t+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var E=`precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUV;
void main() {
	gl_Position = vec4(position, 0, 1);
	vUV = uv;
}
`,G=`precision highp float;
uniform sampler2D source;
varying vec2 vUV;
void main() {
	gl_FragColor = texture2D(source, vUV);
}
`,J=`precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUV;
void main() {
	gl_Position = vec4(position, 0, 1);
	vUV = uv;
}
`,q=`precision highp float;
uniform sampler2D source, tNoise;
uniform vec3 color;
uniform vec2 offset;
uniform float scale, density, falloff, tNoiseSize;
varying vec2 vUV;

float smootherstep(float a, float b, float r) {
	r = clamp(r, 0.0, 1.0);
	r = r * r * r * (r * (6.0 * r - 15.0) + 10.0);
	return mix(a, b, r);
}

float perlin_2d(vec2 p) {
	vec2 p0 = floor(p);
	vec2 p1 = p0 + vec2(1, 0);
	vec2 p2 = p0 + vec2(1, 1);
	vec2 p3 = p0 + vec2(0, 1);
	vec2 d0 = texture2D(tNoise, p0/tNoiseSize).ba;
	vec2 d1 = texture2D(tNoise, p1/tNoiseSize).ba;
	vec2 d2 = texture2D(tNoise, p2/tNoiseSize).ba;
	vec2 d3 = texture2D(tNoise, p3/tNoiseSize).ba;
	d0 = 2.0 * d0 - 1.0;
	d1 = 2.0 * d1 - 1.0;
	d2 = 2.0 * d2 - 1.0;
	d3 = 2.0 * d3 - 1.0;
	vec2 p0p = p - p0;
	vec2 p1p = p - p1;
	vec2 p2p = p - p2;
	vec2 p3p = p - p3;
	float dp0 = dot(d0, p0p);
	float dp1 = dot(d1, p1p);
	float dp2 = dot(d2, p2p);
	float dp3 = dot(d3, p3p);
	float fx = p.x - p0.x;
	float fy = p.y - p0.y;
	float m01 = smootherstep(dp0, dp1, fx);
	float m32 = smootherstep(dp3, dp2, fx);
	float m01m32 = smootherstep(m01, m32, fy);
	return m01m32;
}

float normalnoise(vec2 p) {
	return perlin_2d(p) * 0.5 + 0.5;
}

float noise(vec2 p) {
	p += offset;
	const int steps = 5;
	float scale = pow(2.0, float(steps));
	float displace = 0.0;
	for (int i = 0; i < steps; i++) {
		displace = normalnoise(p * scale + displace);
		scale *= 0.5;
	}
	return normalnoise(p + displace);
}

void main() {
	vec4 p = texture2D(source, vUV);
	float n = noise(gl_FragCoord.xy * scale * 1.0);
	n = pow(n + density, falloff);
	gl_FragColor = vec4(mix(p.rgb, color, n), 1);
}
`,Z=`
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUV;
void main() {
	gl_Position = vec4(position, 0, 1);
	vUV = uv;
}
`,K=`precision highp float;
uniform sampler2D source;
uniform vec3 coreColor, haloColor;
uniform vec2 center, resolution;
uniform float coreRadius, haloFalloff, scale;
varying vec2 vUV;
void main() {
	vec4 s = texture2D(source, vUV);
	float d = length(gl_FragCoord.xy - center * resolution) / scale;
	if (d <= coreRadius) {
		gl_FragColor = vec4(coreColor, 1);
		return;
	}
	float e = 1.0 - exp(-(d - coreRadius) * haloFalloff);
	vec3 rgb = mix(coreColor, haloColor, e);
	rgb = mix(rgb, vec3(0,0,0), e);
	gl_FragColor = vec4(rgb + s.rgb, 1);
}
`;var m=(t,e)=>{const c=t.__vccOpts||t;for(const[a,i]of e)c[a]=i;return c};const Q=f({mounted:function(){this.startName()},methods:{startName(){new R("#name",{}).changeDelay(50).pauseFor(500).typeString("My name is Oliver").pauseFor(250).callFunction(this.startTitle).start()},startTitle(){const t=document.getElementsByClassName("Typewriter__cursor");t[0].style.display="none",new R("#title",{}).changeDelay(50).typeString("I am a Computer Science student from Sweden").start()}}}),U=t=>(k("data-v-18ef8408"),t=t(),V(),t),Y=U(()=>l("pre",{id:"name"},null,-1)),X=U(()=>l("pre",{id:"title"},null,-1));function tt(t,e,c,a,i,n){return p(),d(S,null,[Y,X],64)}var et=m(Q,[["render",tt],["__scopeId","data-v-18ef8408"]]);const w=1,nt=f({components:{TitleTextComponent:et},setup:function(){return{canv:z()}},data:function(){return{canvas:void 0,regl:void 0,lastWidth:0,lastHeight:0,pointStarTexture:void 0,ping:void 0,pong:void 0,copyRenderer:void 0,nebulaRenderer:void 0,starRenderer:void 0,maxTextureSize:void 0,seed:Math.floor(Math.random()*1e5)}},mounted:function(){const t=this.canv;if(t===void 0)throw new Error("Canvas is undefined");this.canvas=t,this.canvas.width=window.innerWidth*w,this.canvas.height=window.innerHeight*w,this.regl=A({canvas:t}),this.pointStarTexture=this.regl.texture(),this.ping=this.regl.framebuffer({color:this.regl.texture(),depth:!1,stencil:!1,depthStencil:!1}),this.pong=this.regl.framebuffer({color:this.regl.texture(),depth:!1,stencil:!1,depthStencil:!1}),this.copyRenderer=ot(this.regl),this.nebulaRenderer=it(this.regl),this.starRenderer=rt(this.regl),window.addEventListener("resize",()=>{this.canvas!==void 0&&(this.canvas.width=window.innerWidth*w,this.canvas.height=window.innerHeight*w,this.render())}),this.render()},methods:{render:function(){var v,L,j,P;const t=(v=this.canvas)==null?void 0:v.width,e=(L=this.canvas)==null?void 0:L.height,c={x:0,y:0,width:t,height:e};(t!==this.lastWidth||e!==this.lastHeight)&&((j=this.ping)==null||j.resize(t,e),(P=this.pong)==null||P.resize(t,e),this.lastWidth=t,this.lastHeight=e);const a=Math.max(t,e);this.regl({framebuffer:this.ping})(()=>{var _;(_=this.regl)==null||_.clear({color:[0,0,0,1]})}),this.regl({framebuffer:this.pong})(()=>{var _;(_=this.regl)==null||_.clear({color:[0,0,0,1]})});const i=this.generatePointStars(t,e,.05,.125,D(this.seed));this.pointStarTexture({format:"rgb",width:t,height:e,wrapS:"clamp",wrapT:"clamp",data:i});const n=D(this.seed),s=Math.round(n()*4+1),h=this.alternate(this.pointStarTexture,this.ping,this.pong,s,(_,x)=>{this.nebulaRenderer({source:_,destination:x,viewport:c,width:t,height:e,offset:[n()*100,n()*100],scale:(n()*2+1)/a,color:[n(),n(),n()],density:n()*.2,falloff:n()*2+3})}),r=n()*8+1;this.alternate(h,this.ping,this.pong,r,(_,x)=>{this.starRenderer({source:_,destination:x,viewport:c,scale:a,resolution:[t,e],center:[n(),n()],coreRadius:0,coreColor:[1,1,1],haloColor:[n(),n(),n()],haloFalloff:n()*1024+32})}),this.copyRenderer({source:h,viewport:c})},generatePointStars:function(t,e,c,a,i){const n=Math.floor(t*e*c),s=new Uint8Array(t*e*3);for(let h=0;h<n;h++){const r=Math.floor(i()*t*e),v=Math.floor(255*Math.log(1-i())*-a);s[r*3]=v,s[r*3+1]=v,s[r*3+2]=v}return s},alternate:function(t,e,c,a,i){if(a===0)return t;t===e&&(e=c,c=t),i(t,e);let n=1;if(n===a)return e;for(;n<a;){if(i(e,c),n++,n===a)return c;if(i(c,e),n++,n===a)return e}}}}),ot=function(t){return t({vert:E,frag:G,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{source:t.prop("source")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})},it=function(t){const a=new Uint8Array(131072);for(let n=0;n<131072;n++)a[n*2]=Math.round(.5*(1+Math.random())*255),a[n*2+1]=Math.round(.5*(1+Math.random())*255);const i=t.texture({format:"luminance alpha",width:256,height:256,data:a,wrapS:"repeat",wrapT:"repeat"});return t({vert:J,frag:q,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{tNoise:i,tNoiseSize:256,source:t.prop("source"),offset:t.prop("offset"),scale:t.prop("scale"),falloff:t.prop("falloff"),color:t.prop("color"),density:t.prop("density")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})},rt=function(t){return t({vert:Z,frag:K,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{source:t.prop("source"),center:t.prop("center"),coreRadius:t.prop("coreRadius"),coreColor:t.prop("coreColor"),haloColor:t.prop("haloColor"),haloFalloff:t.prop("haloFalloff"),resolution:t.prop("resolution"),scale:t.prop("scale")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})},H=t=>(k("data-v-901fe39c"),t=t(),V(),t),st=H(()=>l("div",{class:"fade"},null,-1)),at=H(()=>l("div",{class:"arrow"},"\u2193",-1));function lt(t,e,c,a,i,n){const s=u("title-text-component");return p(),d(S,null,[l("canvas",{id:"spaceCanvas",ref:"canv",onResize:e[0]||(e[0]=(...h)=>t.render&&t.render(...h))},null,544),st,o(s),at],64)}var ct=m(nt,[["render",lt],["__scopeId","data-v-901fe39c"]]);const pt=f({props:{colorHex:{type:String,default:"#2e3440"}},data:function(){return{inverted:!1,width:100,height:2}},created:function(){this.inverted=Math.random()>.5,this.width=100+Math.random()*200,this.height=2+Math.random()*2}});function dt(t,e,c,a,i,n){return p(),d("div",{class:"divider",style:b({height:`${t.height}rem`})},[(p(),d("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",style:b({transform:t.inverted?"rotateY(180deg)":"",width:`calc(${t.width}% + 1.3px)`,height:`${t.height}rem`})},[l("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",style:b({fill:t.colorHex})},null,4),l("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",style:b({fill:t.colorHex})},null,4),l("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",style:b({fill:t.colorHex})},null,4)],4))],4)}var ut=m(pt,[["render",dt],["__scopeId","data-v-7b5d1127"]]);const ht=f({components:{PostListItemDividerComponent:ut},props:{title:{type:String,default:""},subtitle:{type:String,default:""},colorHex:{type:String,default:"#2e3440"},prevColorHex:{type:String,default:"#2e3440"},hideDivider:Boolean}}),ft={class:"item-container"},mt={key:0},vt={class:"item"};function _t(t,e,c,a,i,n){const s=u("post-list-item-divider-component");return p(),d("div",{class:"full-width",style:b({backgroundColor:t.colorHex})},[t.hideDivider?C("",!0):(p(),M(s,{key:0,"color-hex":t.prevColorHex},null,8,["color-hex"])),l("div",ft,[l("h2",null,I(t.title),1),t.subtitle?(p(),d("p",mt,I(t.subtitle),1)):C("",!0),l("div",vt,[F(t.$slots,"default",{},void 0,!0)])])],4)}var gt=m(ht,[["render",_t],["__scopeId","data-v-7a95b6a1"]]);const yt="https://cdn.jsdelivr.net/gh/devicons/devicon/icons",bt=f({props:{icon:{type:String,default:""},inverted:Boolean,small:Boolean},methods:{fullUrl(t){const e=t.split("-")[0];return`${yt}/${e}/${t}.svg`}}}),$t=["src"];function wt(t,e,c,a,i,n){return p(),d("img",{src:t.fullUrl(t.icon),class:T({invertColor:t.inverted,smallIcon:t.small})},null,10,$t)}var N=m(bt,[["render",wt],["__scopeId","data-v-6717e069"]]);const Ct=f({components:{TechIconComponent:N},extends:N,props:{href:{type:String,default:""},newTab:Boolean}}),St=["href","target","rel"];function xt(t,e,c,a,i,n){const s=u("tech-icon-component");return p(),d("a",{href:t.href,target:t.newTab?"_blank":void 0,rel:t.newTab?"noopener noreferrer":void 0},[o(s,{icon:t.icon,inverted:t.inverted,small:t.small},null,8,["icon","inverted","small"])],8,St)}var B=m(Ct,[["render",xt],["__scopeId","data-v-6e3bc314"]]);const It=f({components:{TechIconButtonComponent:B},props:{img:{type:String,default:""},fillImg:Boolean,title:{type:String,default:""},href:{type:String,default:""},github:{type:String,default:""}}}),Tt=["href"],Nt=["src","alt"],kt=["src","alt"],Vt={class:"text"},Mt={class:"title"},Lt={class:"righttitle"},jt=["href"];function Pt(t,e,c,a,i,n){const s=u("tech-icon-button-component");return p(),d("div",null,[t.href?(p(),d("a",{key:0,href:t.href},[l("img",{src:t.img,alt:t.title,class:T(["image",{fill:t.fillImg}])},null,10,Nt)],8,Tt)):(p(),d("img",{key:1,src:t.img,alt:t.title,class:T(["image",{fill:t.fillImg}])},null,10,kt)),l("div",Vt,[l("h3",Mt,[$(I(t.title)+" ",1),l("div",Lt,[t.href?(p(),d("a",{key:0,href:t.href,target:"_blank",rel:"noopener noreferrer"}," \u{1F517} ",8,jt)):C("",!0),t.github?(p(),M(s,{key:1,icon:"github-original",inverted:"",small:"",title:`${t.title} on Github`,href:t.github,"new-tab":""},null,8,["title","href"])):C("",!0)])]),l("p",null,[F(t.$slots,"default",{},void 0,!0)])])])}var Rt=m(It,[["render",Pt],["__scopeId","data-v-7264aec2"]]);const Dt=f({components:{ProjectListItemComponent:Rt}}),Ft=$(" My personal webiste. Built with Vue 3, TypeScript and WebGL. Hosted through Github pages. "),Ut=$(" A 3D graphics engine written in C++ using OpenGL for my end of high school project. Features include shadows, water, a particle system and more! "),Ht=$(" A brainfuck interpreter written in C which conforms to the language specification. "),Bt=$(" A simple link shortener API written in Go and an accompying next.js web interface. The project was built to learn the lifetime of systems all the way from code to deployment. Using CI/CD, it is built into container images and deployed using kubernetes. "),zt=$(" Online photo album of a cat as a memorial after his sudden passing. Built using Nuxt 3. ");function At(t,e,c,a,i,n){const s=u("project-list-item-component");return p(),d("div",null,[o(s,{title:"larssonoliver.com",img:"larssonoliver.png",href:"https://larssonoliver.com",github:"https://github.com/larssonoliver/larssonoliver.github.io","fill-img":""},{default:g(()=>[Ft]),_:1}),o(s,{title:"PressureEngine",img:"pressureengine.png",github:"https://github.com/larssonoliver/PressureEngine","fill-img":""},{default:g(()=>[Ut]),_:1}),o(s,{title:"bf",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",github:"https://github.com/larssonoliver/bf"},{default:g(()=>[Ht]),_:1}),o(s,{title:"lnkshrt",github:"https://github.com/larssonoliver/lnkshrt",href:"https://lnkshrt.larssonoliver.com",img:"lnkshrt.png","fill-img":""},{default:g(()=>[Bt]),_:1}),o(s,{title:"luci",github:"https://github.com/larssonoliver/luci",href:"https://luci.larssonoliver.com",img:"luci.jpg","fill-img":""},{default:g(()=>[zt]),_:1})])}var Ot=m(Dt,[["render",At]]);const Wt=f({components:{PostListItemComponent:gt,TechIconComponent:N,TechIconButtonComponent:B,ProjectListComponent:Ot}}),y=t=>(k("data-v-5fd7eac2"),t=t(),V(),t),Et={class:"list"},Gt=y(()=>l("img",{class:"avatar",src:"https://avatars.githubusercontent.com/u/15251568?v=4"},null,-1)),Jt=y(()=>l("p",{class:"avatar-text"}," My name is Oliver and I am a Computer Science student from northern Sweden. I specialize in High Performance Computing and Distributed Systems. Outside my studies I am an avid golfer and skier. ",-1)),qt={style:{"text-align":"center"}},Zt=y(()=>l("h3",{style:{"margin-top":"0"}},"Expert",-1)),Kt=y(()=>l("hr",null,null,-1)),Qt=y(()=>l("h3",null,"Proficient",-1)),Yt=y(()=>l("br",null,null,-1)),Xt=y(()=>l("hr",null,null,-1)),te=y(()=>l("h3",null,"Novice",-1)),ee={style:{"text-align":"center"}},ne={class:"contact"},oe=y(()=>l("br",null,null,-1));function ie(t,e,c,a,i,n){const s=u("post-list-item-component"),h=u("project-list-component"),r=u("tech-icon-component"),v=u("tech-icon-button-component");return p(),d(S,null,[l("div",Et,[o(s,{title:"About Me","hide-divider":""},{default:g(()=>[Gt,Jt]),_:1}),o(s,{title:"My Projects","color-hex":"#3b4252"},{default:g(()=>[o(h)]),_:1}),o(s,{title:"Tools and Technologies","prev-color-hex":"#3b4252"},{default:g(()=>[l("div",qt,[Zt,o(r,{icon:"c-original",title:"C"}),o(r,{icon:"csharp-original",title:"C#"}),o(r,{icon:"dotnetcore-original",title:".NET Core"}),o(r,{icon:"java-original",title:"Java"}),o(r,{icon:"visualstudio-plain",title:"Visual Studio"}),o(r,{icon:"vscode-original",title:"Visual Studio Code"}),Kt,Qt,o(r,{icon:"cplusplus-original",title:"C++"}),o(r,{icon:"bash-original",title:"Bash",inverted:""}),o(r,{icon:"git-original",title:"Git"}),o(r,{icon:"css3-original",title:"CSS3"}),o(r,{icon:"html5-original",title:"HTML5"}),o(r,{icon:"javascript-original",title:"JavaScript"}),o(r,{icon:"nodejs-original",title:"NodeJS"}),Yt,o(r,{icon:"typescript-original",title:"TypeScript"}),o(r,{icon:"vuejs-original",title:"VueJS"}),o(r,{icon:"electron-original",title:"Electron"}),o(r,{icon:"go-original",title:"Go"}),o(r,{icon:"docker-original",title:"Docker"}),o(r,{icon:"kubernetes-plain",title:"Kubernetes"}),o(r,{icon:"markdown-original",title:"Markdown",inverted:""}),o(r,{icon:"opengl-plain",title:"OpenGL"}),Xt,te,o(r,{icon:"matlab-original",title:"Matlab"}),o(r,{icon:"microsoftsqlserver-plain",title:"MSSQL",inverted:""}),o(r,{icon:"python-original",title:"Python"}),o(r,{icon:"react-original",title:"React"}),o(r,{icon:"denojs-original",title:"Deno",inverted:""}),o(r,{icon:"neo4j-plain-wordmark",title:"Neo4j",inverted:""}),o(r,{icon:"postgresql-plain",title:"PostgreSQL"}),o(r,{icon:"nginx-original",title:"Nginx"}),o(r,{icon:"nextjs-original-wordmark",inverted:"",title:"NextJS"}),o(r,{icon:"nuxtjs-plain-wordmark",inverted:"",title:"NuxtJS"})])]),_:1}),o(s,{title:"Next Up!",subtitle:"Tools and technologies I want to learn next.","color-hex":"#3b4252"},{default:g(()=>[l("div",ee,[o(r,{icon:"vim-original",title:"Vim"}),o(r,{icon:"rust-plain",title:"Rust",inverted:""})])]),_:1})]),l("div",ne,[o(v,{icon:"github-original",inverted:"",title:"Github",href:"https://github.com/larssonoliver","new-tab":""}),oe,o(v,{icon:"linkedin-original",title:"LinkedIn",href:"https://www.linkedin.com/in/larssonoliver","new-tab":""})])],64)}var re=m(Wt,[["render",ie],["__scopeId","data-v-5fd7eac2"]]);const se=f({components:{PostListComponent:re,NebulaTitleComponent:ct}});function ae(t,e,c,a,i,n){const s=u("nebula-title-component"),h=u("post-list-component");return p(),d(S,null,[o(s),o(h)],64)}var le=m(se,[["render",ae]]);const ce=f({name:"App",components:{HomeView:le},mounted:function(){document.title="Oliver Larsson"}});function pe(t,e,c,a,i,n){const s=u("home-view");return p(),M(s)}var de=m(ce,[["render",pe]]);O(de).mount("#app");
