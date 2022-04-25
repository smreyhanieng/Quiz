const database = require('config/database');

module.exports = {
	database,
	port: process.env.SERVER_PORT,
	debug: true,
};
