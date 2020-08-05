const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')

module.exports = (config) => {
  config.plugins = [
    ...config.plugins,
    new RetryChunkLoadPlugin({
      cacheBust: `function() {
			return Date.now();
		}`,
      maxRetries: 5,
      // @TODO: Add redirect to fatalErrorPage
      // lastResortScript: "window.location.href='/500.html';"
    }),
  ]

  return config
}
