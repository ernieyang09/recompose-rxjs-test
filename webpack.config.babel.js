import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src')
      },
    ],
  },
  devServer: {
    port:3000,
    publicPath: "/",
    contentBase:'./src',
    inline:true,
  },
  resolve: {
    extensions: ['index.js', 'index.jsx', '.js', '.jsx'],
    modules: ['node_modules'], // 指定套件的路徑
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ]
}


export default config;