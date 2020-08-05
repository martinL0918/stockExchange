const path = require('path');
module.exports = {
    //如果有一個以上的檔案需要打包，可以傳陣列給entry
    mode: 'development',
    entry: ['./JS/navNfooter.jsx'],
    output: {
        filename: './JS/bundle.js',
        path: path.resolve(__dirname, './'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    }
};