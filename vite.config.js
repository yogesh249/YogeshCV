// filepath: /D:/Yogesh/test-demo/vite-project/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/YogeshCV/', // Replace <REPO_NAME> with your repository name
});