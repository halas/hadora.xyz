const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: {
      "src/assets/js": "./webpack/entry.js",
      "public/assets/css": "./sass/main.scss"
  },
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
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
                'css!postcss!sass'
              ),
       },
    ]
  },
  postcss() {
      return [autoprefixer,cssnano];
  },
  plugins: [
    new ExtractTextPlugin('public/assets/css/main.css', {
      allChunks: true,
    })
  ]
};
