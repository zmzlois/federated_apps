import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'home-spa',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
