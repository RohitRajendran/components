const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPrefixer = require('postcss-prefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /prefixed-utils.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [PostcssPrefixer({prefix: 'uic--'})],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /prefixed-utils.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              prependData: '@import "./constants/sass/manifest.scss";',
            },
          },
        ],
      },
      {
        test: /\.mdx$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: '',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
