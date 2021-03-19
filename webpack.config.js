const path = require('path');
const MiniCss = require("mini-css-extract-plugin")
const arguments = process.argv.slice(2).reduce((obj, item) => {
  obj[item.split('=')[0]] = item.split('=')[1]
  return obj
},{})

const mode = arguments['--mode']
console.log(mode)
module.exports = {
  context: path.join(__dirname, 'src'),
  mode,
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        use: [MiniCss.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [new MiniCss()],


  devtool: "source-map" // for debug with file names
};
