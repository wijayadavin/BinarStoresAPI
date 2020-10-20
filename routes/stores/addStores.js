const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const helper = require('../../helpers/helper')

app.post('/stores', (req, res) => {
  const body = req.body
  console.log(body)
  const result = db.add('stores', body)
  const stores = db.get('stores')
  result.id = helper.getNextId(stores)
  console.log(result)
  if (!result) {
    res.status(400).send('Wrong body')
  } else {
    res.send(result)
  }
  return
})


module.exports = app