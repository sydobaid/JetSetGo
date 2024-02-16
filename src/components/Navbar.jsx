import React from "react";

function Navbar(){
    return (
        <div className="navbar">
            <nav>
                <div className="left-nav-items">
                <h1> <span className="word-jet">Jet</span><span className="word-setgo">SetGo</span></h1>
                </div>
                <div className="right-nav-items">
                    <button className="login-signup"> <img src="assets/images/person-icon.png" alt=""/> Login / Signup</button>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;