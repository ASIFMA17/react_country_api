import React  from 'react'
import { useEffect ,useState } from 'react';
import CountriesDisplay from './CountriesDisplay';

function CountriesDetails({ countryName }) {

  // console.log("Details------>", countryName);

    // console.log(countryName);

    const [countryDetails,setCountryDetails] = useState('') ;

    useEffect(()=>{

        fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
        .then((res) => res.json())
        .then((countryData) => setCountryDetails(countryData))
    },[countryName]);


  return (
    <div>
      { countryDetails && <CountriesDisplay countryDetails = { countryDetails }/> }
    </div>
  )
}

export default CountriesDetails
