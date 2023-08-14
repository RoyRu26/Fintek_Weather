const axios = require('axios');

exports.fetchWeatherData = async (req, res) => {
    const { city } = req.body;

    if (!city) {
        return res.status(404).json({ message: 'Please enter a city name' });
    }

    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = response.data;
        if (response.status === 200) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: 'Invalid input' });
        }
    } catch (error) {
        const errorMessage = error.response.data.error.message;
        res.status(500).json({ message: errorMessage });
    }
};