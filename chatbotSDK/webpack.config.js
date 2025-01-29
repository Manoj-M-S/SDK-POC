// chatbotSDK/webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'chatbot-sdk.umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'ChatBotSDK',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  }
};