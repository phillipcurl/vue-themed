export default {
  name: "LayoutWrapper",
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
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: this.$theme.css(
          Object.assign(
            {},
            {
              // overflowX: "hidden",
              "*": {
                boxSizing: "border-box"
              },
              variant: "styles.root"
              // body: {

              // }
            },
            this.css
          )
        )
      },
      this.$slots.default
    );
  }
};
