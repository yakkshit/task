"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9588],{50358:(e,t,n)=>{n.d(t,{A:()=>M});var r=n(12115),a=n(4617),o=n.n(a),l=n(37801),c=n(15231),i=n(71054),u=n(43144),s=n(31049),d=n(30033),f=n(7926),v=n(30149);let g=r.createContext(null);var b=n(67548),m=n(70695),p=n(56204),h=n(1086);let C=e=>{let{checkboxCls:t}=e,n="".concat(t,"-wrapper");return[{["".concat(t,"-group")]:Object.assign(Object.assign({},(0,m.dF)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,["> ".concat(e.antCls,"-row")]:{flex:1}}),[n]:Object.assign(Object.assign({},(0,m.dF)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},["& + ".concat(n)]:{marginInlineStart:0},["&".concat(n,"-in-form-item")]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,m.dF)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",["".concat(t,"-input")]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,["&:focus-visible + ".concat(t,"-inner")]:Object.assign({},(0,m.jk)(e))},["".concat(t,"-inner")]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat((0,b.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:"".concat((0,b.zA)(e.lineWidthBold)," solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{["\n        ".concat(n,":not(").concat(n,"-disabled),\n        ").concat(t,":not(").concat(t,"-disabled)\n      ")]:{["&:hover ".concat(t,"-inner")]:{borderColor:e.colorPrimary}},["".concat(n,":not(").concat(n,"-disabled)")]:{["&:hover ".concat(t,"-checked:not(").concat(t,"-disabled) ").concat(t,"-inner")]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},["&:hover ".concat(t,"-checked:not(").concat(t,"-disabled):after")]:{borderColor:e.colorPrimaryHover}}},{["".concat(t,"-checked")]:{["".concat(t,"-inner")]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}}},["\n        ".concat(n,"-checked:not(").concat(n,"-disabled),\n        ").concat(t,"-checked:not(").concat(t,"-disabled)\n      ")]:{["&:hover ".concat(t,"-inner")]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{["".concat(t,"-inner")]:{backgroundColor:"".concat(e.colorBgContainer," !important"),borderColor:"".concat(e.colorBorder," !important"),"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},["&:hover ".concat(t,"-inner")]:{backgroundColor:"".concat(e.colorBgContainer," !important"),borderColor:"".concat(e.colorPrimary," !important")}}}},{["".concat(n,"-disabled")]:{cursor:"not-allowed"},["".concat(t,"-disabled")]:{["&, ".concat(t,"-input")]:{cursor:"not-allowed",pointerEvents:"none"},["".concat(t,"-inner")]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},["&".concat(t,"-indeterminate ").concat(t,"-inner::after")]:{background:e.colorTextDisabled}}}]},k=(0,h.OF)("Checkbox",(e,t)=>{let{prefixCls:n}=t;return[function(e,t){return[C((0,p.oX)(t,{checkboxCls:".".concat(e),checkboxSize:t.controlInteractiveSize}))]}(n,e)]});var y=n(83427),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let A=r.forwardRef((e,t)=>{var n;let{prefixCls:a,className:b,rootClassName:m,children:p,indeterminate:h=!1,style:C,onMouseEnter:A,onMouseLeave:E,skipGroup:S=!1,disabled:O}=e,w=x(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:M,direction:B,checkbox:j}=r.useContext(s.QO),P=r.useContext(g),{isFormItemInput:D}=r.useContext(v.$W),R=r.useContext(d.A),I=null!==(n=(null==P?void 0:P.disabled)||O)&&void 0!==n?n:R,N=r.useRef(w.value),F=r.useRef(null),H=(0,c.K4)(t,F);r.useEffect(()=>{null==P||P.registerValue(w.value)},[]),r.useEffect(()=>{if(!S)return w.value!==N.current&&(null==P||P.cancelValue(N.current),null==P||P.registerValue(w.value),N.current=w.value),()=>null==P?void 0:P.cancelValue(w.value)},[w.value]),r.useEffect(()=>{var e;(null===(e=F.current)||void 0===e?void 0:e.input)&&(F.current.input.indeterminate=h)},[h]);let z=M("checkbox",a),L=(0,f.A)(z),[q,T,V]=k(z,L),X=Object.assign({},w);P&&!S&&(X.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),P.toggleOption&&P.toggleOption({label:p,value:w.value})},X.name=P.name,X.checked=P.value.includes(w.value));let W=o()("".concat(z,"-wrapper"),{["".concat(z,"-rtl")]:"rtl"===B,["".concat(z,"-wrapper-checked")]:X.checked,["".concat(z,"-wrapper-disabled")]:I,["".concat(z,"-wrapper-in-form-item")]:D},null==j?void 0:j.className,b,m,V,L,T),G=o()({["".concat(z,"-indeterminate")]:h},u.D,T),[_,Y]=(0,y.A)(X.onClick);return q(r.createElement(i.A,{component:"Checkbox",disabled:I},r.createElement("label",{className:W,style:Object.assign(Object.assign({},null==j?void 0:j.style),C),onMouseEnter:A,onMouseLeave:E,onClick:_},r.createElement(l.A,Object.assign({},X,{onClick:Y,prefixCls:z,className:G,disabled:I,ref:H})),void 0!==p&&r.createElement("span",{className:"".concat(z,"-label")},p))))});var E=n(39014),S=n(70527),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let w=r.forwardRef((e,t)=>{let{defaultValue:n,children:a,options:l=[],prefixCls:c,className:i,rootClassName:u,style:d,onChange:v}=e,b=O(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:m,direction:p}=r.useContext(s.QO),[h,C]=r.useState(b.value||n||[]),[y,x]=r.useState([]);r.useEffect(()=>{"value"in b&&C(b.value||[])},[b.value]);let w=r.useMemo(()=>l.map(e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e),[l]),M=m("checkbox",c),B="".concat(M,"-group"),j=(0,f.A)(M),[P,D,R]=k(M,j),I=(0,S.A)(b,["value","disabled"]),N=l.length?w.map(e=>r.createElement(A,{prefixCls:M,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:h.includes(e.value),onChange:e.onChange,className:"".concat(B,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)):a,F={toggleOption:e=>{let t=h.indexOf(e.value),n=(0,E.A)(h);-1===t?n.push(e.value):n.splice(t,1),"value"in b||C(n),null==v||v(n.filter(e=>y.includes(e)).sort((e,t)=>w.findIndex(t=>t.value===e)-w.findIndex(e=>e.value===t)))},value:h,disabled:b.disabled,name:b.name,registerValue:e=>{x(t=>[].concat((0,E.A)(t),[e]))},cancelValue:e=>{x(t=>t.filter(t=>t!==e))}},H=o()(B,{["".concat(B,"-rtl")]:"rtl"===p},i,u,R,j,D);return P(r.createElement("div",Object.assign({className:H,style:d},I,{ref:t}),r.createElement(g.Provider,{value:F},N)))});A.Group=w,A.__ANT_CHECKBOX=!0;let M=A},2796:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(96594).A},22810:(e,t,n)=>{n.d(t,{A:()=>r});let r=n(82036).A},89797:(e,t,n)=>{n.d(t,{A:()=>en});var r=n(12115),a=n(4617),o=n.n(a),l=n(85268),c=n(1568),i=n(39014),u=n(21855),s=n(59912),d=n(97262),f=n(35015),v=n(85646),g=n(30754),b=n(85407),m=n(64406),p=n(47650);function h(e,t,n,r){var a=(t-n)/(r-n),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function C(e,t){return Array.isArray(e)?e[t]:e}var k=n(23672),y=r.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),x=r.createContext({}),A=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],E=r.forwardRef(function(e,t){var n,a=e.prefixCls,i=e.value,u=e.valueIndex,s=e.onStartMove,d=e.onDelete,f=e.style,v=e.render,g=e.dragging,p=e.draggingDelete,x=e.onOffsetChange,E=e.onChangeComplete,S=e.onFocus,O=e.onMouseEnter,w=(0,m.A)(e,A),M=r.useContext(y),B=M.min,j=M.max,P=M.direction,D=M.disabled,R=M.keyboard,I=M.range,N=M.tabIndex,F=M.ariaLabelForHandle,H=M.ariaLabelledByForHandle,z=M.ariaRequired,L=M.ariaValueTextFormatterForHandle,q=M.styles,T=M.classNames,V="".concat(a,"-handle"),X=function(e){D||s(e,u)},W=h(P,i,B,j),G={};null!==u&&(G={tabIndex:D?null:C(N,u),role:"slider","aria-valuemin":B,"aria-valuemax":j,"aria-valuenow":i,"aria-disabled":D,"aria-label":C(F,u),"aria-labelledby":C(H,u),"aria-required":C(z,u),"aria-valuetext":null===(n=C(L,u))||void 0===n?void 0:n(i),"aria-orientation":"ltr"===P||"rtl"===P?"horizontal":"vertical",onMouseDown:X,onTouchStart:X,onFocus:function(e){null==S||S(e,u)},onMouseEnter:function(e){O(e,u)},onKeyDown:function(e){if(!D&&R){var t=null;switch(e.which||e.keyCode){case k.A.LEFT:t="ltr"===P||"btt"===P?-1:1;break;case k.A.RIGHT:t="ltr"===P||"btt"===P?1:-1;break;case k.A.UP:t="ttb"!==P?1:-1;break;case k.A.DOWN:t="ttb"!==P?-1:1;break;case k.A.HOME:t="min";break;case k.A.END:t="max";break;case k.A.PAGE_UP:t=2;break;case k.A.PAGE_DOWN:t=-2;break;case k.A.BACKSPACE:case k.A.DELETE:d(u)}null!==t&&(e.preventDefault(),x(t,u))}},onKeyUp:function(e){switch(e.which||e.keyCode){case k.A.LEFT:case k.A.RIGHT:case k.A.UP:case k.A.DOWN:case k.A.HOME:case k.A.END:case k.A.PAGE_UP:case k.A.PAGE_DOWN:null==E||E()}}});var _=r.createElement("div",(0,b.A)({ref:t,className:o()(V,(0,c.A)((0,c.A)((0,c.A)({},"".concat(V,"-").concat(u+1),null!==u&&I),"".concat(V,"-dragging"),g),"".concat(V,"-dragging-delete"),p),T.handle),style:(0,l.A)((0,l.A)((0,l.A)({},W),f),q.handle)},G,w));return v&&(_=v(_,{index:u,prefixCls:a,value:i,dragging:g,draggingDelete:p})),_}),S=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],O=r.forwardRef(function(e,t){var n=e.prefixCls,a=e.style,o=e.onStartMove,c=e.onOffsetChange,i=e.values,u=e.handleRender,d=e.activeHandleRender,f=e.draggingIndex,v=e.draggingDelete,g=e.onFocus,h=(0,m.A)(e,S),k=r.useRef({}),y=r.useState(!1),x=(0,s.A)(y,2),A=x[0],O=x[1],w=r.useState(-1),M=(0,s.A)(w,2),B=M[0],j=M[1],P=function(e){j(e),O(!0)};r.useImperativeHandle(t,function(){return{focus:function(e){var t;null===(t=k.current[e])||void 0===t||t.focus()},hideHelp:function(){(0,p.flushSync)(function(){O(!1)})}}});var D=(0,l.A)({prefixCls:n,onStartMove:o,onOffsetChange:c,render:u,onFocus:function(e,t){P(t),null==g||g(e)},onMouseEnter:function(e,t){P(t)}},h);return r.createElement(r.Fragment,null,i.map(function(e,t){var n=f===t;return r.createElement(E,(0,b.A)({ref:function(e){e?k.current[t]=e:delete k.current[t]},dragging:n,draggingDelete:n&&v,style:C(a,t),key:t,value:e,valueIndex:t},D))}),d&&A&&r.createElement(E,(0,b.A)({key:"a11y"},D,{value:i[B],valueIndex:null,dragging:-1!==f,draggingDelete:v,render:d,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))});let w=function(e){var t=e.prefixCls,n=e.style,a=e.children,i=e.value,u=e.onClick,s=r.useContext(y),d=s.min,f=s.max,v=s.direction,g=s.includedStart,b=s.includedEnd,m=s.included,p="".concat(t,"-text"),C=h(v,i,d,f);return r.createElement("span",{className:o()(p,(0,c.A)({},"".concat(p,"-active"),m&&g<=i&&i<=b)),style:(0,l.A)((0,l.A)({},C),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){u(i)}},a)},M=function(e){var t=e.prefixCls,n=e.marks,a=e.onClick,o="".concat(t,"-mark");return n.length?r.createElement("div",{className:o},n.map(function(e){var t=e.value,n=e.style,l=e.label;return r.createElement(w,{key:t,prefixCls:o,style:n,value:t,onClick:a},l)})):null},B=function(e){var t=e.prefixCls,n=e.value,a=e.style,i=e.activeStyle,u=r.useContext(y),s=u.min,d=u.max,f=u.direction,v=u.included,g=u.includedStart,b=u.includedEnd,m="".concat(t,"-dot"),p=v&&g<=n&&n<=b,C=(0,l.A)((0,l.A)({},h(f,n,s,d)),"function"==typeof a?a(n):a);return p&&(C=(0,l.A)((0,l.A)({},C),"function"==typeof i?i(n):i)),r.createElement("span",{className:o()(m,(0,c.A)({},"".concat(m,"-active"),p)),style:C})},j=function(e){var t=e.prefixCls,n=e.marks,a=e.dots,o=e.style,l=e.activeStyle,c=r.useContext(y),i=c.min,u=c.max,s=c.step,d=r.useMemo(function(){var e=new Set;if(n.forEach(function(t){e.add(t.value)}),a&&null!==s)for(var t=i;t<=u;)e.add(t),t+=s;return Array.from(e)},[i,u,s,a,n]);return r.createElement("div",{className:"".concat(t,"-step")},d.map(function(e){return r.createElement(B,{prefixCls:t,key:e,value:e,style:o,activeStyle:l})}))},P=function(e){var t=e.prefixCls,n=e.style,a=e.start,i=e.end,u=e.index,s=e.onStartMove,d=e.replaceCls,f=r.useContext(y),v=f.direction,g=f.min,b=f.max,m=f.disabled,p=f.range,h=f.classNames,C="".concat(t,"-track"),k=(a-g)/(b-g),x=(i-g)/(b-g),A=function(e){!m&&s&&s(e,-1)},E={};switch(v){case"rtl":E.right="".concat(100*k,"%"),E.width="".concat(100*x-100*k,"%");break;case"btt":E.bottom="".concat(100*k,"%"),E.height="".concat(100*x-100*k,"%");break;case"ttb":E.top="".concat(100*k,"%"),E.height="".concat(100*x-100*k,"%");break;default:E.left="".concat(100*k,"%"),E.width="".concat(100*x-100*k,"%")}var S=d||o()(C,(0,c.A)((0,c.A)({},"".concat(C,"-").concat(u+1),null!==u&&p),"".concat(t,"-track-draggable"),s),h.track);return r.createElement("div",{className:S,style:(0,l.A)((0,l.A)({},E),n),onMouseDown:A,onTouchStart:A})},D=function(e){var t=e.prefixCls,n=e.style,a=e.values,c=e.startPoint,i=e.onStartMove,u=r.useContext(y),s=u.included,d=u.range,f=u.min,v=u.styles,g=u.classNames,b=r.useMemo(function(){if(!d){if(0===a.length)return[];var e=null!=c?c:f,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n},[a,d,c,f]);if(!s)return null;var m=null!=b&&b.length&&(g.tracks||v.tracks)?r.createElement(P,{index:null,prefixCls:t,start:b[0].start,end:b[b.length-1].end,replaceCls:o()(g.tracks,"".concat(t,"-tracks")),style:v.tracks}):null;return r.createElement(r.Fragment,null,m,b.map(function(e,a){var o=e.start,c=e.end;return r.createElement(P,{index:a,prefixCls:t,style:(0,l.A)((0,l.A)({},C(n,a)),v.track),start:o,end:c,key:a,onStartMove:i})}))};var R=n(66105);function I(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}let N=function(e,t,n,a,o,l,c,u,f,v,g){var b=r.useState(null),m=(0,s.A)(b,2),p=m[0],h=m[1],C=r.useState(-1),k=(0,s.A)(C,2),y=k[0],A=k[1],E=r.useState(!1),S=(0,s.A)(E,2),O=S[0],w=S[1],M=r.useState(n),B=(0,s.A)(M,2),j=B[0],P=B[1],D=r.useState(n),N=(0,s.A)(D,2),F=N[0],H=N[1],z=r.useRef(null),L=r.useRef(null),q=r.useRef(null),T=r.useContext(x),V=T.onDragStart,X=T.onDragChange;(0,R.A)(function(){-1===y&&P(n)},[n,y]),r.useEffect(function(){return function(){document.removeEventListener("mousemove",z.current),document.removeEventListener("mouseup",L.current),q.current&&(q.current.removeEventListener("touchmove",z.current),q.current.removeEventListener("touchend",L.current))}},[]);var W=function(e,t,n){void 0!==t&&h(t),P(e);var r=e;n&&(r=e.filter(function(e,t){return t!==y})),c(r),X&&X({rawValues:e,deleteIndex:n?y:-1,draggingIndex:y,draggingValue:t})},G=(0,d.A)(function(e,t,n){if(-1===e){var r=F[0],c=F[F.length-1],u=t*(o-a);u=Math.min(u=Math.max(u,a-r),o-c),u=l(r+u)-r,W(F.map(function(e){return e+u}))}else{var s=(0,i.A)(j);s[e]=F[e];var d=f(s,(o-a)*t,e,"dist");W(d.values,d.value,n)}});return[y,p,O,r.useMemo(function(){var e=(0,i.A)(n).sort(function(e,t){return e-t}),t=(0,i.A)(j).sort(function(e,t){return e-t}),r={};t.forEach(function(e){r[e]=(r[e]||0)+1}),e.forEach(function(e){r[e]=(r[e]||0)-1});var a=v?1:0;return Object.values(r).reduce(function(e,t){return e+Math.abs(t)},0)<=a?j:n},[n,j,v]),function(r,a,o){r.stopPropagation();var l=o||n,c=l[a];A(a),h(c),H(l),P(l),w(!1);var i=I(r),s=i.pageX,d=i.pageY,f=!1;V&&V({rawValues:l,draggingIndex:a,draggingValue:c});var b=function(n){n.preventDefault();var r,o,l=I(n),c=l.pageX,i=l.pageY,u=c-s,b=i-d,m=e.current.getBoundingClientRect(),p=m.width,h=m.height;switch(t){case"btt":r=-b/h,o=u;break;case"ttb":r=b/h,o=u;break;case"rtl":r=-u/p,o=b;break;default:r=u/p,o=b}w(f=!!v&&Math.abs(o)>130&&g<j.length),G(a,r,f)},m=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",b),q.current&&(q.current.removeEventListener("touchmove",z.current),q.current.removeEventListener("touchend",L.current)),z.current=null,L.current=null,q.current=null,u(f),A(-1),w(!1)};document.addEventListener("mouseup",m),document.addEventListener("mousemove",b),r.currentTarget.addEventListener("touchend",m),r.currentTarget.addEventListener("touchmove",b),z.current=b,L.current=m,q.current=r.currentTarget}]};var F=r.forwardRef(function(e,t){var n,a,b,m,p,h,C,k=e.prefixCls,x=void 0===k?"rc-slider":k,A=e.className,E=e.style,S=e.classNames,w=e.styles,B=e.id,P=e.disabled,R=void 0!==P&&P,I=e.keyboard,F=void 0===I||I,H=e.autoFocus,z=e.onFocus,L=e.onBlur,q=e.min,T=void 0===q?0:q,V=e.max,X=void 0===V?100:V,W=e.step,G=void 0===W?1:W,_=e.value,Y=e.defaultValue,K=e.range,U=e.count,Q=e.onChange,$=e.onBeforeChange,J=e.onAfterChange,Z=e.onChangeComplete,ee=e.allowCross,et=e.pushable,en=void 0!==et&&et,er=e.reverse,ea=e.vertical,eo=e.included,el=void 0===eo||eo,ec=e.startPoint,ei=e.trackStyle,eu=e.handleStyle,es=e.railStyle,ed=e.dotStyle,ef=e.activeDotStyle,ev=e.marks,eg=e.dots,eb=e.handleRender,em=e.activeHandleRender,ep=e.track,eh=e.tabIndex,eC=void 0===eh?0:eh,ek=e.ariaLabelForHandle,ey=e.ariaLabelledByForHandle,ex=e.ariaRequired,eA=e.ariaValueTextFormatterForHandle,eE=r.useRef(null),eS=r.useRef(null),eO=r.useMemo(function(){return ea?er?"ttb":"btt":er?"rtl":"ltr"},[er,ea]),ew=(0,r.useMemo)(function(){if(!0===K||!K)return[!!K,!1,!1,0];var e=K.editable,t=K.draggableTrack;return[!0,e,!e&&t,K.minCount||0,K.maxCount]},[K]),eM=(0,s.A)(ew,5),eB=eM[0],ej=eM[1],eP=eM[2],eD=eM[3],eR=eM[4],eI=r.useMemo(function(){return isFinite(T)?T:0},[T]),eN=r.useMemo(function(){return isFinite(X)?X:100},[X]),eF=r.useMemo(function(){return null!==G&&G<=0?1:G},[G]),eH=r.useMemo(function(){return"boolean"==typeof en?!!en&&eF:en>=0&&en},[en,eF]),ez=r.useMemo(function(){return Object.keys(ev||{}).map(function(e){var t=ev[e],n={value:Number(e)};return t&&"object"===(0,u.A)(t)&&!r.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n}).filter(function(e){var t=e.label;return t||"number"==typeof t}).sort(function(e,t){return e.value-t.value})},[ev]),eL=(n=void 0===ee||ee,a=r.useCallback(function(e){return Math.max(eI,Math.min(eN,e))},[eI,eN]),b=r.useCallback(function(e){if(null!==eF){var t=eI+Math.round((a(e)-eI)/eF)*eF,n=function(e){return(String(e).split(".")[1]||"").length},r=Math.max(n(eF),n(eN),n(eI)),o=Number(t.toFixed(r));return eI<=o&&o<=eN?o:null}return null},[eF,eI,eN,a]),m=r.useCallback(function(e){var t=a(e),n=ez.map(function(e){return e.value});null!==eF&&n.push(b(e)),n.push(eI,eN);var r=n[0],o=eN-eI;return n.forEach(function(e){var n=Math.abs(t-e);n<=o&&(r=e,o=n)}),r},[eI,eN,ez,eF,a,b]),p=function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof n){var o,l=t[r],c=l+n,u=[];ez.forEach(function(e){u.push(e.value)}),u.push(eI,eN),u.push(b(l));var s=n>0?1:-1;"unit"===a?u.push(b(l+s*eF)):u.push(b(c)),u=u.filter(function(e){return null!==e}).filter(function(e){return n<0?e<=l:e>=l}),"unit"===a&&(u=u.filter(function(e){return e!==l}));var d="unit"===a?l:c,f=Math.abs((o=u[0])-d);if(u.forEach(function(e){var t=Math.abs(e-d);t<f&&(o=e,f=t)}),void 0===o)return n<0?eI:eN;if("dist"===a)return o;if(Math.abs(n)>1){var v=(0,i.A)(t);return v[r]=o,e(v,n-s,r,a)}return o}return"min"===n?eI:"max"===n?eN:void 0},h=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],o=p(e,t,n,r);return{value:o,changed:o!==a}},C=function(e){return null===eH&&0===e||"number"==typeof eH&&e<eH},[m,function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e.map(m),l=o[r],c=p(o,t,r,a);if(o[r]=c,!1===n){var i=eH||0;r>0&&o[r-1]!==l&&(o[r]=Math.max(o[r],o[r-1]+i)),r<o.length-1&&o[r+1]!==l&&(o[r]=Math.min(o[r],o[r+1]-i))}else if("number"==typeof eH||null===eH){for(var u=r+1;u<o.length;u+=1)for(var s=!0;C(o[u]-o[u-1])&&s;){var d=h(o,1,u);o[u]=d.value,s=d.changed}for(var f=r;f>0;f-=1)for(var v=!0;C(o[f]-o[f-1])&&v;){var g=h(o,-1,f-1);o[f-1]=g.value,v=g.changed}for(var b=o.length-1;b>0;b-=1)for(var k=!0;C(o[b]-o[b-1])&&k;){var y=h(o,-1,b-1);o[b-1]=y.value,k=y.changed}for(var x=0;x<o.length-1;x+=1)for(var A=!0;C(o[x+1]-o[x])&&A;){var E=h(o,1,x+1);o[x+1]=E.value,A=E.changed}}return{value:o[r],values:o}}]),eq=(0,s.A)(eL,2),eT=eq[0],eV=eq[1],eX=(0,f.A)(Y,{value:_}),eW=(0,s.A)(eX,2),eG=eW[0],e_=eW[1],eY=r.useMemo(function(){var e=null==eG?[]:Array.isArray(eG)?eG:[eG],t=(0,s.A)(e,1)[0],n=void 0===t?eI:t,r=null===eG?[]:[n];if(eB){if(r=(0,i.A)(e),U||void 0===eG){var a,o=U>=0?U+1:2;for(r=r.slice(0,o);r.length<o;)r.push(null!==(a=r[r.length-1])&&void 0!==a?a:eI)}r.sort(function(e,t){return e-t})}return r.forEach(function(e,t){r[t]=eT(e)}),r},[eG,eB,eI,U,eT]),eK=function(e){return eB?e:e[0]},eU=(0,d.A)(function(e){var t=(0,i.A)(e).sort(function(e,t){return e-t});Q&&!(0,v.A)(t,eY,!0)&&Q(eK(t)),e_(t)}),eQ=(0,d.A)(function(e){e&&eE.current.hideHelp();var t=eK(eY);null==J||J(t),(0,g.Ay)(!J,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==Z||Z(t)}),e$=N(eS,eO,eY,eI,eN,eT,eU,eQ,eV,ej,eD),eJ=(0,s.A)(e$,5),eZ=eJ[0],e0=eJ[1],e1=eJ[2],e2=eJ[3],e5=eJ[4],e3=function(e,t){if(!R){var n,r,a=(0,i.A)(eY),o=0,l=0,c=eN-eI;eY.forEach(function(t,n){var r=Math.abs(e-t);r<=c&&(c=r,o=n),t<e&&(l=n)});var u=o;ej&&0!==c&&(!eR||eY.length<eR)?(a.splice(l+1,0,e),u=l+1):a[o]=e,eB&&!eY.length&&void 0===U&&a.push(e);var s=eK(a);null==$||$(s),eU(a),t?(null===(n=document.activeElement)||void 0===n||null===(r=n.blur)||void 0===r||r.call(n),eE.current.focus(u),e5(t,u,a)):(null==J||J(s),(0,g.Ay)(!J,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==Z||Z(s))}},e4=r.useState(null),e6=(0,s.A)(e4,2),e7=e6[0],e8=e6[1];r.useEffect(function(){if(null!==e7){var e=eY.indexOf(e7);e>=0&&eE.current.focus(e)}e8(null)},[e7]);var e9=r.useMemo(function(){return(!eP||null!==eF)&&eP},[eP,eF]),te=(0,d.A)(function(e,t){e5(e,t),null==$||$(eK(eY))}),tt=-1!==eZ;r.useEffect(function(){if(!tt){var e=eY.lastIndexOf(e0);eE.current.focus(e)}},[tt]);var tn=r.useMemo(function(){return(0,i.A)(e2).sort(function(e,t){return e-t})},[e2]),tr=r.useMemo(function(){return eB?[tn[0],tn[tn.length-1]]:[eI,tn[0]]},[tn,eB,eI]),ta=(0,s.A)(tr,2),to=ta[0],tl=ta[1];r.useImperativeHandle(t,function(){return{focus:function(){eE.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=eS.current)&&void 0!==e&&e.contains(t)&&(null==t||t.blur())}}}),r.useEffect(function(){H&&eE.current.focus(0)},[]);var tc=r.useMemo(function(){return{min:eI,max:eN,direction:eO,disabled:R,keyboard:F,step:eF,included:el,includedStart:to,includedEnd:tl,range:eB,tabIndex:eC,ariaLabelForHandle:ek,ariaLabelledByForHandle:ey,ariaRequired:ex,ariaValueTextFormatterForHandle:eA,styles:w||{},classNames:S||{}}},[eI,eN,eO,R,F,eF,el,to,tl,eB,eC,ek,ey,ex,eA,w,S]);return r.createElement(y.Provider,{value:tc},r.createElement("div",{ref:eS,className:o()(x,A,(0,c.A)((0,c.A)((0,c.A)((0,c.A)({},"".concat(x,"-disabled"),R),"".concat(x,"-vertical"),ea),"".concat(x,"-horizontal"),!ea),"".concat(x,"-with-marks"),ez.length)),style:E,onMouseDown:function(e){e.preventDefault();var t,n=eS.current.getBoundingClientRect(),r=n.width,a=n.height,o=n.left,l=n.top,c=n.bottom,i=n.right,u=e.clientX,s=e.clientY;switch(eO){case"btt":t=(c-s)/a;break;case"ttb":t=(s-l)/a;break;case"rtl":t=(i-u)/r;break;default:t=(u-o)/r}e3(eT(eI+t*(eN-eI)),e)},id:B},r.createElement("div",{className:o()("".concat(x,"-rail"),null==S?void 0:S.rail),style:(0,l.A)((0,l.A)({},es),null==w?void 0:w.rail)}),!1!==ep&&r.createElement(D,{prefixCls:x,style:ei,values:eY,startPoint:ec,onStartMove:e9?te:void 0}),r.createElement(j,{prefixCls:x,marks:ez,dots:eg,style:ed,activeStyle:ef}),r.createElement(O,{ref:eE,prefixCls:x,style:eu,values:e2,draggingIndex:eZ,draggingDelete:e1,onStartMove:te,onOffsetChange:function(e,t){if(!R){var n=eV(eY,e,t);null==$||$(eK(eY)),eU(n.values),e8(n.value)}},onFocus:z,onBlur:L,handleRender:eb,activeHandleRender:em,onChangeComplete:eQ,onDelete:ej?function(e){if(!R&&ej&&!(eY.length<=eD)){var t=(0,i.A)(eY);t.splice(e,1),null==$||$(eK(t)),eU(t);var n=Math.max(0,e-1);eE.current.hideHelp(),eE.current.focus(n)}}:void 0}),r.createElement(M,{prefixCls:x,marks:ez,onClick:e3})))}),H=n(13379),z=n(30033);let L=(0,r.createContext)({});var q=n(15231),T=n(6457);let V=r.forwardRef((e,t)=>{let{open:n,draggingDelete:a}=e,o=(0,r.useRef)(null),l=n&&!a,c=(0,r.useRef)(null);function i(){H.A.cancel(c.current),c.current=null}return r.useEffect(()=>(l?c.current=(0,H.A)(()=>{var e;null===(e=o.current)||void 0===e||e.forceAlign(),c.current=null}):i(),i),[l,e.title]),r.createElement(T.A,Object.assign({ref:(0,q.K4)(o,t)},e,{open:l}))});var X=n(67548),W=n(10815),G=n(70695),_=n(1086),Y=n(56204);let K=e=>{let{componentCls:t,antCls:n,controlSize:r,dotSize:a,marginFull:o,marginPart:l,colorFillContentHover:c,handleColorDisabled:i,calc:u,handleSize:s,handleSizeHover:d,handleActiveColor:f,handleActiveOutlineColor:v,handleLineWidth:g,handleLineWidthHover:b,motionDurationMid:m}=e;return{[t]:Object.assign(Object.assign({},(0,G.dF)(e)),{position:"relative",height:r,margin:"".concat((0,X.zA)(l)," ").concat((0,X.zA)(o)),padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:"".concat((0,X.zA)(o)," ").concat((0,X.zA)(l))},["".concat(t,"-rail")]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:"background-color ".concat(m)},["".concat(t,"-track,").concat(t,"-tracks")]:{position:"absolute",transition:"background-color ".concat(m)},["".concat(t,"-track")]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},["".concat(t,"-track-draggable")]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{["".concat(t,"-rail")]:{backgroundColor:e.railHoverBg},["".concat(t,"-track")]:{backgroundColor:e.trackHoverBg},["".concat(t,"-dot")]:{borderColor:c},["".concat(t,"-handle::after")]:{boxShadow:"0 0 0 ".concat((0,X.zA)(g)," ").concat(e.colorPrimaryBorderHover)},["".concat(t,"-dot-active")]:{borderColor:e.dotActiveBorderColor}},["".concat(t,"-handle")]:{position:"absolute",width:s,height:s,outline:"none",userSelect:"none","&-dragging-delete":{opacity:0},"&::before":{content:'""',position:"absolute",insetInlineStart:u(g).mul(-1).equal(),insetBlockStart:u(g).mul(-1).equal(),width:u(s).add(u(g).mul(2)).equal(),height:u(s).add(u(g).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:s,height:s,backgroundColor:e.colorBgElevated,boxShadow:"0 0 0 ".concat((0,X.zA)(g)," ").concat(e.handleColor),outline:"0px solid transparent",borderRadius:"50%",cursor:"pointer",transition:"\n            inset-inline-start ".concat(m,",\n            inset-block-start ").concat(m,",\n            width ").concat(m,",\n            height ").concat(m,",\n            box-shadow ").concat(m,",\n            outline ").concat(m,"\n          ")},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:u(d).sub(s).div(2).add(b).mul(-1).equal(),insetBlockStart:u(d).sub(s).div(2).add(b).mul(-1).equal(),width:u(d).add(u(b).mul(2)).equal(),height:u(d).add(u(b).mul(2)).equal()},"&::after":{boxShadow:"0 0 0 ".concat((0,X.zA)(b)," ").concat(f),outline:"6px solid ".concat(v),width:d,height:d,insetInlineStart:e.calc(s).sub(d).div(2).equal(),insetBlockStart:e.calc(s).sub(d).div(2).equal()}}},["&-lock ".concat(t,"-handle")]:{"&::before, &::after":{transition:"none"}},["".concat(t,"-mark")]:{position:"absolute",fontSize:e.fontSize},["".concat(t,"-mark-text")]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},["".concat(t,"-step")]:{position:"absolute",background:"transparent",pointerEvents:"none"},["".concat(t,"-dot")]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:"".concat((0,X.zA)(g)," solid ").concat(e.dotBorderColor),borderRadius:"50%",cursor:"pointer",transition:"border-color ".concat(e.motionDurationSlow),pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},["&".concat(t,"-disabled")]:{cursor:"not-allowed",["".concat(t,"-rail")]:{backgroundColor:"".concat(e.railBg," !important")},["".concat(t,"-track")]:{backgroundColor:"".concat(e.trackBgDisabled," !important")},["\n          ".concat(t,"-dot\n        ")]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},["".concat(t,"-handle::after")]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:s,height:s,boxShadow:"0 0 0 ".concat((0,X.zA)(g)," ").concat(i),insetInlineStart:0,insetBlockStart:0},["\n          ".concat(t,"-mark-text,\n          ").concat(t,"-dot\n        ")]:{cursor:"not-allowed !important"}},["&-tooltip ".concat(n,"-tooltip-inner")]:{minWidth:"unset"}})}},U=(e,t)=>{let{componentCls:n,railSize:r,handleSize:a,dotSize:o,marginFull:l,calc:c}=e,i=t?"width":"height",u=t?"height":"width",s=t?"insetBlockStart":"insetInlineStart",d=t?"top":"insetInlineStart",f=c(r).mul(3).sub(a).div(2).equal(),v=c(a).sub(r).div(2).equal(),g=t?{borderWidth:"".concat((0,X.zA)(v)," 0"),transform:"translateY(".concat((0,X.zA)(c(v).mul(-1).equal()),")")}:{borderWidth:"0 ".concat((0,X.zA)(v)),transform:"translateX(".concat((0,X.zA)(e.calc(v).mul(-1).equal()),")")};return{[t?"paddingBlock":"paddingInline"]:r,[u]:c(r).mul(3).equal(),["".concat(n,"-rail")]:{[i]:"100%",[u]:r},["".concat(n,"-track,").concat(n,"-tracks")]:{[u]:r},["".concat(n,"-track-draggable")]:Object.assign({},g),["".concat(n,"-handle")]:{[s]:f},["".concat(n,"-mark")]:{insetInlineStart:0,top:0,[d]:c(r).mul(3).add(t?0:l).equal(),[i]:"100%"},["".concat(n,"-step")]:{insetInlineStart:0,top:0,[d]:r,[i]:"100%",[u]:r},["".concat(n,"-dot")]:{position:"absolute",[s]:c(r).sub(o).div(2).equal()}}},Q=e=>{let{componentCls:t,marginPartWithMark:n}=e;return{["".concat(t,"-horizontal")]:Object.assign(Object.assign({},U(e,!0)),{["&".concat(t,"-with-marks")]:{marginBottom:n}})}},$=e=>{let{componentCls:t}=e;return{["".concat(t,"-vertical")]:Object.assign(Object.assign({},U(e,!1)),{height:"100%"})}},J=(0,_.OF)("Slider",e=>{let t=(0,Y.oX)(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[K(t),Q(t),$(t)]},e=>{let t=e.controlHeightLG/4,n=e.controlHeightSM/2,r=e.lineWidth+1,a=e.lineWidth+1.5,o=e.colorPrimary,l=new W.Y(o).setA(.2).toRgbString();return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:n,dotSize:8,handleLineWidth:r,handleLineWidthHover:a,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:o,handleActiveOutlineColor:l,handleColorDisabled:new W.Y(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}});function Z(){let[e,t]=r.useState(!1),n=r.useRef(null),a=()=>{H.A.cancel(n.current)};return r.useEffect(()=>a,[]),[e,e=>{a(),e?t(e):n.current=(0,H.A)(()=>{t(e)})}]}var ee=n(31049),et=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let en=r.forwardRef((e,t)=>{let{prefixCls:n,range:a,className:l,rootClassName:c,style:i,disabled:u,tooltipPrefixCls:s,tipFormatter:d,tooltipVisible:f,getTooltipPopupContainer:v,tooltipPlacement:g,tooltip:b={},onChangeComplete:m,classNames:p,styles:h}=e,C=et(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement","tooltip","onChangeComplete","classNames","styles"]),{vertical:k}=e,{getPrefixCls:y,direction:x,className:A,style:E,classNames:S,styles:O,getPopupContainer:w}=(0,ee.TP)("slider"),M=r.useContext(z.A),{handleRender:B,direction:j}=r.useContext(L),P="rtl"===(j||x),[D,R]=Z(),[I,N]=Z(),q=Object.assign({},b),{open:T,placement:X,getPopupContainer:W,prefixCls:G,formatter:_}=q,Y=null!=T?T:f,K=(D||I)&&!1!==Y,U=function(e,t){return e||null===e?e:t||null===t?t:e=>"number"==typeof e?e.toString():""}(_,d),[Q,$]=Z(),en=(e,t)=>e||(t?P?"left":"right":"top"),er=y("slider",n),[ea,eo,el]=J(er),ec=o()(l,A,S.root,null==p?void 0:p.root,c,{["".concat(er,"-rtl")]:P,["".concat(er,"-lock")]:Q},eo,el);P&&!C.vertical&&(C.reverse=!C.reverse),r.useEffect(()=>{let e=()=>{(0,H.A)(()=>{N(!1)},1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}},[]);let ei=a&&!Y,eu=B||((e,t)=>{let{index:n}=t,a=e.props;function o(e,t,n){var r,o;n&&(null===(r=C[e])||void 0===r||r.call(C,t)),null===(o=a[e])||void 0===o||o.call(a,t)}let l=Object.assign(Object.assign({},a),{onMouseEnter:e=>{R(!0),o("onMouseEnter",e)},onMouseLeave:e=>{R(!1),o("onMouseLeave",e)},onMouseDown:e=>{N(!0),$(!0),o("onMouseDown",e)},onFocus:e=>{var t;N(!0),null===(t=C.onFocus)||void 0===t||t.call(C,e),o("onFocus",e,!0)},onBlur:e=>{var t;N(!1),null===(t=C.onBlur)||void 0===t||t.call(C,e),o("onBlur",e,!0)}}),c=r.cloneElement(e,l),i=(!!Y||K)&&null!==U;return ei?c:r.createElement(V,Object.assign({},q,{prefixCls:y("tooltip",null!=G?G:s),title:U?U(t.value):"",open:i,placement:en(null!=X?X:g,k),key:n,classNames:{root:"".concat(er,"-tooltip")},getPopupContainer:W||v||w}),c)}),es=ei?(e,t)=>{let n=r.cloneElement(e,{style:Object.assign(Object.assign({},e.props.style),{visibility:"hidden"})});return r.createElement(V,Object.assign({},q,{prefixCls:y("tooltip",null!=G?G:s),title:U?U(t.value):"",open:null!==U&&K,placement:en(null!=X?X:g,k),key:"tooltip",classNames:{root:"".concat(er,"-tooltip")},getPopupContainer:W||v||w,draggingDelete:t.draggingDelete}),n)}:void 0,ed=Object.assign(Object.assign(Object.assign(Object.assign({},O.root),E),null==h?void 0:h.root),i),ef=Object.assign(Object.assign({},O.tracks),null==h?void 0:h.tracks),ev=o()(S.tracks,null==p?void 0:p.tracks);return ea(r.createElement(F,Object.assign({},C,{classNames:Object.assign({handle:o()(S.handle,null==p?void 0:p.handle),rail:o()(S.rail,null==p?void 0:p.rail),track:o()(S.track,null==p?void 0:p.track)},ev?{tracks:ev}:{}),styles:Object.assign({handle:Object.assign(Object.assign({},O.handle),null==h?void 0:h.handle),rail:Object.assign(Object.assign({},O.rail),null==h?void 0:h.rail),track:Object.assign(Object.assign({},O.track),null==h?void 0:h.track)},Object.keys(ef).length?{tracks:ef}:{}),step:C.step,range:a,className:ec,style:ed,disabled:null!=u?u:M,ref:t,prefixCls:er,handleRender:eu,activeHandleRender:es,onChangeComplete:e=>{null==m||m(e),$(!1)}})))})}}]);