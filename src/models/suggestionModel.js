import mongoose, { Schema } from 'mongoose';

const options = { timestamps: true };

const suggestions = new Schema(
	{
		text: String,
		name: String,
		clicks: Number,
	},
	options
);

export const suggestionsModel = mongoose.model('suggestions', suggestions);
