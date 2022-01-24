const path = require('path');
const environment = process.env.NODE_ENV || 'dev';

module.exports = {
    mode: 'production',
    entry: `./src/index.js`,
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名(省略可)
        path: `${__dirname}/public/js`,
        publicPath: '/js/',
        // 出力ファイル名
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js'),
    },

    devServer: {
        static: "public",
        open: true,
        historyApiFallback: true,
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    }
};