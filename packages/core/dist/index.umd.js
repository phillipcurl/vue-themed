!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):e.core=t(e.vue)}(this,function(e){e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(e){void 0===e&&(e={})};t.prototype.init=function(e,t){},t.prototype.use=function(e){},t.install=function t(n,i){var o;console.log("options: ",i),t.installed||(t.installed=!0,e!==n&&null!=(o="[Vuetify] Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this")&&console.error(o),n.$_vueui_installed||(n.$_vueui_installed=!0,n.mixin({beforeCreate:function(){var e=this.$options;e.vuetify&&e.vuetify.init(this,e.ssrContext)}})))},t.installed=!1;var n=t.install;return t.install=function(e,i){n.call(t,e,Object.assign({},i))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(t),t});
//# sourceMappingURL=index.umd.js.map
