import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // Change this to the port your frontend server should run on
        proxy: {
            '/api': {
                target: 'http://localhost:8800', // Replace with your backend server URL
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});