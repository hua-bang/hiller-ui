module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  root: true,
  extends: [
    // "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    quotes: [
      1,
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  parser: "vue-eslint-parser",
  plugins: [
    
  ],
};