webpackJsonp([1],{"8IFQ":function(t,a){},nXOw:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("MvGc"),i={name:"user",components:{Loading:e("KgXo").a},data:function(){return{isLoading:!0,loginname:this.$route.params.loginname,user:[],collect:[],topic:[],replies:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$fetch(s.a.api+"/user/"+this.loginname).then(function(a){t.isLoading=!1,a.success&&(t.user=a.data,t.topic=t.user.recent_topics,t.replies=t.user.recent_replies)}).then(function(){return t.$fetch(s.a.api+"/topic_collect/"+t.loginname)}).then(function(a){t.collect=a.data})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("transition",{attrs:{name:"fade"}},[t.isLoading?e("loading"):t._e()],1),t._v(" "),e("div",{staticClass:"user"},[e("img",{attrs:{src:t.user.avatar_url,alt:""}}),t._v(" "),e("div",{staticClass:"user-infos"},[e("h3",[t._v(t._s(t.user.loginname))]),t._v(" "),e("p",[t._v("积分 "+t._s(t.user.score))]),t._v(" "),e("p",[t._v("收藏话题 "+t._s(t.collect.length))]),t._v(" "),e("p",[t._v("注册时间 "+t._s(t.changeTime(t.user.create_at)))])])]),t._v(" "),e("div",{staticClass:"user-list"},[e("div",{staticClass:"user-list-title"},[t._v("最近创建的话题")]),t._v(" "),e("ul",[t._l(t.topic,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"user",params:{loginname:a.author.loginname}}}},[e("img",{staticClass:"avatar",attrs:{src:a.author.avatar_url,alt:a.author.loginname}})]),t._v(" "),e("p",{staticClass:"title"},[e("router-link",{attrs:{to:{name:"article",params:{id:a.id}}}},[t._v(t._s(a.title))])],1),t._v(" "),e("p",{staticClass:"date"},[t._v(" "+t._s(t.changeTime(a.last_reply_at)))])],1)}),t._v(" "),0==t.topic?e("li",[t._v("无话题")]):t._e()],2)]),t._v(" "),e("div",{staticClass:"user-list"},[e("div",{staticClass:"user-list-title"},[t._v("最近参与的话题")]),t._v(" "),e("ul",[t._l(t.replies,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"user",params:{loginname:a.author.loginname}}}},[e("img",{staticClass:"avatar",attrs:{src:a.author.avatar_url,alt:a.author.loginname}})]),t._v(" "),e("p",{staticClass:"title"},[e("router-link",{attrs:{to:{name:"article",params:{id:a.id}}}},[t._v(t._s(a.title))])],1),t._v(" "),e("p",{staticClass:"date"},[t._v(" "+t._s(t.changeTime(a.last_reply_at)))])],1)}),t._v(" "),0==t.replies?e("li",[t._v("无话题")]):t._e()],2)])],1)},staticRenderFns:[]};var n=e("C7Lr")(i,r,!1,function(t){e("8IFQ")},"data-v-0fc85452",null);a.default=n.exports}});
//# sourceMappingURL=1.8e1497716607fd7d104f.js.map