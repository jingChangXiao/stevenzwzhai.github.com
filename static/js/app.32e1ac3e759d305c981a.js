webpackJsonp([0],{"+qiL":function(t,e){},"5fLh":function(t,e,n){t.exports=n.p+"static/img/wolf.7b808ca.jpeg"},ChIq:function(t,e){},INl4:function(t,e,n){t.exports=n.p+"static/img/nz.d73d18a.jpg"},"N+ZU":function(t,e,n){t.exports=n.p+"static/img/py.d0c4e1e.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(t){n("p/0W")},null,null).exports,c=n("/ocq"),s=n("Q3GK"),r={name:"main-page",data:function(){return{showName:!1,follow:!1,img1:n("w9Md"),img2:n("bdHE"),img3:n("N+ZU"),img4:n("ll07"),img5:n("Rg1F"),img6:n("INl4")}},mounted:function(){var t=this;this.showName=!0,setTimeout(function(){t.follow=!0},500),this.createBall()},methods:{go:function(t){switch(t){case"github":location.href="https://github.com/Stevenzwzhai";break;case"cnblog":location.href="http://www.cnblogs.com/Upton/";break;case"jianshu":location.href="https://www.jianshu.com/u/d9eb11eb4b14";break;default:location.reload()}},createBall:function(){var t,e,n,i,o,a,c,r,d=this,l=!1,u=90,m=0,p=0,h=0,g=new s.h;function f(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function w(t){var e=new s.g(i),n=new s.d({map:e,overdraw:.5}),o=new Image;return o.src=t,o.onload=function(){console.log(213),e.image=this,e.needsUpdate=!0},n}function v(t){t.preventDefault(),l=!0,o=t.clientX,a=t.clientY,c=u,r=m}function b(t){!0===l&&(u=.1*(o-t.clientX)+c,m=.1*(t.clientY-a)+r)}function x(t){l=!1}function _(e){var n=t.fov+.05*e.deltaY;t.fov=s.b.clamp(n,10,75),t.updateProjectionMatrix()}function j(t){1==t.touches.length&&(t.preventDefault(),o=t.touches[0].pageX,a=t.touches[0].pageY,c=u,r=m)}function C(t){1==t.touches.length&&(t.preventDefault(),u=.1*(o-t.touches[0].pageX)+c,m=.1*(t.touches[0].pageY-a)+r)}!function(){var o,a;o=document.getElementById("container"),t=new s.e(75,window.innerWidth/window.innerHeight,1,1100),e=new s.f,(i=document.createElement("canvas")).width=128,i.height=128;var c=i.getContext("2d");c.fillStyle="rgb( 200, 200, 200 )",c.fillRect(0,0,i.width,i.height);var r=[w(d.img1),w(d.img2),w(d.img3),w(d.img4),w(d.img5),w(d.img6)];console.log(r);var l=new s.a(300,300,300,7,7,7);l.scale(-1,1,1),a=new s.c(l,r),e.add(a);for(var u=0,m=a.geometry.vertices.length;u<m;u++){var p=a.geometry.vertices[u];p.normalize(),p.multiplyScalar(550)}(n=new s.i).setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight-100),o.appendChild(n.domElement),document.addEventListener("mousedown",v,!1),document.addEventListener("mousemove",b,!1),document.addEventListener("mouseup",x,!1),document.addEventListener("wheel",_,!1),document.addEventListener("touchstart",j,!1),document.addEventListener("touchmove",C,!1),window.addEventListener("resize",f,!1)}(),function i(){requestAnimationFrame(i);!function(){!1===l&&(u+=.1);m=Math.max(-85,Math.min(85,m)),p=s.b.degToRad(90-m),h=s.b.degToRad(u),g.x=500*Math.sin(p)*Math.cos(h),g.y=500*Math.cos(p),g.z=500*Math.sin(p)*Math.sin(h),t.position.copy(g).negate(),t.lookAt(g),n.render(e,t)}()}()}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"outer",attrs:{id:"header_wrap"}},[i("header",{staticClass:"inner"},[i("div",{staticClass:"header-icon"},[i("div",[i("img",{attrs:{src:n("5fLh")}}),t._v(" "),i("transition",{attrs:{name:"slideRight"}},[t.showName?i("h3",[t._v("故园苒苒")]):t._e()])],1),t._v(" "),i("div",{staticClass:"message"},[i("transition",{attrs:{name:"fadeDown"}},[i("div",{staticClass:"message-container"},[t.follow?i("p",[t._v("follow me")]):t._e(),t._v(" "),i("span",{staticClass:"icon github",on:{click:function(e){t.go("github")}}}),t._v(" "),i("span",{staticClass:"icon cnblog",on:{click:function(e){t.go("cnblog")}}}),t._v(" "),i("span",{staticClass:"icon jianshu",on:{click:function(e){t.go("jianshu")}}})])])],1)])])]),t._v(" "),i("div",{staticClass:"section",attrs:{id:"container"}}),t._v(" "),i("div",{ref:"img"})])},staticRenderFns:[]};var l=n("VU/8")(r,d,!1,function(t){n("rD9x")},null,null).exports;i.a.use(c.a);var u=new c.a({routes:[{path:"/",name:"main",component:l}]});n("+qiL"),n("ChIq"),n("mMsh");i.a.config.productionTip=!1,new i.a({el:"#app",router:u,components:{App:a},template:"<App/>"})},Rg1F:function(t,e,n){t.exports=n.p+"static/img/pz.de29aa8.jpg"},bdHE:function(t,e,n){t.exports=n.p+"static/img/nx.3503457.jpg"},ll07:function(t,e,n){t.exports=n.p+"static/img/ny.35808d2.jpg"},"p/0W":function(t,e){},rD9x:function(t,e){},w9Md:function(t,e,n){t.exports=n.p+"static/img/px.d235fb9.jpg"}},["NHnr"]);
//# sourceMappingURL=app.32e1ac3e759d305c981a.js.map