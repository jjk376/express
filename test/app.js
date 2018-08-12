const should = require('should');
const request = require('supertest');
const app = require('../app.js');

describe('GET /hello', function () {
	it('respond with text', function () {
		return request(app)
			.get('/hello')
			.set('Accept', 'text/html')
			.expect(200)
			.then(res => {
				const text = res.text;
				should.equal(text, 'hello world!');
			})
	});
});

describe('GET /hihi', function () {
	it('respond with text', function () {
		return request(app)
			.get('/hihi')
			.set('Accept', 'text/html')
			.expect(200)
			.then(res => {
				const text = res.text;
				should.equal(text, 'intro');
			})
	});
});

describe('GET /hihi with query like', () =>{
    it('?abc=john then respond with john', function() {
        return request(app)
              .get('/hihi')
              .query({abc: 'john'})
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, 'abc=john');
              })
    });
    it('?abc=??!@@ then respond with ??!@@', function() {
        return request(app)
              .get('/hihi')
              .query({abc: '??!@@'})
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, 'abc=??!@@');
              })
    });
    it('?abc=??!@@##123 then respond with ??!@@', function() {
        return request(app)
              .get('/hihi?abc=??!@@##123')
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, 'abc=??!@@');
              })
    });
});


describe('GET /hihi with param', () => {
    it('123 then respond with 123', function() {
        return request(app)
              .get('/hihi/123')
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, '123');
              })
    });
    it('??!@#@ then respond with intro', function() {
        return request(app)
              .get('/hihi/??!@#@')
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, 'intro');
              })
    });
    it('#123 then respond with intro', function() {
        return request(app)
              .get('/hihi/#123')
              .set('Accept', 'text/html')
              .expect(200)
              .then(res => {
                  const text = res.text;
                  should.equal(text, 'intro');
              })
    });
});
