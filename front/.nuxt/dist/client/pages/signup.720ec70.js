(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{387:function(e,t,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("12a190a6",content,!0,{sourceMap:!1})},388:function(e,t,n){var o=n(11)(!1);o.push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),e.exports=o},389:function(e,t,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("2e2bc7da",content,!0,{sourceMap:!1})},390:function(e,t,n){var o=n(11)(!1);o.push([e.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),e.exports=o},405:function(e,t,n){"use strict";n.r(t);n(25);var o={data:function(){var e=this;return{valid:!1,email:"",name:"",password:"",passwordCheck:"",agree:!1,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],checkboxRules:[function(e){return!!e||"You must agree to continue!"}],passwordRules:[function(e){return!!e||"Password is required"}],passwordCheckRules:[function(e){return!!e||"Password check is required"},function(t){return t===e.password||"Password Check is wrong"}]}},methods:{onSubmitSingUp:function(){var e=this;this.$refs.form.validate()?this.$store.dispatch("users/signUp",{email:this.email,name:this.name,password:this.password}).then((function(){return console.log("success methods"),e.$refs.form.reset(),e.$router.push({path:"/"})})).catch((function(e){return console.log(e)})):this.$refs.form.reset()}},computed:{me:function(){return this.$store.state.users.me}},middleware:["anonymous"]},r=n(34),l=n(52),c=n.n(l),h=n(224),d=n(166),v=n(24),m=(n(7),n(5),n(6),n(8),n(9),n(1)),f=(n(18),n(59),n(60),n(387),n(389),n(61)),_=n(64),x=n(73),k=n(2),w=k.a.extend({name:"rippleable",directives:{ripple:x.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),y=n(0),C=k.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:y.h}}}),V=n(4);function I(e){e.preventDefault()}function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(V.a)(_.a,w,C).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var label=_.a.options.methods.genLabel.call(this);return label?(label.data.on={click:I},label):label},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!e.valueComparator(n,t)}))).length===n&&input.push(t)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(input,t)?null:t:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return S(S({},_.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",S(S({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),j=n(382),A=n(371),D=n(372),P=n(361),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-container",[n("v-card-title",[e._v("Sign Up Form")]),e._v(" "),n("v-divider"),e._v(" "),n("v-container",[n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmitSingUp(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{clearable:"",label:"e-mail",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{clearable:"",label:"name",rules:e.nameRules},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{clearable:"",label:"password",type:"password",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("v-text-field",{attrs:{clearable:"",label:"password check",type:"password",rules:e.passwordCheckRules},model:{value:e.passwordCheck,callback:function(t){e.passwordCheck=t},expression:"passwordCheck"}}),e._v(" "),n("v-checkbox",{attrs:{label:"I agree",rules:e.checkboxRules},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}}),e._v(" "),n("v-btn",{attrs:{dark:"",color:"blue",type:"submit"}},[e._v("SIGN UP!")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardTitle:v.d,VCheckbox:$,VContainer:j.a,VDivider:A.a,VForm:D.a,VTextField:P.a})}}]);