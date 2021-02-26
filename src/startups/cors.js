export const setupCors = (app) => {
	app.use((req, res, next) => {
		let origin = req.header('Origin');
		if (!origin) {
			origin = '*';
		}
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader(
			'Access-Control-Allow-Headers',
			'x-picstagraph-token,authorization,Authorization,X-Requested-With,content-type'
		);
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		if (req.method === 'OPTIONS') {
			res.sendStatus(200);
		} else {
			next();
		}
	});
};
