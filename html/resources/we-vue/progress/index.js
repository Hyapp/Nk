!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n="object"==typeof exports?t(require("vue")):t(e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=272)}({0:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(3),s=function(e){return e.changedTouches[0]||e.touches[0]};n.d(t,"c",function(){return u}),n.d(t,"a",function(){return i.a}),n.d(t,"b",function(){return s});var u=o.a.prototype.$isServer},1:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,u){var c,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(a.functional){a._injectStyles=c;var f=a.render;a.render=function(e,t){return c.call(t),f(e,t)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:a}}n.d(t,"a",function(){return r})},123:function(e,t,n){},2:function(t,n){t.exports=e},232:function(e,t,n){"use strict";var r=n(123);n.n(r).a},272:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({name:"progress",props:{percent:{type:[Number,String]},showClear:{type:Boolean,default:!0}},methods:{onCancelClick:function(e){e.preventDefault(),this.$emit("cancel",this)}}}),i=(n(232),n(1)),s=Object(i.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"weui-progress"},[t("div",{staticClass:"weui-progress__bar"},[t("div",{staticClass:"weui-progress__inner-bar js_progress",style:{width:this.percent+"%"}})]),this._v(" "),this.showClear?t("span",{staticClass:"weui-progress__opr"},[t("i",{staticClass:"weui-icon-cancel",on:{click:this.onCancelClick}})]):this._e()])},[],!1,null,"94e8f1f0",null);s.options.__file="index.vue",t.default=s.exports},3:function(e,t,n){"use strict";var r=function(e){e.component(this.name,this)};t.a=function(e){return e.name="wv-"+e.name,e.mixins=e.mixins||[],e.components=e.components||{},e.install=e.install||r,e.methods=e.methods||{},e}}})});