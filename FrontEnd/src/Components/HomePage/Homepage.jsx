import React from "react";
import './Homepage.css';
import acnh from '../../Assets/acnh.png'

const Homepage = () => {
    return (
        <div className="intro">
            <img src={acnh} alt="Animal Crossing New Horizons Logo" id="acnh"/>
            
        </div>
    )
}

export default Homepage;