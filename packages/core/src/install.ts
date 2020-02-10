// Import vue components
// import * as components from "./components";
import OurVue, { VueConstructor } from "vue";
import { consoleError } from "./util/console";
import ThemeProvider from "./themeProvider";

// install function executed by Vue.use()
export function installOld(Vue: VueConstructor, options: {}) {
  console.log("options: ", options);
  if ((installOld as any).installed) return;
  (installOld as any).installed = true;

  if (OurVue !== Vue) {
    consoleError(
      "Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"
    );
  }

  // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111
  if (Vue.$_vuethemed_installed) return;
  Vue.$_vuethemed_installed = true;

  Vue.prototype.$theme = Vue.observable((installOld as any).themeProvider);

  // Vue.mixin({
  //   beforeCreate() {
  //     const options = this.$options as any;

  //     console.log("options in before create: ", options);

  //     if (options.vueThemed) {
  //       options.vueThemed.init(this, options.ssrContext);
  //       this.$theme = Vue.observable(options.vueThemed.themeProvider);
  //     } else {
  //       this.$theme = (options.parent && options.parent.$theme) || this;
  //     }
  //   }
  // });

  // const $theme = new ThemeProvider(options);

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
