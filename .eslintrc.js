module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
    ],
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-undef": "warn",
    "no-empty": "warn",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "warn",
  },
  "env": {
    "browser": false,
    "node": true
  }
}