import { get } from "@styled-system/core";
import * as system from "@styled-system/css";
import { css } from "emotion";
import DEFAULT_THEME_CONFIG from "./defaultThemeConfig";

export default class ThemeProvider {
  public options: {};
  constructor(themeConfig: {}) {
    this.options = Object.assign({}, DEFAULT_THEME_CONFIG, themeConfig);

    // this.options = merge(DEFAULT_THEME_CONFIG, options);
    // console.log("options: ", this.options);
  }

  css(styles: {}) {
    return css(system.css(styles)(this.options));
  }

  get(key: string, fallback: string) {
    return get(this.options, key, fallback ? fallback : key);
  }

  setTheme(themeConfig: {}) {
    this.options = Object.assign({}, DEFAULT_THEME_CONFIG, themeConfig);
  }
}
