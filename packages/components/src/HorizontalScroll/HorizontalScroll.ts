import Vue, { VNode } from "vue";

export default Vue.extend({
  props: {
    itemWidth: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    showScrollbar: {
      type: Boolean,
      default: false
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
  data: () => ({
    resizeObserver: null,
    mutationObserver: null
  }),
  computed: {
    overflowPadding(): string[] {
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
  // methods: {
  //   toggleOverflowClass(elem: HTMLElement) {
  //     elem.classList.toggle(
  //       "overflowing",
  //       this.$refs.horizontalScroll.scrollWidth >
  //         this.$refs.horizontalScroll.clientWidth
  //     );
  //   }
  // },
  // mounted() {
  //   if ("ResizeObserver" in window && this.$refs.horizontalScroll) {
  //     this.resizeObserver = new ResizeObserver(entries => {
  //       this.toggleOverflowClass(entries[0].target);
  //     });
  //     this.resizeObserver.observe(this.$refs.horizontalScroll);
  //   }

  //   if ("MutationObserver" in window && this.$refs.horizontalScroll) {
  //     this.mutationObserver = new MutationObserver(entries => {
  //       this.toggleOverflowClass(entries[0].target);
  //     });
  //     this.mutationObserver.observe(this.$refs.horizontalScroll, {
  //       childList: true
  //     });
  //   }
  // },
  // beforeDestroy() {
  //   if (this.mutationObserver) {
  //     this.mutationObserver.disconnect();
  //   }
  //   if (this.resizeObserver) {
  //     this.resizeObserver.disconnect();
  //   }
  // },
  render: function(h): VNode {
    return h(
      this.as,
      {
        class: this.$theme.css(this.css),
        attrs: this.$attrs
      },
      [
        h(
          "div",
          {
            class: this.$theme.css({
              display: "flex",
              height: "auto",
              overflowX: "auto",
              overflowY: "hidden",
              "> *": {
                flex: "0 0 undefined"
              },
              "> img": {
                height: "100%",
                flexBasis: "auto",
                width: "auto"
              },
              "> * + *": {
                ml: this.gap
              },
              "&.overflowing": {
                pb: this.showScrollbar ? this.overflowPadding : "0px"
              },
              "::-webkit-scrollbar": {
                display: this.showScrollbar ? "auto" : "none",
                height: "0.75rem"
              },
              "::-webkit-scrollbar-track": {
                bg: "#000"
              },
              "::-webkit-scrollbar-thumb": {
                bg: "#000",
                backgroundImage:
                  "linear-gradient(#000 0, #000 0.25rem, #fff 0.25rem, #fff 0.5rem, #000 0.5rem)"
              }
            }),
            ref: "horizontalScroll"
          },
          this.$slots.default
        )
      ]
    );
  }
});
