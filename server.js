import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.babel';
import open from 'open';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const port = 3007;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    quiet: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'))
});

app.listen(port, (err) => {
    if (err) 
        console.error(err);
    else 
        open(`http://localhost:${port}`);

    }
);