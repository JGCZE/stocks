import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

import getConfig, {tsFiles} from "eslint-config-regiojet-typescript-react";
const baseDir = import.meta.dirname;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...getConfig(baseDir),
  {
    files: tsFiles,
    name: "my-rules",
    rules: {
      "import/prefer-default-export": 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'local-rules/function-parenthesis-newline': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@assets", "./src/assets"],
            ["@utils", "./src/utils"],
          ],
        },
      },
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "./app/layout.tsx"
    ],
  },
];

export default eslintConfig;
