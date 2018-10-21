'use strict';
const _ = require("lodash");
const env = process.env.NODE_ENV || "development";
const debug = ["development", "test"].indexOf(env) !== -1;
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '!!html-loader!./src/main/webapp/index.html',
  filename: 'index.html',
  inject: 'body'
});

const defaults = {
  cache: debug,
  context: __dirname,
  devtool: debug ? "eval" : false,
  entry: './src/main/webapp/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        query:{
          limit:'10000',
          name:'[name].[ext]',
          outputPath:'fonts/'
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          }, {
            loader: 'less-loader', // compiles Less to CSS
          }
        ],
      },
    ],
  },
  output: {
    path: __dirname + '/src/main/resources/static/',
    filename: 'bundle.min.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin([__dirname + '/src/main/resources/static/']),
    new CopyWebpackPlugin([
      {
        from: './src/main/webapp/*.+(png|jpg)',
        flatten: true
      }
    ]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new UglifyJSPlugin(),
    HtmlWebpackPluginConfig,
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  target: "web",
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: [__dirname + '/src', 'node_modules'],
    alias: {
      //"react": "preact-compat",
      //"react-dom": "preact-compat",
    }
  }
};

module.exports.defaults = defaults;

module.exports.extend = function merge(config) {
  return _.extend({}, defaults, config);
};

module.exports.merge = function merge(config) {
  return _.merge({}, defaults, config);
};