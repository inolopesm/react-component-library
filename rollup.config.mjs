import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.ts",
    output: { file: "lib/index.js" },
    external: ["react", "react/jsx-runtime"],
    plugins: [typescript(), nodeResolve(), postcss({ modules: true })],
  },
  {
    input: "./lib/types/index.d.ts",
    output: { file: "lib/index.d.ts" },
    plugins: [dts()],
  },
];
