import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import './index.css'

function CountriesDisplay({ countryDetails }) {
    // console.log(countryDetails);
    // console.log(countryDetails[0].flags.png);
    // console.log(countryDetails[0].name); 
    // console.log(countryDetails[0].capital);
    // console.log(countryDetails[0].population);
    // console.log(countryDetails[0].languages[0].name);
    // console.log(countryDetails[0].currencies[0].name);
    // console.log(countryDetails[0].currencies[0].symbol);
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "180px" }}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' , marginBottom : "50px" }}>
                        <Card.Img variant="top" src={countryDetails[0].flags.png}  />
                        <Card.Body>
                            <ul style={{listStyle : "none" , padding : "0px"}}>
                                <li className="card-text">Country Name :- {countryDetails[0].name}</li>
                                <li className="card-text">Capital :- {countryDetails[0].capital}</li>
                                <li className="card-text">Population :- {countryDetails[0].population}</li>
                                <li className="card-text">Language :- {countryDetails[0].languages[0].name}</li>
                                <li className="card-text">Currancy Name :- {countryDetails[0].currencies[0].name}</li>
                                <li className="card-text">Currency Symbol :- {countryDetails[0].currencies[0].symbol}</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CountriesDisplay
