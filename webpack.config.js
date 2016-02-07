var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
				loader: 'style!css', 
				test: /\.css$/, 
				include: [
					path.resolve(__dirname, 'src/styles')
				] 
			}
        ]
    },
	plugins: [
        new CopyWebpackPlugin([ 
            { from: 'index.html' }
		])
	]
};