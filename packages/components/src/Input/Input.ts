import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Input",
  props: {
    variant: {
      type: String,
      default: "input"
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h): VNode {
    return h(
      "input",
      {
        class: this.$theme.css({
          display: "block",
          width: "100%",
          p: 2,
          appearance: "none",
          fontSize: "inherit",
          lineHeight: "inherit",
          border: "1px solid",
          borderRadius: 4,
          color: "inherit",
          bg: "transparent",
          ...this.css
        }),
        on: this.$listeners,
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
