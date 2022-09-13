import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: './.auto-imports.d.ts',
      imports: ['vue', 'pinia'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    uni()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  // server: {
  //   // host: '0.0.0.0',
  //   // port: 8080
  //   proxy: {
  //     '/external': {
  //       target: 'https://test-api.xxxx.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/external/, '')
  //     }
  //   }
  // },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
