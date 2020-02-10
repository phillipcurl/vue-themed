import { VueConstructor } from "vue";
import ThemeProvider from "./themeProvider";

// import VueThemed from "./core";

// export default VueThemed;

// const install = VueThemed.install;

// VueThemed.install = (Vue, args) => {
//   install.call(VueThemed, Vue, args);
// };

function install(Vue: VueConstructor, args: {}) {
  if ((install as any).installed) return;
  (install as any).installed = true;
  const $theme = new ThemeProvider(args);
  Vue.prototype.$theme = Vue.observable($theme);
}

const VueThemed = {
  install
};

export default VueThemed;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueThemed);
}
