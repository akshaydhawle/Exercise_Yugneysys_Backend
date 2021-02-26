import { suggestionsModel } from '../models/suggestionModel';
import { suggestions } from '../startups';

export const suggestionController = {
	ping,
	addSuggestion,
	getSuggestions,
};

async function ping(req, res) {
	res.send('heath ok');
}

async function addSuggestion(req, res) {
	try {
		const { name = '', text = '' } = req.body;

		const data = await suggestionsModel.findOne({ $and: [{ text }, { name }] });

		if (data) {
			await suggestionsModel.findOneAndUpdate(
				{ $and: [{ name }, { text }] },
				{ $inc: { clicks: 1 } },
				{ upsert: true }
			);
		} else {
			await suggestionsModel({ name, text, clicks: 1 }).save();
		}

		res.status(201).send('clicked successfully');
	} catch (error) {
		return res.status(500).send({ msg: 'internal server error' });
	}
}

async function getSuggestions(req, res) {
	try {
		const { text = '' } = req.query;

		const suggestionsRes = await suggestionsModel
			.find({ text })
			.sort({ clicks: -1 })
			.select('name text clicks')
			.limit(2);

		let [first, second] = suggestionsRes;

		const otherSuggestions = suggestions.filter((m) => m !== first?.name && m !== second?.name);

		let suggestionsElements = [];
		if (first) suggestionsElements.push(first);
		if (second) suggestionsElements.push(second);

		return res.send({
			Suggestions: suggestionsElements,
			Other: otherSuggestions,
		});
	} catch (error) {
		return res.status(500).send({ msg: 'internal server error' });
	}
}
