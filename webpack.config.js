const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    clean: true,
  },
  module: {
    rules: [{ test: /\.(s*)css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css',
  })],
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
