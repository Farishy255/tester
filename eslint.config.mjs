import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {}, // bisa dikosongkan atau isi sesuai kebutuhan
  },
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next"
  ),
];

export default eslintConfig;
