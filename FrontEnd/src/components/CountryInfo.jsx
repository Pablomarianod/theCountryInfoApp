import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountryInfo } from '../services/Api';
import PopulationChart from './PopulationChart';

const CountryInfo = () => {
    const { code } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        console.log("Country code from params:", code);

        if (code) {
            const fetchCountryInfo = async () => {
                try {
                    const data = await getCountryInfo(code);
                    setCountryInfo(data);
                } catch (error) {
                    console.error('Error fetching country info:', error.message);
                    setCountryInfo(null);
                }
            };
            fetchCountryInfo();
        }
    }, [code]);

    if (!countryInfo) return <p>No info</p>;

    return (
        <article>
            <h2>{countryInfo.country}</h2>
            <img src={countryInfo.flagUrl} alt="Country Flag" />
            <h3>Border Countries</h3>
            <ul>
                {Array.isArray(countryInfo.borders) && countryInfo.borders.length > 0 ? (
                    countryInfo.borders.map((border) => (
                        <li key={border}>
                            <Link to={`/country/${border}`}>{border}</Link>
                        </li>
                    ))
                ) : (
                    <li>No border info</li>
                )}
            </ul>
            <h3>Population</h3>
            <PopulationChart data={countryInfo.populationData} />
        </article>
    );
};

export default CountryInfo;
