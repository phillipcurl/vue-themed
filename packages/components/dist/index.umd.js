(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.VueThemedComponents = {}, global.Vue));
}(this, (function (exports, Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var BaseText = Vue.extend({
      name: "BaseText",
      props: {
          maxWidth: {
              type: [String, Array],
              default: "66ch"
          },
          lineHeight: {
              type: String,
              default: "body"
          },
          as: {
              type: String,
              default: "p"
          },
          css: {
              type: Object,
              default: function () { return ({}); }
          }
      },
      render: function (h) {
          return h(this.as, {
              // class: this.$theme.css(
              //   Object.assign({}, this.css, {
              //     maxWidth: this.maxWidth,
              //     margin: "0px",
              //     lineHeight: this.lineHeight,
              //     color: "text"
              //   })
              // ),
              attrs: this.$attrs
          }, this.$slots.default);
      }
  });

  exports.BaseText = BaseText;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
