const { fetchAvailableCountries, fetchCountryInfo } = require('../services/countries.service');

const getAvailableCountries = async (req, res) => {
    try {
        const countries = await fetchAvailableCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCountryInfo = async (req, res) => {
    try {
        const { countryCode } = req.params;
        console.log(`Fetching info for country code: ${countryCode}`);
        const countryInfo = await fetchCountryInfo(countryCode);
        res.status(200).json(countryInfo);
    } catch (error) {
        console.error('Error fetching country info:', error.message);

        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data });
        }

        res.status(500).json({ error: 'An error occurred while fetching country info' });
    }
};



module.exports = { getAvailableCountries, getCountryInfo };