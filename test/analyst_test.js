const mongoose = require('mongoose'),
	Analyst = require('./../app/models/analyst'),
	db = 'mongodb://localhost:27017/naico',
	should = require('chai').should();

describe('Get analysts list', () => {
	before(() => {
		mongoose.Promise = global.Promise;
		mongoose.connect(db, { useNewUrlParser: true });
	});

	it('Check connection', (done) => {
		mongoose.connection
			.once('open', () => done())
			.on('error', (err) => {
				console.log(err);
			});
	});

	it('Find analysts', async () => {
		let analysts = await Analyst.find({});
		analysts.should.be.a('array');
		analysts.length.should.be.deep.eql(3);
	});

	after('Close db connection', () => {
		mongoose.connection.close();
	});
});
