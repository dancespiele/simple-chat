module.exports = webpackMerge(commonTestConfig, {
    target: 'node',

    externals: [
        nodeExternals()
    ]
});
