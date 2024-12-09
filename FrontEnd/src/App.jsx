import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<CountryList />} />
              <Route path="/country/:code" element={<CountryInfo />} />
          </Routes>
      </Router>
  );
};

export default App
