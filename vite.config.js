import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env": JSON.stringify(import.meta.env),
  },
});
