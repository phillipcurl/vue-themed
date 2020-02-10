import { shallowMount } from "@vue/test-utils";

import BaseText from "../BaseText";
import Theme from "./../../../plugin/theme";

const $theme = new Theme();

describe("BaseText", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(BaseText, {
      mocks: {
        $theme
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("is a Vue instance", () => {
    const wrapper = shallowMount(BaseText, {
      mocks: {
        $theme
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
