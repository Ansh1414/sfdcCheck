const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename:"Movies.html"
      
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader" //2. Turns css into commonjs
        
        ]
      }
    ]
  }
};
