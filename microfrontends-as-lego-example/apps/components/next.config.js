/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  transpilePackages: ['ui', 'theme'],
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "components",

          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Header": "./src/components/Header/index.tsx",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
