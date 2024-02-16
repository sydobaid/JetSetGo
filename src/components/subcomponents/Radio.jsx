import React from "react";

function Radio(props){

//   Managing the state of the selected radio button across all instances of the Radio component by lifting the state up to the parent component.
    const { selected, setter, name } = props;
    
    return(
            <div
                className={`radio-div ${selected === props.id ? name + "-checked" : ""}`}
                onClick={() => setter(props.id)}
            >
                
                <input 
                    id={props.id} 
                    type="radio" 
                    name={name}
                    checked={selected === props.id}
                />
                    <label htmlFor={props.id}>{props.text}</label>
            </div>
    );
}

export default Radio;