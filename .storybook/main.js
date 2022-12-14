const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-themes"
  ],
  "framework": {
    "name": "@storybook/web-components-webpack5",
    "options": {}
  },
  "docs": {
    "docsPage": true
  }
}