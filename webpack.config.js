const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PostcssPrefixer = require('postcss-prefixer');

const entries = glob
  .sync('./components/**/*.js', {
    ignore: './components/**/*.spec.js',
  })
  .reduce((allEntries, entry) => {
    const splitPath = entry.split('/');
    const fileName = splitPath[splitPath.length - 1];
    const [compName] = fileName.split('.');

    return Object.assign(allEntries, {
      [compName]: entry,
    });
  }, {});

const prefixUtilFilepath = path.resolve(
  __dirname,
  'constants/sass/util/prefixed-utils.scss'
);

entries.index = path.resolve(__dirname, 'components/index.js');
entries.util = prefixUtilFilepath;

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '@unitedincome/components',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        include: prefixUtilFilepath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
        exclude: prefixUtilFilepath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./constants/sass/manifest.scss";',
            },
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
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-router': {
      commonjs: 'react-router',
      commonjs2: 'react-router',
      amd: 'ReactRouter',
      root: 'ReactRouter',
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'ClassNames',
      root: 'ClassNames',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
    'react-text-mask': {
      commonjs: 'react-text-mask',
      commonjs2: 'react-text-mask',
      amd: 'ReactTextMask',
      root: 'ReactTextMask',
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
