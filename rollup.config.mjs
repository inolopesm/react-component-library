import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "lib/es/index.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "lib/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    }
  ],
  external: ["react", "react/jsx-runtime"],
  plugins: [typescript()]
};
