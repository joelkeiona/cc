(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-storage-storage"],{"7dd3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={pageHead:a("abad").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("key")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.keyChange.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("value")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.dataChange.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setStorage.apply(void 0,arguments)}}},[t._v("存储数据")]),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getStorage.apply(void 0,arguments)}}},[t._v("读取数据")]),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearStorage.apply(void 0,arguments)}}},[t._v("清理数据")])],1)],1)],1)],1)},s=[]},"8fda":function(t,e,a){var n=a("b57b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3e821f68",n,!0,{sourceMap:!1,shadowMode:!1})},b57b:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".btn-setstorage[data-v-15faa5db]{background-color:#007aff;color:#fff}",""]),t.exports=e},e248:function(t,e,a){"use strict";a.r(e);var n=a("7dd3"),i=a("e8a3");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("ed3a");var l=a("f0c5"),u=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"15faa5db",null,!1,n["a"],void 0);e["default"]=u.exports},e8a3:function(t,e,a){"use strict";a.r(e);var n=a("f5c0"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},ed3a:function(t,e,a){"use strict";var n=a("8fda"),i=a.n(n);i.a},f5c0:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e9c4");var n={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.detail.value},dataChange:function(t){this.data=t.detail.value},getStorage:function(){var t=this.key;this.data;0===t.length?uni.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):uni.getStorage({key:t,success:function(t){uni.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){uni.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,e=this.data;0===t.length?uni.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):uni.setStorage({key:t,data:e,success:function(t){uni.showModal({title:"存储数据成功",content:JSON.stringify(t.errMsg),showCancel:!1})},fail:function(){uni.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){uni.clearStorageSync(),this.key="",this.data="",uni.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};e.default=n}}]);