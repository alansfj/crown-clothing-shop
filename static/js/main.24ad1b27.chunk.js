(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c,i,a=n(2),r=n.n(a),s=n(30),l=n.n(s),o=(n(51),n(14)),d=n.n(o),u=n(8),b=n(21),m=(n(53),n(54),n(22)),p=n(5),j=(n(55),n(1)),h=function(e){var t=e.title,n=e.imageUrl,c=e.size,i=e.linkUrl,a=Object(p.g)(),r=Object(p.i)();return Object(j.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(i))},children:[Object(j.jsx)("div",{className:"background-img",style:{backgroundImage:"url(".concat(n,")")}}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(j.jsx)("span",{className:"subtitle",children:"BUY NOW"})]})]})},g=(n(64),n(7)),O=n(10),f=Object(O.a)([function(e){return e.directory}],(function(e){return e.sections})),x=["id"],v=function(){var e=Object(g.c)(f);return Object(j.jsx)("div",{className:"directory-menu",children:e.map((function(e){var t=e.id,n=Object(m.a)(e,x);return Object(j.jsx)(h,Object(u.a)({},n),t)}))})},w=function(){return Object(j.jsx)("div",{className:"homepage",children:Object(j.jsx)(v,{})})},y=(n(66),n(67),["children","isGoogleSignIn","inverted"]),k=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,i=Object(m.a)(e,y);return Object(j.jsx)("button",Object(u.a)(Object(u.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))},N=(n(68),n(20)),U=n(44),C=Object(N.b)({name:"cart",initialState:{hidden:!0,cartItems:[]},reducers:{toggleCartHidden:function(e,t){e.hidden=!e.hidden},addItem:function(e,t){var n,c;e.cartItems=(n=e.cartItems,c=t.payload,n.find((function(e){return e.id===c.id}))?n.map((function(e){return e.id===c.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(U.a)(n),[Object(u.a)(Object(u.a)({},c),{},{quantity:1})]))},removeItem:function(e,t){var n,c;e.cartItems=(n=e.cartItems,c=t.payload,1===n.find((function(e){return e.id===c.id})).quantity?n.filter((function(e){return e.id!==c.id})):n.map((function(e){return e.id===c.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e})))},clearItemFromCart:function(e,t){e.cartItems=e.cartItems.filter((function(e){return e.id!==t.payload.id}))}}}),E=C.actions,S=E.toggleCartHidden,I=E.addItem,B=E.removeItem,P=E.clearItemFromCart,T=C.reducer,A=function(e){var t=e.item,n=t.name,c=t.price,i=t.imageUrl,a=Object(g.b)();return Object(j.jsxs)("div",{className:"collection-item",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(j.jsxs)("div",{className:"collection-footer",children:[Object(j.jsx)("span",{className:"name",children:n}),Object(j.jsx)("span",{className:"price",children:"$".concat(c)})]}),Object(j.jsx)(k,{onClick:function(){a(I(t))},inverted:!0,children:"Add to cart"})]})},q=Object(O.a)([function(e){return e.shop}],(function(e){return e.collections})),G=Object(O.a)([q],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),W=function(){var e,t=Object(p.h)().collectionId,n=Object(g.c)((e=t,Object(O.a)([q],(function(t){return t[e]})))),c=n.title,i=n.items;return Object(j.jsxs)("div",{className:"collection-page",children:[Object(j.jsx)("h2",{className:"title",children:c}),Object(j.jsx)("div",{className:"items",children:i.map((function(e){return Object(j.jsx)(A,{item:e},e.id)}))})]})},J=(n(69),n(18)),D=function(e){var t=e.title,n=e.items,c=Object(p.i)();return Object(j.jsxs)("div",{className:"collection-preview",children:[Object(j.jsxs)("div",{className:"title-link-container",children:[Object(j.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(j.jsx)(J.b,{to:"".concat(c.path,"/").concat(t.toLowerCase()),onClick:function(){window.scrollTo(0,0)},children:Object(j.jsx)("span",{children:"SEE ALL"})})]}),Object(j.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(j.jsx)(A,{item:e},e.id)}))})]})},H=(n(70),["id"]),M=function(){var e=Object(g.c)(G);return Object(j.jsx)("div",{className:"collections-overview",children:e.map((function(e){var t=e.id,n=Object(m.a)(e,H);return Object(j.jsx)(D,Object(u.a)({},n),t)}))})},z=function(e){var t=e.match;return Object(j.jsxs)("div",{className:"shop-page",children:[Object(j.jsx)(p.b,{exact:!0,path:"".concat(t.path),component:M}),Object(j.jsx)(p.b,{exact:!0,path:"".concat(t.path,"/:collectionId"),component:W})]})},F=(n(71),["title","titleId"]);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function R(e,t){var n=e.title,r=e.titleId,s=V(e,F);return a.createElement("svg",L({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},s),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,c||(c=a.createElement("desc",null,"Created with Sketch.")),i||(i=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Q=a.forwardRef(R),K=(n.p,n(26)),Y=(n(87),n(73),function(){var e=Object(b.a)(d.a.mark((function e(t,n){var c,i,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=Z.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,a=t.email,r=new Date,e.prev=9,e.next=12,c.set(Object(u.a)({displayName:i,email:a,createdAt:r},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());K.a.initializeApp({apiKey:"AIzaSyCNFuHqFzMdsncBBk9HAUAL1nWfEFc4doQ",authDomain:"crwn-clothing-4824b.firebaseapp.com",projectId:"crwn-clothing-4824b",storageBucket:"crwn-clothing-4824b.appspot.com",messagingSenderId:"729505406559",appId:"1:729505406559:web:735f8874d27b5a64ad85ea",measurementId:"G-1QVECSS2EG"});var X=K.a.auth(),Z=K.a.firestore(),_=new K.a.auth.GoogleAuthProvider;_.setCustomParameters({prompt:"select_account"});var $,ee,te,ne,ce,ie,ae,re,se,le,oe,de,ue,be,me,pe=function(){return X.signInWithPopup(_)},je=(K.a,["title","titleId"]);function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Oe(e,t){var n=e.title,c=e.titleId,i=ge(e,je);return a.createElement("svg",he({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?a.createElement("title",{id:c},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),$||($=a.createElement("g",null)),ee||(ee=a.createElement("g",null)),te||(te=a.createElement("g",null)),ne||(ne=a.createElement("g",null)),ce||(ce=a.createElement("g",null)),ie||(ie=a.createElement("g",null)),ae||(ae=a.createElement("g",null)),re||(re=a.createElement("g",null)),se||(se=a.createElement("g",null)),le||(le=a.createElement("g",null)),oe||(oe=a.createElement("g",null)),de||(de=a.createElement("g",null)),ue||(ue=a.createElement("g",null)),be||(be=a.createElement("g",null)),me||(me=a.createElement("g",null)))}var fe=a.forwardRef(Oe),xe=(n.p,n(75),function(e){return e.cart}),ve=Object(O.a)([xe],(function(e){return e.hidden})),we=Object(O.a)([xe],(function(e){return e.cartItems})),ye=Object(O.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(O.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Ne=function(){var e=Object(g.b)(),t=Object(g.c)(ye);return Object(j.jsxs)("div",{className:"cart-icon",onClick:function(){e(S())},children:[Object(j.jsx)(fe,{className:"shopping-icon"}),Object(j.jsx)("span",{className:"item-count",children:t})]})},Ue=(n(76),n(77),function(e){var t=e.item,n=t.imageUrl,c=t.price,i=t.name,a=t.quantity;return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsx)("img",{src:n,alt:"item"}),Object(j.jsxs)("div",{className:"item-details",children:[Object(j.jsx)("span",{className:"name",children:i}),Object(j.jsxs)("span",{className:"price",children:[a," x ",c]})]})]})}),Ce=function(){var e=Object(g.b)(),t=Object(g.c)(we),n=Object(p.g)();return Object(j.jsxs)("div",{className:"cart-dropdown",children:[Object(j.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(j.jsx)(Ue,{item:e},e.id)})):Object(j.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(j.jsx)(k,{onClick:function(){e(S()),n.push("/checkout")},children:"GO TO CHECKOUT"})]})},Ee=Object(O.a)([function(e){return e.user}],(function(e){return e.currentUser})),Se=function(){var e=Object(g.c)(Ee),t=Object(g.c)(ve);return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(J.b,{to:"/",className:"logo-container",children:Object(j.jsx)(Q,{className:"logo"})}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsx)(J.b,{className:"option",to:"/shop",children:"SHOP"}),e?Object(j.jsx)("div",{className:"option",onClick:function(){return X.signOut()},children:"SIGN OUT"}):Object(j.jsx)(J.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(j.jsx)(Ne,{})]}),t?null:Object(j.jsx)(Ce,{})]})},Ie=n(25),Be=n(45),Pe=(n(78),["handleChange","label"]),Te=function(e){var t=e.handleChange,n=e.label,c=Object(m.a)(e,Pe);return Object(j.jsxs)("div",{className:"group",children:[Object(j.jsx)("input",Object(u.a)({className:"form-input",onChange:t},c)),n&&Object(j.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n})]})},Ae=(n(79),{email:"",password:""}),qe=function(){var e=Object(a.useState)(Ae),t=Object(Be.a)(e,2),n=t[0],c=t[1],i=function(){var e=Object(b.a)(d.a.mark((function e(t){var i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i=n.email,a=n.password,e.prev=2,e.next=5,X.signInWithEmailAndPassword(i,a);case 5:c(Ae),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:c(Ae);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r=function(e){var t=e.target,i=t.value,a=t.name;c(Object(u.a)(Object(u.a)({},n),{},Object(Ie.a)({},a,i)))};return Object(j.jsxs)("div",{className:"sign-in",children:[Object(j.jsx)("h2",{children:"I already have an account"}),Object(j.jsx)("span",{children:"Sign in with your email and password"}),Object(j.jsxs)("form",{onSubmit:i,children:[Object(j.jsx)(Te,{type:"email",name:"email",value:n.email,required:!0,handleChange:r,label:"email"}),Object(j.jsx)(Te,{type:"password",name:"password",value:n.password,required:!0,handleChange:r,label:"password"}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)(k,{type:"submit",children:"Sign in"}),Object(j.jsx)(k,{onClick:pe,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})},Ge=n(38),We=n(39),Je=n(46),De=n(43),He=(n(80),function(e){Object(Je.a)(n,e);var t=Object(De.a)(n);function n(){var e;return Object(Ge.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){var c,i,a,r,s,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,i=c.displayName,a=c.email,r=c.password,s=c.confirmPassword,r===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,X.createUserWithEmailAndPassword(a,r);case 8:return l=t.sent,o=l.user,t.next=12,Y(o,{displayName:i});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,i=n.value;e.setState(Object(Ie.a)({},c,i))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(We.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,i=e.confirmPassword;return Object(j.jsxs)("div",{className:"sign-up",children:[Object(j.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(j.jsx)("span",{children:"Sign up with your email and password"}),Object(j.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(j.jsx)(Te,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(j.jsx)(Te,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(j.jsx)(Te,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(j.jsx)(Te,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(j.jsx)(k,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.a.Component)),Me=(n(81),function(){return Object(j.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(j.jsx)(qe,{}),Object(j.jsx)(He,{})]})}),ze=(n(82),n(83),function(e){var t=e.cartItem,n=t.imageUrl,c=t.name,i=t.price,a=t.quantity,r=Object(g.b)();return Object(j.jsxs)("div",{className:"checkout-item",children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("img",{src:n,alt:"item"})}),Object(j.jsx)("span",{className:"name",children:c}),Object(j.jsxs)("span",{className:"quantity",children:[Object(j.jsx)("div",{className:"arrow",onClick:function(){r(B(t))},children:"\u276e"}),Object(j.jsx)("span",{className:"value",children:a}),Object(j.jsx)("div",{className:"arrow",onClick:function(){r(I(t))},children:"\u276f"})]}),Object(j.jsx)("span",{className:"price",children:i}),Object(j.jsx)("div",{className:"remove-button",onClick:function(){r(P(t))},children:"\u2715"})]})}),Fe=n(40),Le=n.n(Fe),Ve=function(e){var t=e.price,n=100*t;return Object(j.jsx)(Le.a,{label:"Pay Now",name:"Crown Clothing",billingAddress:!0,shippingAddress:!0,description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){alert("Payment Successful")},stripeKey:"pk_test_51Jbt1dDA70buWfk36yVG8SZEpenXbvALHaiGDElttxqgPZUah2UFFOQ6jKTqRoj90ZmTdaVC9jeDDnef4yNFvoaj00pGudmODg"})},Re=function(){var e=Object(g.c)(we),t=Object(g.c)(ke);return Object(j.jsxs)("div",{className:"checkout-page",children:[Object(j.jsxs)("div",{className:"checkout-header",children:[Object(j.jsx)("div",{className:"header-block",children:Object(j.jsx)("span",{children:"Product"})}),Object(j.jsx)("div",{className:"header-block",children:Object(j.jsx)("span",{children:"Description"})}),Object(j.jsx)("div",{className:"header-block",children:Object(j.jsx)("span",{children:"Quantity"})}),Object(j.jsx)("div",{className:"header-block",children:Object(j.jsx)("span",{children:"Price"})}),Object(j.jsx)("div",{className:"header-block",children:Object(j.jsx)("span",{children:"Remove"})})]}),e.map((function(e){return Object(j.jsx)(ze,{cartItem:e},e.id)})),Object(j.jsx)("div",{className:"total",children:Object(j.jsxs)("span",{children:["TOTAL: $",t]})}),t?Object(j.jsx)(Ve,{price:t}):Object(j.jsx)(J.b,{to:"/shop",children:"Add something to cart"})]})},Qe=Object(N.b)({name:"user",initialState:{currentUser:null},reducers:{setCurrentUser:function(e,t){e.currentUser=t.payload}}}),Ke=Qe.actions.setCurrentUser,Ye=Qe.reducer,Xe=function(){var e=Object(g.b)(),t=Object(g.c)(Ee);return Object(a.useEffect)((function(){var t=null;return t=X.onAuthStateChanged(function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,Y(n);case 3:t.sent.onSnapshot((function(t){e(Ke(Object(u.a)({id:t.id},t.data())))})),t.next=8;break;case 7:e(Ke(n));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),function(){t()}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(Se,{}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{exact:!0,path:"/",component:w}),Object(j.jsx)(p.b,{path:"/shop",component:z}),Object(j.jsx)(p.b,{exact:!0,path:"/signin",render:function(){return t?Object(j.jsx)(p.a,{to:"/"}):Object(j.jsx)(Me,{})}}),Object(j.jsx)(p.b,{exact:!0,path:"/checkout",component:Re})]})]})},Ze=n(36),_e=n(41),$e=n.n(_e),et={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},tt=Object(N.b)({name:"shop",initialState:et,reducers:{}}).reducer,nt=Object(N.b)({name:"directory",initialState:{sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},reducers:{}}).reducer,ct={key:"cart",storage:$e.a},it=Object(Ze.a)(ct,T),at=Object(N.a)({reducer:{user:Ye,cart:it,directory:nt,shop:tt}}),rt=Object(Ze.b)(at),st=n(42);l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g.a,{store:at,children:Object(j.jsx)(J.a,{children:Object(j.jsx)(st.a,{persistor:rt,children:Object(j.jsx)(Xe,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.24ad1b27.chunk.js.map