(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b49"],{3966:function(o,e,n){},"4c71":function(o,e,n){"use strict";var t=n("a2b6"),r=n.n(t);r.a},"735d":function(o,e,n){"use strict";var t=n("3966"),r=n.n(t);r.a},"9ed6":function(o,e,n){"use strict";n.r(e);var t=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:o.loginForm,rules:o.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[o._v("油品零售运营P端")])]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"用户名",name:"username",type:"text","auto-complete":"on"},model:{value:o.loginForm.username,callback:function(e){o.$set(o.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:o.passwordType,placeholder:"密码",name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return"button"in e||!o._k(e.keyCode,"enter",13,e.key,"Enter")?o.handleLogin(e):null}},model:{value:o.loginForm.password,callback:function(e){o.$set(o.loginForm,"password",e)},expression:"loginForm.password"}})],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:o.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),o.handleLogin(e)}}},[o._v("登录")])],1)],1)},r=[],a={name:"Login",data:function(){var o=function(o,e,n){e?n():n(new Error("请输入用户名"))},e=function(o,e,n){e?n():n(new Error("密码不能为空"))};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:o}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",loading:!1,showDialog:!1}},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var o=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;o.loading=!0,o.$store.dispatch("LoginByUsername",o.loginForm).then(function(){o.loading=!1,o.$router.push({path:"/"})}).catch(function(){o.loading=!1})})}}},i=a,s=(n("735d"),n("4c71"),n("2877")),l=Object(s["a"])(i,t,r,!1,null,"5267b437",null);l.options.__file="index.vue";e["default"]=l.exports},a2b6:function(o,e,n){}}]);
//# sourceMappingURL=chunk-5b49.465379fd.js.map