(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{"35cf":function(e,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return t}));var t={pageHead:i("abad").default},a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title"},[e._v("显示当前value")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"50","show-value":!0},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("设置步进step跳动")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("设置最小/最大值")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":!0},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("不同颜色和大小的滑块")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"50",activeColor:"#FFCC33",backgroundColor:"#000000","block-color":"#8A6DE9","block-size":"20"},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.sliderChange.apply(void 0,arguments)}}})],1)],1)],1)},u=[]},"5cee":function(e,n,i){"use strict";i.r(n);var t=i("b892"),a=i.n(t);for(var u in t)["default"].indexOf(u)<0&&function(e){i.d(n,e,(function(){return t[e]}))}(u);n["default"]=a.a},b892:function(e,n,i){"use strict";(function(e){i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"slider 滑块"}},methods:{sliderChange:function(n){e("log","value 发生变化："+n.detail.value," at pages/component/slider/slider.vue:36")}}};n.default=t}).call(this,i("0de9")["log"])},e15f:function(e,n,i){"use strict";i.r(n);var t=i("35cf"),a=i("5cee");for(var u in a)["default"].indexOf(u)<0&&function(e){i.d(n,e,(function(){return a[e]}))}(u);var l=i("f0c5"),o=Object(l["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=o.exports}}]);