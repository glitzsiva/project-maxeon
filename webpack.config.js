const path =require('path')
module.exports={
    entry:['babel-polyfill','./src/app.js'],
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
}