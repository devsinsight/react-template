import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import bootstrapEntryPoints from './webpack.bootstrap.config';

let isProd = process.env.NODE_ENV == "production";
let cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
let cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: [
    'css-loader', 'sass-loader'
  ],
  publicPath: '/dist'
});

let cssConfig = isProd ?
  cssProd :
  cssDev;

let bootstrapConfig = isProd ?
  bootstrapEntryPoints.prod :
  bootstrapEntryPoints.dev;

export default {
  entry: {
    app: [
      './src/webpach-public-path', 'webpack-hot-middleware/client?reload=true', path.resolve(__dirname, 'src/index.tsx')
    ],
    bootstrap: [bootstrapConfig],
    styles: [
      './node_modules/toastr/toastr.scss',
      './src/styles/site.scss'
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ?
      '[name].[chunkhash].bundle.js' :
      '[name].[hash].bundle.js',
    sourceMapFilename: isProd ?
      '[name].[chunkhash].bundle.map' :
      '[name].[hash].bundle.map',
    chunkFilename: isProd ?
      '[chunkhash].chunk.js' :
      '[hash].chunk.js'
  },
  devServer: {
    contentBase: './src'
  },
  target: 'web',
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", "json"]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: './src/assets'
    }]),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true,
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'styles')]
        },
        context: '/',
        postcss: () => [autoprefixer]
      }
    })
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'ts-loader']
    }, {
      test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.ico$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
      use: 'imports-loader?jQuery=jquery'
    }, {
      test: /(\.css|\.scss|\.sass)$/,
      use: cssConfig
    }]
  }
};