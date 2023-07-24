const GoTemplatePlugin = require("prettier-plugin-go-template");

module.exports = {
  plugins: [GoTemplatePlugin],
  printWidth: 120,
  proseWrap: "always",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  options: { editorconfig: true },
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
  goTemplateBracketSpacing: true,
};
