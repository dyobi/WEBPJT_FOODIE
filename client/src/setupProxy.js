const { createProxyMiddleware } = require('http-proxy-middleware');

const API_IP = 'localhost';
const API_PORT = 8081;

module.exports = (app) => {
	app.use(
		'/api',
		createProxyMiddleware({
			target: `http://${API_IP}:${API_PORT}`,
			changeOrigin: true
		})
	);
};