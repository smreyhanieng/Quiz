const express = require('express');
const router = express.Router();

//* Main Routes
const mainRouter = require('app/routes/main');
router.use('/', mainRouter);

module.exports = router;
