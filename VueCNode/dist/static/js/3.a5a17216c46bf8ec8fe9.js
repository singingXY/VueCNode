webpackJsonp([3],{J4Wv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("MvGc"),i={name:"message",data:function(){return{lSLogin:localStorage.getItem("isLogin"),msg:[],oldMsg:[],message:[]}},created:function(){this.$store.commit("showSidebar",!1)},mounted:function(){var t=this;this.$fetch(a.a.api+"/messages",{accesstoken:this.lSLogin}).then(function(e){t.message=e.data,t.oldMsg=t.message.has_read_messages,t.msg=t.message.hasnot_read_messages}),this.msg&&this.$post(a.a.api+"/message/mark_all",{accesstoken:this.lSLogin}).then(function(e){t.$store.commit("myMsg",0)})}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"user-list"},[s("div",{staticClass:"user-list-title"},[t._v("未读消息")]),t._v(" "),s("ul",[t._l(t.msg,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"user",params:{loginname:e.author.loginname}}}},[t._v(t._s(e.author.loginname))]),t._v(" "),"reply"==e.type?s("span",[t._v("回复了你的话题 ")]):t._e(),t._v(" "),"at"==e.type?s("span",[t._v("提到了你 ")]):t._e(),t._v(" "),s("router-link",{attrs:{to:{name:"article",params:{id:e.topic.id}}}},[t._v("\n                "+t._s(e.topic.title)+"\n                ")]),t._v(" "),"at"==e.type?s("span",[t._v(" 中@了你")]):t._e(),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(t.changeTime(e.create_at)))]),t._v(" "),s("div",{staticClass:"msg-con markdown-body",domProps:{innerHTML:t._s(e.reply.content)}})],1)}),t._v(" "),0==t.msg?s("li",[t._v("无消息")]):t._e()],2)]),t._v(" "),s("div",{staticClass:"user-list"},[s("div",{staticClass:"user-list-title"},[t._v("过往的消息")]),t._v(" "),s("ul",[t._l(t.oldMsg,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"user",params:{loginname:e.author.loginname}}}},[t._v(t._s(e.author.loginname)+" ")]),t._v(" "),"reply"==e.type?s("span",[t._v("回复了你的话题 ")]):t._e(),t._v(" "),"at"==e.type?s("span",[t._v("在话题 ")]):t._e(),t._v(" "),s("router-link",{attrs:{to:{path:"/topic/"+e.topic.id,query:{replyId:e.reply.id}}}},[t._v("\n                    "+t._s(e.topic.title)+"\n                ")]),t._v(" "),"at"==e.type?s("span",[t._v(" 中@了你")]):t._e(),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(t.changeTime(e.create_at)))])],1)}),t._v(" "),0==t.oldMsg?s("li",[t._v("无消息")]):t._e()],2)])])},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(t){s("Q6Hk")},"data-v-1f404902",null);e.default=r.exports},Q6Hk:function(t,e){}});
//# sourceMappingURL=3.a5a17216c46bf8ec8fe9.js.map