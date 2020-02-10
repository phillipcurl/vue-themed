export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "simple"
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h) {
    // const {base}
    // const buttonStyles = this.$theme.get(`buttons`);
    // console.log("buttonStyles: ", buttonStyles);
    return h(
      "button",
      {
        class: this.$theme.css(
          Object.assign(
            {},
            this.$theme.get(`buttons.${this.variant}`, "buttons.[0]"),
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
