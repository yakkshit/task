(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4478],{77975:(e,t,o)=>{Promise.resolve().then(o.bind(o,56839))},56839:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>U});var n=o(95155),r=o(12115),a=o(76046),l=o(78365);function c(e){let{children:t}=e,{user:o}=(0,l.A)(),c=(0,a.useRouter)();return((0,r.useEffect)(()=>{o||c.push("/auth/signup")},[o,c]),o)?(0,n.jsx)(n.Fragment,{children:t}):null}var s=o(20418),i=o(72093),u=o(79005),d=o(16910),p=o(4617),m=o.n(p),f=o(70527),h=o(28673),g=o(64766),y=o(58292),b=o(71054),v=o(31049),x=o(67548),j=o(10815),C=o(70695),O=o(56204),S=o(1086);let k=e=>{let{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:n,componentCls:r,calc:a}=e,l=a(n).sub(o).equal(),c=a(t).sub(o).equal();return{[r]:Object.assign(Object.assign({},(0,C.dF)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat((0,x.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",position:"relative",["&".concat(r,"-rtl")]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},["".concat(r,"-close-icon")]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}},["&".concat(r,"-has-color")]:{borderColor:"transparent",["&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover")]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",["&:not(".concat(r,"-checkable-checked):hover")]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},["> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls)]:{marginInlineStart:l}}),["".concat(r,"-borderless")]:{borderColor:"transparent",background:e.tagBorderlessBg}}},E=e=>{let{lineWidth:t,fontSizeIcon:o,calc:n}=e,r=e.fontSizeSM;return(0,O.oX)(e,{tagFontSize:r,tagLineHeight:(0,x.zA)(n(e.lineHeightSM).mul(r).equal()),tagIconSize:n(o).sub(n(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},w=e=>({defaultBg:new j.Y(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),P=(0,S.OF)("Tag",e=>k(E(e)),w);var N=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let A=r.forwardRef((e,t)=>{let{prefixCls:o,style:n,className:a,checked:l,onChange:c,onClick:s}=e,i=N(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:u,tag:d}=r.useContext(v.QO),p=u("tag",o),[f,h,g]=P(p),y=m()(p,"".concat(p,"-checkable"),{["".concat(p,"-checkable-checked")]:l},null==d?void 0:d.className,a,h,g);return f(r.createElement("span",Object.assign({},i,{ref:t,style:Object.assign(Object.assign({},n),null==d?void 0:d.style),className:y,onClick:e=>{null==c||c(!l),null==s||s(e)}})))});var M=o(46258);let T=e=>(0,M.A)(e,(t,o)=>{let{textColor:n,lightBorderColor:r,lightColor:a,darkColor:l}=o;return{["".concat(e.componentCls).concat(e.componentCls,"-").concat(t)]:{color:n,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}}),I=(0,S.bf)(["Tag","preset"],e=>T(E(e)),w),D=(e,t,o)=>{let n=function(e){return"string"!=typeof e?e:e.charAt(0).toUpperCase()+e.slice(1)}(o);return{["".concat(e.componentCls).concat(e.componentCls,"-").concat(t)]:{color:e["color".concat(o)],background:e["color".concat(n,"Bg")],borderColor:e["color".concat(n,"Border")],["&".concat(e.componentCls,"-borderless")]:{borderColor:"transparent"}}}},z=(0,S.bf)(["Tag","status"],e=>{let t=E(e);return[D(t,"success","Success"),D(t,"processing","Info"),D(t,"error","Error"),D(t,"warning","Warning")]},w);var L=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let B=r.forwardRef((e,t)=>{let{prefixCls:o,className:n,rootClassName:a,style:l,children:c,icon:s,color:i,onClose:u,bordered:d=!0,visible:p}=e,x=L(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:j,direction:C,tag:O}=r.useContext(v.QO),[S,k]=r.useState(!0),E=(0,f.A)(x,["closeIcon","closable"]);r.useEffect(()=>{void 0!==p&&k(p)},[p]);let w=(0,h.nP)(i),N=(0,h.ZZ)(i),A=w||N,M=Object.assign(Object.assign({backgroundColor:i&&!A?i:void 0},null==O?void 0:O.style),l),T=j("tag",o),[D,B,F]=P(T),R=m()(T,null==O?void 0:O.className,{["".concat(T,"-").concat(i)]:A,["".concat(T,"-has-color")]:i&&!A,["".concat(T,"-hidden")]:!S,["".concat(T,"-rtl")]:"rtl"===C,["".concat(T,"-borderless")]:!d},n,a,B,F),_=e=>{e.stopPropagation(),null==u||u(e),e.defaultPrevented||k(!1)},[,H]=(0,g.A)((0,g.d)(e),(0,g.d)(O),{closable:!1,closeIconRender:e=>{let t=r.createElement("span",{className:"".concat(T,"-close-icon"),onClick:_},e);return(0,y.fx)(e,t,e=>({onClick:t=>{var o;null===(o=null==e?void 0:e.onClick)||void 0===o||o.call(e,t),_(t)},className:m()(null==e?void 0:e.className,"".concat(T,"-close-icon"))}))}}),q="function"==typeof x.onClick||c&&"a"===c.type,K=s||null,U=K?r.createElement(r.Fragment,null,K,c&&r.createElement("span",null,c)):c,V=r.createElement("span",Object.assign({},E,{ref:t,className:R,style:M}),U,H,w&&r.createElement(I,{key:"preset",prefixCls:T}),N&&r.createElement(z,{key:"status",prefixCls:T}));return D(q?r.createElement(b.A,{component:"Tag"},V):V)});B.CheckableTag=A;var F=o(5565),R=o(2818);let{Title:_,Text:H}=s.A,q=R.env.API_AUTH_KEY||"qwerty123";function K(){let[e,t]=(0,r.useState)([]),[o,a]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/orders",{headers:{Authorization:q}});if(!e.ok)throw Error("Failed to fetch orders");let o=await e.json();t(o)}catch(e){console.error("Error fetching orders:",e)}finally{a(!1)}})()},[]),o)?(0,n.jsx)("div",{className:"flex justify-center items-center h-96",children:(0,n.jsx)(i.A,{size:"large"})}):0===e.length?(0,n.jsxs)("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[(0,n.jsx)(_,{level:2,children:"No orders yet"}),(0,n.jsx)(H,{className:"block mb-8",children:"When you place an order, it will appear here"}),(0,n.jsx)(u.Ay,{type:"primary",size:"large",href:"/products",children:"Start Shopping"})]}):(0,n.jsxs)("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[(0,n.jsx)(_,{level:2,children:"Order History"}),(0,n.jsx)(H,{className:"block mb-8",children:"Keep tabs on the status of your latest orders, effortlessly handle returns, and easily download invoices with just a few clicks."}),(0,n.jsx)("div",{className:"space-y-6",children:e.map(e=>(0,n.jsxs)(d.A,{children:[(0,n.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(H,{className:"block",children:["Order #",e.id]}),(0,n.jsxs)(H,{type:"secondary",children:["Placed on ",new Date(e.createdAt).toLocaleDateString()]})]}),(0,n.jsxs)("div",{className:"text-right",children:[(0,n.jsx)(B,{color:function(e){switch(e){case"pending":return"gold";case"processing":return"blue";case"shipped":return"cyan";case"delivered":return"green";default:return"default"}}(e.status),children:e.status}),(0,n.jsxs)(H,{className:"block font-semibold mt-1",children:["$",e.total.toFixed(2)]})]})]}),(0,n.jsx)("div",{className:"space-y-4",children:e.items.map(e=>(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)("div",{className:"relative w-20 h-20",children:(0,n.jsx)(F.default,{src:e.image||"/placeholder.svg",alt:e.title,fill:!0,className:"object-contain"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{className:"block",children:e.title}),(0,n.jsxs)(H,{type:"secondary",children:[e.color," | ",e.size," | Qty: ",e.quantity]})]}),(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsxs)(H,{children:["$",(e.price*e.quantity).toFixed(2)]})})]},"".concat(e.id,"-").concat(e.color,"-").concat(e.size)))}),(0,n.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,n.jsx)(u.Ay,{children:"View Order"}),(0,n.jsx)(u.Ay,{children:"View Invoice"}),"delivered"===e.status&&(0,n.jsx)(u.Ay,{type:"primary",children:"Buy Again"})]})]},e.id))})]})}function U(){return(0,n.jsx)(c,{children:(0,n.jsx)(K,{})})}},78365:(e,t,o)=>{"use strict";o.d(t,{A:()=>s,AuthProvider:()=>c});var n=o(95155),r=o(12115),a=o(76046);let l=(0,r.createContext)(void 0);function c(e){let{children:t}=e,[o,c]=(0,r.useState)(null),s=(0,a.useRouter)();(0,r.useEffect)(()=>{let e=localStorage.getItem("user");e&&c(JSON.parse(e))},[]);let i=async(e,t)=>{let o={id:"1",email:e};c(o),localStorage.setItem("user",JSON.stringify(o))},u=async(e,t)=>{let o={id:"1",email:e};c(o),localStorage.setItem("user",JSON.stringify(o))};return(0,n.jsx)(l.Provider,{value:{user:o,login:i,logout:()=>{c(null),localStorage.removeItem("user"),s.push("/")},signup:u},children:t})}function s(){let e=(0,r.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},64766:(e,t,o)=>{"use strict";o.d(t,{A:()=>u,d:()=>l});var n=o(12115),r=o(79624),a=o(97181);function l(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function c(e){let{closable:t,closeIcon:o}=e||{};return n.useMemo(()=>{if(!t&&(!1===t||!1===o||null===o))return!1;if(void 0===t&&void 0===o)return null;let e={closeIcon:"boolean"!=typeof o&&null!==o?o:void 0};return t&&"object"==typeof t&&(e=Object.assign(Object.assign({},e),t)),e},[t,o])}function s(){let e={};for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.forEach(t=>{t&&Object.keys(t).forEach(o=>{void 0!==t[o]&&(e[o]=t[o])})}),e}let i={};function u(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,l=c(e),u=c(t),d="boolean"!=typeof l&&!!(null==l?void 0:l.disabled),p=n.useMemo(()=>Object.assign({closeIcon:n.createElement(r.A,null)},o),[o]),m=n.useMemo(()=>!1!==l&&(l?s(p,u,l):!1!==u&&(u?s(p,u):!!p.closable&&p)),[l,u,p]);return n.useMemo(()=>{if(!1===m)return[!1,null,d];let{closeIconRender:e}=p,{closeIcon:t}=m,o=t;if(null!=o){e&&(o=e(t));let r=(0,a.A)(m,!0);Object.keys(r).length&&(o=n.isValidElement(o)?n.cloneElement(o,r):n.createElement("span",Object.assign({},r),o))}return[!0,o,d]},[m,p])}},16910:(e,t,o)=>{"use strict";o.d(t,{A:()=>d});var n=o(4766),r=o(2338),a=o(12115),l=o(4617),c=o.n(l),s=o(31049),i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let u=n.A;u.Grid=r.A,u.Meta=e=>{let{prefixCls:t,className:o,avatar:n,title:r,description:l}=e,u=i(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=a.useContext(s.QO),p=d("card",t),m=c()("".concat(p,"-meta"),o),f=n?a.createElement("div",{className:"".concat(p,"-meta-avatar")},n):null,h=r?a.createElement("div",{className:"".concat(p,"-meta-title")},r):null,g=l?a.createElement("div",{className:"".concat(p,"-meta-description")},l):null,y=h||g?a.createElement("div",{className:"".concat(p,"-meta-detail")},h,g):null;return a.createElement("div",Object.assign({},u,{className:m}),f,y)};let d=u},76046:(e,t,o)=>{"use strict";var n=o(66658);o.o(n,"useParams")&&o.d(t,{useParams:function(){return n.useParams}}),o.o(n,"usePathname")&&o.d(t,{usePathname:function(){return n.usePathname}}),o.o(n,"useRouter")&&o.d(t,{useRouter:function(){return n.useRouter}}),o.o(n,"useSearchParams")&&o.d(t,{useSearchParams:function(){return n.useSearchParams}})},45353:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=o(12115);function r(e,t){let o=(0,n.useRef)(()=>{}),r=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(o.current(),r.current()):(o.current=a(e,n),r.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let o=e(t);return"function"==typeof o?o:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97181:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var n=o(85268),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function a(e,t){return 0===e.indexOf(t)}function l(e){var t,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===o?{aria:!0,data:!0,attr:!0}:!0===o?{aria:!0}:(0,n.A)({},o);var l={};return Object.keys(e).forEach(function(o){(t.aria&&("role"===o||a(o,"aria-"))||t.data&&a(o,"data-")||t.attr&&r.includes(o))&&(l[o]=e[o])}),l}}},e=>{var t=t=>e(e.s=t);e.O(0,[6653,1628,9891,418,7483,4766,9005,5565,2093,8441,1517,7358],()=>t(77975)),_N_E=e.O()}]);