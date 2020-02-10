# `@vue-ui/core`

> TODO: description

## Usage

```
const core = require('@vue-ui/core');

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
