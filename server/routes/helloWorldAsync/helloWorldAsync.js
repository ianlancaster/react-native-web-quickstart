const express = require('express')
const router = express.Router()

router.get('/api/v1/helloWorldAsync', (req, res) => {
  setTimeout(() => {
    res.status(200).json('Hello!')
  }, 2000)
})

module.exports = router
