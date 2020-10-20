const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/product/images', (req, res) => {
  const result = db.get('productImages', req.query)
  res.send(result)
})


module.exports = app