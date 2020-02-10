import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "BaseText",
  decorators: [withKnobs, withA11y]
};

export const Default = () => ({
  props: {
    text: {
      default: text(
        "Text",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta itaque hic! Perspiciatis in harum aliquam maiores quia dicta, culpa nam? Voluptas inventore incidunt ut? Sapiente sint tenetur placeat officiis?"
      )
    }
  },
  template: "<BaseText>{{text}}</BaseText>"
});
Default.story = {
  name: "BaseText",
  parameters: {
    notes:
      "The default button component with no additional styles or variants set."
  }
};
