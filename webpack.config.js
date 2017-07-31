const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


module.exports = {
  entry: {
      "src/assets/js": "./webpack/entry.js",
      "src/assets/css": "./sass/main.scss"
  },
  output: {
      path: './',
      filename: "src/assets/js/bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract(
                'style',
                'css?sourceMap!postcss!sass?sourceMap'
              ),
       },
    ]
  },
  postcss() {
      return [autoprefixer,cssnano];
  },
  plugins: [
    new ExtractTextPlugin('src/assets/css/main.css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false // https://github.com/webpack/webpack/issues/1496
    }
    })
  ]
};
