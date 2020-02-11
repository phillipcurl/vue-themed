import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Inline",
  props: {
    align: {
      type: String,
      default: "center",
      validator: function(value) {
        return (
          [
            "baseline",
            "center",
            "flex-end",
            "flex-start",
            "initial",
            "stretch",
            "unset"
          ].indexOf(value) !== -1
        );
      }
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
  computed: {
    firstMargin(): string[] {
      return Array.from(this.gap).map(val => {
        const themeVal = this.$theme.get(`space.${val}`);
        if (typeof themeVal === "number") {
          return `calc(${themeVal}px / 2 * -1)`;
        } else {
          return `calc(${themeVal} / 2 * -1)`;
        }
      });
    },
    secondMargin(): string[] {
      return Array.from(this.gap).map(val => {
        const themeVal = this.$theme.get(`space.${val}`);
        if (typeof themeVal === "number") {
          return `calc(${themeVal}px / 2)`;
        } else {
          return `calc(${themeVal} / 2)`;
        }
      });
    }
  },
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          ...this.css,
          "> *": {
            display: "flex",
            flexWrap: "wrap",
            alignItems: this.align,
            justifyContent: "flex-start",
            m: this.firstMargin
          },
          "> * > *": {
            m: this.secondMargin
          },
          "> * > *:last-child": {
            mr: "0px"
          }
        }),
        attrs: this.$attrs
      },
      [h("div", this.$slots.default)]
    );
  }
});
