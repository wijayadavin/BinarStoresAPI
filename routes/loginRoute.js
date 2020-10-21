const express = require('express')
const hyperid = require('hyperid')
const app = express.Router()
const db = require('../../controller/dbController')
const hyperid = require('hyperid')

app.post('/login', (req, res) => {
  const body = req.body
  const result = db.add('users', body)
  if (result) {
    const instance = hyperid()
    result.token = instance()
    res.send(result)
  } else {
    res.status(401).send('Unauthorized')
  }
  return
})


module.exports = app