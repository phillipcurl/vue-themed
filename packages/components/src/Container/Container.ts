import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Container",
  props: {
    maxWidth: {
      type: [String, Array],
      required: true
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
        class: this.$theme.css(
          Object.assign({}, this.css, {
            // boxSizing: "content-box",
            width: "100%",
            maxWidth: ["100%", this.maxWidth],
            mx: "auto"
          })
        ),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
