const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, url')
  next()
})

app.use(require('./routes/helloWorldAsync'))

app.listen(process.env.PORT || 3001, () => {
  console.log('express server listening on port 3001')
})

module.exports = app
