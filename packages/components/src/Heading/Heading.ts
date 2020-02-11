import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Heading",
  props: {
    level: {
      type: String,
      required: true
    },
    clamp: {
      type: Boolean,
      default: false
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h): VNode {
    return h(
      `h${this.level}`,
      {
        class: this.$theme.css({
          m: "0px",
          lineHeight: "heading",
          color: "text",
          fontWeight: "heading",
          "::before": {
            display: this.clamp ? "block" : "none",
            width: "0px",
            height: "0px",
            mt: `calc((0.8 - ${this.$theme.get(
              "lineHeights.heading"
            )}) * 0.5em)`,
            content: '""'
          },
          ...this.$theme.get(`styles.h${this.level}`),
          ...this.css
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
