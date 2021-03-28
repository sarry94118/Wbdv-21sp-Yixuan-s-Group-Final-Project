const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('api/', {
        target: 'https://api.petfinder.com',
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //     "^/api": "/api"
        // }
    }))
}


//  "proxy": "https://api.petfinder.com"
