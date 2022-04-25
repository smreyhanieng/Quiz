const autoBind = require('auto-bind');

const BNB = require('app/models/bnb');
const USDT = require('app/models/usdt');
const Analyst = require('app/models/analyst');
const Decision = require('app/models/decision');
const Signal = require('app/models/signal');

module.exports = class controller {
	constructor() {
		autoBind(this);
		this.model = {
			BNB,
			USDT,
			Analyst,
			Decision,
			Signal,
		};
	}

	// Convert array to object with custom keys (Transform)
	convertArrayToObject(arr) {
		return arr.map(([timestamp, open, high, low, close, volume]) => ({
			timestamp,
			open,
			high,
			low,
			close,
			volume,
		}));
	}
};
