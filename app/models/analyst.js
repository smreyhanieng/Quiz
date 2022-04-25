const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analystSchema = Schema(
	{
		name: { type: String, required: true },
		mobile: { type: String, required: true },
		email: { type: String, required: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('analyst', analystSchema);
