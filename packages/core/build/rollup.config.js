import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts", // Path relative to package.json
  external: ["vue", "Vue", "OurVue", "emotion"],
  output: {
    name: "VueThemed",
    exports: "named",
    globals: {
      vue: "Vue",
      vue: "OurVue"
    }
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require("typescript")
    }),
    commonjs({ extensions: [".js", ".ts"] }), // the ".ts" extension is required
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble({
      objectAssign: "Object.assign"
    }) // Transpile to ES5
  ]
};
