const express = require('express')
const router = express.Router()

router.get('/api/v1/helloWorldAsync', (req, res) => {
  setTimeout(() => {
    res.json('Hello!')
  }, 2000)
})

module.exports = router
