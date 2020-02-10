// Import vue components
// import * as components from "./components";
import OurVue, { VueConstructor } from "vue";
import { consoleError } from "./util/console";
import ThemeProvider from "./themeProvider";

// install function executed by Vue.use()
export function install(Vue: VueConstructor, options: {}) {
  console.log("options: ", options);
  if ((install as any).installed) return;
  (install as any).installed = true;

  if (OurVue !== Vue) {
    consoleError(
      "Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"
    );
  }

  // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111
  if (Vue.$_vueui_installed) return;
  Vue.$_vueui_installed = true;

  Vue.mixin({
    beforeCreate() {
      const options = this.$options as any;

      if (options.vuetify) {
        options.vuetify.init(this, options.ssrContext);
        // this.$vuetify = Vue.observable(options.vuetify.framework)
      } else {
        // this.$vuetify = (options.parent && options.parent.$vuetify) || this
      }
    }
  });

  // const $theme = new ThemeProvider(options);

  // Vue.prototype.$theme = Vue.observable($theme);

  // Object.keys(components).forEach(componentName => {
  //   Vue.component(componentName, components[componentName]);
  // });
}

// Create module definition for Vue.use()
// const plugin: Vue.PluginObject = {
//   install
// };

// // To auto-install when vue is found
// /* global window global */
// let GlobalVue = null;
// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }

// Default export is library as a whole, registered via Vue.use()
// export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
// export * from "./components/index";
