import React from "react";

function FlightResult(props){
    return(
        <div className="flight-result-container">
            <div className="airline-details">
                <img src="https://dhiz4uvf5rpaq.cloudfront.net/images/airline-logos/6E.jpg?V2" alt="Arline Logo" />
                <div>
                    <p className="first-p">{props.airlineName}</p>
                    <p className="second-p">{props.flightNumber}</p>
                </div>
            </div>
            <div className="time-details-container">
                <div className="time-details">
                    <div>
                        <p className="first-p">{props.depTime}</p>
                        <p className="second-p">{props.sourceCity}</p>
                    </div>
                </div>
               
               <div className="time-details-sub-div">
                    <span>{props.totalDuration}</span>
                    <span> --------------<img className="flight-icon" src="https://gos3.ibcdn.com/flightIcon-1675492260.png" alt="Hi" /></span>
                </div>
                <div className="time-details">
                    <div>
                        <p className="first-p">{props.arrTime}</p>
                        <p className="second-p">{props.destinationCity}</p>
                    </div>
                </div>
            </div>
            <div className="price">
                    <div>
                        <p className="first-p">$ {props.fare}</p>
                        <p className="second-p offer"> Jet100 ✅ ₹100</p>
                    </div>
            <div>
                    <p className="second-p book-now">Book Now</p>
            </div>
            </div>
        </div>
    );
}

export default FlightResult;