import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "AspectRatio",
  props: {
    ratio: {
      type: String,
      default: "16:9"
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
  computed: {
    padding(): string {
      const [d, n] = this.ratio.split(":");
      if (n && d) {
        return `calc(${n} / ${d} * 100%);`;
      } else {
        return "calc(9 / 16 * 100%);";
      }
    }
  },
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          ...this.css,
          position: "relative",
          pb: this.padding,
          "> *": {
            position: "absolute",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          },
          "> img, > video": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
