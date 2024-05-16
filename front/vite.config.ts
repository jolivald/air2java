import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as fs from 'fs';

// https://vitejs.dev/config/
const httpsConfig = {
    // key: certificate.key && Buffer.from(certificate.key),
    // cert: certificate.cert && Buffer.from(certificate.cert),
    key: fs.readFileSync('../back/src/cert/dev-key.pem'),
    cert: fs.readFileSync('../back/src/cert/dev-cert.pem'),
  }
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
        https: httpsConfig,
    },
    base: './',
});
