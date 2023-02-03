module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  framework: "@storybook/react",
  core: { builder: 'webpack5' },
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: { modules: true, importLoaders: 1 },
        postcssLoaderOptions: { implementation: require("postcss") },
      },
    },
  ],
};
