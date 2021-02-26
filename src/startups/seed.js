import { suggestionsModel } from '../models/suggestionModel';

export const suggestions = ['apple', 'pear', 'orange', 'banana', 'strawberry'];
export async function seedSuggestions() {
	try {
		const data = suggestions.map((m) => {
			return { name: m, clicks: 0 };
		});

		const count = await suggestionsModel.find().count();

		if (count > 0) return;

		await suggestionsModel.insertMany(data);

		console.log('suggestions are inserted in database');

		return;
	} catch (error) {
		console.log(error);
		console.log('suggestions failed to insert');
	}
}
