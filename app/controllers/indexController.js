const controller = require('app/controllers/controller');
const ccxt = require('ccxt');

class indexController extends controller {
	async index(req, res) {
		const binance = new ccxt.binance();

		// Get all data from ccxt
		console.time();
		const usdt = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 4000);
		const bnb = await binance.fetchOHLCV('BNB/BTC', '1m', undefined, 4000);
		console.timeEnd(); // ~ 3s

		console.time();
		// Delete all documents from collections
		await this.model.BNB.deleteMany();
		await this.model.USDT.deleteMany();

		// Insert BNB/BTC data to collection
		await this.model.BNB.insertMany(this.convertArrayToObject(bnb))
			.then((docs) => {})
			.catch((err) => {
				throw err;
			});
		// Insert BTC/USDT data to collection
		await this.model.USDT.insertMany(this.convertArrayToObject(usdt))
			.then((docs) => {})
			.catch((err) => {
				throw err;
			});
		console.timeEnd(); // ~ 1s

		res.json('BTC/USDT & BNB/BTC data Stored in mongodb!!');
	}
}

module.exports = new indexController();
