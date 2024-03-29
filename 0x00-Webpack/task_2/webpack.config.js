const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
	    main: path.resolve(__dirname, './js/dashboard_main.js'),
	   },
	output: {
	   path: path.resolve(__dirname, 'public'),
	   filename: 'bundle.js',
	},
	performance: {
		hints: false,
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000,
	},
	module: {
	  rules: [
	    {
	      test: /\.css$/i,
	      use: ["style-loader", "css-loader"]
	    },
	    {
	      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	      type: 'asset/resource',
	      use: [
		'file-loader',
		     {
			loader: 'image-webpack-loader',
			options: {
				 bypassOndebug: true,
				 disable: true,
			 },
		     },
	      ]
	    },
	  ]
	},
};
