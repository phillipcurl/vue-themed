import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Grid",
  props: {
    gap: {
      type: [String, Array],
      default: "0"
    },
    width: {
      type: String
    },
    columns: {
      type: Number
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
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          ...this.css,
          display: "grid",
          gridGap: this.gap,
          gridTemplateColumns: this.width
            ? `repeat(auto-fill, minmax(${this.width}, 1fr))`
            : `repeat(${this.columns}, 1fr)`
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
