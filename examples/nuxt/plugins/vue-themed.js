import Vue from "vue";
import VueThemed from "@vue-themed/core";
import * as components from "@vue-themed/components";

Vue.use(VueThemed);

Object.keys(components).forEach(componentName => {
  Vue.component(componentName, components[componentName]);
});
