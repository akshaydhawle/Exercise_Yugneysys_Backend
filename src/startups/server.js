import { SERVER } from '../config';
export const startServer = (app) => {
	app.listen(SERVER.PORT, () => {
		console.log(`server listening on port ${SERVER.PORT}`);
	});
};
