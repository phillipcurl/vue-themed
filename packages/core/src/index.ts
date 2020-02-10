import VueUI from "./core";

export default VueUI;

const install = VueUI.install;

VueUI.install = (Vue, args) => {
  install.call(VueUI, Vue, {
    ...args
  });
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueUI);
}
