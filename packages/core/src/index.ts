import VueThemed from "./core";

export default VueThemed;

const install = VueThemed.install;

VueThemed.install = (Vue, args) => {
  install.call(VueThemed, Vue, args);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueThemed);
}
