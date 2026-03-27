import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import mfConfig from './module-federation.config';

export default defineConfig({
  output: {
    assetPrefix: 'http://localhost:3004/', 
  },
  server: {
    port: 3004,
    strictPort: true,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation(mfConfig)
  ]
});