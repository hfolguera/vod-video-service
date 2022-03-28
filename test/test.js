var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var app = require('../app')
var sleep = require('sleep');

chai.use(chaiHttp);

sleep.sleep(5);

describe('Homepage', () => {
    it('should show the Hello World message', done => {
      chai
        .request(app)
        .get('/')
        .end((error, res) => {
          res.should.have.status(200);
          res.text.should.equal('Hello World!');
          done();
        })
    })
  });

// describe('GET /video', () => { // TODO
//     it('should return videos', done => {
//       chai
//         .request(app)
//         .get('/video')
//         .end((error, res) => {
//           res.should.have.status(200);
//           res.should.be.json;
//           res.body[0].should.have.property('_id');
//           res.body[0].should.have.property('title');
//           res.body[0].should.have.property('uploaddate');
//           res.body[0].should.have.property('user');
//           res.body[0].should.have.property('url');
//           res.body[0].should.have.property('thumbnails');
//           res.body[0].should.have.property('tags');
//           done();
//         })
//     })
//   });