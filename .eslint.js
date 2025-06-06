export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
  ],
  overrides: [],
  parser: "vue-eslint-parser" /* 解析 .vue 文件 */,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // 关闭组件命名验证,  template会报错是用
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/camelcase": "off",
    // tab做放2个空格
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    // 允许空的{}
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "no-console": import.meta.NODE_ENV.env === "production" ? "warn" : "off",
    "no-debugger": import.meta.NODE_ENV.env === "production" ? "warn" : "off",
  },
};
