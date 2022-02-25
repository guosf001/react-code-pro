const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建前清理 /dist 文件夹，这样只会生成用到的文件
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      //   {
      //     test: /\.(js|jsx)$/,
      //     use: 'babel-loader',
      //     exclude: /node_modules/, //不需要去转译"node\_modules"这里面的文件。
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React',
      template: 'index.html',
    }),
  ],
};
