const path = require('path')
const WebpackNodeExternals = require('webpack-node-externals')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)

module.exports = {
	mode: 'production',
	devtool: 'eval-source-map',
	entry: './src/index.ts',
	output: { path: path.resolve(__dirname, 'dist'), filename: 'index.js' },
	stats: 'minimal',
	target: 'node',
	module: {
		rules: [
			{
				use: ['babel-loader', { loader: 'eslint-loader', options: { fix: true } }],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			reportFilename: path.resolve(__dirname, 'dist', 'bundle_size.html'),
			openAnalyzer: false,
			logLevel: 'silent',
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.json'],
		modules: [path.resolve(__dirname, 'src')],
		plugins: [PnpWebpackPlugin],
	},
	resolveLoader: { plugins: [PnpWebpackPlugin.moduleLoader(module)] },
	externals: [WebpackNodeExternals()],
}
