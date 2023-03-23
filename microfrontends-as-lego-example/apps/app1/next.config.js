/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  transpilePackages: ['theme'],
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "app1",
          remotes: {
            chat: `chat@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",

          shared: {},
        })
      );
    }

    return config;
  },
};
