const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPrefixer = require('postcss-prefixer');

const entries = glob
  .sync('./components/**/*.@(js|jsx|ts|tsx)', {
    ignore: ['./components/**/*.spec.@(js|jsx|ts|tsx)', './components/**/*.story.@(js|jsx|ts|tsx)'],
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

const sassColorVariables = path.resolve(
  __dirname,
  'constants/sass/variables/colors.scss'
)

const zIndexVariables = path.resolve(
  __dirname,
  'constants/sass/variables/zindex.scss'
)

entries.index = path.resolve(__dirname, 'components/index.js');
entries.util = prefixUtilFilepath;
entries.shared = [sassColorVariables, zIndexVariables];

module.exports = {
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
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        // Exports the Sass color variables into the dist folder.
        test: sassColorVariables,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'colors.scss',
              context: '',
            },
          },
        ],
      },
      {
        // Exports the Sass zindex variables into the dist folder.
        test: zIndexVariables,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'zindex.scss',
              context: '',
            },
          },
        ],
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
        exclude: [prefixUtilFilepath, sassColorVariables, zIndexVariables],
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
              prependData: '@import "./constants/sass/manifest.scss";',
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  optimization: {
    minimize: false,
  },
  externals: [
    {
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
    /^lodash\/.+$/,
    /^react-spring\/.+$/,
  ],
};
