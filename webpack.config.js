const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/styles/index.scss'],
  output: {
    filename: 'bundle.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader?sourceMap',
          {
            loader: `postcss-loader`,
            options: {
              options: {},
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // for cleaning up dist folder
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};