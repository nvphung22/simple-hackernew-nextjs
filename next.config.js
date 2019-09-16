const { GenerateSW } = require('workbox-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new GenerateSW({
        // Do not precache images
        exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        // minify: true,
        // globPatternsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          urlPattern: /^https?.*/,
          // 'fastest' is now 'StaleWhileRevalidate'
          handler: 'NetworkFirst',
          options: {
            // options.cache.name is now options.cacheName
            cacheName: 'my-hackernews-api-cache',
            // options.cache is now options.expiration
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60,
            },
          },
        }],
      })
    );

    return config;
  }
};
