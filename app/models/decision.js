const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const decisionSchema = Schema(
	{
		analyst: { type: Schema.Types.ObjectId, ref: 'analyst', required: true },
		signal: { type: Schema.Types.ObjectId, ref: 'signal', required: true },
		analystDecision: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('decision', decisionSchema);
