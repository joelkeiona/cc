(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{"28e6":function(e,a,t){"use strict";t.r(a);var i=t("7d37"),n=t("e53a");for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("c4b9");var u=t("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"789a2834",null,!1,i["a"],void 0);a["default"]=l.exports},3328:function(e,a,t){"use strict";(function(e){t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var a=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){e("log","chooseImage success, temp path is",t.tempFilePaths[0]," at pages/API/upload-file/upload-file.vue:34");var i=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:i,fileType:"image",name:"data",success:function(t){e("log","uploadImage success, res is:",t," at pages/API/upload-file/upload-file.vue:42"),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),a.imageSrc=i},fail:function(a){e("log","uploadImage fail",a," at pages/API/upload-file/upload-file.vue:51"),uni.showModal({content:a.errMsg,showCancel:!1})}})},fail:function(a){e("log","chooseImage fail",a," at pages/API/upload-file/upload-file.vue:60")}})}}};a.default=i}).call(this,t("0de9")["log"])},"58e0":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".image[data-v-789a2834]{width:100%}.demo[data-v-789a2834]{background:#fff;padding:%?50?%}",""]),e.exports=a},"7d37":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return i}));var i={pageHead:t("abad").default},n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"demo"},[e.imageSrc?[t("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},o=[]},abbe:function(e,a,t){var i=t("58e0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("17507058",i,!0,{sourceMap:!1,shadowMode:!1})},c4b9:function(e,a,t){"use strict";var i=t("abbe"),n=t.n(i);n.a},e53a:function(e,a,t){"use strict";t.r(a);var i=t("3328"),n=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return i[e]}))}(o);a["default"]=n.a}}]);