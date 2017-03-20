const request = require('supertest');
const app = require('../index');

describe('RESTful API', function() {
  describe('GET /', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .get('/')
        .expect(200, done)
    })

    it('should respond with a content type of text/html', function(done) {
      request(app)
        .get('/')
        .expect('Content-Type', /text\/html/, done)
    })

    it('should respond with a paragraph containing hello', function(done) {
      request(app)
        .get('/')
        .expect('<p>hello</p>', done)
    })
  });

  describe('GET /:word', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .get('/word')
        .expect(200, done)
    })

    it('should respond with a content type of text/html', function(done) {
      request(app)
        .get('/anotherword')
        .expect('Content-Type', /text\/html/, done)
    })

    it('should respond with a paragraph containing :word', function(done) {
      request(app)
        .get('/word')
        .expect('<p>word</p>')

      request(app)
        .get('/anotherword')
        .expect('<p>anotherword</p>', done)
    })
  });
});
