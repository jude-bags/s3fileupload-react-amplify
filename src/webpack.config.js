const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module rules and configurations
  module: {
    rules: [
      // Other rules...

      // Source map loader configuration
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/@aws-sdk/, /node_modules\/@aws-crypto/],
      },
    ],
  },

  // Resolve extensions configuration
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },

  // Devtool configuration for source maps
  devtool: 'source-map',

  // Development server configuration (if needed)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
