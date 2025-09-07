import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import MarkdownHMR from './plugins/hmr-markdown';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/docs',
  server: {
    port: 4200,
    host: '0.0.0.0', //needed because we want to access the server from outside the devcontainer
  },
  preview: {
    port: 4300,
    host: '0.0.0.0', //needed because we want to access the server from outside the devcontainer
  },
  plugins: [nxViteTsPaths(), ViteImageOptimizer(
    {
      includePublic: true,
      cache: true,
      cacheLocation: '../node_modules/.cache/vite-plugin-image-optimizer'
    }
  ), MarkdownHMR()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../dist/docs',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
