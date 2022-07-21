// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')
// GET CONTROLLER FROM AXIOS REQ FROM REACT
router.get('/', async (req, res) => {
  let results = await Results.find({
    $text: { $search: req.query.search || '' }
  })
  console.log(results)
  res.json(results)
})
// Export module

module.exports = router
