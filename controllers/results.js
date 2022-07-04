// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
router.get('/results', (req, res) => {
  res.render('results')
})
// Export module
module.exports = router
