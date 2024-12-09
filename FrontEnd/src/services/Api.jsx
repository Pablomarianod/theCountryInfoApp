import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getAvailableCountries = async () => {
    try {
        // const response = await axios.get(`http://localhost:8080/api/countries/info/${code}`);
        const response = await axios.get(`${API_URL}/countries/available`);
        return response.data;
    } catch (error) {
        console.error('Error no countries', error);
        return [];
    }
};

export const getCountryInfo = async (countryCode) => {
    try {
        const response = await axios.get(`${API_URL}/countries/info/${countryCode}`);
        return response.data;
    } catch (error) {
        console.error(`Error no info for ${countryCode}:`, error);
        return null;
    }
};