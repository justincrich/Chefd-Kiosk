const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {resolve,module:{rules}} = require('../config/webpack.config.dev');
console.log(__dirname)
module.exports = {
    resolve:{
      alias: {
      
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        'assets':path.resolve(__dirname,'../src/assets'),
        'styles':path.resolve(__dirname,'../src/styles'),
        'core-components':path.resolve(__dirname,'../src/components/core-components'),
        'components':path.resolve(__dirname,'../src/components'),
        'controllers':path.resolve(__dirname,'../src/controllers')
      }
    },
    module:{
      rules: rules
      // [
      //   {
      //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //     loader: require.resolve('url-loader'),
      //   },
      //   {
      //     test: /\.scss$/,
      //     loaders: ["style-loader", "css-loader","sass-loader"],
      //     include: path.resolve(__dirname, '../')
      //   },
      //   {
      //     test: /\.(svg)$/,
      //     loader: require.resolve('raw-loader')
      //   },
      //   {
      //     loader: require.resolve('file-loader'),
      //       exclude: [/\.js$/, /\.html$/, /\.json$/,/\.scss$/,/\.ejs$/],
      //       options: {
      //           name: 'static/media/[name].[hash:8].[ext]',
      //       }
      //   }
      // ]
    },
    plugins:[
      new ExtractTextPlugin({filename:'styles.css',allChunks:true,ignoreOrder:true}),
    ]
  // }
}