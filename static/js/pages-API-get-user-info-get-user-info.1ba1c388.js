(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-user-info-get-user-info"],{"02fb":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var i={pageHead:t("abad").default},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!1===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t("v-uni-text",[e._v("请点击下方按钮获取用户头像及昵称或手机号")])],1)]:e._e(),!0===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-h4 uni-center uni-common-mt"},[e._v(e._s(e.userInfo.nickName||e.userInfo.nickname||e.userInfo.gender||e.userInfo.email||e.userInfo.phoneNumber))]),e.userInfo.avatarUrl||e.userInfo.avatar_url?t("v-uni-view",{staticStyle:{padding:"30rpx 0","text-align":"center"}},[t("v-uni-image",{staticClass:"userinfo-avatar",attrs:{src:e.userInfo.avatarUrl||e.userInfo.avatar_url}})],1):e._e()]:e._e()],2),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clear.apply(void 0,arguments)}}},[e._v("清空")])],1)],1)],1)},o=[]},"030a":function(e,n,t){"use strict";t.r(n);var i=t("02fb"),a=t("8df4");for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("8ffe");var r=t("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6a14e8dc",null,!1,i["a"],void 0);n["default"]=s.exports},4647:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,".userinfo-avatar[data-v-6a14e8dc]{border-radius:%?128?%;width:%?128?%;height:%?128?%}",""]),e.exports=n},"85bb":function(e,n,t){var i=t("4647");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("23fd15d5",i,!0,{sourceMap:!1,shadowMode:!1})},"8df4":function(e,n,t){"use strict";t.r(n);var i=t("ccb4"),a=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},"8ffe":function(e,n,t){"use strict";var i=t("85bb"),a=t.n(i);a.a},ccb4:function(e,n,t){"use strict";(function(e){t("7a82");var i=t("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("d3b7"),t("c975");var a=i(t("5530")),o=t("26cb"),r={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{},btnLoading:!1}},computed:(0,a.default)({},(0,o.mapState)(["loginProvider","isUniverifyLogin"])),methods:(0,a.default)((0,a.default)({},(0,o.mapActions)(["getPhoneNumber"])),{},{getUserInfo:function(){var n=this;if(this.btnLoading=!0,this.isUniverifyLogin)this.getPhoneNumber(uni.getStorageSync("univerifyInfo")).then((function(e){n.hasUserInfo=!0,n.userInfo={phoneNumber:e}})).catch((function(t){e("error","getUserInfo fail:",t," at pages/API/get-user-info/get-user-info.vue:65"),n.hasUserInfo=!1})).finally((function(){n.btnLoading=!1}));else{if("apple"===this.loginProvider){var t=uni.getStorageSync("apple_nickname");if(t)return this.hasUserInfo=!0,this.userInfo={nickName:t},void(this.btnLoading=!1)}uni.getUserInfo({provider:this.loginProvider,success:function(e){n.hasUserInfo=!0,n.userInfo=e.userInfo},fail:function(n){e("log","getUserInfo fail",n," at pages/API/get-user-info/get-user-info.vue:90");var t=n.errMsg;~t.indexOf("uni.login")&&(t="请在登录页面完成登录操作"),uni.getSetting({success:function(e){var n=e.authSetting["scope.userInfo"];n?uni.showModal({title:"获取用户信息失败",content:"错误原因"+t,showCancel:!1}):uni.showModal({title:"授权失败",content:"Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限",success:function(e){e.confirm&&uni.openSetting()}})}})},complete:function(){n.btnLoading=!1}})}},mpGetUserInfo:function(n){e("log","mpGetUserInfo",n," at pages/API/get-user-info/get-user-info.vue:133"),"getUserInfo:ok"===n.detail.errMsg?(this.hasUserInfo=!0,n.detail&&n.detail.userInfo&&(this.userInfo=n.detail.userInfo)):uni.showModal({title:"获取用户信息失败",content:"错误原因"+n.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}})};n.default=r}).call(this,t("0de9")["log"])}}]);