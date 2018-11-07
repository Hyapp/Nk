!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n="object"==typeof exports?e(require("vue")):e(t.Vue);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=299)}({0:function(t,e,n){"use strict";var r=n(2),i=n.n(r),o=n(3),s=function(t){return t.changedTouches[0]||t.touches[0]};n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return s});var a=i.a.prototype.$isServer},1:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,u):[u]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},104:function(t,e,n){},171:function(t,e,n){"use strict";var r=n(104);n.n(r).a},2:function(e,n){e.exports=t},299:function(t,e,n){"use strict";n.r(e);var r=n(0),i=Object(r.a)({name:"circle",props:{diameter:{type:Number,default:100},lineWidth:{type:Number,default:4},strokeColor:{type:String,default:"#3FC7FA"},trailColor:{type:String,default:"#D9D9D9"},fillColor:{type:String,default:"transparent"},speed:{type:Number,default:500},value:{type:Number,default:0}},data:function(){return{currentValue:this.value}},computed:{style:function(){return{width:this.diameter+"px",height:this.diameter+"px"}},pathRadius:function(){return(this.diameter-this.lineWidth)/2},radius:function(){return this.diameter/2},pathString:function(){return"M "+this.radius+","+this.radius+" m 0,-"+this.pathRadius+"\n      a "+this.pathRadius+","+this.pathRadius+" 0 1 1 0,"+2*this.pathRadius+"\n      a "+this.pathRadius+","+this.pathRadius+" 0 1 1 0,-"+2*this.pathRadius},len:function(){return 2*Math.PI*this.pathRadius},pathStyle:function(){return{"stroke-dasharray":this.len+"px "+this.len+"px","stroke-dashoffset":(100-this.currentValue)/100*this.len+"px",transition:"stroke-dashoffset "+this.speed+"ms ease 0s, stroke "+this.speed+"ms ease"}}},watch:{currentValue:function(t){this.$emit("input",t)},value:function(t){this.currentValue=t}}}),o=(n(171),n(1)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wv-circle",style:t.style},[n("svg",{attrs:{width:t.diameter,height:t.diameter,viewBox:"0 0 "+t.diameter+" "+t.diameter}},[n("path",{attrs:{d:t.pathString,stroke:t.trailColor,"stroke-width":t.lineWidth,fill:"none"}}),t._v(" "),n("path",{style:t.pathStyle,attrs:{d:t.pathString,"stroke-linecap":"round",stroke:t.strokeColor,"stroke-width":t.lineWidth,fill:t.fillColor}}),t._v(" "),n("text",{staticClass:"wv-circle-content",attrs:{"text-anchor":"middle","dominant-baseline":"middle",x:"50%",y:"50%"}},[t._t("default")],2)])])},[],!1,null,"68030b2a",null);s.options.__file="index.vue",e.default=s.exports},3:function(t,e,n){"use strict";var r=function(t){t.component(this.name,this)};e.a=function(t){return t.name="wv-"+t.name,t.mixins=t.mixins||[],t.components=t.components||{},t.install=t.install||r,t.methods=t.methods||{},t}}})});