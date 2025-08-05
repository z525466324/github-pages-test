import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      eqeqeq: [2, "always"],
      "@typescript-eslint/no-unused-vars": 1,
      "@typescript-eslint/no-empty-function": 1,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-non-null-assertion": 0,
      "vue/component-definition-name-casing": [2, "kebab-case"],
      "vue/require-default-prop": 0,
      "vue/attributes-order": 0,
      "vue/no-v-html": 0,
      "vue/attribute-hyphenation": 2,
      "vue/one-component-per-file": 0,
    },
  },
]);
