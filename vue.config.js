module.exports = {
    publicPath: "/portfolio.io/",
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}