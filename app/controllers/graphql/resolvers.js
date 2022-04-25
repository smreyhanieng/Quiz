const controller = require('app/controllers/controller');

// GraphQL functions
class resolversController extends controller {
	constructor() {
		super();
		this.resolvers = {
			Query: {
				token: async (parent, args) => {
					if (args.pair == 'BTC/USDT') return await this.model.USDT.find();
					else if (args.pair == 'BNB/BTC') return await this.model.BNB.find();
				},
			},
		};
	}
}

module.exports = new resolversController();
