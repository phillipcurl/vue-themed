# `@vue-themed/core`

> TODO: description

<p>
  <!-- <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a> -->
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/@vue-themed/core" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/bundlephobia/minzip/@vue-themed/core/latest" alt="Version"></a>
  <img alt="Libraries.io dependency status for latest release, scoped npm package" src="https://img.shields.io/librariesio/release/npm/@vue-themed/core">
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/@vue-themed/core" alt="License"></a>
</p>

## Usage

```
const core = require('@vue-themed/core');

// TODO: DEMONSTRATE API
```

- provide vue.use interface
- accept theme config and other options
- expose the following api:
  - css
    - returns a style-aware emotion class object for use with Vue's
      class binding
  - get
    - returns the corresponding value from the current theme config
    - should not be used as a raw style value, but passed to the css
      method
  - setTheme
    - sets the current theme and updates styles accordingly
    - optional merge parameter that leverages theme
