(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-toast-toast"],{"1a57":function(t,n,a){"use strict";a.r(n);var i=a("4cfe"),o=a("c115");for(var e in o)["default"].indexOf(e)<0&&function(t){a.d(n,t,(function(){return o[t]}))}(e);var u=a("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=s.exports},"4cfe":function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){return i}));var i={pageHead:a("abad").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast1Tap.apply(void 0,arguments)}}},[t._v("点击弹出默认toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast2Tap.apply(void 0,arguments)}}},[t._v("点击弹出设置duration的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast3Tap.apply(void 0,arguments)}}},[t._v("点击弹出显示loading的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toast4Tap.apply(void 0,arguments)}}},[t._v("点击弹出显示自定义图片的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hideToast.apply(void 0,arguments)}}},[t._v("点击隐藏toast")])],1)],1)],1)},e=[]},c115:function(t,n,a){"use strict";a.r(n);var i=a("d567"),o=a.n(i);for(var e in i)["default"].indexOf(e)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(e);n["default"]=o.a},d567:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){uni.showToast({title:"默认"})},toast2Tap:function(){uni.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){uni.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){uni.showToast({title:"logo",image:"../../../static/uni.png"})},hideToast:function(){uni.hideToast()}}};n.default=i}}]);