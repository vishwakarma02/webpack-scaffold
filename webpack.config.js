let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPugin = require('browser-sync-webpack-plugin');

module.exports = {
    // mode: 'production',
    entry: {
        //add as multiple number of entry points here
        //for separate modules
        main: './src/js/index.js',
        module: './src/js/module1.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        //used for creating new clean build everytime
        // new CleanWebpackPlugin(['dist']),

        //use to watch any change in src file
        //including htmls also
        new BrowserSyncPugin({
            host: 'localhost',
            port: 3000,
            files: ['./dist/*.html'],
            server: {baseDir: ['dist']}
        },
        {
            //to prevent reload of browser-sync
            //and wait for webpack to do this
            reload: false
        }
    ),
        new HtmlWebpackPlugin({ 
            // used to minify htmls
            title: 'output management',
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                //can add more options
                //options are listed here: https://github.com/kangax/html-minifier#options-quick-reference
                html5: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                removeEmptyAttributes: true
            }
        })
    ],
}