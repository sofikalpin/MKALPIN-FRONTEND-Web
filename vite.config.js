import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build', // To maintain compatibility with CRA's build output folder
    chunkSizeWarningLimit: 1500, // Aumenta el límite a 1.5MB (silencia la advertencia)
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa las librerías principales de React
          react_core: ['react', 'react-dom', 'react-router-dom'],
          // Separa librerías pesadas de interfaz
          ui_frameworks: ['bootstrap', 'react-bootstrap', 'antd'],
          // Separa iconos
          icons: ['react-icons', 'lucide-react']
        }
      }
    }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
