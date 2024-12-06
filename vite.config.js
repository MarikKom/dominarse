import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import webfontDownload from 'vite-plugin-webfont-dl';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    viteImagemin({
      include: /\.(png|jpg|jpeg|gif|svg)$/i,
      exclude: /node_modules/,
      plugins: {
        jpg: imageminMozjpeg({ quality: 80 }),
        png: imageminPngquant(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        include: /\.(png|jpg|jpeg|gif|svg)$/i,
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap',
      'https://fonts.googleapis.com/css2?family=Cormorant:wght@400..500&display=swap" rel="stylesheet',
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@200..700&display=swap',
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel = "stylesheet',
    ]),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main_js: resolve(__dirname, 'src/main.jsx'),
        
      }
    },

    esbuild: {
      loader: {
        '.js': 'jsx',
      },
    },

  },
});