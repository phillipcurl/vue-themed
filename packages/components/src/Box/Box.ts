import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "Box",
  props: {
    as: {
      type: String,
      default: "div"
    },
    variant: {
      type: String,
      default: null
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  data: function() {
    return {
      __themeKey: "variants",
      __css: {}
    };
  },
  computed: {
    variantStyles(): {} {
      return this.$theme.get(
        `${this.__themeKey}${this.variant ? `.${this.variant}` : ""}`,
        this.$theme.get(this.variant ? this.variant : "")
      );
    }
  },
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css({
          boxSizing: "border-box",
          ...this.css
        }),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
});
