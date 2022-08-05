module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	async rewrites() {
		return [
			{
				source: '/d/:hash*',
				destination: '/api/:hash*',
			},
		];
	},
};
