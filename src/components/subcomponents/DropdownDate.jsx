import React, { useState, useRef, useEffect } from "react";

function formatDate(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var now = new Date(date)
    return now.getDate() + " " +  months[now.getMonth() ] + "'" + now.getFullYear() % 100 + ", " + days[now.getDay()]
}

function DropdownDate(props) {
    
  const [selectedInputValue, setSelectedInputValue] = useState(

      props.type === 'Departure' ? formatDate(new Date()) : formatDate(new Date().getTime() + 2*24 * 60 * 60 * 1000)
    );
  
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

  useEffect(() => {
    setDropDown(false)
  }, [selectedInputValue])

  

  const handleInputChange = (e) => {
    
    setSelectedInputValue(formatDate(e.target.value));
    console.log(e.target.value);
    props.setTravelDateHandler(e.target.value)
  };

return (
    <div className="dropdown-container dropdown-container-date"  ref={dropdownRef} >
    <label style={dropDown ? {zIndex: '101'} : {}} htmlFor={props.type}>{props.type}</label>
    <span
        type="text"
        id="destination"
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
          <strong>{selectedInputValue.split(',')[0]} </strong>
          {selectedInputValue.split(',')[1]}
        </>
    )}</span>

    {/* Display autocomplete suggestions */}
    {(dropDown)&& (
        <div className="location-dropdown location-dropdown-date">
        <input
        type="date"
        className="dropdown-input"
        onChange={handleInputChange}
        ref={inputRef} //
        autoFocus 
        onFocus={(e) => e.target.select()}
        />
        </div>
        
    )}
    </div>
    );
}

export default DropdownDate;