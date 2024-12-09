import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAvailableCountries } from '../services/Api';
import './CountryList.css';

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getAvailableCountries();
            setCountries(data);
        };
        fetchCountries();
    }, []);

    return (
        <article>
            <h2>Countries List</h2>
            <ul>
                {countries.map((country) => (
                    <li key={`${country.alpha2Code}-${country.name}`}> 
                        <Link to={`/country/${country.alpha2Code}`}>
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </article>
    );
};

export default CountryList;