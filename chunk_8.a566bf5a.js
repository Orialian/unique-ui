(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(t,o,a){var e=a(145);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,i);e.locals&&(t.exports=e.locals)},144:function(t,o,a){"use strict";var e=a(115);a.n(e).a},145:function(t,o,a){(t.exports=a(2)(!1)).push([t.i,".demo-modal .wrapper {\n  padding: 0 1em; }\n\n.demo-modal .modal-enter-active,\n.demo-modal .modal-leave-active {\n  -webkit-transition: opacity 0.45s, -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: opacity 0.45s, -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: opacity 0.45s, transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: opacity 0.45s, transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.demo-modal .modal-enter,\n.demo-modal .modal-leave-to {\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 100%, 0) scale(0) skew(45deg, 45deg);\n          transform: translate3d(-50%, 100%, 0) scale(0) skew(45deg, 45deg); }\n",""])},33:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"demo-modal"},[a("demo-block",{attrs:{title:"js调用"}},[a("div",{staticClass:"wrapper"},[a("i-button",{on:{click:function(o){t.$modal.alert("Are you ok?",{title:"👽"})}}},[t._v("alert")]),t._v(" "),a("i-button",{on:{click:function(o){t.$modal.confirm("大郎，起来喝药了",{title:"提示"})}}},[t._v("confimr")])],1)]),t._v(" "),a("demo-block",{attrs:{title:"异步关闭"}},[a("div",{staticClass:"wrapper"},[a("i-button",{on:{click:t.asyncClose}},[t._v("异步关闭")])],1)]),t._v(" "),a("demo-block",{attrs:{title:"组件调用"}},[a("div",{staticClass:"wrapper"},[a("i-button",{on:{click:function(o){t.show=!0}}},[t._v("组件调用")])],1)]),t._v(" "),a("i-modal",{staticStyle:{width:"66%"},attrs:{closeOnClickOverlay:"",confirmText:"CLOSE","transition-name":"modal"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[a("img",{staticStyle:{display:"block",width:"100%"},attrs:{src:"https://xiaojun1994.top/images/avatar.jpg",alt:"avatar"}})])],1)};e._withStripped=!0;var i={data:function(){return{show:!1}},methods:{asyncClose:function(){this.$modal.alert("异步关闭",{title:"提示",autoClose:!1}).then(function(t){setTimeout(function(){t()},1e3)})}}},n=(a(144),a(0)),s=Object(n.a)(i,e,[],!1,null,"3892a08c",null);s.options.__file="packages/modal/demo/index.vue";o.default=s.exports}}]);