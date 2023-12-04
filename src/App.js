import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [countryNames, setCountryNames] = useState('');

  useEffect(()=>{ 

    fetch('https://restcountries.com/v2/all')
    .then((data) => data.json())
    .then((countries) => getCountries(countries))

  },[]);

  function getCountries(countries){
   
    setCountryNames(countries);
  }

  return (
    <div className="App">
      
      <CountriesList countries = {countryNames}/>
    </div>
  );
}

export default App;
