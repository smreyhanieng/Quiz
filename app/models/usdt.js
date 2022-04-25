const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usdtSchema = Schema(
	{
		timestamp: { type: String, required: true },
		open: { type: String, required: true },
		high: { type: String, required: true },
		low: { type: String, required: true },
		close: { type: String, required: true },
		volume: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('usdt', usdtSchema);
