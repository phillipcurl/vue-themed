import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "VStack",
  props: {
    gap: {
      type: [String, Array],
      default: "0"
    },
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          "> *": {
            my: "0px"
          },
          "> * + *": {
            mt: this.gap
          }
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
