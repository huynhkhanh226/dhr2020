var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var common = {
  mode: "development",
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundles.js'
    //publicPath: '/vue-demo/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
};

module.exports = merge(common, {
  module: {
    rules: [
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
       {
          test: /\.scss$/,
          loader: ['css-loader','sass-loader']
      }, 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/images/',
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts',
        }
      },

      // {
      //   test: /\.html$/,
      //   use: [ {
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true,
      //       removeComments: false,
      //       collapseWhitespace: false
      //     }
      //   }],
      // },
      //  {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         fallback: 'responsive-loader',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: ['svg-inline-loader']
      }
      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React APP Test",
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: "./public/favicon.ico",
    }),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      // options: {
      //   test: /\.html$/,
      //   publicPath: "/",
      //   baseUrl: "/"
      // }
      options:{
        //publicPath: "/"
      }
    }),
    new webpack.DefinePlugin({
      //BASE_URL: '/'
    })
  ]
});

