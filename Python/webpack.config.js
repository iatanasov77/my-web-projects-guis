var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: __dirname,
	
	entry: './assets/js/app.js', 
	
	output: {
	    path: path.resolve('./static/webpackbundles/'),
	    publicPath: '/static/webpackbundles/',
	    filename: "[name]-[hash].js",
	},
	
	plugins: [
	    new BundleTracker({filename: './webpack-stats.json'}),
	    
	    new CopyWebpackPlugin([
            {
	            from: './assets/img',
		     	to: 'img/[name].[ext]',
            },
            {
			    from: './node_modules/bootstrap-sass/assets/fonts/bootstrap',
			    to: 'fonts/bootstrap/[name].[ext]',
			}
        ]), 
	],
	
	module: {
	    rules: [
	      	{ 
	      		test: /\.js$/, 
	      		use: 'babel-loader', 
	      		exclude: /node_modules/,
	      	},
	     	{
	     		test: /\.jsx$/, 
	     		use: 'babel-loader', 
	     		exclude: /node_modules/,
	     	},
	     	
	     	{
			    test: /\.s[ac]ss$/i,
			    use: [
			      // Creates `style` nodes from JS strings
		          "style-loader",
		          // Translates CSS into CommonJS
		          "css-loader",
			      // Compiles Sass to CSS
			      "sass-loader",
			    ],
			},
			{
			    test: /\.css$/i,
			    use: "css-loader",
			},
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2|png|jpg|jpeg)/,
                use: "url-loader?limit=8192"
            },
	    ],
	},
}