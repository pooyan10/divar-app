import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paths } from "./src/constants/paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src: "/src",
      // services: "/src/services",
      // utils: "/src/utils",
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        ""
      ),
    },
  },
});
