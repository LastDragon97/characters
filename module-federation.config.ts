import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remoteGallery',
  exposes: {
    './gallery': './src/App.tsx',
  },
  remotes: {
    hostRemote: 'hostRemote@http://localhost:3001/hostRemoteEntry.js'
  },
  filename: 'galleryRemoteEntry.js',
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  dts: false,
});
