const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use('/api/preSurvey', createProxyMiddleware({
        target: 'http://42.192.76.32:8002',
        changeOrigin: true,
    }));

    app.use('/api/afterSurvey', createProxyMiddleware({
        target: 'http://42.192.76.32:8002',
        changeOrigin: true,
        // pathRewrite: { //路径替换
        //     '^/api2': '/api', // axios 访问/api2 == target + /api
        // }
    }));

};