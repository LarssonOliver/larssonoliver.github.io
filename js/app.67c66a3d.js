(function(t){function e(e){for(var i,c,a=e[0],l=e[1],s=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},r=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2934:function(t,e,n){"use strict";n("e34a")},"297f":function(t,e,n){"use strict";n("96a7")},"36a1":function(t,e,n){},"386c":function(t,e,n){},"654b":function(t,e,n){"use strict";n("36a1")},"679c":function(t,e,n){},"6bad":function(t,e,n){"use strict";n("934f")},"7b42":function(t,e,n){},"90ab":function(t,e,n){"use strict";n("386c")},"934f":function(t,e,n){},"96a7":function(t,e,n){},9700:function(t,e,n){},aa9d:function(t,e,n){"use strict";n("679c")},b8da:function(t,e,n){},c98e:function(t,e,n){"use strict";n("b8da")},cbcd:function(t,e,n){"use strict";n("7b42")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function o(t,e,n,o,r,c){var a=Object(i["q"])("home-view");return Object(i["l"])(),Object(i["c"])(a)}function r(t,e,n,o,r,c){var a=Object(i["q"])("nebula-title-component"),l=Object(i["q"])("post-list-component");return Object(i["l"])(),Object(i["e"])(i["a"],null,[Object(i["h"])(a),Object(i["h"])(l)],64)}var c=function(t){return Object(i["n"])("data-v-35b9a19a"),t=t(),Object(i["m"])(),t},a=c((function(){return Object(i["f"])("div",{class:"fade"},null,-1)})),l=c((function(){return Object(i["f"])("div",{class:"arrow"},"↓",-1)}));function s(t,e,n,o,r,c){var s=Object(i["q"])("title-text-component");return Object(i["l"])(),Object(i["e"])(i["a"],null,[Object(i["f"])("canvas",{onResize:e[0]||(e[0]=function(){return t.render&&t.render.apply(t,arguments)}),id:"spaceCanvas",ref:"canv"},null,544),a,Object(i["h"])(s),l],64)}n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");var u=n("7dbb"),p=n.n(u),f=(n("bc01"),function(t){return function(){var e=t+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}),d="precision highp float;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\n\tgl_Position = vec4(position, 0, 1);\n\tvUV = uv;\n}\n",h="precision highp float;\nuniform sampler2D source;\nvarying vec2 vUV;\nvoid main() {\n\tgl_FragColor = texture2D(source, vUV);\n}\n",b="precision highp float;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\n\tgl_Position = vec4(position, 0, 1);\n\tvUV = uv;\n}\n",v="precision highp float;\nuniform sampler2D source, tNoise;\nuniform vec3 color;\nuniform vec2 offset;\nuniform float scale, density, falloff, tNoiseSize;\nvarying vec2 vUV;\n\nfloat smootherstep(float a, float b, float r) {\n\tr = clamp(r, 0.0, 1.0);\n\tr = r * r * r * (r * (6.0 * r - 15.0) + 10.0);\n\treturn mix(a, b, r);\n}\n\nfloat perlin_2d(vec2 p) {\n\tvec2 p0 = floor(p);\n\tvec2 p1 = p0 + vec2(1, 0);\n\tvec2 p2 = p0 + vec2(1, 1);\n\tvec2 p3 = p0 + vec2(0, 1);\n\tvec2 d0 = texture2D(tNoise, p0/tNoiseSize).ba;\n\tvec2 d1 = texture2D(tNoise, p1/tNoiseSize).ba;\n\tvec2 d2 = texture2D(tNoise, p2/tNoiseSize).ba;\n\tvec2 d3 = texture2D(tNoise, p3/tNoiseSize).ba;\n\td0 = 2.0 * d0 - 1.0;\n\td1 = 2.0 * d1 - 1.0;\n\td2 = 2.0 * d2 - 1.0;\n\td3 = 2.0 * d3 - 1.0;\n\tvec2 p0p = p - p0;\n\tvec2 p1p = p - p1;\n\tvec2 p2p = p - p2;\n\tvec2 p3p = p - p3;\n\tfloat dp0 = dot(d0, p0p);\n\tfloat dp1 = dot(d1, p1p);\n\tfloat dp2 = dot(d2, p2p);\n\tfloat dp3 = dot(d3, p3p);\n\tfloat fx = p.x - p0.x;\n\tfloat fy = p.y - p0.y;\n\tfloat m01 = smootherstep(dp0, dp1, fx);\n\tfloat m32 = smootherstep(dp3, dp2, fx);\n\tfloat m01m32 = smootherstep(m01, m32, fy);\n\treturn m01m32;\n}\n\nfloat normalnoise(vec2 p) {\n\treturn perlin_2d(p) * 0.5 + 0.5;\n}\n\nfloat noise(vec2 p) {\n\tp += offset;\n\tconst int steps = 5;\n\tfloat scale = pow(2.0, float(steps));\n\tfloat displace = 0.0;\n\tfor (int i = 0; i < steps; i++) {\n\t\tdisplace = normalnoise(p * scale + displace);\n\t\tscale *= 0.5;\n\t}\n\treturn normalnoise(p + displace);\n}\n\nvoid main() {\n\tvec4 p = texture2D(source, vUV);\n\tfloat n = noise(gl_FragCoord.xy * scale * 1.0);\n\tn = pow(n + density, falloff);\n\tgl_FragColor = vec4(mix(p.rgb, color, n), 1);\n}\n",g="\nprecision highp float;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\n\tgl_Position = vec4(position, 0, 1);\n\tvUV = uv;\n}\n",j="precision highp float;\nuniform sampler2D source;\nuniform vec3 coreColor, haloColor;\nuniform vec2 center, resolution;\nuniform float coreRadius, haloFalloff, scale;\nvarying vec2 vUV;\nvoid main() {\n\tvec4 s = texture2D(source, vUV);\n\tfloat d = length(gl_FragCoord.xy - center * resolution) / scale;\n\tif (d <= coreRadius) {\n\t\tgl_FragColor = vec4(coreColor, 1);\n\t\treturn;\n\t}\n\tfloat e = 1.0 - exp(-(d - coreRadius) * haloFalloff);\n\tvec3 rgb = mix(coreColor, haloColor, e);\n\trgb = mix(rgb, vec3(0,0,0), e);\n\tgl_FragColor = vec4(rgb + s.rgb, 1);\n}\n",m=function(t){return Object(i["n"])("data-v-3a748afc"),t=t(),Object(i["m"])(),t},O=m((function(){return Object(i["f"])("pre",{id:"name"},null,-1)})),w=m((function(){return Object(i["f"])("pre",{id:"title"},null,-1)}));function y(t,e,n,o,r,c){return Object(i["l"])(),Object(i["e"])(i["a"],null,[O,w],64)}var x=n("f79d"),C=n.n(x),S=Object(i["i"])({mounted:function(){this.startName()},methods:{startName:function(){new C.a("#name",{}).changeDelay(50).pauseFor(500).typeString("My name is Oliver").pauseFor(250).callFunction(this.startTitle).start()},startTitle:function(){var t=document.getElementsByClassName("Typewriter__cursor");t[0].style.display="none",new C.a("#title",{}).changeDelay(50).typeString("I am a Computer Science student from Sweden").start()}}}),_=(n("6bad"),n("6b0d")),M=n.n(_);const T=M()(S,[["render",y],["__scopeId","data-v-3a748afc"]]);var k=T,I=1,P=Object(i["i"])({components:{TitleTextComponent:k},setup:function(){var t=Object(i["o"])();return{canv:t}},data:function(){return{canvas:void 0,regl:void 0,lastWidth:0,lastHeight:0,pointStarTexture:void 0,ping:void 0,pong:void 0,copyRenderer:void 0,nebulaRenderer:void 0,starRenderer:void 0,maxTextureSize:void 0,seed:Math.floor(1e5*Math.random())}},mounted:function(){var t=this,e=this.canv;if(void 0===e)throw new Error("Canvas is undefined");this.canvas=e,this.canvas.width=window.innerWidth*I,this.canvas.height=window.innerHeight*I,this.regl=p()({canvas:e}),this.pointStarTexture=this.regl.texture(),this.ping=this.regl.framebuffer({color:this.regl.texture(),depth:!1,stencil:!1,depthStencil:!1}),this.pong=this.regl.framebuffer({color:this.regl.texture(),depth:!1,stencil:!1,depthStencil:!1}),this.copyRenderer=V(this.regl),this.nebulaRenderer=H(this.regl),this.starRenderer=N(this.regl),window.addEventListener("resize",(function(){void 0!==t.canvas&&(t.canvas.width=window.innerWidth*I,t.canvas.height=window.innerHeight*I,t.render())})),this.render()},methods:{render:function(){var t,e,n,i,o=this,r=null===(t=this.canvas)||void 0===t?void 0:t.width,c=null===(e=this.canvas)||void 0===e?void 0:e.height,a={x:0,y:0,width:r,height:c};r===this.lastWidth&&c===this.lastHeight||(null===(n=this.ping)||void 0===n||n.resize(r,c),null===(i=this.pong)||void 0===i||i.resize(r,c),this.lastWidth=r,this.lastHeight=c);var l=Math.max(r,c);this.regl({framebuffer:this.ping})((function(){var t;null===(t=o.regl)||void 0===t||t.clear({color:[0,0,0,1]})})),this.regl({framebuffer:this.pong})((function(){var t;null===(t=o.regl)||void 0===t||t.clear({color:[0,0,0,1]})}));var s=this.generatePointStars(r,c,.05,.125,f(this.seed));this.pointStarTexture({format:"rgb",width:r,height:c,wrapS:"clamp",wrapT:"clamp",data:s});var u=f(this.seed),p=Math.round(4*u()+1),d=this.alternate(this.pointStarTexture,this.ping,this.pong,p,(function(t,e){o.nebulaRenderer({source:t,destination:e,viewport:a,width:r,height:c,offset:[100*u(),100*u()],scale:(2*u()+1)/l,color:[u(),u(),u()],density:.2*u(),falloff:2*u()+3})})),h=8*u()+1;this.alternate(d,this.ping,this.pong,h,(function(t,e){o.starRenderer({source:t,destination:e,viewport:a,scale:l,resolution:[r,c],center:[u(),u()],coreRadius:0,coreColor:[1,1,1],haloColor:[u(),u(),u()],haloFalloff:1024*u()+32})})),this.copyRenderer({source:d,viewport:a})},generatePointStars:function(t,e,n,i,o){for(var r=Math.floor(t*e*n),c=new Uint8Array(t*e*3),a=0;a<r;a++){var l=Math.floor(o()*t*e),s=Math.floor(255*Math.log(1-o())*-i);c[3*l]=s,c[3*l+1]=s,c[3*l+2]=s}return c},alternate:function(t,e,n,i,o){if(0===i)return t;t===e&&(e=n,n=t),o(t,e);var r=1;if(r===i)return e;while(r<i){if(o(e,n),r++,r===i)return n;if(o(n,e),r++,r===i)return e}}}}),V=function(t){return t({vert:d,frag:h,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{source:t.prop("source")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})},H=function(t){for(var e=256,n=e*e*2,i=new Uint8Array(n),o=0;o<n;o++)i[2*o]=Math.round(.5*(1+Math.random())*255),i[2*o+1]=Math.round(.5*(1+Math.random())*255);var r=t.texture({format:"luminance alpha",width:e,height:e,data:i,wrapS:"repeat",wrapT:"repeat"});return t({vert:b,frag:v,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{tNoise:r,tNoiseSize:e,source:t.prop("source"),offset:t.prop("offset"),scale:t.prop("scale"),falloff:t.prop("falloff"),color:t.prop("color"),density:t.prop("density")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})},N=function(t){return t({vert:g,frag:j,attributes:{position:t.buffer([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),uv:t.buffer([0,0,1,0,1,1,0,0,1,1,0,1])},uniforms:{source:t.prop("source"),center:t.prop("center"),coreRadius:t.prop("coreRadius"),coreColor:t.prop("coreColor"),haloColor:t.prop("haloColor"),haloFalloff:t.prop("haloFalloff"),resolution:t.prop("resolution"),scale:t.prop("scale")},framebuffer:t.prop("destination"),viewport:t.prop("viewport"),count:6})};n("cbcd");const D=M()(P,[["render",s],["__scopeId","data-v-35b9a19a"]]);var R=D,U=function(t){return Object(i["n"])("data-v-50327faa"),t=t(),Object(i["m"])(),t},F={class:"list"},L=U((function(){return Object(i["f"])("img",{class:"avatar",src:"https://avatars.githubusercontent.com/u/15251568?v=4"},null,-1)})),q=U((function(){return Object(i["f"])("p",{class:"avatar-text"}," My name is Oliver and I am a Computer Science student from northern Sweden. I specialize in High Performance Computing and Distributed Systems. Outside my studies I am an avid golfer and skier. ",-1)})),z={style:{"text-align":"center"}},B=U((function(){return Object(i["f"])("h3",{style:{"margin-top":"0"}},"Expert",-1)})),E=U((function(){return Object(i["f"])("hr",null,null,-1)})),G=U((function(){return Object(i["f"])("h3",null,"Proficient",-1)})),A=U((function(){return Object(i["f"])("br",null,null,-1)})),J=U((function(){return Object(i["f"])("hr",null,null,-1)})),W=U((function(){return Object(i["f"])("h3",null,"Novice",-1)})),Z={style:{"text-align":"center"}},Q={class:"contact"},$=U((function(){return Object(i["f"])("br",null,null,-1)}));function K(t,e,n,o,r,c){var a=Object(i["q"])("post-list-item-component"),l=Object(i["q"])("project-list-component"),s=Object(i["q"])("tech-icon-component"),u=Object(i["q"])("tech-icon-button-component");return Object(i["l"])(),Object(i["e"])(i["a"],null,[Object(i["f"])("div",F,[Object(i["h"])(a,{title:"About Me",hideDivider:""},{default:Object(i["s"])((function(){return[L,q]})),_:1}),Object(i["h"])(a,{title:"My Projects",colorHex:"#3b4252"},{default:Object(i["s"])((function(){return[Object(i["h"])(l)]})),_:1}),Object(i["h"])(a,{title:"Tools and Technologies",prevColorHex:"#3b4252"},{default:Object(i["s"])((function(){return[Object(i["f"])("div",z,[B,Object(i["h"])(s,{icon:"c-original",title:"C"}),Object(i["h"])(s,{icon:"csharp-original",title:"C#"}),Object(i["h"])(s,{icon:"dotnetcore-original",title:".NET Core"}),Object(i["h"])(s,{icon:"java-original",title:"Java"}),Object(i["h"])(s,{icon:"visualstudio-plain",title:"Visual Studio"}),Object(i["h"])(s,{icon:"vscode-original",title:"Visual Studio Code"}),E,G,Object(i["h"])(s,{icon:"cplusplus-original",title:"C++"}),Object(i["h"])(s,{icon:"bash-original",title:"Bash",inverted:""}),Object(i["h"])(s,{icon:"git-original",title:"Git"}),Object(i["h"])(s,{icon:"css3-original",title:"CSS3"}),Object(i["h"])(s,{icon:"html5-original",title:"HTML5"}),Object(i["h"])(s,{icon:"javascript-original",title:"JavaScript"}),Object(i["h"])(s,{icon:"nodejs-original",title:"NodeJS"}),A,Object(i["h"])(s,{icon:"typescript-original",title:"TypeScript"}),Object(i["h"])(s,{icon:"vuejs-original",title:"VueJS"}),Object(i["h"])(s,{icon:"electron-original",title:"Electron"}),Object(i["h"])(s,{icon:"go-original",title:"Go"}),Object(i["h"])(s,{icon:"docker-original",title:"Docker"}),Object(i["h"])(s,{icon:"kubernetes-plain",title:"Kubernetes"}),Object(i["h"])(s,{icon:"markdown-original",title:"Markdown",inverted:""}),Object(i["h"])(s,{icon:"opengl-plain",title:"OpenGL"}),J,W,Object(i["h"])(s,{icon:"matlab-original",title:"Matlab"}),Object(i["h"])(s,{icon:"microsoftsqlserver-plain",title:"MSSQL",inverted:""}),Object(i["h"])(s,{icon:"python-original",title:"Python"}),Object(i["h"])(s,{icon:"react-original",title:"React"}),Object(i["h"])(s,{icon:"denojs-original",title:"Deno",inverted:""}),Object(i["h"])(s,{icon:"neo4j-plain-wordmark",title:"Neo4j",inverted:""}),Object(i["h"])(s,{icon:"postgresql-plain",title:"PostgreSQL"}),Object(i["h"])(s,{icon:"nginx-original",title:"Nginx"})])]})),_:1}),Object(i["h"])(a,{title:"Next Up!",subtitle:"Tools and technologies I want to learn next.",colorHex:"#3b4252"},{default:Object(i["s"])((function(){return[Object(i["f"])("div",Z,[Object(i["h"])(s,{icon:"vim-original",title:"Vim"}),Object(i["h"])(s,{icon:"rust-plain",title:"Rust",inverted:""})])]})),_:1})]),Object(i["f"])("div",Q,[Object(i["h"])(u,{icon:"github-original",inverted:"",title:"Github",href:"https://github.com/larssonoliver","new-tab":""}),$,Object(i["h"])(u,{icon:"linkedin-original",title:"LinkedIn",href:"https://www.linkedin.com/in/larssonoliver","new-tab":""})])],64)}var Y={class:"item-container"},X={key:0},tt={class:"item"};function et(t,e,n,o,r,c){var a=Object(i["q"])("post-list-item-divider-component");return Object(i["l"])(),Object(i["e"])("div",{class:"full-width",style:Object(i["k"])({backgroundColor:t.colorHex})},[t.hideDivider?Object(i["d"])("",!0):(Object(i["l"])(),Object(i["c"])(a,{key:0,colorHex:t.prevColorHex},null,8,["colorHex"])),Object(i["f"])("div",Y,[Object(i["f"])("h2",null,Object(i["r"])(t.title),1),t.subtitle?(Object(i["l"])(),Object(i["e"])("p",X,Object(i["r"])(t.subtitle),1)):Object(i["d"])("",!0),Object(i["f"])("div",tt,[Object(i["p"])(t.$slots,"default",{},void 0,!0)])])],4)}function nt(t,e,n,o,r,c){return Object(i["l"])(),Object(i["e"])("div",{class:"divider",style:Object(i["k"])({height:"".concat(t.height,"rem")})},[(Object(i["l"])(),Object(i["e"])("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",style:Object(i["k"])({transform:t.inverted?"rotateY(180deg)":"",width:"calc(".concat(t.width,"% + 1.3px)"),height:"".concat(t.height,"rem")})},[Object(i["f"])("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",style:Object(i["k"])({fill:t.colorHex})},null,4),Object(i["f"])("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",style:Object(i["k"])({fill:t.colorHex})},null,4),Object(i["f"])("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",style:Object(i["k"])({fill:t.colorHex})},null,4)],4))],4)}var it=Object(i["i"])({props:{colorHex:{type:String,default:"#2e3440"}},data:function(){return{inverted:!1,width:100,height:2}},created:function(){this.inverted=Math.random()>.5,this.width=100+200*Math.random(),this.height=2+2*Math.random()}});n("90ab");const ot=M()(it,[["render",nt],["__scopeId","data-v-53999972"]]);var rt=ot,ct=Object(i["i"])({components:{PostListItemDividerComponent:rt},props:{title:String,subtitle:String,colorHex:{type:String,default:"#2e3440"},prevColorHex:{type:String,default:"#2e3440"},hideDivider:Boolean}});n("2934");const at=M()(ct,[["render",et],["__scopeId","data-v-5c01c12c"]]);var lt=at,st=Object(i["g"])(" My personal webiste. Built with Vue 3, TypeScript and WebGL. Hosted through Github pages. "),ut=Object(i["g"])(" A 3D graphics engine written in C++ using OpenGL for my end of high school project. Features include shadows, water, a particle system and more! "),pt=Object(i["g"])(" A brainfuck interpreter written in C which conforms to the language specification. ");function ft(t,e,n,o,r,c){var a=Object(i["q"])("project-list-item-component");return Object(i["l"])(),Object(i["e"])("div",null,[Object(i["h"])(a,{title:"larssonoliver.com",img:"larssonoliver.png",href:"https://larssonoliver.com",github:"https://github.com/larssonoliver/larssonoliver.github.io",fillImg:""},{default:Object(i["s"])((function(){return[st]})),_:1}),Object(i["h"])(a,{title:"PressureEngine",img:"pressureengine.png",github:"https://github.com/larssonoliver/PressureEngine",fillImg:""},{default:Object(i["s"])((function(){return[ut]})),_:1}),Object(i["h"])(a,{title:"bf",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",github:"https://github.com/larssonoliver/bf"},{default:Object(i["s"])((function(){return[pt]})),_:1})])}var dt=["href"],ht=["src","alt"],bt=["src","alt"],vt={class:"text"},gt={class:"title"};function jt(t,e,n,o,r,c){var a=Object(i["q"])("tech-icon-button-component");return Object(i["l"])(),Object(i["e"])("div",null,[t.href?(Object(i["l"])(),Object(i["e"])("a",{key:0,href:t.href},[Object(i["f"])("img",{src:t.img,alt:t.title,class:Object(i["j"])(["image",{fill:t.fillImg}])},null,10,ht)],8,dt)):(Object(i["l"])(),Object(i["e"])("img",{key:1,src:t.img,alt:t.title,class:Object(i["j"])(["image",{fill:t.fillImg}])},null,10,bt)),Object(i["f"])("div",vt,[Object(i["f"])("h3",gt,[Object(i["g"])(Object(i["r"])(t.title)+" ",1),t.github?(Object(i["l"])(),Object(i["c"])(a,{key:0,icon:"github-original",inverted:"",small:"",title:"".concat(t.title," on Github"),href:t.github,"new-tab":"",class:"repolink"},null,8,["title","href"])):Object(i["d"])("",!0)]),Object(i["f"])("p",null,[Object(i["p"])(t.$slots,"default",{},void 0,!0)])])])}n("c96a");var mt=["href","target","rel"];function Ot(t,e,n,o,r,c){var a=Object(i["q"])("tech-icon-component");return Object(i["l"])(),Object(i["e"])("a",{href:t.href,target:t.newTab?"_blank":void 0,rel:t.newTab?"noopener noreferrer":void 0},[Object(i["h"])(a,{icon:t.icon,inverted:t.inverted,small:t.small},null,8,["icon","inverted","small"])],8,mt)}var wt=["src"];function yt(t,e,n,o,r,c){return Object(i["l"])(),Object(i["e"])("img",{src:t.fullUrl(t.icon),class:Object(i["j"])({invertColor:t.inverted,smallIcon:t.small})},null,10,wt)}n("ac1f"),n("1276"),n("99af");var xt="https://cdn.jsdelivr.net/gh/devicons/devicon/icons",Ct=Object(i["i"])({props:{icon:String,inverted:Boolean,small:Boolean},methods:{fullUrl:function(t){var e=t.split("-")[0];return"".concat(xt,"/").concat(e,"/").concat(t,".svg")}}});n("c98e");const St=M()(Ct,[["render",yt],["__scopeId","data-v-6f7a9280"]]);var _t=St,Mt=Object(i["i"])({components:{TechIconComponent:_t},extends:_t,props:{href:String,newTab:Boolean}});n("aa9d");const Tt=M()(Mt,[["render",Ot],["__scopeId","data-v-1ae09514"]]);var kt=Tt,It=Object(i["i"])({components:{TechIconButtonComponent:kt},props:{img:String,fillImg:Boolean,title:String,href:String,github:String}});n("ebb5a");const Pt=M()(It,[["render",jt],["__scopeId","data-v-79a0a116"]]);var Vt=Pt,Ht=Object(i["i"])({components:{ProjectListItemComponent:Vt}});const Nt=M()(Ht,[["render",ft]]);var Dt=Nt,Rt=Object(i["i"])({components:{PostListItemComponent:lt,TechIconComponent:_t,TechIconButtonComponent:kt,ProjectListComponent:Dt}});n("654b");const Ut=M()(Rt,[["render",K],["__scopeId","data-v-50327faa"]]);var Ft=Ut,Lt=Object(i["i"])({components:{PostListComponent:Ft,NebulaTitleComponent:R}});const qt=M()(Lt,[["render",r]]);var zt=qt,Bt=Object(i["i"])({name:"App",components:{HomeView:zt},mounted:function(){document.title="Oliver Larsson"}});n("297f");const Et=M()(Bt,[["render",o]]);var Gt=Et;Object(i["b"])(Gt).mount("#app")},e34a:function(t,e,n){},ebb5a:function(t,e,n){"use strict";n("9700")}});
//# sourceMappingURL=app.67c66a3d.js.map