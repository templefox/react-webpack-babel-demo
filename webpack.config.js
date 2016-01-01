var path = require('path');

module.exports = {
	context: __dirname + "/app",
	entry: {
		javascript: path.join(__dirname, 'app/app.js'),
		html: path.join(__dirname, 'app/index.html')
	},

	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
	},

	module: {
		loaders: [
		{
			test: /\.html$/,
			loader: "file?name=[name].[ext]",
		},
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel'],
		}
		],
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},
}