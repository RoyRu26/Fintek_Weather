const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherDataController');

router.post('/weather', weatherController.fetchWeatherData);

module.exports = router;