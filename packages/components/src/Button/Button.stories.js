import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

// import Button from "./Button";

export default {
  title: "Button",
  decorators: [withKnobs, withA11y]
  // component: Button
};

export const Default = () => ({
  // components: { Button },
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    },
    text: {
      default: text("Text", "Default Button")
    }
  },
  template: '<Button @click="action" :disabled="isDisabled">{{text}}</Button>',
  methods: { action: action("clicked") }
});
Default.story = {
  name: "Default Button",
  parameters: {
    notes:
      "The default button component with no additional styles or variants set."
  }
};

export const Variants = () => ({
  // components: { Button },
  template: '<Button @click="action" variant="outline">Variant Button</Button>',
  methods: { action: action("clicked") }
});

export const Jsx = () => ({
  // components: { Button },
  render(h) {
    return <Button onClick={this.action}>With JSX</Button>;
  },
  methods: { action: action("clicked") }
});

// export const Emoji = () => ({
//   // components: { Button },
//   template: '<Button @click="action">😀 😎 👍 💯</Button>',
//   methods: { action: action("clicked") }
// });
