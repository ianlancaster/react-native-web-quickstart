import { expect } from 'chai'
import request from 'supertest'
import app from '../../index'

describe('GET /api/vi/helloWorldAsync', () => {
  it('should respond with the text "Hello!"', (done) => {
    request(app)
      .get('/api/v1/helloWorldAsync')
      .expect(200)
      .expect((res) => {
        expect(res.text).to.contain('Hello!')
      })
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  }).timeout(3000)
})

describe('undefined routes', () => {
  it('respond with a 404', (done) => {
    request(app)
      .get('/not-real')
      .expect(404, done)
  })
})
