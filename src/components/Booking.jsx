import React, {useState} from "react";
import Radio from "./subcomponents/Radio"
import FareType from "./subcomponents/FareType";
import Dropdown from "./subcomponents/Dropdown";
import DropdownDate from "./subcomponents/DropdownDate";
import DropdownPassenger from "./subcomponents/DropdownPassenger";
// import FlightResult from "./subcomponents/FlightResult";


function Booking({searchFlight}){
    // The parent component for radio button (Booking) manages the selected radio button, 
    // and each Radio component is aware of its own ID and the selected ID. 
    // When a radio button is clicked, it updates the state in the parent, and only the selected 
    // radio button gets the 'checked' class. 
    const setTravelDateHandler = (date) => {
        setTravelDate(date)
    }

    const sourceHandler = (sourceName) => {
        setSource(sourceName)
    }

    const destinationHandler = (destinationName) => {
        setDestination(destinationName)
    }
    
    const [selectedRadio, setSelectedRadio] = useState('one-way');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [travelDate, setTravelDate] = useState(new Date());
    console.log(source + ' ' + destination + ' ' + travelDate)
    return(
        <div className="booking-container">
            <div className="booking-heading">
                <h1>Book Domestic and International Flight Tickets</h1>
            </div>
            
            <div className="booking-card">
                <div className="radio-group">
                    <Radio id="one-way" text="One-way" selected={selectedRadio} name={'booking-type'} setter={setSelectedRadio} />
                    <Radio id="round-trip" text="Round-trip" selected={selectedRadio} name={'booking-type'} setter={setSelectedRadio} />
                    <Radio id="mutli-city" text="Mutli-city" selected={selectedRadio} name={'booking-type'} setter={setSelectedRadio} />
                </div>

                {/* From */}
                <div className="booking-selection-container">
                    <Dropdown type={'From'} styleType={'input'} setCityHandler={sourceHandler}/>
                    <Dropdown type={'To'} styleType={'input'} setCityHandler={destinationHandler}/>
                    <DropdownDate type={'Departure'} styleType={'date'} setTravelDateHandler={setTravelDateHandler}/>
                    <DropdownDate type={'Return'} styleType={'date'}/>
                    <DropdownPassenger type={'Passenger'} styleType={'passenger'}/>
                </div>
                
                <FareType/>
                <button className="search-button" onClick={() => searchFlight(source, destination, travelDate)}>SEARCH FLIGHTS </button>
            </div>
        </div>
    );
}

export default Booking;