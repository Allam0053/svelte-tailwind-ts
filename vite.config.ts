import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
    process.env = {
        ...process.env,
        ...loadEnv(mode, process.cwd())
    };

    return defineConfig({
        server: {
            proxy: {
                '^/api/.*': {
                    target: process.env.VITE_PROXY_BACKEND_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path
                }
            },
            host: "0.0.0.0",
        },
        resolve: {
            alias: [
                { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
            ]
        },
        plugins: [svelte()]
    });
};
