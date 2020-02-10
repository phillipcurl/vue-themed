import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "AspectRatio"
};

export const Default = () => ({
  template:
    "<AspectRatio ratio='16:9' style='border: 2px solid tomato;'>Default Button</AspectRatio>",
  methods: { action: action("clicked") }
});

export const Variants = () => ({
  // components: { Button },
  template:
    "<AspectRatio ratio='16:9' style='border: 2px solid tomato;'>Variant Button</AspectRatio>",
  methods: { action: action("clicked") }
});

// export const Emoji = () => ({
//   // components: { Button },
//   template: '<Button @click="action">😀 😎 👍 💯</Button>',
//   methods: { action: action("clicked") }
// });
