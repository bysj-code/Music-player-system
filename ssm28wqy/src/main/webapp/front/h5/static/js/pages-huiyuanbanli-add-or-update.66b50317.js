(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-huiyuanbanli-add-or-update"],{"039c":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var a=i(t("3b8d")),n=i(t("e2b1")),o={data:function(){return{ruleForm:{zhanghao:"",xingming:"",huiyuanmingcheng:"",leixing:"",huiyuanjiage:"",tupian:"",sfsh:"",shhf:"",ispay:"",userid:""},user:{},ro:{zhanghao:!1,xingming:!1,huiyuanmingcheng:!1,leixing:!1,huiyuanjiage:!1,tupian:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(r){var t,i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=15;break}return this.ruleForm.id=r.id,e.next=13,this.$api.info("huiyuanbanli",this.ruleForm.id);case 13:i=e.sent,this.ruleForm=i.data;case 15:if(!r.cross){e.next=50;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(n=e.t1.value,"zhanghao"!=n){e.next=24;break}return this.ruleForm.zhanghao=a[n],this.ro.zhanghao=!0,e.abrupt("continue",18);case 24:if("xingming"!=n){e.next=28;break}return this.ruleForm.xingming=a[n],this.ro.xingming=!0,e.abrupt("continue",18);case 28:if("huiyuanmingcheng"!=n){e.next=32;break}return this.ruleForm.huiyuanmingcheng=a[n],this.ro.huiyuanmingcheng=!0,e.abrupt("continue",18);case 32:if("leixing"!=n){e.next=36;break}return this.ruleForm.leixing=a[n],this.ro.leixing=!0,e.abrupt("continue",18);case 36:if("huiyuanjiage"!=n){e.next=40;break}return this.ruleForm.huiyuanjiage=a[n],this.ro.huiyuanjiage=!0,e.abrupt("continue",18);case 40:if("tupian"!=n){e.next=44;break}return this.ruleForm.tupian=a[n],this.ro.tupian=!0,e.abrupt("continue",18);case 44:if("userid"!=n){e.next=48;break}return this.ruleForm.userid=a[n],this.ro.userid=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange();case 51:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.huiyuanjiage||this.$validate.isIntNumer(this.ruleForm.huiyuanjiage)){e.next=3;break}return this.$utils.msg("会员价格应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("huiyuanbanli",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("huiyuanbanli",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,a=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"48b8":function(e,r,t){"use strict";t.r(r);var i=t("5cfc"),a=t("e12b");for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t("82ac");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"21e79a99",null,!1,i["a"],o);r["default"]=s.exports},"5cfc":function(e,r,t){"use strict";var i,a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("会员名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.huiyuanmingcheng,placeholder:"会员名称"},model:{value:e.ruleForm.huiyuanmingcheng,callback:function(r){e.$set(e.ruleForm,"huiyuanmingcheng",r)},expression:"ruleForm.huiyuanmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("类型")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.leixing,placeholder:"类型"},model:{value:e.ruleForm.leixing,callback:function(r){e.$set(e.ruleForm,"leixing",r)},expression:"ruleForm.leixing"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("会员价格")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.huiyuanjiage,placeholder:"会员价格"},model:{value:e.ruleForm.huiyuanjiage,callback:function(r){e.$set(e.ruleForm,"huiyuanjiage",r)},expression:"ruleForm.huiyuanjiage"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},n=[];t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return i}))},"6a06":function(e,r,t){var i=t("947b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("a57edf40",i,!0,{sourceMap:!1,shadowMode:!1})},"82ac":function(e,r,t){"use strict";var i=t("6a06"),a=t.n(i);a.a},"947b":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-21e79a99]{padding:%?20?%}.content[data-v-21e79a99]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-21e79a99]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-21e79a99]{width:%?180?%}.avator[data-v-21e79a99]{width:%?150?%;height:%?60?%}.right-input[data-v-21e79a99]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-21e79a99]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-21e79a99]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-21e79a99]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-21e79a99]{border:0}.cu-form-group uni-input[data-v-21e79a99]{padding:0 %?30?%}.uni-input[data-v-21e79a99]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-21e79a99]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-21e79a99]::after{line-height:%?88?%}.select .uni-input[data-v-21e79a99]{line-height:%?88?%}.input .right-input[data-v-21e79a99]{line-height:%?88?%}',""]),e.exports=r},e12b:function(e,r,t){"use strict";t.r(r);var i=t("039c"),a=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(r,e,(function(){return i[e]}))}(n);r["default"]=a.a}}]);