const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
    alias: {
      '~': path.join(__dirname, './src'),
      'Components': path.join(__dirname, './src/components'),
    } 
  },
  output: {
    path: path.resolve(__dirname, "public/dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    host: 'localhost',
    inline: true,
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: 
     [new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin( { ...process.env } )]
};