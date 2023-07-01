const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true
    });

    app.use(context, appProxy);
};