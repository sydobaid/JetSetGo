import React from "react";

function Navbar(){
    return (
        <div className="navbar">
            <nav>
                <div className="left-nav-items">
                <h1> <span className="word-jet">Jet</span><span className="word-setgo">SetGo</span></h1>
                </div>


                <div className="right-nav-items">
                    {/* <button className="my-trips"> 
                        <img src="assets/images/suitcase.png" alt=""/> 
                        <span>
                            My Trips 
                            <br /> 
                            Manage Bookings
                        </span>
                    </button> */}
                    <button className="login-signup"> <img src="assets/images/person-icon.png" alt=""/> Login / Signup</button>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;