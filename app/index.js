const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('app/controllers/graphql/typeDefs').typeDefs;
const resolvers = require('app/controllers/graphql/resolvers').resolvers;

module.exports = class Application {
	constructor() {
		this.setupApolloServer();
		this.setMongoConnection();
		this.setRouter();
	}

	async setupApolloServer() {
		const server = new ApolloServer({
			typeDefs,
			resolvers,
		});
		await server.start();
		server.applyMiddleware({ app });
		app.listen(config.port, () =>
			console.log(`Apollo server running on port: ${config.port}`)
		);
	}

	setMongoConnection() {
		mongoose.Promise = global.Promise;
		mongoose
			.connect(config.database.url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log('DB Connected'))
			.catch((err) => console.log(`DB Connection Error: ${err}`));
	}

	setRouter() {
		app.use(require('app/routes'));
	}
};
