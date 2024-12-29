import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "Company-Portfolio-Website",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
