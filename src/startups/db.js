import { connect } from 'mongoose';
import { MONGO_CONFIG } from '../config';

export const setupDb = async () => {
	const options = {
		useUnifiedTopology: true,
		connectTimeoutMS: 5000,
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
	};

	connect(MONGO_CONFIG.URI, options)
		.then(() => console.log(`connected to mongodb database ${MONGO_CONFIG.URI.split('/').pop()}`))
		.catch((err) => {
			console.error('error occured while connecting to mongodb', err);
		});
};
