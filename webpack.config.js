const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPrefixer = require('postcss-prefixer');

const entries = glob
  .sync('./components/**/**/*.js', {
    ignore: ['./components/**/**/*.spec.js', './components/**/**/*.story.js'],
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
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'ClassNames',
      root: 'ClassNames',
    },
    accounting: {
      commonjs: 'accounting',
      commonjs2: 'accounting',
      amd: 'Accounting',
      root: 'Accounting',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'Lodash',
      root: 'Lodash',
    },
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
    xstate: {
      commonjs: 'xstate',
      commonjs2: 'xstate',
      amd: 'Xstate',
      root: 'Xstate',
    },
    'query-string': {
      commonjs: 'query-string',
      commonjs2: 'query-string',
      amd: 'QueryString',
      root: 'QueryString,',
    },
    'react-tooltip': {
      commonjs: 'react-tooltip',
      commonjs2: 'react-tooltip',
      amd: 'ReactTooltip',
      root: 'ReactTooltip',
    },
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'Moment',
      root: 'Moment',
    },
  },
  optimization: {
    minimizer: [],
  },
};
