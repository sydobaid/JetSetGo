import {React, useState, useEffect} from "react";
import Navbar from "./Navbar";
import Booking from './Booking';
import FlightResult from "./subcomponents/FlightResult";

import {flightSearch} from "./../Utils/common"

function App(){
    const [flightsData, setFlightsData] = useState([]);
    const [filteredFlight, setFilteredFlight] = useState([]);
    const [checkedFlight, setCheckedFlight] = useState([]);
    const [searched, setSearched] = useState(false);
    
    const listOfAirlines = new Set(flightsData.map((flight) => flight.airlineName))

    const searchFlight = (source, destination, date) => {
        if (source === '' || destination === ''){
            return
        }
        setFlightsData(flightSearch(source?.trim().split(' ')[2].slice(1,4), destination?.trim().split(' ')[2].slice(1,4), date))
        setFilteredFlight(flightsData)
        setSearched(true)
    }

    const filterFlight = (name) => {
        if (!checkedFlight.includes(name)) {
            setCheckedFlight([...checkedFlight, name])            
        } else {
            setCheckedFlight(checkedFlight.filter((val) => !(val === name)))
        }
    }

    useEffect(()=> {
        if (checkedFlight.length > 0)
        {
            setFilteredFlight(flightsData.filter((flight) => checkedFlight.includes(flight.airlineName)))
        }
        else
        {
            setFilteredFlight(flightsData)
        }
    }, [checkedFlight, flightsData])

    const sortFlight = (sortType) => {
        if (checkedFlight.length > 0)
        {
            sortType === 'high' ? setFilteredFlight([...filteredFlight].sort((a,b) => b.fare - a.fare)) : setFilteredFlight([...filteredFlight].sort((a,b) => a.fare - b.fare))
        } else 
        {
            sortType === 'high' ? setFilteredFlight([...flightsData].sort((a,b) => b.fare - a.fare)) : setFilteredFlight([...flightsData].sort((a,b) => a.fare - b.fare))
        }
    }

    return (
        <div className="mainDiv">
            <Navbar />
            <Booking searchFlight={searchFlight} />
            {
                flightsData.length !== 0 ? (
                    <>

                    <div className="button-container">
                        <>
                        {
                            Array.from(listOfAirlines)?.map((name) => (
                                    <div>
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

                filteredFlight.length > 0 ? ( 
                    filteredFlight?.map((flight) => (
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
                    <div className="sorry-message" style={{display: `${(searched && flightsData.length === 0)? 'flex' : 'none'}`}}>
                        <h1>Sorry Couldnt find any flights !!</h1>
                    </div>
                )
            }
    
        </div>
    );
}

export default App;