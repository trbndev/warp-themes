module.exports = {
	async rewrites() {
		return [
			{
				source: '/d/:hash*',
				destination: '/api/:hash*',
			},
		];
	},
};
