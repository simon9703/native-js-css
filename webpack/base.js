const merge = require('webpack-merge')
// const base = require('./pro')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pro = merge.smart(
  {},
  {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, './base/test3.js')
      // vendors: ['loadsh'], // 第三方库，用于长期缓存
      // babel: '@babel/polyfill'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: 'js/[name]-[chunkhash:8].js', //动态import
      publicPath: '/' // script路径拼接
    },
    devtool: 'none',
    module: {
      rules: [
        // 在入口js中import模块时预处理文件
        {
          test: /\.css$/, //引入css文件
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            }
          ]
          // use: ['style-loader', 'css-loader'] // 导出内联css生成function
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style/[name].[chunkhash:8].css',
        chunkFilename: 'style/[name]-[chunkhash:8].css'
      }) //插入css
    ]
  }
)

module.exports = pro
