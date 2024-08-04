/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 15:55:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

