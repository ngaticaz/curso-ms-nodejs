let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:8080';

describe('Insert a car into collections "cars", DDBB db_carsInventory: ', ()=>{

	it('Should Insert a car into collections "cars" ', (done) => {
		chai.request(url)
			.post('/insertcar')
			.send({mark:'Mahindra',year:'2017',price:'4500000'})
			.end( (err,res)=>{
				console.log(res.body);
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('message').to.be.equal('Valid Request');
				done();
			});
	});
	
	it('Should Get status->500 for invalid data type of "year" ', (done) => {
		chai.request(url)
			.post('/insertcar')
			.send({mark:'Mahindra',year:'abcd',price:'4500000'})
			.end( (err,res)=>{
				//console.log(res.body.info);
				expect(res).to.have.status(500);
				expect(res.body.info).to.have.property('errors');
				done();
			});
	});
	
	it('Should Get status->500 for invalid data type of "price" ', (done) => {
		chai.request(url)
			.post('/insertcar')
			.send({mark:'Mahindra',year:'2010',price:'abcd'})
			.end( (err,res)=>{
				//console.log(res.body.info);
				expect(res).to.have.status(500);
				expect(res.body.info).to.have.property('errors');
				done();
			});
	});
	
});