(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77],{3621:function(e,t,n){Promise.resolve().then(n.bind(n,1046)),Promise.resolve().then(n.bind(n,3458)),Promise.resolve().then(n.bind(n,4454)),Promise.resolve().then(n.bind(n,8645)),Promise.resolve().then(n.bind(n,8665)),Promise.resolve().then(n.bind(n,1432)),Promise.resolve().then(n.bind(n,5316)),Promise.resolve().then(n.bind(n,9659)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},1046:function(e,t,n){"use strict";var l=n(7437),s=n(2265),a=n(6920),i=n(5079),r=n(6648);t.default=e=>{let{images:t}=e,[n,o]=(0,s.useState)(0),c=(0,s.useRef)(null);return((0,s.useEffect)(()=>(c.current&&clearInterval(c.current),c.current=setInterval(()=>{o(e=>(e+1)%t.length)},5e3),()=>{c.current&&clearInterval(c.current)}),[t.length,n]),(0,s.useEffect)(()=>{let e=e=>{"ArrowRight"===e.key&&o(e=>(e+1)%t.length),"ArrowLeft"===e.key&&o(e=>(e-1+t.length)%t.length)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t.length]),t&&0!==t.length)?(0,l.jsxs)("div",{className:"carousel-container w-full",style:{height:"60vh"},children:[t.map((e,t)=>(0,l.jsx)("div",{className:"w-full h-full object-cover ".concat(t===n?"image-enter-active":"image-exit-active"),style:{position:"absolute"},children:(0,l.jsx)(r.default,{src:e,alt:"Slideshow image ".concat(t+1),layout:"fill",objectFit:"cover"})},t)),(0,l.jsxs)("div",{className:"carousel-controls",children:[(0,l.jsx)("button",{onClick:()=>o(e=>(e-1+t.length)%t.length),children:(0,l.jsx)(a.G,{icon:i.A35})}),(0,l.jsx)("button",{onClick:()=>o(e=>(e+1)%t.length),children:(0,l.jsx)(a.G,{icon:i._tD})})]}),(0,l.jsx)("div",{className:"carousel-indicators",children:t.map((e,t)=>(0,l.jsx)("button",{className:t===n?"active":"",onClick:()=>o(t)},t))})]}):(0,l.jsx)("div",{className:"carousel-container",children:"No images available"})}},4454:function(e,t,n){"use strict";var l=n(7437);n(2265);var s=n(1942);let a="#dbaf4a";t.default=()=>(0,l.jsxs)("div",{className:"text-center font-josefin text-black max-w-screen-lg mx-auto px-4  text-xl leading-relaxed",children:[(0,l.jsx)("div",{className:"text-2xl ",children:"Potrzebujesz więcej informacji?"}),(0,l.jsx)("div",{className:"text-2xl ",children:"Skontaktuj się z nami!"}),(0,l.jsx)("div",{className:"border-t-2 border-customYellow m-5"}),(0,l.jsxs)("div",{className:"flex justify-center items-center space-x-4 mb-2",children:[(0,l.jsx)(s.SRX,{color:a}),(0,l.jsx)("span",{children:"biuro@willapoprad.com"})]}),(0,l.jsxs)("div",{className:"flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105",children:[(0,l.jsx)(s.DNl,{color:a}),(0,l.jsx)("a",{href:"tel:+48501513400",children:"501 513 400"})]})]})},8645:function(e,t,n){"use strict";var l=n(7437);n(2265),t.default=e=>{let{color:t="customYellow",text:n}=e;return(0,l.jsx)("div",{className:"font-josefin ".concat("customBlue"===t?"text-customBlue":"text-customYellow"," text-center text-4xl p-4 mt-3"),children:n})}},8665:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var l=n(7437),s=n(2265),a=n(6648),i=n(6920),r=n(5079),o=e=>{let{image:t,images:n,onImageSelect:s,onClose:o,onNext:c,onPrevious:d}=e;return(0,l.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 p-4",children:[(0,l.jsx)("button",{onClick:d,className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20",children:(0,l.jsx)(i.G,{icon:r.A35})}),(0,l.jsx)("div",{className:"relative max-w-5xl mx-auto",children:(0,l.jsx)("div",{className:"flex justify-center items-center overflow-hidden",style:{minHeight:"100vh"},children:(0,l.jsx)(a.default,{src:t,alt:"Menu",layout:"fill",objectFit:"contain",quality:75})})}),(0,l.jsx)("button",{onClick:c,className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20",children:(0,l.jsx)(i.G,{icon:r._tD})}),(0,l.jsx)("div",{className:"flex overflow-x-auto py-2",children:n.map((e,n)=>(0,l.jsx)("div",{className:"cursor-pointer m-1",onClick:()=>s(n),children:(0,l.jsx)(a.default,{src:e,alt:"Thumbnail ".concat(n),width:100,height:100,objectFit:"cover",className:"".concat(t===e?"opacity-80 border-2 border-white":"")})},n))}),(0,l.jsx)("button",{onClick:o,className:"absolute top-4 right-4 text-white text-4xl",children:"\xd7 "})]})},c=e=>{let{menuImages:t}=e,[n,i]=(0,s.useState)(null),r=e=>{i(e)};return(0,l.jsxs)("div",{className:"flex justify-center flex-wrap gap-5 p-4",children:[t.map((e,t)=>(0,l.jsx)("div",{className:"w-full sm:w-1/3 md:w-1/5 lg:w-1/6 p-1",onClick:()=>r(t),style:{height:"300px",overflow:"hidden"},children:(0,l.jsx)(a.default,{src:e.img,alt:e.title,width:300,height:300,className:"cursor-pointer transition-transform duration-300 hover:scale-101 w-full h-full object-cover border border-gray-100"})},t)),null!==n&&(0,l.jsx)(o,{image:t[n].img,images:t.map(e=>e.img),onImageSelect:e=>{i(e)},onClose:()=>{i(null)},onNext:()=>{null!==n&&i(n+1>=t.length?0:n+1)},onPrevious:()=>{null!==n&&i(n-1<0?t.length-1:n-1)}})]})}},1432:function(e,t,n){"use strict";n.r(t);var l=n(7437);n(2265);var s=n(6920),a=n(5079);t.default=e=>{let{targetId:t,arrowColor:n="#dbaf4a"}=e;return(0,l.jsx)("button",{onClick:()=>{let e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})},style:{backgroundColor:"transparent",border:"none",color:n,fontSize:"60px",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",height:"50px",width:"50px",marginTop:"20px"},children:(0,l.jsx)(s.G,{icon:a.ptq})})}},5316:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var l=n(7437),s=n(2265),a=n(6648),i=n(6920),r=e=>{let{isOpen:t,onClose:n,label:r,img:o,text:c,features:d,descriptions:u=[]}=e,[f,m]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{t?setTimeout(()=>m(!0),1):m(!1)},[t]),t||f)?(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 py-4 font-josefin overflow-y-auto",style:{zIndex:"1000"},children:(0,l.jsxs)("div",{className:"bg-white p-5 rounded-lg w-full max-w-4xl space-y-4 relative transition-all duration-1000 ease-out transform overflow-y-auto",style:{opacity:f?1:0,transform:"scale(".concat(f?1:.9,")"),maxHeight:"100vh"},children:[(0,l.jsx)("button",{onClick:n,className:"absolute top-0 right-3 text-7xl bg-transparent border-none font-extralight",style:{top:"-15px"},children:"\xd7"}),r&&(0,l.jsx)("h2",{className:"text-center text-2xl font-semibold sm:text-xl",children:r}),(0,l.jsx)("div",{className:"flex justify-center my-2",children:(0,l.jsx)(a.default,{src:o,alt:null!=r?r:"",className:"rounded-lg max-w-full h-auto",layout:"intrinsic",width:500,height:300,objectFit:"contain"})}),c&&(0,l.jsx)("p",{className:"text-center text-base sm:text-sm",children:c}),u&&u.length>0&&(0,l.jsx)("div",{className:"flex justify-center text-lg text-center sm:text-base",children:(0,l.jsx)("ul",{children:u.map((e,t)=>(0,l.jsx)("li",{children:e},t))})}),(0,l.jsx)("div",{className:"flex justify-center flex-wrap gap-4 m-1",children:d.map((e,t)=>(0,l.jsxs)("div",{className:"feature-icon flex flex-col items-center text-center",style:{animation:"fadeInUp 1s ease forwards ".concat(350*t,"ms"),width:"calc(33.333% - 1rem)"},children:[(0,l.jsx)(i.G,{icon:e.icon,size:"sm"}),(0,l.jsx)("span",{className:"mt-1",children:e.text})]},t))})]})}):null},o=e=>{var t,n,i,o,c;let{thumbnails:d}=e,u=(0,s.useRef)(d.map(()=>s.createRef())),[f,m]=(0,s.useState)(!1),[x,h]=(0,s.useState)(null);(0,s.useEffect)(()=>{u.current.forEach((e,t)=>{e.current&&setTimeout(()=>{e.current.style.opacity="1",e.current.classList.add("thumbnail-enter")},250*t)})},[d]);let p=e=>{h(e),m(!0)};return(0,l.jsxs)("div",{className:"thumbnails-container",style:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"0",maxWidth:"1920px",marginLeft:"auto",marginRight:"auto",marginBottom:"20px"},children:[d.map((e,t)=>(0,l.jsxs)("a",{href:"#",onClick:t=>{t.preventDefault(),p(e)},ref:u.current[t],className:"thumbnail-link font-josefin",style:{margin:"20px",textAlign:"center",position:"relative",width:"300px",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none",overflow:"hidden",opacity:0,borderRadius:"9px"},children:[(0,l.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%"},children:(0,l.jsx)(a.default,{src:e.img,alt:e.label,layout:"fill",objectFit:"cover",className:"transition-transform duration-500 hover:scale-120"})}),(0,l.jsxs)("div",{className:"thumbnail-overlay",style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgba(0, 0, 0, 0.4)",padding:"10px"},children:[(0,l.jsx)("h3",{className:"thumbnail-title",style:{margin:"10px 0",fontSize:"1.3em"},children:e.label}),(0,l.jsx)("p",{className:"thumbnail-caption",style:{fontSize:"0.7em",lineHeight:"1.2"},children:e.caption})]})]},t)),(0,l.jsx)(r,{isOpen:f,onClose:()=>m(!1),label:null!==(t=null==x?void 0:x.label)&&void 0!==t?t:"Default Label",img:null!==(n=null==x?void 0:x.img)&&void 0!==n?n:"default-image.png",text:null!==(i=null==x?void 0:x.text)&&void 0!==i?i:"Default Text",features:null!==(o=null==x?void 0:x.features)&&void 0!==o?o:[],descriptions:null!==(c=null==x?void 0:x.descriptions)&&void 0!==c?c:[]})]})}},9659:function(e,t,n){"use strict";n.d(t,{Dialog:function(){return o},DialogContent:function(){return f},DialogDescription:function(){return x},DialogTitle:function(){return m},DialogTrigger:function(){return c}});var l=n(7437),s=n(2265),a=n(9405);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n(3480).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var r=n(7440);let o=a.fC,c=a.xz,d=a.h_;a.x8;let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,l.jsx)(a.aV,{ref:t,className:(0,r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...s})});u.displayName=a.aV.displayName;let f=s.forwardRef((e,t)=>{let{className:n,children:s,...o}=e;return(0,l.jsxs)(d,{children:[(0,l.jsx)(u,{}),(0,l.jsxs)(a.VY,{ref:t,className:(0,r.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...o,children:[s,(0,l.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,l.jsx)(i,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=a.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,l.jsx)(a.Dx,{ref:t,className:(0,r.cn)("text-lg font-semibold leading-none tracking-tight",n),...s})});m.displayName=a.Dx.displayName;let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,l.jsx)(a.dk,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",n),...s})});x.displayName=a.dk.displayName},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let l=n(5592);function s(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let l=n(7437),s=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,s.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[676,699,222,234,405,458,971,23,744],function(){return e(e.s=3621)}),_N_E=e.O()}]);