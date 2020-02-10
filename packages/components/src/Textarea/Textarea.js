export default {
  name: "Textarea",
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
  render: function(h) {
    return h(
      "textarea",
      {
        class: this.$theme.css(
          Object.assign(
            {},
            {
              display: "block",
              width: "100%",
              p: 2,
              appearance: "none",
              fontSize: "inherit",
              lineHeight: "inherit",
              border: "1px solid",
              borderRadius: 4,
              color: "inherit",
              bg: "transparent"
            },
            this.css
          )
        ),
        on: this.$listeners,
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
