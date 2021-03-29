exports.ids = [4];
exports.modules = {

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/mypage.vue?vue&type=template&id=f8cf5162&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{style:({ marginBottom:'30px' })},[_c('v-card-title',[_c('v-avatar',{style:({ position:'relative' }),attrs:{"color":"teal","size":"144"}},[_c('v-img',{attrs:{"src":"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}})],1),_vm._v(" "),_c('v-btn',{style:({ position:'absolute', left:'110px', top:'10px' }),attrs:{"rounded":"","color":"white"}},[_c('v-icon',[_vm._v("mdi-cog")])],1),_vm._v(" "),_c('v-form',{style:({ display:'flex', alignItems:'center', marginLeft:'30px', })},[_c('v-text-field',{style:({ display:'block' }),attrs:{"clearable":"","placeholder":"me name","prefix":"Edit name","color":"blue"}}),_vm._v(" "),_c('v-btn',{style:({ display:'block' }),attrs:{"text":"","fab":"","color":"blue"},on:{"click":_vm.onEditProfileName}},[_c('v-icon',[_vm._v("mdi-pencil")])],1)],1)],1),_vm._v(" "),_c('v-container',[_c('v-divider')],1)],1),_vm._ssrNode(" "),_c('v-card',{style:({ marginBottom:'10px' })},[_c('FollowForm',{attrs:{"FollowList":_vm.FollowingList,"FollowType":_vm.FollowingType}}),_vm._v(" "),_c('v-card-actions',[(_vm.hasMoreFollowing)?_c('v-btn',{style:({ width:'100%' }),attrs:{"dark":"","color":"blue"},on:{"click":function($event){$event.stopPropagation();return _vm.onLoadFollowing($event)}}},[_vm._v("More")]):_vm._e()],1)],1),_vm._ssrNode(" "),_c('v-card',{style:({ marginBottom:'10px' })},[_c('FollowForm',{attrs:{"FollowList":_vm.FollowersList,"FollowType":_vm.FollowersType}}),_vm._v(" "),_c('v-card-actions',[(_vm.hasMoreFollowers)?_c('v-btn',{style:({ width:'100%' }),attrs:{"dark":"","color":"blue"},on:{"click":function($event){$event.stopPropagation();return _vm.onLoadFollowers($event)}}},[_vm._v("More")]):_vm._e()],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/mypage.vue?vue&type=template&id=f8cf5162&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FollowForm.vue?vue&type=template&id=86bdab7a&
var FollowFormvue_type_template_id_86bdab7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card-title',[_vm._v("\n\t\t"+_vm._s(_vm.FollowType.title)+"\n\t")]),_vm._ssrNode(" "),_c('v-container',[_c('v-divider')],1),_vm._ssrNode(" "),_c('v-card-text',[_c('v-list',_vm._l((_vm.FollowList),function(f){return _c('v-col',{key:f.id,style:({ display:'inline-block' }),attrs:{"cols":"4"}},[_c('v-list-item',[_c('v-list-item-avatar',{attrs:{"size":"36","color":"blue"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(f.name[0])+"\n\t\t\t\t\t")]),_vm._v(" "),_c('v-list-item-content',[_vm._v("\n\t\t\t\t\t\t"+_vm._s(f.name)+"\n\t\t\t\t\t")])],1)],1)}),1)],1)],2)}
var FollowFormvue_type_template_id_86bdab7a_staticRenderFns = []


// CONCATENATED MODULE: ./components/FollowForm.vue?vue&type=template&id=86bdab7a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FollowForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FollowFormvue_type_script_lang_js_ = ({
  props: {
    FollowList: {
      type: Array,
      required: true
    },
    FollowType: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/FollowForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FollowFormvue_type_script_lang_js_ = (FollowFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(14);

// CONCATENATED MODULE: ./components/FollowForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FollowFormvue_type_script_lang_js_,
  FollowFormvue_type_template_id_86bdab7a_render,
  FollowFormvue_type_template_id_86bdab7a_staticRenderFns,
  false,
  injectStyles,
  null,
  "0a3796de"
  
)

/* harmony default export */ var FollowForm = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VCardText: VCard["c" /* VCardText */],VCardTitle: VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mypage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mypagevue_type_script_lang_js_ = ({
  data() {
    return {
      FollowingType: {
        title: 'Following'
      },
      FollowersType: {
        title: 'Followers'
      }
    };
  },

  components: {
    FollowForm: FollowForm
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },

    FollowersList() {
      return this.$store.state.users.FollowersList;
    },

    FollowingList() {
      return this.$store.state.users.FollowingList;
    },

    hasMoreFollowers() {
      return this.$store.state.users.hasMoreFollowers;
    },

    hasMoreFollowing() {
      return this.$store.state.users.hasMoreFollowing;
    }

  },

  fetch({
    store
  }) {
    store.dispatch('users/loadFollowers');
    return store.dispatch('users/loadFollowing');
  },

  methods: {
    onEditProfileImg() {
      return console.log('hi');
    },

    onEditProfileName() {
      return console.log('bye');
    },

    onLoadFollowing() {
      return this.$store.dispatch('users/loadFollowing');
    },

    onLoadFollowers() {
      return this.$store.dispatch('users/loadFollowers');
    }

  },
  middleware: ['authenticated']
});
// CONCATENATED MODULE: ./pages/mypage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mypagevue_type_script_lang_js_ = (mypagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard_VCard = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(157);

// CONCATENATED MODULE: ./pages/mypage.vue



function mypage_injectStyles (context) {
  
  
}

/* normalize component */

var mypage_component = Object(componentNormalizer["a" /* default */])(
  pages_mypagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  mypage_injectStyles,
  "f8cf5162",
  "24fa5106"
  
)

/* harmony default export */ var mypage = __webpack_exports__["default"] = (mypage_component.exports);

/* vuetify-loader */












installComponents_default()(mypage_component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard_VCard["a" /* default */],VCardActions: VCard["a" /* VCardActions */],VCardTitle: VCard["d" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDivider: VDivider["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;