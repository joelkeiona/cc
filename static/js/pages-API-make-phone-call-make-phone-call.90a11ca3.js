(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-make-phone-call-make-phone-call"],{"0671":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={pageHead:e("abad").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("请在下方输入电话号码")]),e("v-uni-input",{staticClass:"input uni-common-mt",attrs:{type:"number",name:"input"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.bindInput.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.makePhoneCall.apply(void 0,arguments)}}},[t._v("拨打")])],1)],1)],1)},u=[]},"0711":function(t,n,e){"use strict";var a=e("5141"),i=e.n(a);i.a},"19ab":function(t,n,e){"use strict";(function(t){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(t){this.inputValue=t.detail.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:this.inputValue,success:function(){t("log","成功拨打电话"," at pages/API/make-phone-call/make-phone-call.vue:34")}})}}};n.default=a}).call(this,e("0de9")["log"])},5141:function(t,n,e){var a=e("88bc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0301ffbe",a,!0,{sourceMap:!1,shadowMode:!1})},"88bc":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".input[data-v-53469939]{height:%?119?%;line-height:%?119?%;font-size:%?78?%;border-bottom:%?1?% solid #e2e2e2;text-align:center}",""]),t.exports=n},"8fdd":function(t,n,e){"use strict";e.r(n);var a=e("19ab"),i=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},9192:function(t,n,e){"use strict";e.r(n);var a=e("0671"),i=e("8fdd");for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("0711");var l=e("f0c5"),o=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"53469939",null,!1,a["a"],void 0);n["default"]=o.exports}}]);