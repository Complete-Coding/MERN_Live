const express = require('express');
const exchangeController = require('../controllers/exchangeController');

const router = express.Router();

router.post('/convert', exchangeController.convertCurrency);

module.exports = router;
