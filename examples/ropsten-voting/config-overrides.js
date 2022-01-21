const webpack = require('webpack');

module.exports = (config) => {

    // Override webpack 5 config from react-scripts to load polyfills
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.fallback) config.resolve.fallback = {};
    Object.assign(config.resolve.fallback, {
            "buffer": require.resolve("buffer"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert")
        }
    )

    if (!config.plugins) config.plugins = []
    config.plugins.push(
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }));

    return config;
}