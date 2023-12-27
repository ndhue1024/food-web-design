const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, './src/atoms'),
      '@molecules': path.resolve(__dirname, './src/molecules'),
      '@organisms': path.resolve(__dirname, './src/organisms'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
};