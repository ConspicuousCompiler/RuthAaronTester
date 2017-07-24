module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: '/home/cerebus/RuthAaronTester/dist',
    filename: 'build.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    host: 'conspicuouscompiler.com'
  },

}

