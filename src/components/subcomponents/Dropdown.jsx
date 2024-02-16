import React, { useState, useRef, useEffect } from "react";
import {setSourceDestinationTray} from "../../Utils/common"

function Dropdown(props) {
  const destinations = Array.from(setSourceDestinationTray());
  console.log(destinations)
  
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
  let handler = (e) => {
    if (dropdownRef.current === undefined)
    {
      return
    }
    if(!dropdownRef.current?.contains(e.target)) {
      setDropDown(false)
    }
  }
  document.addEventListener('mousedown', handler);
  });

  

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    // Filter destinations based on user input
    const matchedDestinations = destinations.filter(
      (destination) =>
        destination.toLowerCase().includes(userInput.toLowerCase())
    );
    setSuggestions(matchedDestinations);
  };

  const fromOrTo = {"DefaultFrom": ["Mumbai,", "India", "(BOM)"], "DefaultTo": ["Delhi,", "India", "(DEL)"]}
  // Fix this
  const handleInputClick = () => {
    setDropDown(true)
  };

  return (
    <div className="dropdown-container"  ref={dropdownRef} >
      <label style={dropDown ? {zIndex: '101'} : {}} htmlFor={props.type}>{props.type}</label>
      <span
        style={{ display: 'flex', flexDirection: 'column' }}
        value={selectedInputValue}
        onClick={() => setDropDown(true)}
      >{selectedInputValue? (
        <>
          <strong>{selectedInputValue.split(',')[0]} </strong>
          {selectedInputValue.split(',')[1]}
        </>
        ): (
        <>
          {/* <strong>{props.type === "From" ? fromOrTo.DefaultFrom[0] : fromOrTo.DefaultTo[0]}</strong>
          {props.type === "From" ? fromOrTo.DefaultFrom[1]+ " " + fromOrTo.DefaultFrom[2] : fromOrTo.DefaultTo[1] + " " + fromOrTo.DefaultTo[2]} */}
          <span style={{color: 'lightgray', marginTop: '8px'}}>{props.type === "From" ? 'Enter City' : 'Enter City'}</span>
        </>
      )}</span>

      {/* Display autocomplete suggestions */}
      {(dropDown)&& (
        <div className="location-dropdown">
          <input
          type='text'
          className="dropdown-input"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef} //
          onClick={handleInputClick}//
          autoFocus 
          onFocus={(e) => e.target.select()}
          />
          {/* <ul> */}
          {suggestions.map((destination) => (
            <div key={destination} onClick={() => 
              { 
                console.log(destination);
                setSelectedInputValue(destination)
                setInputValue(destination)
                setDropDown(false)
                props.setCityHandler(destination)
              }
            } >
            
            {/* Change images */}
            <div className="location-list">
              <div className="location-name">
                <img className="flight-icon" src="https://gos3.ibcdn.com/flightIcon-1675492260.png" alt="Hi" srcset="" />
                <span>{destination}</span>
              </div>
              <div className="location-icon">
                <img className="flight-icon" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="Hi" srcset="" />
              </div>
            </div>
            </div>
          ))}
        {/* </ul> */}
        </div>
        
      )}
    </div>
  );
 
}

export default Dropdown;