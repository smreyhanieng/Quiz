const express = require('express');
const router = express.Router();

//* Controllers
const indexController = require('app/controllers/indexController');
const analystController = require('app/controllers/analystController');

// Store token data
router.get('/', indexController.index);
// Get analysts list
router.get('/analyst', analystController.index);

module.exports = router;
