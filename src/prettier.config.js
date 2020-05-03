// Some settings automatically inherited from .editorconfig

module.exports = {
  semi: false,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
  ],
};
