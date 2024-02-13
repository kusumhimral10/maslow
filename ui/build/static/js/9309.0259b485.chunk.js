"use strict";(self.webpackChunkflowise_ui=self.webpackChunkflowise_ui||[]).push([[9309],{26754:(n,t,e)=>{e.d(t,{ZP:()=>M});var a=e(31461),r=e(7896),i=e(30969),o=e(87023),c=e(29878),s=e(49505),l=e(26540),u=e(45971),p=e(17363),d=e(94702);const h=i.createContext();var m=e(62746),g=e(2975);function f(n){return(0,g.ZP)("MuiGrid",n)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>"spacing-xs-".concat(n))),...["column-reverse","column","row-reverse","row"].map((n=>"direction-xs-".concat(n))),...["nowrap","wrap-reverse","wrap"].map((n=>"wrap-xs-".concat(n))),...w.map((n=>"grid-xs-".concat(n))),...w.map((n=>"grid-sm-".concat(n))),...w.map((n=>"grid-md-".concat(n))),...w.map((n=>"grid-lg-".concat(n))),...w.map((n=>"grid-xl-".concat(n)))]);var v=e(37574);const x=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(n){const t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function S(n){let{breakpoints:t,values:e}=n,a="";Object.keys(e).forEach((n=>{""===a&&0!==e[n]&&(a=n)}));const r=Object.keys(t).sort(((n,e)=>t[n]-t[e]));return r.slice(0,r.indexOf(a))}const Z=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n,{container:a,direction:r,item:i,spacing:o,wrap:c,zeroMinWidth:s,breakpoints:l}=e;let u=[];a&&(u=function(n,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];const a=[];return t.forEach((t=>{const r=n[t];Number(r)>0&&a.push(e["spacing-".concat(t,"-").concat(String(r))])})),a}(o,l,t));const p=[];return l.forEach((n=>{const a=e[n];a&&p.push(t["grid-".concat(n,"-").concat(String(a))])})),[t.root,a&&t.container,i&&t.item,s&&t.zeroMinWidth,...u,"row"!==r&&t["direction-xs-".concat(String(r))],"wrap"!==c&&t["wrap-xs-".concat(String(c))],...p]}})((n=>{let{ownerState:t}=n;return(0,r.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){let{theme:t,ownerState:e}=n;const a=(0,c.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,c.k9)({theme:t},a,(n=>{const t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(b.item)]={maxWidth:"none"}),t}))}),(function(n){let{theme:t,ownerState:e}=n;const{container:a,rowSpacing:r}=e;let i={};if(a&&0!==r){const n=(0,c.P$)({values:r,breakpoints:t.breakpoints.values});let e;"object"===typeof n&&(e=S({breakpoints:t.breakpoints.values,values:n})),i=(0,c.k9)({theme:t},n,((n,a)=>{var r;const i=t.spacing(n);return"0px"!==i?{marginTop:"-".concat(k(i)),["& > .".concat(b.item)]:{paddingTop:k(i)}}:null!=(r=e)&&r.includes(a)?{}:{marginTop:0,["& > .".concat(b.item)]:{paddingTop:0}}}))}return i}),(function(n){let{theme:t,ownerState:e}=n;const{container:a,columnSpacing:r}=e;let i={};if(a&&0!==r){const n=(0,c.P$)({values:r,breakpoints:t.breakpoints.values});let e;"object"===typeof n&&(e=S({breakpoints:t.breakpoints.values,values:n})),i=(0,c.k9)({theme:t},n,((n,a)=>{var r;const i=t.spacing(n);return"0px"!==i?{width:"calc(100% + ".concat(k(i),")"),marginLeft:"-".concat(k(i)),["& > .".concat(b.item)]:{paddingLeft:k(i)}}:null!=(r=e)&&r.includes(a)?{}:{width:"100%",marginLeft:0,["& > .".concat(b.item)]:{paddingLeft:0}}}))}return i}),(function(n){let t,{theme:e,ownerState:a}=n;return e.breakpoints.keys.reduce(((n,i)=>{let o={};if(a[i]&&(t=a[i]),!t)return n;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.P$)({values:a.columns,breakpoints:e.breakpoints.values}),l="object"===typeof s?s[i]:s;if(void 0===l||null===l)return n;const u="".concat(Math.round(t/l*1e8)/1e6,"%");let p={};if(a.container&&a.item&&0!==a.columnSpacing){const n=e.spacing(a.columnSpacing);if("0px"!==n){const t="calc(".concat(u," + ").concat(k(n),")");p={flexBasis:t,maxWidth:t}}}o=(0,r.Z)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===e.breakpoints.values[i]?Object.assign(n,o):n[e.breakpoints.up(i)]=o,n}),{})}));const y=n=>{const{classes:t,container:e,direction:a,item:r,spacing:i,wrap:o,zeroMinWidth:c,breakpoints:s}=n;let u=[];e&&(u=function(n,t){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];const e=[];return t.forEach((t=>{const a=n[t];if(Number(a)>0){const n="spacing-".concat(t,"-").concat(String(a));e.push(n)}})),e}(i,s));const p=[];s.forEach((t=>{const e=n[t];e&&p.push("grid-".concat(t,"-").concat(String(e)))}));const d={root:["root",e&&"container",r&&"item",c&&"zeroMinWidth",...u,"row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==o&&"wrap-xs-".concat(String(o)),...p]};return(0,l.Z)(d,f,t)},C=i.forwardRef((function(n,t){const e=(0,p.Z)({props:n,name:"MuiGrid"}),{breakpoints:c}=(0,d.Z)(),l=(0,s.Z)(e),{className:u,columns:m,columnSpacing:g,component:f="div",container:w=!1,direction:b="row",item:k=!1,rowSpacing:S,spacing:C=0,wrap:M="wrap",zeroMinWidth:W=!1}=l,N=(0,a.Z)(l,x),R=S||C,z=g||C,P=i.useContext(h),j=w?m||12:P,G={},B=(0,r.Z)({},N);c.keys.forEach((n=>{null!=N[n]&&(G[n]=N[n],delete B[n])}));const E=(0,r.Z)({},l,{columns:j,container:w,direction:b,item:k,rowSpacing:R,columnSpacing:z,wrap:M,zeroMinWidth:W,spacing:C},G,{breakpoints:c.keys}),F=y(E);return(0,v.jsx)(h.Provider,{value:j,children:(0,v.jsx)(Z,(0,r.Z)({ownerState:E,className:(0,o.Z)(F.root,u),as:f,ref:t},B))})}));const M=C},15237:(n,t,e)=>{e.d(t,{Z:()=>P});var a=e(71171),r=e(31461),i=e(7896),o=e(30969),c=e(87023),s=e(54470),l=e(26540);function u(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function p(n){return parseFloat(n)}var d=e(87052),h=e(45971),m=e(17363),g=e(62746),f=e(2975);function w(n){return(0,f.ZP)("MuiSkeleton",n)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,v,x,k,S=e(37574);const Z=["animation","className","component","height","style","variant","width"];let y,C,M,W;const N=(0,s.F4)(y||(y=b||(b=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,s.F4)(C||(C=v||(v=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),z=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((n=>{let{theme:t,ownerState:e}=n;const a=u(t.shape.borderRadius)||"px",r=p(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(a,"/").concat(Math.round(r/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(n=>{let{ownerState:t}=n;return"pulse"===t.animation&&(0,s.iv)(M||(M=x||(x=(0,a.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),N)}),(n=>{let{ownerState:t,theme:e}=n;return"wave"===t.animation&&(0,s.iv)(W||(W=k||(k=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(e.vars||e).palette.action.hover)})),P=o.forwardRef((function(n,t){const e=(0,m.Z)({props:n,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:s="span",height:u,style:p,variant:d="text",width:h}=e,g=(0,r.Z)(e,Z),f=(0,i.Z)({},e,{animation:a,component:s,variant:d,hasChildren:Boolean(g.children)}),b=(n=>{const{classes:t,variant:e,animation:a,hasChildren:r,width:i,height:o}=n,c={root:["root",e,a,r&&"withChildren",r&&!i&&"fitContent",r&&!o&&"heightAuto"]};return(0,l.Z)(c,w,t)})(f);return(0,S.jsx)(z,(0,i.Z)({as:s,ref:t,className:(0,c.Z)(b.root,o),ownerState:f},g,{style:(0,i.Z)({width:h,height:u},p)}))}))}}]);
//# sourceMappingURL=9309.0259b485.chunk.js.map