const chai = require('chai'),
	expect = chai.expect,
	url = `http://localhost:4000/`,
	request = require('supertest')(url),
	should = require('chai').should();

describe('Token Routes', () => {
	it('Returns BTC/USDT data', (done) => {
		request
			.post('graphql')
			.send({
				query:
					'{ token(pair: "BTC/USDT") { timestamp open high low close volume createdAt updatedAt } }',
			})
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				let token = res.body.data.token[0];
				token.should.have.property('timestamp');
				token.should.have.property('open');
				token.should.have.property('high');
				token.should.have.property('low');
				token.should.have.property('close');
				token.should.have.property('volume');
				token.should.have.property('createdAt');
				token.should.have.property('updatedAt');
				done();
			});
	});

	after(async () => {
		console.log('Test finished!!');
	});
});
