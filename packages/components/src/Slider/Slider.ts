import Vue, { VNode } from "vue";

const thumbStyles = {
  appearance: "none",
  width: "1rem",
  height: "1rem",
  bg: "currentcolor",
  border: 0,
  borderRadius: 9999,
  variant: "forms.slider.thumb"
};

export default Vue.extend({
  name: "Slider",
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
      "input",
      {
        class: this.$theme.css({
          display: "block",
          width: "100%",
          height: "0.4rem",
          my: "0.3rem",
          mx: "0px",
          cursor: "pointer",
          appearance: "none",
          borderRadius: 9999,
          color: "inherit",
          bg: "gray",
          ":focus": {
            outline: "none",
            color: "primary"
          },
          "&::-webkit-slider-thumb": thumbStyles,
          "&::-moz-range-thumb": thumbStyles,
          "&::-ms-thumb": thumbStyles,
          ...this.css
        }),
        on: Object.assign({}, {}, this.$listeners),
        attrs: Object.assign({}, { type: "range" }, this.$attrs)
      },
      this.$slots.default
    );
  }
});
