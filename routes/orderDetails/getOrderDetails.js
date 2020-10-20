const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/orders/details', (req, res) => {
  const result = db.get('orderDetails', req.query)
  res.send(result)
})


module.exports = app