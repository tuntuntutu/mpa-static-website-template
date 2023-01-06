import * as path from "path";
// import fs from "node:fs";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
// import mdx from '@mdx-js/rollup'
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

export default {
  // root: 'src',
  build: {
    outDir: "build",
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    react(),
    // mdx(),
    ssr({
      prerender: true,
    }),
  ],
  optimizeDeps: { include: ["cross-fetch", "react/jsx-runtime"] },
} as UserConfig;
