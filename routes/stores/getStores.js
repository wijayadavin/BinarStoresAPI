const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/stores', (req, res) => {
  const result = db.get('stores', req.query)
  res.send(result)
})


module.exports = app