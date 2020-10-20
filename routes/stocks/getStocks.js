const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/products/stocks', (req, res) => {
  const result = db.get('productsStocks', req.query)
  res.send(result)
})


module.exports = app