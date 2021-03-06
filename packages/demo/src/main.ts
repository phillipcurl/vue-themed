import Vue from "vue";
import VueThemed from "@vue-themed/core";
import * as components from "@vue-themed/components";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueThemed);

Object.keys(components).forEach(componentName => {
  Vue.component(componentName, components[componentName]);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
