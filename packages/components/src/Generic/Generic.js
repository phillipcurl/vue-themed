export default {
  name: "Generic",
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
        class: this.$theme.css(this.css),
        on: this.$listeners,
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
