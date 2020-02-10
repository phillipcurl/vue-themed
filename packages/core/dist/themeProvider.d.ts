export default class ThemeProvider {
    options: {};
    constructor(themeConfig: {});
    css(styles: {}): string;
    get(key: string, fallback: string): any;
    setTheme(themeConfig: {}): void;
}
