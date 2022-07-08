// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')
// Create POST controller
router.post('/', async (req, res) => {
  let results = await Results.find({
    $text: { $search: req.body.searchBar }
    // $or: [
    //   { description: { $regex: req.body.searchBar, $options: 'i' } },
    //   { title: { $regex: req.body.searchBar, $options: 'i' } }
    // ]
  })
  res.render('results', { results })
})
// Export module

module.exports = router
