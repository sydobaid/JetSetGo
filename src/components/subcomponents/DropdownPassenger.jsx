import React, { useState, useRef, useEffect } from "react";

function DropdownPassenger(props) {
    
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [passengerCount, setPassengerCount] = useState();
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

  useEffect(() => {
    setSelectedInputValue(selectedInputValue)
    setDropDown(false)
  }, [selectedInputValue])

  useEffect(() => {
    setPassengerCount(adultCount + childrenCount + infantCount)
  }, [adultCount, childrenCount, infantCount])

return (
    <div className="dropdown-container dropdown-container-passenger"  ref={dropdownRef} >
    <label style={dropDown ? {zIndex: '101'} : {}} htmlFor={props.type}>{props.type}</label>
    <span
        type="text"
        id="destination"
        style={{ display: 'flex', flexDirection: 'column' }}
        value={selectedInputValue}
        onClick={() => setDropDown(true)}
    >
        <strong style={{marginTop : '8px'}}>{passengerCount} Travellers</strong>
    </span>

    {/* Display autocomplete suggestions */}
    {(dropDown)&& (
        <div className="location-dropdown location-dropdown-passenger">
          <input
          type="text"
          className="dropdown-input"
          value={passengerCount + " Travellers"}
          ref={inputRef} //
          />
          <div className="passenger-list">
            <div className="passenger">
              <span className="passenger-type">Adult</span>
              <div className="passenger-count">{adultCount}</div>
              <div className="passenger-counter"> 
                <button onClick={() => setAdultCount(adultCount === 0 ? 0 : adultCount - 1)}>-</button>
                <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
              </div>
            </div>
            <div className="passenger">
              <span className="passenger-type">Children</span>
              <div className="passenger-count">{childrenCount}</div>
              <div className="passenger-counter"> 
                <button onClick={() => setChildrenCount(childrenCount === 0 ? 0 : childrenCount - 1)}>-</button>
                <button onClick={() => setChildrenCount(childrenCount + 1)}>+</button>
              </div>
            </div>
            <div className="passenger">
              <span className="passenger-type">Infant</span>
              <div className="passenger-count">{infantCount}</div>
              <div className="passenger-counter"> 
                <button onClick={() => setInfantCount(infantCount === 0 ? 0 : infantCount - 1)}>-</button>
                <button onClick={() => setInfantCount(infantCount + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>        
    )}
    </div>
    );
}

export default DropdownPassenger;