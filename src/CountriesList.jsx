import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Options from './Options';
import CountriesDetails from './CountriesDetails';
import './index.css'
import { useState } from "react";

function CountriesList({ countries }) {

    const [countryName, setCountryName] = useState('');


    function getCountry(e){
        // console.log(e.target.value);
        setCountryName(e.target.value);

    }

    return (
        <div className='cont-margin'> 
            <Row className='m-0'>
                <Col className='p-0'>
                    <Form.Select className="select" aria-label="Default select example" onChange={(e)=>getCountry(e)}>
                        <option>Open this select menu</option>
                        
                        {countries && countries.map((country, index)=>(
                            <Options country={country} key={index}/>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            { countryName && 
             <CountriesDetails countryName={countryName} />
            }
           
        </div>
    )
}

export default CountriesList
