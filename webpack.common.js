const path = require('path');

module.exports = {
  entry: {
    app:'./app.js'
    // input file/files
  },
  output: {
    // output file/files

    // filename: 'bundle.js', single bundling
    filename: '[name].bundle.js',// dynamic multi bundeling
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    // all loaders have to exist in an Array of objects called "rules"
    rules:[
      {
        test: /\.js$/,
        // which file to effect on...

        exclude: /(node_modules)/,
        use: {
          // which package to use
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ],
  },
};
