var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index',
    output: {
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    devServer: {
        historyApiFallback:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}