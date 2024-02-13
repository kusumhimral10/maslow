"use strict";(self.webpackChunkflowise_ui=self.webpackChunkflowise_ui||[]).push([[2902],{20918:(e,t,o)=>{o.d(t,{Z:()=>a});o(30969);const a=o.p+"static/media/tools_empty.eecfe609e06019f7ab47cef3ee1171a1.svg"},23917:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(99661),n=o(11021);const i=a.Z.create({baseURL:"".concat(n.v2,"/api/v1"),headers:{"Content-type":"application/json"}});i.interceptors.request.use((function(e){const t=localStorage.getItem("username"),o=localStorage.getItem("password");return t&&o&&(e.auth={username:t,password:o}),e}));const r=i},74404:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(23917);const n={getAllTools:()=>a.Z.get("/tools"),getSpecificTool:e=>a.Z.get("/tools/".concat(e)),createNewTool:e=>a.Z.post("/tools",e),updateTool:(e,t)=>a.Z.put("/tools/".concat(e),t),deleteTool:e=>a.Z.delete("/tools/".concat(e))}},60990:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(30969);const n=e=>{const[t,o]=(0,a.useState)(null),[n,i]=(0,a.useState)(null),[r,s]=(0,a.useState)(!1);return{data:t,error:n,loading:r,request:async function(){s(!0);try{const t=await e(...arguments);o(t.data)}catch(t){i(t||"Unexpected Error!")}finally{s(!1)}}}}},60806:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(30969),n=o(30864),i=o(2383);let r;const s=()=>{const[e,t]=(0,a.useContext)(n.Z),o=()=>{t({type:i.bA})};return{confirm:e=>(t({type:i.gN,payload:e}),new Promise((e=>{r=e}))),onConfirm:()=>{o(),r(!0)},onCancel:()=>{o(),r(!1)},confirmState:e}}},52312:(e,t,o)=>{o.d(t,{S:()=>r});var a=o(45971),n=o(46138),i=o(92752);const r=(0,a.ZP)(n.Z)((e=>{let{theme:t,color:o="primary"}=e;return{background:"#469DBB",color:"#fff",borderRadius:"0px","&:disabled":{backgroundColor:t.palette.primary.isDisable},"&:hover":{backgroundColor:"#2398c1",backgroundImage:"linear-gradient(rgb(0 0 0/10%) 0 0)"}}}));(0,a.ZP)(i.Z)((e=>{let{theme:t,color:o="primary"}=e;return{"&.Mui-selected, &.Mui-selected:hover":{color:"white",backgroundColor:t.palette[o].main}}}))},24326:(e,t,o)=>{o.d(t,{Z:()=>m});var a=o(45971),n=o(43108),i=o(26754),r=o(47915),s=o(55705),l=o(22994),c=o(42846),d=o(15237),h=o(37574);const u=()=>(0,h.jsx)(l.Z,{children:(0,h.jsx)(c.Z,{children:(0,h.jsxs)(i.ZP,{container:!0,direction:"column",children:[(0,h.jsx)(i.ZP,{item:!0,children:(0,h.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",children:[(0,h.jsx)(i.ZP,{item:!0,children:(0,h.jsx)(d.Z,{variant:"rectangular",width:44,height:44})}),(0,h.jsx)(i.ZP,{item:!0,children:(0,h.jsx)(d.Z,{variant:"rectangular",width:34,height:34})})]})}),(0,h.jsx)(i.ZP,{item:!0,children:(0,h.jsx)(d.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,h.jsx)(i.ZP,{item:!0,children:(0,h.jsx)(d.Z,{variant:"rectangular",height:30})})]})})});o(20028);var p=o(69405);const x=(0,a.ZP)(s.Z)((e=>{let{theme:t}=e;return{background:t.palette.card.ItemCard,color:t.darkTextPrimary,overflow:"auto",position:"relative",boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",cursor:"pointer","&:hover":{background:t.palette.card.ItemCardhover,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 20%)"},maxHeight:"300px",maxWidth:"300px",overflowWrap:"break-word",whiteSpace:"pre-line"}})),m=e=>{let{isLoading:t,data:o,images:a,onClick:s}=e;const l=(0,p.v9)((e=>e.customization));return(0,h.jsx)(h.Fragment,{children:t?(0,h.jsx)(u,{}):(0,h.jsx)(x,{border:!1,content:!1,onClick:s,children:(0,h.jsx)(n.Z,{sx:{p:2.25},children:(0,h.jsxs)(i.ZP,{container:!0,direction:"column",children:[(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[o.iconSrc&&(0,h.jsx)("div",{style:{width:35,height:35,marginRight:10,borderRadius:"50%",background:"url(".concat(o.iconSrc,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}),!o.iconSrc&&o.color&&(0,h.jsx)("div",{style:{width:35,height:35,marginRight:10,background:o.color}}),(0,h.jsx)(r.Z,{sx:{color:l.isDarkMode?"#121D35":"#FFF860",fontSize:"1.5rem",fontWeight:500,overflowWrap:"break-word",whiteSpace:"pre-line"},children:o.templateName||o.name})]}),o.description&&(0,h.jsx)("span",{style:{color:l.isDarkMode?"#121D35":"#fff",marginTop:10,overflowWrap:"break-word",whiteSpace:"pre-line"},children:o.description}),a&&(0,h.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:5},children:a.map((e=>(0,h.jsx)("div",{style:{width:35,height:35,marginRight:5,backgroundColor:"#EEEEEE",marginTop:5},children:(0,h.jsx)("img",{style:{width:"100%",height:"100%",padding:5,objectFit:"contain"},alt:"",src:e})},e)))})]})})})})}},48349:(e,t,o)=>{o.d(t,{Z:()=>u});var a=o(15749),n=o(48886),i=o(38357),r=o(87130),s=o(91862),l=o(46138),c=o(60806),d=o(52312),h=o(37574);const u=()=>{const{onConfirm:e,onCancel:t,confirmState:o}=(0,c.Z)(),u=document.getElementById("portal"),p=o.show?(0,h.jsxs)(n.Z,{fullWidth:!0,maxWidth:"xs",open:o.show,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,h.jsx)(i.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:o.title}),(0,h.jsx)(r.Z,{children:(0,h.jsx)("span",{children:o.description})}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{onClick:t,children:o.cancelButtonName}),(0,h.jsx)(d.S,{variant:"contained",onClick:e,children:o.confirmButtonName})]})]}):null;return(0,a.createPortal)(p,u)}},73081:(e,t,o)=>{o.d(t,{p:()=>d});var a=o(89089),n=o(45317),i=o(64139),r=o(32604),s=o(13195),l=o(87038),c=o(37574);const d=e=>{let{value:t,height:o,theme:d,lang:h,placeholder:u,disabled:p=!1,basicSetup:x={},onValueChange:m}=e;const g=l.tk.baseTheme({"&":{color:"#191b1f",padding:"10px"},".cm-placeholder":{color:"rgba(120, 120, 120, 0.5)"}});return(0,c.jsx)(a.ZP,{placeholder:u,value:t,height:null!==o&&void 0!==o?o:"calc(100vh - 220px)",theme:"dark"===d?"js"===h?r.Pc:s.CP:"none",extensions:"js"===h?[(0,n.eJ)({jsx:!0}),l.tk.lineWrapping,g]:[(0,i.AV)(),l.tk.lineWrapping,g],onChange:m,readOnly:p,editable:!p,basicSetup:x})}},97251:(e,t,o)=>{o.d(t,{H:()=>c});var a=o(46705),n=o(6779),i=o(91243),r=o(12011),s=o(69405),l=o(37574);const c=e=>{let{title:t,style:o}=e;const c=(0,s.v9)((e=>e.customization));return(0,l.jsx)(n.Z,{title:(0,r.ZP)(t),placement:"right",children:(0,l.jsx)(i.Z,{sx:{height:15,width:15},children:(0,l.jsx)(a.Z,{style:{...o,background:"transparent",color:c.isDarkMode?"white":"inherit",height:15,width:15}})})})}},33926:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(30969),n=o(69405),i=o(47379),r=o(2383);let s=[];const l=()=>{const e=(0,n.I0)(),t=(0,n.v9)((e=>e.notifier)),{notifications:o}=t,{enqueueSnackbar:l,closeSnackbar:c}=(0,i.Ds)();a.useEffect((()=>{o.forEach((t=>{let{key:o,message:a,options:n={},dismissed:i=!1}=t;var d;i?c(o):s.includes(o)||(l(a,{key:o,...n,onClose:(e,t,o)=>{n.onClose&&n.onClose(e,t,o)},onExited:(t,o)=>{var a;e((0,r.PN)(o)),a=o,s=[...s.filter((e=>a!==e))]}}),d=o,s=[...s,d])}))}),[o,c,l,e])}},668:(e,t,o)=>{o.d(t,{Z:()=>I});var a=o(15749),n=o(30969),i=o(69405),r=o(2383),s=o(50576),l=o(46138),c=o(48886),d=o(38357),h=o(87130),u=o(43108),p=o(25139),x=o(47915),m=o(33656),g=o(91862),f=o(52312),j=o(40894),y=o(49009),v=o(37574);const Z=e=>{let{columns:t,rows:o,style:a,disabled:n=!1,onRowUpdate:i,addNewRow:r}=e;return(0,v.jsxs)(v.Fragment,{children:[!n&&(0,v.jsx)(l.Z,{variant:"outlined",onClick:r,startIcon:(0,v.jsx)(y.SC9,{}),children:"Add Item"}),o&&t&&(0,v.jsx)("div",{style:{marginTop:10,height:300,width:"100%",...a},children:(0,v.jsx)(j._$,{processRowUpdate:e=>(i(e),e),isCellEditable:()=>!n,onProcessRowUpdateError:e=>console.error(e),rows:o,columns:t})})]})};var w=o(97251),b=o(44850),T=o(10814),k=o(48349),C=o(73081),S=o(74404),D=o(60806),E=o(60990),P=o(33926),N=o(86115);const I=e=>{let{show:t,dialogProps:o,onUseTemplate:j,onCancel:I,onConfirm:M}=e;const A=document.getElementById("portal"),R=(0,i.v9)((e=>e.customization)),L=(0,i.I0)();(0,P.Z)();const{confirm:F}=(0,D.Z)(),B=function(){return L((0,r.yv)(...arguments))},O=function(){return L((0,r.sy)(...arguments))},W=(0,E.Z)(S.Z.getSpecificTool),[q,U]=(0,n.useState)(""),[z,G]=(0,n.useState)(""),[J,_]=(0,n.useState)(""),[H,V]=(0,n.useState)(""),[Y,$]=(0,n.useState)([]),[K,Q]=(0,n.useState)(""),X=(0,n.useCallback)((e=>()=>{setTimeout((()=>{$((t=>t.filter((t=>t.id!==e))))}))}),[]),ee=(0,n.useMemo)((()=>[{field:"property",headerName:"Property",editable:!0,flex:1},{field:"type",headerName:"Type",type:"singleSelect",valueOptions:["string","number","boolean","date"],editable:!0,width:120},{field:"description",headerName:"Description",editable:!0,flex:1},{field:"required",headerName:"Required",type:"boolean",editable:!0,width:80},{field:"actions",type:"actions",width:80,getActions:e=>[(0,v.jsx)(b.u,{icon:(0,v.jsx)(T.Z,{}),label:"Delete",onClick:X(e.id)},"Delete")]}]),[X]);(0,n.useEffect)((()=>(L(t?{type:r.tS}:{type:r.Go}),()=>L({type:r.Go}))),[t,L]),(0,n.useEffect)((()=>{W.data&&(U(W.data.id),G(W.data.name),_(W.data.description),$((0,N.RO)(W.data.schema)),W.data.func?Q(W.data.func):Q(""))}),[W.data]),(0,n.useEffect)((()=>{"EDIT"===o.type&&o.data?(U(o.data.id),G(o.data.name),_(o.data.description),V(o.data.iconSrc),$((0,N.RO)(o.data.schema)),o.data.func?Q(o.data.func):Q("")):"EDIT"===o.type&&o.toolId?W.request(o.toolId):"IMPORT"===o.type&&o.data||"TEMPLATE"===o.type&&o.data?(G(o.data.name),_(o.data.description),V(o.data.iconSrc),$((0,N.RO)(o.data.schema)),o.data.func?Q(o.data.func):Q("")):"ADD"===o.type&&(U(""),G(""),_(""),V(""),$([]),Q(""))}),[o]);const te=t?(0,v.jsxs)(c.Z,{fullWidth:!0,maxWidth:"md",open:t,onClose:I,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,v.jsx)(d.Z,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:(0,v.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[o.title,(0,v.jsx)("div",{style:{flex:1}}),"EDIT"===o.type&&(0,v.jsx)(l.Z,{variant:"outlined",onClick:()=>(async()=>{try{const e=await S.Z.getSpecificTool(q);if(e.data){const t=e.data;delete t.id,delete t.createdDate,delete t.updatedDate;let o=JSON.stringify(t,null,2),a="data:application/json;charset=utf-8,"+encodeURIComponent(o),n="".concat(z,"-CustomTool.json"),i=document.createElement("a");i.setAttribute("href",a),i.setAttribute("download",n),i.click()}}catch(e){const t=e.response.data||"".concat(e.response.status,": ").concat(e.response.statusText);B({message:"Failed to export Tool: ".concat(t),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),I()}})(),startIcon:(0,v.jsx)(y.D57,{}),children:"Export"})]})}),(0,v.jsxs)(h.Z,{children:[(0,v.jsxs)(u.Z,{sx:{p:2},children:[(0,v.jsx)(p.Z,{sx:{position:"relative"},direction:"row",children:(0,v.jsxs)(x.Z,{variant:"overline",children:["Tool Name",(0,v.jsx)("span",{style:{color:"red"},children:"\xa0*"}),(0,v.jsx)(w.H,{style:{marginLeft:10},title:"Tool name must be small capital letter with underscore. Ex: my_tool"})]})}),(0,v.jsx)(m.Z,{id:"toolName",type:"string",fullWidth:!0,disabled:"TEMPLATE"===o.type,placeholder:"My New Tool",value:z,name:"toolName",onChange:e=>G(e.target.value)})]}),(0,v.jsxs)(u.Z,{sx:{p:2},children:[(0,v.jsx)(p.Z,{sx:{position:"relative"},direction:"row",children:(0,v.jsxs)(x.Z,{variant:"overline",children:["Tool description",(0,v.jsx)("span",{style:{color:"red"},children:"\xa0*"}),(0,v.jsx)(w.H,{style:{marginLeft:10},title:"Description of what the tool does. This is for ChatGPT to determine when to use this tool."})]})}),(0,v.jsx)(m.Z,{id:"toolDesc",type:"string",fullWidth:!0,disabled:"TEMPLATE"===o.type,placeholder:"Description of what the tool does. This is for ChatGPT to determine when to use this tool.",multiline:!0,rows:3,value:J,name:"toolDesc",onChange:e=>_(e.target.value)})]}),(0,v.jsxs)(u.Z,{sx:{p:2},children:[(0,v.jsx)(p.Z,{sx:{position:"relative"},direction:"row",children:(0,v.jsx)(x.Z,{variant:"overline",children:"Tool Icon Src"})}),(0,v.jsx)(m.Z,{id:"toolIcon",type:"string",fullWidth:!0,disabled:"TEMPLATE"===o.type,placeholder:"https://raw.githubusercontent.com/gilbarbara/logos/main/logos/airtable.svg",value:H,name:"toolIcon",onChange:e=>V(e.target.value)})]}),(0,v.jsxs)(u.Z,{sx:{p:2},children:[(0,v.jsx)(p.Z,{sx:{position:"relative"},direction:"row",children:(0,v.jsxs)(x.Z,{variant:"overline",children:["Output Schema",(0,v.jsx)(w.H,{style:{marginLeft:10},title:"What should be the output response in JSON format?"})]})}),(0,v.jsx)(Z,{columns:ee,rows:Y,disabled:"TEMPLATE"===o.type,addNewRow:()=>{setTimeout((()=>{$((e=>{let t=[...(0,s.cloneDeep)(e)];const o=t.length?t[t.length-1].id+1:1;return t.push({id:o,property:"",description:"",type:"",required:!1}),t}))}))},onRowUpdate:e=>{setTimeout((()=>{$((t=>{let o=[...(0,s.cloneDeep)(t)];const a=o.findIndex((t=>t.id===e.id));return a>=0&&(o[a]={...e}),o}))}))}})]}),(0,v.jsxs)(u.Z,{sx:{p:2},children:[(0,v.jsx)(p.Z,{sx:{position:"relative"},direction:"row",children:(0,v.jsxs)(x.Z,{variant:"overline",children:["Javascript Function",(0,v.jsx)(w.H,{style:{marginLeft:10},title:'Function to execute when tool is being used. You can use properties specified in Output Schema as variables. For example, if the property is <code>userid</code>, you can use as <code>$userid</code>. Return value must be a string. You can also override the code from API by following this <a target="_blank" href="https://docs.flowiseai.com/tools/custom-tool#override-function-from-api">guide</a>'})]})}),"TEMPLATE"!==o.type&&(0,v.jsx)(l.Z,{style:{marginBottom:10},variant:"outlined",onClick:()=>Q("/*\n* You can use any libraries imported in Flowise\n* You can use properties specified in Output Schema as variables. Ex: Property = userid, Variable = $userid\n* Must return a string value at the end of function\n*/\n\nconst fetch = require('node-fetch');\nconst url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true';\nconst options = {\n    method: 'GET',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n};\ntry {\n    const response = await fetch(url, options);\n    const text = await response.text();\n    return text;\n} catch (error) {\n    console.error(error);\n    return '';\n}"),children:"See Example"}),(0,v.jsx)(C.p,{disabled:"TEMPLATE"===o.type,value:K,height:"calc(100vh - 220px)",theme:R.isDarkMode?"dark":"light",lang:"js",onValueChange:e=>Q(e)})]})]}),(0,v.jsxs)(g.Z,{children:["EDIT"===o.type&&(0,v.jsx)(f.S,{color:"error",variant:"contained",onClick:()=>(async()=>{const e={title:"Delete Tool",description:"Delete tool ".concat(z,"?"),confirmButtonName:"Delete",cancelButtonName:"Cancel"};if(await F(e))try{(await S.Z.deleteTool(q)).data&&(B({message:"Tool deleted",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),M())}catch(t){const e=t.response.data||"".concat(t.response.status,": ").concat(t.response.statusText);B({message:"Failed to delete Tool: ".concat(e),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),I()}})(),children:"Delete"}),"TEMPLATE"===o.type&&(0,v.jsx)(f.S,{color:"secondary",variant:"contained",onClick:()=>{j(o.data)},children:"Use Template"}),"TEMPLATE"!==o.type&&(0,v.jsx)(f.S,{disabled:!(z&&J),variant:"contained",onClick:()=>"ADD"===o.type||"IMPORT"===o.type?(async()=>{try{const e={name:z,description:J,color:(0,N.xl)(),schema:JSON.stringify(Y),func:K,iconSrc:H},t=await S.Z.createNewTool(e);t.data&&(B({message:"New Tool added",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),M(t.data.id))}catch(e){const t=e.response.data||"".concat(e.response.status,": ").concat(e.response.statusText);B({message:"Failed to add new Tool: ".concat(t),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),I()}})():(async()=>{try{const e=await S.Z.updateTool(q,{name:z,description:J,schema:JSON.stringify(Y),func:K,iconSrc:H});e.data&&(B({message:"Tool saved",options:{key:(new Date).getTime()+Math.random(),variant:"success",action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),M(e.data.id))}catch(e){console.error(e);const t=e.response.data||"".concat(e.response.status,": ").concat(e.response.statusText);B({message:"Failed to save Tool: ".concat(t),options:{key:(new Date).getTime()+Math.random(),variant:"error",persist:!0,action:e=>(0,v.jsx)(l.Z,{style:{color:"white"},onClick:()=>O(e),children:(0,v.jsx)(y.kLi,{})})}}),I()}})(),children:o.confirmButtonName})]}),(0,v.jsx)(k.Z,{})]}):null;return(0,a.createPortal)(te,A)}},82902:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var a=o(30969),n=o(69405),i=o(25139),r=o(47915),s=o(26754),l=o(43108),c=o(46138),d=o(94702),h=o(55705),u=o(24326),p=o(11021),x=o(20918),m=o(52312),g=o(668),f=o(74404),j=o(60990),y=o(49009),v=o(66798),Z=o(37574);const w=(0,v.u3)((()=>{const e=(0,d.Z)(),t=(0,n.v9)((e=>e.customization)),o=(0,j.Z)(f.Z.getAllTools),[v,w]=(0,a.useState)(!1),[b,T]=(0,a.useState)({}),k=(0,a.useRef)(null),C=e=>{if(!e.target.files)return;const t=e.target.files[0],o=new FileReader;o.onload=t=>{var o;if(null===t||void 0===t||null===(o=t.target)||void 0===o||!o.result)return;const{result:a}=t.target;(t=>{try{const e={title:"Add New Tool",type:"IMPORT",cancelButtonName:"Cancel",confirmButtonName:"Save",data:JSON.parse(t)};T(e),w(!0)}catch(e){console.error(e)}})(a)},o.readAsText(t)};return(0,a.useEffect)((()=>{o.request()}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{sx:{background:t.isDarkMode?e.palette.common.black:""},children:[(0,Z.jsxs)(i.Z,{flexDirection:"row",children:[(0,Z.jsx)(r.Z,{variant:"h1",children:"Tools"}),(0,Z.jsxs)(s.ZP,{sx:{mb:1.25},container:!0,direction:"row",children:[(0,Z.jsx)(l.Z,{sx:{flexGrow:1}}),(0,Z.jsxs)(s.ZP,{item:!0,children:[(0,Z.jsx)(c.Z,{variant:"outlined",sx:{mr:2},onClick:()=>k.current.click(),startIcon:(0,Z.jsx)(y.xbh,{}),children:"Load"}),(0,Z.jsx)("input",{ref:k,type:"file",hidden:!0,accept:".json",onChange:e=>C(e)}),(0,Z.jsx)(m.S,{variant:"contained",sx:{color:"white"},onClick:()=>{T({title:"Add New Tool",type:"ADD",cancelButtonName:"Cancel",confirmButtonName:"Add"}),w(!0)},startIcon:(0,Z.jsx)(y.SC9,{}),children:"Create"})]})]})]}),(0,Z.jsx)(s.ZP,{container:!0,spacing:p.dv,children:!o.loading&&o.data&&o.data.map(((e,t)=>(0,Z.jsx)(s.ZP,{item:!0,lg:3,md:4,sm:6,xs:12,children:(0,Z.jsx)(u.Z,{data:e,onClick:()=>(T({title:"Edit Tool",type:"EDIT",cancelButtonName:"Cancel",confirmButtonName:"Save",data:e}),void w(!0))})},t)))}),!o.loading&&(!o.data||0===o.data.length)&&(0,Z.jsxs)(i.Z,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[(0,Z.jsx)(l.Z,{sx:{p:2,height:"auto"},children:(0,Z.jsx)("img",{style:{objectFit:"cover",height:"30vh",width:"auto"},src:x.Z,alt:"ToolEmptySVG"})}),(0,Z.jsx)("div",{children:"No Tools Created Yet"})]})]}),(0,Z.jsx)(g.Z,{show:v,dialogProps:b,onCancel:()=>w(!1),onConfirm:()=>{w(!1),o.request()}})]})}))}}]);
//# sourceMappingURL=2902.d97285bf.chunk.js.map