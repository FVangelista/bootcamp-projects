import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables/_colors.scss"; 
          @import "./src/styles/variables/_typography.scss"; 
          @import "./src/styles/variables/_animations.scss"; 
          @import "./src/styles/variables/_layout.scss"; 
          @import "./src/styles/helpers/_resolutions.scss";
          @import "./src/styles/helpers/_mixins.scss";
        `,
      },
    },
  },
});
