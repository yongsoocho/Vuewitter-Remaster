(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{404:function(t,o,e){"use strict";e.r(o);var l={props:{FollowList:{type:Array,required:!0},FollowType:{type:Object,required:!0}}},r=e(34),n=e(52),c=e.n(n),d=e(24),v=e(373),w=e(382),F=e(371),m=e(169),f=e(104),h=e(168),y=e(50),component=Object(r.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("v-card-title",[t._v("\n\t\t"+t._s(t.FollowType.title)+"\n\t")]),t._v(" "),e("v-container",[e("v-divider")],1),t._v(" "),e("v-card-text",[e("v-list",t._l(t.FollowList,(function(o){return e("v-col",{key:o.id,style:{display:"inline-block"},attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-avatar",{attrs:{size:"36",color:"blue"}},[t._v("\n\t\t\t\t\t\t"+t._s(o.name[0])+"\n\t\t\t\t\t")]),t._v(" "),e("v-list-item-content",[t._v("\n\t\t\t\t\t\t"+t._s(o.name)+"\n\t\t\t\t\t")])],1)],1)})),1)],1)],1)}),[],!1,null,null,null),_=component.exports;c()(component,{VCardText:d.c,VCardTitle:d.d,VCol:v.a,VContainer:w.a,VDivider:F.a,VList:m.a,VListItem:f.a,VListItemAvatar:h.a,VListItemContent:y.a});var V={data:function(){return{FollowingType:{title:"Following"},FollowersType:{title:"Followers"}}},components:{FollowForm:_},computed:{me:function(){return this.$store.state.users.me},FollowersList:function(){return this.$store.state.users.FollowersList},FollowingList:function(){return this.$store.state.users.FollowingList},hasMoreFollowers:function(){return this.$store.state.users.hasMoreFollowers},hasMoreFollowing:function(){return this.$store.state.users.hasMoreFollowing}},fetch:function(t){var o=t.store;return o.dispatch("users/loadFollowers"),o.dispatch("users/loadFollowing")},methods:{onEditProfileImg:function(){return console.log("hi")},onEditProfileName:function(){return console.log("bye")},onLoadFollowing:function(){return this.$store.dispatch("users/loadFollowing")},onLoadFollowers:function(){return this.$store.dispatch("users/loadFollowers")}},middleware:["authenticated"]},L=e(167),x=e(224),T=e(166),k=e(372),C=e(103),$=e(138),M=e(361),I=Object(r.a)(V,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("v-card",{style:{marginBottom:"30px"}},[e("v-card-title",[e("v-avatar",{style:{position:"relative"},attrs:{color:"teal",size:"144"}},[e("v-img",{attrs:{src:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}})],1),t._v(" "),e("v-btn",{style:{position:"absolute",left:"110px",top:"10px"},attrs:{rounded:"",color:"white"}},[e("v-icon",[t._v("mdi-cog")])],1),t._v(" "),e("v-form",{style:{display:"flex",alignItems:"center",marginLeft:"30px"}},[e("v-text-field",{style:{display:"block"},attrs:{clearable:"",placeholder:"me name",prefix:"Edit name",color:"blue"}}),t._v(" "),e("v-btn",{style:{display:"block"},attrs:{text:"",fab:"",color:"blue"},on:{click:t.onEditProfileName}},[e("v-icon",[t._v("mdi-pencil")])],1)],1)],1),t._v(" "),e("v-container",[e("v-divider")],1)],1),t._v(" "),e("v-card",{style:{marginBottom:"10px"}},[e("FollowForm",{attrs:{FollowList:t.FollowingList,FollowType:t.FollowingType}}),t._v(" "),e("v-card-actions",[t.hasMoreFollowing?e("v-btn",{style:{width:"100%"},attrs:{dark:"",color:"blue"},on:{click:function(o){return o.stopPropagation(),t.onLoadFollowing(o)}}},[t._v("More")]):t._e()],1)],1),t._v(" "),e("v-card",{style:{marginBottom:"10px"}},[e("FollowForm",{attrs:{FollowList:t.FollowersList,FollowType:t.FollowersType}}),t._v(" "),e("v-card-actions",[t.hasMoreFollowers?e("v-btn",{style:{width:"100%"},attrs:{dark:"",color:"blue"},on:{click:function(o){return o.stopPropagation(),t.onLoadFollowers(o)}}},[t._v("More")]):t._e()],1)],1)],1)}),[],!1,null,"f8cf5162",null);o.default=I.exports;c()(I,{VAvatar:L.a,VBtn:x.a,VCard:T.a,VCardActions:d.a,VCardTitle:d.d,VContainer:w.a,VDivider:F.a,VForm:k.a,VIcon:C.a,VImg:$.a,VTextField:M.a})}}]);