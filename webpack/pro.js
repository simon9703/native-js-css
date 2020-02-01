const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressPlugin = require('compression-webpack-plugin')
console.log(`#############init webpack config######################`)

module.exports = {
  mode: 'production', //development production
  entry: {
    // chunks名称
    app: ['./test.js'], // 相对命令运行路径
    // path: './test3.js',
    search: './test2.js'
    // vendors: ['loadsh'], // 第三方库，用于长期缓存
    // babel: '@babel/polyfill'
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // __dirname 文件当前目录
    filename: 'js/[name]-[chunkhash:8].js' // chunkhash 整个构建的。
    // chunkFilename: 'js/bundel-[name]-[chunkhash:8].js', //动态import
    // publicPath: 'D:/a-html/native/dist/' // script路径拼接
  },
  devtool: 'none',
  devServer: {
    hot: true,
    port: 8000,
    contentBase: '../dist'
  },
  module: {
    rules: [
      // 在入口js中import模块时预处理文件
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
        // use: [
        //   'cache-loader', //打包缓存
        //   {
        //     loader: 'happypack/loader?id=happyBabel'
        //   }
        // ],
        use: [
          'cache-loader',
          'thread-loader',
          {
            loader: 'babel-loader', //babel转码
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        // include: path.resolve(__dirname, '../'),
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        },
        cache: true, // 缓存
        parallel: true // 多线程
      })
    ],
    // 抽取、合并多次重复import的文件。js\css都会
    splitChunks: {
      cacheGroups: {
        //多个chunk区分规则
        common: {
          chunks: 'initial', // async按需加载(异步) initial初始化块(同步) all 同步 + 异步
          name: 'common', // 新的chunk，需要添加到 htnl模板
          minChunks: 2, // 最小引用次数
          priority: 10,
          reuseExistingChunk: true,
          minSize: 1000 // 最小大小：默认30kb
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../')
    },
    extensions: ['*', '.js', '.css', '.html']
  },
  // externals: {
  //   jquery: 'jQuery' // 从script 中 library导出变量名称(jQuery)中取
  // },
  plugins: [
    // new CompressPlugin({
    //   test: /\.(js|css)$/,
    //   threshold: 10240
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        zsm: {
          base: 4000,
          name: "'123'",
          age: '1 +2 +3',
          flag: true,
          flag2: 'true'
        }
      }
    }),
    new CleanWebpackPlugin(), // 清空上次打包残留文件
    // new MiniCssExtractPlugin({
    //   filename: '[name].[chunkhash:8].css',
    //   chunkFilename: 'bundel-[name]-[chunkhash:8].css'
    // }), //插入css
    new OptimizeCssPlugin(),
    new HtmlWebpackPlugin({
      // 插入js
      template: './test.html',
      filename: 'index.html', // 相对文件当前目录
      chunks: ['search', 'app', 'vendors', 'common', 'style'], // js文件  + common分离包
      minify: {
        collapseWhitespace: true //删除空格、换行
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: './test.html',
    //   filename: 'html/app.html', //相对output路径
    //   chunks: ['path', 'vendors', 'search']
    // }),
    // new HappyPack({
    //   // 多线程运行babel
    //   id: 'happyBabel',
    //   loaders: [
    //     {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-env']
    //       }
    //     }
    //   ],
    //   threadPool: HappyPack.ThreadPool({
    //     size: require('os').cpus().length // 多核CPU
    //   })
    // }),
    // new webpack.DllReferencePlugin({
    //   //在output处引用的相同vendor不会被本次打包。
    //   manifest: path.resolve(__dirname, '../static/dll', 'manifest.json')
    // }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static')
      }
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.bundle_report ? 'server' : 'disabled', // 构建时自动打开 / 关闭
      analyzerHost: '127.0.0.1',
      analyzerPort: '8890'
    })
  ]
}
