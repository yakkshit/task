(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3403],{49940:(e,t,s)=>{Promise.resolve().then(s.bind(s,61515))},61515:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var i=s(95155),r=s(76046),a=s(46638),l=s(12115),n=s(20418),c=s(90088),d=s(59276),o=s(72093),u=s(22810),h=s(2796),m=s(86349),x=s(53876),j=s(89351),y=s(18198),p=s(79005),v=s(9365),g=s(16910),f=s(11634),A=s(21703),b=s(5099),C=s(66865),N=s(83391),w=s(6769),P=s(48173),F=s.n(P);let{Title:k,Text:S,Paragraph:q}=n.A,z=[{id:1,author:"Ron Watson",date:"16 July 2023",rating:4,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis."},{id:2,author:"Sarah Miller",date:"15 July 2023",rating:5,content:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at lorem vel nisi consequat aliquam. Integer vehicula ex in dui molestie, ac sollicitudin tellus pellentesque."},{id:3,author:"James Chen",date:"14 July 2023",rating:4,content:"Maecenas sit amet urna ut libero tincidunt consectetur. Nullam commodo sapien nec sem congue, in efficitur ligula vestibulum. Proin dictum eros eu pulvinar tempus."}],E=["100% Cotton","Fabric: Jersey","Care Instructions: Do not tumble dry, machine wash at 30\xb0C","Neckline: Crew neck","Pattern: Print","Fit: Loose fit","Shape: Straight"];function B(e){let{id:t}=e,{notification:s}=c.A.useApp(),r=(0,N.wA)(),{data:n,isLoading:P,error:B}=(0,a.tA)(Number(t)),{data:T,isLoading:D}=(0,a.ry)((null==n?void 0:n.category)||""),[L,W]=(0,l.useState)("White"),[J,O]=(0,l.useState)("M"),[V,_]=(0,l.useState)(1);if((0,l.useEffect)(()=>{r((0,w.Fy)())},[r]),P)return(0,i.jsx)(d.A,{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(o.A,{size:"large"})});if(B)return(0,i.jsx)(d.A,{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(k,{level:3,children:"Error loading product. Please try again later."})});if(!n)return(0,i.jsx)(d.A,{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(k,{level:3,children:"Product not found."})});let H=async()=>{let e={id:n.id,title:n.title,price:n.price,image:n.image,quantity:V,color:L,size:J};try{await r((0,w.bE)(e)).unwrap(),s.success({message:"Added to Cart",description:"".concat(V," ").concat(V>1?"items":"item"," added to your cart.")})}catch(e){s.error({message:"Error",description:"Failed to add item to cart. Please try again."})}};return(0,i.jsxs)(d.A,{style:{padding:"24px",maxWidth:1400,margin:"0 auto"},children:[(0,i.jsxs)(u.A,{gutter:[48,48],children:[(0,i.jsx)(h.A,{xs:24,md:12,children:(0,i.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[1,2,3].map(e=>(0,i.jsx)(m.A,{src:n.image||"/placeholder.svg",alt:"View ".concat(e),width:100,style:{objectFit:"contain",cursor:"pointer"}},e))}),(0,i.jsx)(m.A,{src:n.image||"/placeholder.svg",alt:n.title,style:{width:"100%",height:"auto",objectFit:"contain"}})]})}),(0,i.jsx)(h.A,{xs:24,md:12,children:(0,i.jsxs)("div",{style:{maxWidth:500},children:[(0,i.jsx)(S,{type:"secondary",children:n.category}),(0,i.jsx)(k,{level:2,children:n.title}),(0,i.jsxs)("div",{style:{marginBottom:24},children:[(0,i.jsx)(x.A,{disabled:!0,defaultValue:4}),(0,i.jsx)(S,{type:"secondary",children:" (32 reviews)"})]}),(0,i.jsxs)(k,{level:3,children:["$",n.price.toFixed(2)]}),(0,i.jsxs)("div",{style:{marginTop:24},children:[(0,i.jsx)(k,{level:5,children:"Color"}),(0,i.jsxs)(j.Ay.Group,{value:L,onChange:e=>W(e.target.value),children:[(0,i.jsx)(j.Ay.Button,{value:"White",children:"White"}),(0,i.jsx)(j.Ay.Button,{value:"Black",children:"Black"}),(0,i.jsx)(j.Ay.Button,{value:"Blue",children:"Blue"}),(0,i.jsx)(j.Ay.Button,{value:"Red",children:"Red"})]})]}),(0,i.jsxs)("div",{style:{marginTop:24},children:[(0,i.jsx)(k,{level:5,children:"Size"}),(0,i.jsxs)(j.Ay.Group,{value:J,onChange:e=>O(e.target.value),children:[(0,i.jsx)(j.Ay.Button,{value:"S",children:"S"}),(0,i.jsx)(j.Ay.Button,{value:"M",children:"M"}),(0,i.jsx)(j.Ay.Button,{value:"L",children:"L"}),(0,i.jsx)(j.Ay.Button,{value:"XL",children:"XL"})]})]}),(0,i.jsxs)("div",{style:{marginTop:24},children:[(0,i.jsx)(k,{level:5,children:"Quantity"}),(0,i.jsx)(y.A,{min:1,value:V,onChange:e=>_(e||1)})]}),(0,i.jsxs)("div",{style:{marginTop:24,display:"flex",gap:16},children:[(0,i.jsx)(p.Ay,{type:"primary",size:"large",style:{flex:1},onClick:H,icon:(0,i.jsx)(b.A,{}),children:"Add to Cart"}),(0,i.jsx)(p.Ay,{size:"large",icon:(0,i.jsx)(C.A,{}),children:"Add to Wishlist"})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"features-section",children:[(0,i.jsx)(k,{level:4,children:"Features"}),(0,i.jsx)("ul",{className:"list-none pl-0",children:E.map((e,t)=>(0,i.jsxs)("li",{className:"mb-2",children:["• ",e]},t))})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"description-section",children:[(0,i.jsx)(k,{level:4,children:"Description"}),(0,i.jsx)(q,{children:n.description})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"delivery-section",children:[(0,i.jsx)(k,{level:4,children:"Delivery"}),(0,i.jsx)(q,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit."})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"return-policy-section",children:[(0,i.jsx)(k,{level:4,children:"Return Policy"}),(0,i.jsx)(q,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit."})]})]})})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"reviews-section mt-12",children:[(0,i.jsx)(k,{level:3,children:"Customer Reviews"}),(0,i.jsxs)(u.A,{gutter:[24,24],children:[(0,i.jsxs)(h.A,{xs:24,md:16,children:[(0,i.jsx)("div",{className:"reviews-list",children:z.map(e=>(0,i.jsx)(g.A,{className:"mb-4",children:(0,i.jsxs)("div",{className:"flex items-start gap-4",children:[(0,i.jsx)(f.A,{size:"large",children:e.author[0]}),(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(S,{strong:!0,children:e.author}),(0,i.jsx)(S,{type:"secondary",className:"ml-2",children:e.date})]}),(0,i.jsx)(x.A,{disabled:!0,defaultValue:e.rating})]}),(0,i.jsx)(q,{children:e.content})]})]})},e.id))}),(0,i.jsx)(p.Ay,{type:"primary",className:"mt-4",children:"Write your review"})]}),(0,i.jsx)(h.A,{xs:24,md:8,children:(0,i.jsxs)(g.A,{children:[(0,i.jsxs)("div",{className:"text-center mb-4",children:[(0,i.jsx)(k,{level:2,style:{marginBottom:0},children:"4.2"}),(0,i.jsx)(x.A,{allowHalf:!0,disabled:!0,value:4.23}),(0,i.jsxs)(S,{type:"secondary",className:"block",children:["Based on ",z.length," reviews"]})]}),(0,i.jsx)("div",{children:Object.entries({5:65,4:20,3:10,2:3,1:2}).reverse().map(e=>{let[t,s]=e;return(0,i.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,i.jsxs)(S,{children:[t," star"]}),(0,i.jsx)(A.A,{percent:s,size:"small",showInfo:!1,strokeColor:"#1890ff"}),(0,i.jsxs)(S,{type:"secondary",style:{minWidth:"40px"},children:[s,"%"]})]},t)})})]})})]})]}),(0,i.jsx)(v.A,{}),(0,i.jsxs)("div",{className:"similar-products-section mt-12",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,i.jsx)(k,{level:3,children:"Similar Products"}),(0,i.jsx)(F(),{href:"/products?category=".concat(n.category),children:(0,i.jsx)(p.Ay,{type:"link",children:"See everything"})})]}),D?(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.A,{size:"large"})}):T&&T.length>0?(0,i.jsx)(u.A,{gutter:[16,16],children:T.filter(e=>e.id!==n.id).slice(0,4).map(e=>(0,i.jsx)(h.A,{xs:12,sm:8,md:6,children:(0,i.jsx)(F(),{href:"/products/".concat(e.id),children:(0,i.jsx)(g.A,{hoverable:!0,cover:(0,i.jsx)("img",{alt:e.title,src:e.image||"/placeholder.svg",style:{height:200,objectFit:"contain",padding:16}}),children:(0,i.jsx)(g.A.Meta,{title:e.title,description:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(S,{strong:!0,children:["$",e.price.toFixed(2)]}),(0,i.jsx)("br",{}),(0,i.jsx)(S,{type:"secondary",children:e.category})]})})})})},e.id))}):(0,i.jsx)("div",{className:"text-center",children:"No similar products found."})]})]})}function T(){let{id:e}=(0,r.useParams)(),t=Array.isArray(e)?e[0]:e,{data:s,isLoading:l,error:n}=(0,a.tA)(Number(t));return l?(0,i.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,i.jsx)(o.A,{size:"large"})}):n||!s?(0,i.jsx)("div",{children:"Error loading product"}):(0,i.jsx)(B,{id:t})}},6769:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>m,Fy:()=>l,VH:()=>u,bE:()=>a,jt:()=>n,rS:()=>c,rk:()=>h,sX:()=>o});var i=s(72212);let r=s(2818).env.API_AUTH_KEY||"qwerty123",a=(0,i.zD)("cart/addToCart",async e=>{let t=await fetch("/api/cart",{method:"POST",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify({item:e})});if(!t.ok)throw Error("Failed to add item to cart");return t.json()}),l=(0,i.zD)("cart/fetchCart",async()=>{let e=await fetch("/api/cart",{headers:{Authorization:r}});if(!e.ok)throw Error("Failed to fetch cart");return e.json()}),n=(0,i.zD)("cart/removeFromCart",async e=>{let{id:t,color:s,size:i}=e,a=await fetch("/api/cart",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify({id:t,color:s,size:i})});if(!a.ok)throw Error("Failed to remove item from cart");return a.json()}),c=(0,i.zD)("cart/updateQuantity",async e=>{let{id:t,color:s,size:i,quantity:a}=e,l=await fetch("/api/cart",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:r},body:JSON.stringify({id:t,color:s,size:i,quantity:a})});if(!l.ok)throw Error("Failed to update item quantity");return l.json()}),d=(0,i.Z0)({name:"cart",initialState:{items:[],status:"idle",error:null},reducers:{clearCart:e=>{e.items=[]}},extraReducers:e=>{e.addCase(a.pending,e=>{e.status="loading"}).addCase(a.fulfilled,(e,t)=>{e.status="succeeded",e.items=t.payload.items}).addCase(a.rejected,(e,t)=>{e.status="failed",e.error=t.error.message||"Failed to add item to cart"}).addCase(l.fulfilled,(e,t)=>{e.items=t.payload.items}).addCase(n.fulfilled,(e,t)=>{e.items=t.payload.items}).addCase(c.fulfilled,(e,t)=>{e.items=t.payload.items})}}),{clearCart:o}=d.actions,u=e=>e.cart.items,h=e=>e.cart.items.reduce((e,t)=>e+t.price*t.quantity,0),m=d.reducer},46638:(e,t,s)=>{"use strict";s.d(t,{FH:()=>a,Kc:()=>l,ry:()=>c,tA:()=>n});var i=s(39295),r=s(30565);let a=(0,i.xP)({reducerPath:"api",baseQuery:(0,r.cw)({baseUrl:"https://fakestoreapi.com"}),tagTypes:["Products","Cart","Orders"],endpoints:e=>({getProducts:e.query({query:()=>"products",providesTags:["Products"]}),getProduct:e.query({query:e=>"products/".concat(e)}),getProductsByCategory:e.query({query:e=>"products/category/".concat(e)})})}),{useGetProductsQuery:l,useGetProductQuery:n,useGetProductsByCategoryQuery:c}=a}},e=>{var t=t=>e(e.s=t);e.O(0,[6653,1628,9891,418,7483,4766,9005,8173,235,4522,1432,2093,8342,8424,627,9351,9276,4082,4164,6871,8441,1517,7358],()=>t(49940)),_N_E=e.O()}]);