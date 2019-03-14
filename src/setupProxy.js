const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    
    app.use(
      proxy("/juejin", {
        target: "http://139.196.125.95:3000/",
        changeOrigin: true,
        pathRewrite: {
          '^/juejin': ''
        }
      })
    );
};

