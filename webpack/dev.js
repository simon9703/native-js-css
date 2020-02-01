const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const FriendlyErrorsPlugun = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development', //development production
  entry: {
    // chunks名称
    app: ['./webpack/base/test.js'], // 相对命令运行路径
    search: './webpack/base/test2.js',
    vendors: ['loadsh'], // 第三方库，用于长期缓存
    babel: '@babel/polyfill'
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // __dirname 文件当前目录
    filename: 'mainx-[name]-[hash:8].js', // hash 整个构建的。
    chunkFilename: 'bundel-[name]-[hash:8].js', //动态import
    publicPath: '/app' // script路径拼接
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    clientLogLevel: 'warning',
    overlay: {
      warnings: true,
      errors: true
    },
    // quiet: true,
    progress: true,
    open: true,
    hot: true,
    stats: 'errors-only',
    port: 8000,
    publicPath: '/app',
    contentBase: false,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: path.posix.join('/app', 'html/index2.html') }]
    },
    proxy: [
      {
        context: '/back2',
        target: 'https://developer.mozilla.org/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/back': ''
        }
      },
      {
        context: '/back',
        target: 'https://developer.mozilla.org/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/back': ''
        }
      }
    ]
  },
  module: {
    rules: [
      // 在入口js中import模块时预处理文件
      {
        test: /\.css$/, //引入css文件
        use: ['style-loader', 'css-loader'] // 导出内联css生成function
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader', // 用户js中的import 和 css的背景图片url(/xxx)
            options: {
              limit: 10240, //10kb
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'imgs/[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', //babel转码
          options: {
            presets: ['@babel/preset-env']
          }
        },
        // include: path.resolve(__dirname, '../'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../')
    },
    extensions: ['.js', '.css', '.html']
  },
  plugins: [
    new CleanWebpackPlugin(), // 清空上次打包残留文件
    new ExtractTextWebpackPlugin('[name].[hash:8].css'), //插入css  md5:contenthash
    new OptimizeCssPlugin(),
    new HtmlWebpackPlugin({
      // 插入js
      template: './webpack/base/test.html',
      filename: 'html/index2.html', // 相对文件当前目录
      chunks: ['search', 'app', 'vendors', 'common', 'style'] // js文件  + common分离包
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static')
      }
    ]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new FriendlyErrorsPlugun({
      compilationSuccessInfo: {
        messages: ['编译成功啦! http://localhost:8000']
      }
    })
  ]
}
