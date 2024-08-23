import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      ".git/*",
      ".gitignore",
      "node_modules/*",
      "dist/*",
      "**/bun.lockb",
      "**/eslint.config.js",
    ],
  },
);
