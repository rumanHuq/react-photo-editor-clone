const rules = {
  "@typescript-eslint/ban-ts-comment": 0,
  "@typescript-eslint/no-unused-vars": 0,
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": ["error"],
  "prettier/prettier": "error",
  "react/function-component-definition": [
    2,
    {
      namedComponents: "arrow-function",
    },
  ],
  "import/extensions": 0,
  "import/prefer-default-export": 0,
  "import/no-default-export": 2,
  "import/order": [
    "error",
    {
      alphabetize: { order: "asc", caseInsensitive: false },
      pathGroups: [
        {
          pattern: "@/**",
          group: "external",
          position: "after",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
    },
  ],
  "react/react-in-jsx-scope": 0,
  "react/jsx-filename-extension": [
    2,
    {
      extensions: [".tsx", ".jsx"],
    },
  ],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  plugins: ["import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      alias: {
        extensions: [".ts", ".tsx", ".json"],
        map: [["@", "./src/"]],
      },
      "eslint-import-resolver-typescript": true,
    },
  },
  rules,
  globals: { React: "writable" },
};
