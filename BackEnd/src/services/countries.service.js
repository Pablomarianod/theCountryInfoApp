const axios = require('axios');
const URL_NAGER = process.env.URL_NAGER;
const URL_COUNTRIES = process.env.URL_COUNTRIES;

const fetchAvailableCountries = async () => {
    const response = await axios.get(`${URL_NAGER}/AvailableCountries`);
    return response.data;
};

const axiosInstance = axios.create({
    timeout: 10000,
});

const fetchCountryInfo = async (countryCode) => {
    try {
        console.log(`Fetching info for country code: ${countryCode}`);

        const bordersRes = await axiosInstance.get(`${URL_NAGER}/CountryInfo/${countryCode}`);

        const countryName = bordersRes.data.commonName;
        const populationRes = await axiosInstance.post(`${URL_COUNTRIES}/countries/population`, { country: countryName });

        const flagRes = await axiosInstance.post(`${URL_COUNTRIES}/countries/flag/images`, { iso2: countryCode });

        return {
            country: countryName,
            borders: bordersRes.data.borders || 'No info',
            populationData: populationRes.data.data.populationCounts || 'No info',
            flagUrl: flagRes.data.data.flag || 'No info',
        };
    } catch (error) {
        console.error('Error fetching country info:', error.message);
        throw new Error('Failed to fetch country information');
    }
};


module.exports = { fetchAvailableCountries, fetchCountryInfo };
