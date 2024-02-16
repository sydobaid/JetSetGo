import {React, useState} from "react";
import Navbar from "./Navbar";
import Booking from './Booking';
import FlightResult from "./subcomponents/FlightResult";

import {flightSearch} from "./../Utils/common"

function App(){
    const [flightsData, setFlightsData] = useState([]);
    const [filteredFlight, setFilteredFlight] = useState(flightsData);
    const [checkedFlight, setCheckedFlight] = useState([]);
    
    const listOfAirlines = new Set(flightsData.map((flight) => flight.airlineName))
    console.log(listOfAirlines);

    const searchFlight = (source, destination, date) => {
        if (source === '' || destination === ''){
            return
        }
        setFlightsData(flightSearch(source?.trim().split(' ')[2].slice(1,4), destination?.trim().split(' ')[2].slice(1,4), date))
        setFilteredFlight(filteredFlight)
        console.log(flightsData, ' adawd');
    }

    const filterFlight = () => {
        let selectedFlights = Array.from(document.getElementsByClassName("checkbox"));
        console.log(selectedFlights)
        // if (selectedFlights.length > 0)
        //     setFilteredFlight(flightsData.filter((flight) => selectedFlights.includes(flight.airlineName)))
    }

    const sortFlight = (sortType) => {
        sortType === 'high' ? setFlightsData([...flightsData].sort((a,b) => b.fare - a.fare)) : setFlightsData([...flightsData].sort((a,b) => a.fare - b.fare))
    }

    return (
        <div className="mainDiv">
            <Navbar />
            <Booking searchFlight={searchFlight} />
            {/* Buttons */}
            {
                flightsData.length !== 0 ? (
                    <>

                    <div className="button-container">
                        <>
                        {
                            Array.from(listOfAirlines)?.map((name) => (
                                    <div>
                                        {console.log(listOfAirlines)}
                                        <input type="checkbox" name={name} id={name} value={name} classsName="checkbox" onClick={() => filterFlight(name)}/>
                                        <label htmlFor={name}>{name}</label>
                                    </div>
                                )
                            )
                        }
                        </>
                        <button className="price-sort-button" onClick={() => sortFlight('low')}> Price - Low to High ↑</button>
                        <button className="price-sort-button" onClick={() => sortFlight('high')}> Price - High to Low ↓</button>
                    </div>
                    </>
                ) : (<></>)
            }
            {  
                flightsData.length > 0 ? ( 
                    flightsData?.map((flight) => (
                            <FlightResult
                                airlineName = {flight.airlineName}
                                flightNumber = {flight.flightNumber}
                                depTime = {flight.departureTime}
                                sourceCity = {flight.sourceCity}
                                arrTime = {flight.arrivalTime}
                                destinationCity = {flight.destinationCity}
                                totalDuration = {flight.travelTime}
                                fare = {flight.fare}
                            />
                        )
                    ) 
                ) : (
                    <div className="sorry-message">
                        <h1>Sorry Couldnt find any flights !!</h1>
                    </div>
                )
            }
    
        </div>
    );
}

export default App;