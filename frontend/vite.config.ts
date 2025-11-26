import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Changed from 5173 to avoid Windows permission issues
    host: '127.0.0.1', // Use IPv4 instead of IPv6 to avoid EACCES permission errors on Windows
    // Proxy removed - using production API URL directly
    // For local development, set VITE_API_URL in .env file
  },
});

