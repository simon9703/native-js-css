const merge = require('webpack-merge')
const base = require('./pro')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pro = merge.smart(base, {
  entry: {
    vendors: ['loadsh'], // 第三方库，用于长期缓存
    babel: '@babel/polyfill'
  },
  output: {
    chunkFilename: 'js/[name]-[chunkhash:8].js', //动态import
    publicPath: '/' // script路径拼接
  },
  devtool: 'none',
  devServer: {
    hot: false,
    port: 8110
  },
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
})

module.exports = pro
