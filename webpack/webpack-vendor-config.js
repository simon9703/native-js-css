const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['loadsh']
  },
  output: {
    path: path.resolve(__dirname, '../static/'),
    filename: 'dll/[name].js',
    library: '_dll_[name]' // script 引用名称 | amd | common
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../static/dll', 'manifest.json'),
      name: '_dll_[name]'
    })
  ]
}
