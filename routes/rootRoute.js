// === Setup ===
const express = require('express')
const router = express.Router()

const db = require('../controller/dbController')


// === a router to render index.ejs ===
router.get('/', (req, res) => {
  const stores = db.get('customers')
  res.status(200).render('root', { "stores": stores });
})

module.exports = router