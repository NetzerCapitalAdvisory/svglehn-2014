import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                werte: resolve(__dirname, 'werte.html'),
                philosophie: resolve(__dirname, 'philosophie.html'),
                einstellung: resolve(__dirname, 'einstellung.html'),
                faehigkeiten: resolve(__dirname, 'faehigkeiten.html'),
                warum: resolve(__dirname, 'warum-sv-glehn.html'),
            },
        },
    },
})
