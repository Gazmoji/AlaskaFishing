import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⬇️ use your repo name here
export default defineConfig({
  plugins: [react()],
  base: "/AlaskaFishing/",
});
