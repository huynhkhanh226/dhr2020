var path = require('path');// to get the current path
const fs = require('fs'); // to check if the file exists
const dotenv = require('dotenv');
//var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var TARGET = process.env.npm_lifecycle_event;


module.exports = (env) => {

  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    console.log(prev);
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});


  //console.log(env);
  console.log(TARGET);
  console.log(fileEnv);
  console.log(process.env);

  return {
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        TITLE: process.env.TITLE,
        PUBLIC_URL: process.env.PUBLIC_URL,
        template: path.join(__dirname, 'public', 'index.html'),
        BASE_URL: process.env.PUBLIC_URL
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
      new webpack.DefinePlugin(envKeys),
      new ManifestPlugin()
      
    ]
  };
}
