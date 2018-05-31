const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.join(__dirname, './src/')
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
