import React, {useState} from 'react';
import Radio from './Radio';

function FareType() {

    const [selectedRadioFareType, setSelectedRadioFareType] = useState('regular');
    
    return ( 
        <div className='fare-type-container'>
            <div className='fare-type-text'>
                Choose A Fare Type:
            </div>
            <div className='fare-type-radio' >
                <Radio id='regular' text='Regular' selected={selectedRadioFareType} name={'fare-type'} setter={setSelectedRadioFareType}/>
                <Radio id='armed-forces' text='Armed Forces' selected={selectedRadioFareType} name={'fare-type'} setter={setSelectedRadioFareType}/>
                <Radio id='senior' text='Senior Citizen' selected={selectedRadioFareType} name={'fare-type'} setter={setSelectedRadioFareType}/>
                <Radio id='student' text='Student' selected={selectedRadioFareType} name={'fare-type'} setter={setSelectedRadioFareType}/>
                <Radio id='healthcare' text='Doctors & Nurses' selected={selectedRadioFareType} name={'fare-type'} setter={setSelectedRadioFareType}/>
            </div>
        </div>
     );
}

export default FareType;