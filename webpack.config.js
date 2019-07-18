
const parts = require("./webpack.parts");
var path = require('path');// to get the current path
const fs = require('fs'); // to check if the file exists
const dotenv = require('dotenv');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var TARGET = process.env.npm_lifecycle_event;

  //****************************************************************************************************/

var commonConfig = {
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
    },
};

const debugModeModules = merge([
  {
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
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          }
        },
        {
          test: /\.(json)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
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
        }
        // {
        //   test: /\.svg$/,
        //   loader: ['svg-inline-loader']
        // }
        
      ]
    }
  }
]);

const productModeModules = merge([
  {
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
            name: '[name].[ext]',
            outputPath: 'assets/images/',
          }
        },
        {
          test: /\.(json)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
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
        }
        // {
        //   test: /\.svg$/,
        //   loader: ['svg-inline-loader']
        // }
        
      ]
    }
  }
]);

module.exports = env => {
  
  var dotEnv =  parts.getEnvKeys(env.ENVIRONMENT);
  
  const debugModePluginConfig = merge([
    {
      plugins: [
        new HtmlWebpackPlugin({
          TITLE: process.env.TITLE,
          PUBLIC_URL: process.env.PUBLIC_URL,
          template: path.join(__dirname, 'public', 'index.html'),
          BASE_URL: process.env.PUBLIC_URL
        }),
        new webpack.LoaderOptionsPlugin(),
        new webpack.DefinePlugin(dotEnv),
        new ManifestPlugin()
      ]
    }
  ]);

  const productionModePluginConfig = merge([
    {
      plugins: [
        new HtmlWebpackPlugin({
          TITLE: process.env.TITLE,
          PUBLIC_URL: process.env.PUBLIC_URL,
          template: path.join(__dirname, 'public', 'index.html'),
          BASE_URL: process.env.PUBLIC_URL
        }),
        new webpack.LoaderOptionsPlugin(),
        new webpack.DefinePlugin(dotEnv),
        new ManifestPlugin()
      ]
    }
  ]);

  const devServerConfig = merge([
    parts.devServer({host: process.env.HOST,port: process.env.PORT})
 ]);
  
  var mode = env.ENVIRONMENT;
  if (mode === "production") {
    return merge(commonConfig, productModeModules, productionModePluginConfig, { mode });
  }
  return merge(commonConfig, debugModeModules, devServerConfig, debugModePluginConfig, { mode });
};


