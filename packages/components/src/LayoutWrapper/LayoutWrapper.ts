import Vue, { VNode } from "vue";

export default Vue.extend({
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
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          // overflowX: "hidden",
          "*": {
            boxSizing: "border-box"
          },
          variant: "styles.root",
          // body: {

          // }
          ...this.css
        })
      },
      this.$slots.default
    );
  }
});
