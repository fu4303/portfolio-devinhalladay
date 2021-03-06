var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    site: './source/assets/js/site.js',
  },

  resolve: {
    root: __dirname + '/source/assets/js',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/js/[name].js',
  },

  module: {
    loaders: [
      {
        test: /source\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'stage-0'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ],
  },

  node: {
    console: true,
  },

  plugins: [
    new Clean(['.tmp'])
  ],
};