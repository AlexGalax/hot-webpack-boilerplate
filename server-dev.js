const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack-config/dev')
const port = 3000;

config.devServer = {
    static: './public',
    hot: false,
    client: false,

}
config.entry.push('webpack/hot/dev-server.js');
config.entry.push('webpack-dev-server/client/index.js?hot=true&live-reload=true');

const compiler = webpack(config);

// `hot` and `client` options are disabled because we added them manually
const server = new webpackDevServer({ hot: false, client: false, port: port }, compiler);

(async () => {
    await server.start();
    console.log('dev server is running on port ' + port);
})();