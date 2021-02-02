const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{loader:MiniCssExtractPlugin.loader, options: {
                    publicPath:'../'
                }}, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'index',
            template: path.resolve(__dirname, "public", "index.html"),
            filename:'index.html'
          }),
          new HtmlWebpackPlugin({
              title:'sobre',
            template: path.resolve(__dirname, "public", "sobre.html"),
            filename:'about.html'
          }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/samples", to: "samples" },
            //   { from: "other", to: "public" },
            ],
          }),
      ]
   
}