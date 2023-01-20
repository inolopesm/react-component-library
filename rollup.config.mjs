import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "lib",
      sourcemap: true,
    },
    external: ["react", "react/jsx-runtime"],
    plugins: [nodeResolve(), typescript()]
  }
];
