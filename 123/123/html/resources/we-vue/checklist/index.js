!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n="object"==typeof exports?t(require("vue")):t(e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=277)}({0:function(e,t,n){"use strict";var r=n(2),i=n.n(r),u=n(3),c=function(e){return e.changedTouches[0]||e.touches[0]};n.d(t,"c",function(){return a}),n.d(t,"a",function(){return u.a}),n.d(t,"b",function(){return c});var a=i.a.prototype.$isServer},1:function(e,t,n){"use strict";function r(e,t,n,r,i,u,c,a){var o,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),u&&(s._scopeId="data-v-"+u),c?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},s._ssrRegister=o):i&&(o=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),o)if(s.functional){s._injectStyles=o;var l=s.render;s.render=function(e,t){return o.call(t),l(e,t)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:s}}n.d(t,"a",function(){return r})},103:function(e,t,n){},169:function(e,t,n){"use strict";var r=n(103);n.n(r).a},2:function(t,n){t.exports=e},277:function(e,t,n){"use strict";n.r(t);var r=n(57),i=n.n(r),u=n(0),c=Object(u.a)({name:"checklist",props:{max:{type:Number,validator:function(e){return e>=0}},title:String,align:{type:String,default:"left",validator:function(e){return"left"===e||"right"===e}},options:{type:Array,required:!0},value:{type:Array,default:function(){return[]}}},computed:{currentValue:{get:function(){return this.value},set:function(e){this.max&&e.length>this.max&&(e=e.slice(0,this.max)),this.$emit("input",e)}}},created:function(){this.currentValue=this.value},watch:{value:function(e,t){i()(e)!==i()(t)&&this.$emit("change",e)}}}),a=(n(169),n(1)),o=Object(a.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.title?n("div",{staticClass:"weui-cells__title",domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),n("div",{staticClass:"weui-cells weui-cells_checkbox"},e._l(e.options,function(t){return n("label",{key:t.label||t,staticClass:"weui-cell weui-check__label",class:{"weui-check__label-disabled":t.disabled}},["left"===e.align?n("div",{staticClass:"weui-cell__hd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:t.value||t,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,t.value||t)>-1:e.currentValue},on:{change:function(n){var r=e.currentValue,i=n.target,u=!!i.checked;if(Array.isArray(r)){var c=t.value||t,a=e._i(r,c);i.checked?a<0&&(e.currentValue=r.concat([c])):a>-1&&(e.currentValue=r.slice(0,a).concat(r.slice(a+1)))}else e.currentValue=u}}}),e._v(" "),n("i",{staticClass:"weui-icon-checked"})]):e._e(),e._v(" "),n("div",{staticClass:"weui-cell__bd"},[n("p",{domProps:{textContent:e._s(t.label||t)}})]),e._v(" "),"right"===e.align?n("div",{staticClass:"weui-cell__hd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:t.value||t,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,t.value||t)>-1:e.currentValue},on:{change:function(n){var r=e.currentValue,i=n.target,u=!!i.checked;if(Array.isArray(r)){var c=t.value||t,a=e._i(r,c);i.checked?a<0&&(e.currentValue=r.concat([c])):a>-1&&(e.currentValue=r.slice(0,a).concat(r.slice(a+1)))}else e.currentValue=u}}}),e._v(" "),n("i",{staticClass:"weui-icon-checked"})]):e._e()])}))])},[],!1,null,"09c6ec0a",null);o.options.__file="index.vue",t.default=o.exports},3:function(e,t,n){"use strict";var r=function(e){e.component(this.name,this)};t.a=function(e){return e.name="wv-"+e.name,e.mixins=e.mixins||[],e.components=e.components||{},e.install=e.install||r,e.methods=e.methods||{},e}},5:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},57:function(e,t,n){e.exports={default:n(82),__esModule:!0}},82:function(e,t,n){var r=n(5),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}}})});