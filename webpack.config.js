const path = require('path');

module.exports = {
    mode: 'development',
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