const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/stores/listings', (req, res) => {
  const result = db.get('storeListings', req.query)
  res.send(result)
})


module.exports = app