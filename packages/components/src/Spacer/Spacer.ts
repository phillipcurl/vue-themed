import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Spacer",
  props: {
    as: {
      type: String,
      default: "div"
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          ...this.css,
          flexGrow: "9999 !important"
        }),
        attrs: { ...this.$attrs }
      },
      this.$slots.default
    );
  }
});
