import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Label",
  props: {
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h): VNode {
    return h(
      "label",
      {
        class: this.$theme.css({
          width: "100%",
          display: "flex",
          // variant: "buttons.outline"
          ...this.$theme.get("forms.label", {}),
          ...this.css
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
