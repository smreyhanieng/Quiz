const { gql } = require('apollo-server-express');

// GraphQL Schemas
class typeDefsController {
	constructor() {
		this.typeDefs = gql`
			type Query {
				token(pair: String): [Token]
			}

			type Token {
				timestamp: String
				open: String
				high: String
				low: String
				close: String
				volume: String
				createdAt: String
				updatedAt: String
			}
		`;
	}
}

module.exports = new typeDefsController();
