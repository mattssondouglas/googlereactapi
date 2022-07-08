// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')
// Create POST controller
router.post('/', async (req, res) => {
  let results = await Results.find({
    description: req.body.searchBar
  })
  res.render('results', { results })
})
// Export module

module.exports = router
