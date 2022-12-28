const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          port: 8080,
          contentBase: path.join(__dirname, 'public'),
        },
      };

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.js',
    home: './src/js/home.js',
    quiz: './src/js/quiz.js',
    win: './src/js/win.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/img/[name]-[hash][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'quiz.html',
      template: 'src/pages/quiz.html',
      chunks: ['quiz'],
    }),
    new HtmlWebpackPlugin({
      filename: 'win.html',
      template: 'src/pages/win.html',
      chunks: ['win'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          noErrorOnMissing: true,
        },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(development),
});
