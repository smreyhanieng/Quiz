const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signalSchema = Schema(
	{
		signalNumber: { type: String, required: true },
		status: { type: Number, required: true }, // 0 => open, 1 => target, 2 => stop
	},
	{ timestamps: true }
);

module.exports = mongoose.model('signal', signalSchema);
