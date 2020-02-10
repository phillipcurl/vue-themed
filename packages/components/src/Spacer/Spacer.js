export default {
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
  render: function(h) {
    return h(
      this.as,
      {
        class: this.$theme.css(
          Object.assign({}, this.css, {
            flexGrow: "9999 !important"
          })
        ),
        attrs: Object.assign({}, this.$attrs, {
          flexGrow: "9999 !important"
        })
      },
      this.$slots.default
    );
  }
};
