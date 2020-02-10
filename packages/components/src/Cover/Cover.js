export default {
  name: "Cover",
  props: {
    minHeight: {
      type: [String, Array],
      default: "100%"
    },
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
  render: function(h) {
    return h(
      this.as,
      {
        class: this.$theme.css(
          Object.assign({}, this.css, {
            display: "flex",
            flexDirection: "column",
            minHeight: this.minHeight,
            "> *": {
              my: this.gap
            },
            "> :first-child:not(.cover--content)": {
              mt: "0px"
            },
            "> :last-child:not(.cover--content)": {
              mb: "0px"
            },
            "> .cover--content": {
              my: "auto"
            }
          })
        ),
        attrs: this.$attrs
      },
      [
        this.$slots.header,
        h(
          "div",
          {
            class: "cover--content"
          },
          this.$slots.default
        ),
        this.$slots.footer
      ]
    );
  }
};
