(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-image-image"],{"07dd":function(e,t,i){"use strict";i.r(t);var n=i("8a61"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},"16c7":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={pageHead:i("abad").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-form",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片来源")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sourceTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片质量")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sizeTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("数量限制")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.count,mode:"selector"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.countChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,(function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)]})),i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1)],1)],1)],1)},a=[]},"35be":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".cell-pd[data-v-411a8cb7]{padding:%?22?% %?30?%}.list-pd[data-v-411a8cb7]{margin-top:%?50?%}",""]),e.exports=t},"8a61":function(e,t,i){"use strict";(function(e){i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i("c7eb")),a=n(i("1da1"));i("e25e"),i("99af"),i("d3b7");var o=n(i("c12c")),u=[["camera"],["album"],["camera","album"]],r=[["compressed"],["original"],["compressed","original"]],l={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},sizeTypeChange:function(e){this.sizeTypeIndex=parseInt(e.detail.value)},countChange:function(e){this.countIndex=e.detail.value},chooseImage:function(){var t=(0,a.default)((0,s.default)().mark((function t(){var i,n=this;return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(i=t.sent,e("log","是否继续?",i," at pages/API/image/image.vue:124"),i){t.next=7;break}return t.abrupt("return");case 7:uni.chooseImage({sourceType:u[this.sourceTypeIndex],sizeType:r[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){n.imageList=n.imageList.concat(e.tempFilePaths)},fail:function(t){e("log","err: ",t," at pages/API/image/image.vue:137")}});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),isFullImg:function(){var e=this;return new Promise((function(t){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})}))},previewImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:this.imageList})},checkPermission:function(e){var t=this;return(0,a.default)((0,s.default)().mark((function i(){var n,a;return(0,s.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=e?e-1:t.sourceTypeIndex,!o.default.isIOS){i.next=7;break}return i.next=4,o.default.requestIOS(u[n][0]);case 4:i.t0=i.sent,i.next=10;break;case 7:return i.next=9,o.default.requestAndroid(0===n?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:i.t0=i.sent;case 10:return a=i.t0,null===a||1===a?a=1:uni.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&o.default.gotoAppSetting()}}),i.abrupt("return",a);case 13:case"end":return i.stop()}}),i)})))()}}};t.default=l}).call(this,i("0de9")["log"])},"9e48":function(e,t,i){var n=i("35be");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("646262c4",n,!0,{sourceMap:!1,shadowMode:!1})},b018:function(e,t,i){"use strict";var n=i("9e48"),s=i.n(n);s.a},c12c:function(e,t,i){"use strict";(function(e){var n;i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d3b7");var s={get isIOS(){return"boolean"===typeof n?n:n="ios"===uni.getSystemInfoSync().platform},requestIOS:function(t){return new Promise((function(i,n){switch(t){case"push":i(function(){var t=0,i=plus.ios.import("UIApplication"),n=i.sharedApplication(),s=0;if(n.currentUserNotificationSettings){var a=n.currentUserNotificationSettings();s=a.plusGetAttribute("types"),0==s?(t=0,e("log","推送权限没有开启"," at common/permission.js:63")):(t=1,e("log","已经开启推送功能!"," at common/permission.js:66")),plus.ios.deleteObject(a)}else s=n.enabledRemoteNotificationTypes(),0==s?(t=3,e("log","推送权限没有开启!"," at common/permission.js:73")):(t=4,e("log","已经开启推送功能!"," at common/permission.js:76"));return plus.ios.deleteObject(n),plus.ios.deleteObject(i),t}());break;case"location":i(function(){var e=0,t=plus.ios.import("CLLocationManager"),i=t.locationServicesEnabled(),n=t.authorizationStatus();return e=i?0===n?null:3===n||4===n?1:0:2,plus.ios.deleteObject(t),e}());break;case"record":i(function(){var t=null,i=plus.ios.import("AVAudioSession"),n=i.sharedInstance(),s=n.recordPermission();return e("log","permissionStatus:"+s," at common/permission.js:104"),t=1970168948===s?null:1735552628===s?1:0,plus.ios.deleteObject(i),t}());break;case"camera":i(function(){var e=0,t=plus.ios.import("AVCaptureDevice"),i=t.authorizationStatusForMediaType("vide");return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}());break;case"album":i(function(){var e=0,t=plus.ios.import("PHPhotoLibrary"),i=t.authorizationStatus();return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}());break;case"contact":i(function(){var e=0,t=plus.ios.import("CNContactStore"),i=t.authorizationStatusForEntityType(0);return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}());break;case"calendar":i(function(){var t=null,i=plus.ios.import("EKEventStore"),n=i.authorizationStatusForEntityType(0);return 3==n?(t=1,e("log","日历权限已经开启"," at common/permission.js:122")):e("log","日历权限没有开启"," at common/permission.js:124"),plus.ios.deleteObject(i),t}());break;case"memo":i(function(){var t=null,i=plus.ios.import("EKEventStore"),n=i.authorizationStatusForEntityType(1);return 3==n?(t=1,e("log","备忘录权限已经开启"," at common/permission.js:136")):e("log","备忘录权限没有开启"," at common/permission.js:138"),plus.ios.deleteObject(i),t}());break;default:i(0);break}}))},requestAndroid:function(t){return new Promise((function(i,n){plus.android.requestPermissions([t],(function(t){for(var n=0,s=0;s<t.granted.length;s++){var a=t.granted[s];e("log","已获取的权限："+a," at common/permission.js:187"),n=1}for(s=0;s<t.deniedPresent.length;s++){var o=t.deniedPresent[s];e("log","拒绝本次申请的权限："+o," at common/permission.js:192"),n=0}for(s=0;s<t.deniedAlways.length;s++){var u=t.deniedAlways[s];e("log","永久拒绝申请的权限："+u," at common/permission.js:197"),n=-1}i(n)}),(function(t){e("log","result error: "+t.message," at common/permission.js:203"),i({code:t.code,message:t.message})}))}))},gotoAppSetting:function(){if(s.isIOS){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),i=plus.ios.import("NSURL"),n=i.URLWithString("app-settings:");t.openURL(n),plus.ios.deleteObject(n),plus.ios.deleteObject(i),plus.ios.deleteObject(t)}else{var a=plus.android.importClass("android.content.Intent"),o=plus.android.importClass("android.provider.Settings"),u=plus.android.importClass("android.net.Uri"),r=plus.android.runtimeMainActivity(),l=new a;l.setAction(o.ACTION_APPLICATION_DETAILS_SETTINGS);var c=u.fromParts("package",r.getPackageName(),null);l.setData(c),r.startActivity(l)}}},a=s;t.default=a}).call(this,i("0de9")["log"])},cebf:function(e,t,i){"use strict";i.r(t);var n=i("16c7"),s=i("07dd");for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("b018");var o=i("f0c5"),u=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"411a8cb7",null,!1,n["a"],void 0);t["default"]=u.exports}}]);