import js from "@eslint/js";
import solid from "eslint-plugin-solid";
import * as tsParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";
import turbo from "eslint-config-turbo";
import { resolve } from "node:path";
import * as turbo from "eslint-plugin-turbo";

export const turboConfig = {
  // enabling support for turbo
  files: [`**/turbo.json`],
  plugins: { turbo },
  rules: {
    ...turbo.configs.recommended.rules,
  },
};

const project = resolve(process.cwd(), "tsconfig.json");
const rootDir = resolve(process.cwd());

const languageOptions = {
  parser: tsParser,
  globals: {
    ...globals.browser,
  },
  parserOptions: {
    project,
    tsconfigRootDir: rootDir,
  },
};

const settings = {
  "import/resolver": {
    typescript: {
      project,
    },
  },
};

const ignores = [
  // Ignore dotfiles
  ".*.js",
  "node_modules/",
];

const defaultConfig = {
  settings,
  ignores,
  languageOptions,
};

const config = tseslint.config(
  ...tseslint.configs.recommended,
  prettier,
  turbo,
  solid.configs["flat/typescript"],
  {
    files: ["*.ts", "*.tsx"],
    ...defaultConfig,
  }
);

export default config;
