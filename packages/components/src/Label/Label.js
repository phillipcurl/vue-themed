export default {
  name: "Label",
  props: {
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h) {
    return h(
      "label",
      {
        class: this.$theme.css(
          Object.assign(
            {},
            {
              width: "100%",
              display: "flex"
              // variant: "buttons.outline"
            },
            this.$theme.get("forms.label", {}),
            this.css
          )
        ),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
