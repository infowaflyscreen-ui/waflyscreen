// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//      tailwindcss(),
//   ],
//   server: {
//     proxy: {
//       '/waflyscreenapi': {
//         target: 'https://waflyscreen.megascale.co.in',
//         changeOrigin: false,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/waflyscreenapi/, ''),
//       }
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/waflyscreenapi': {
        target: 'https://waflyscreen.megascale.co.in',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/waflyscreenapi/, ''),
      },
    },
  },
})

