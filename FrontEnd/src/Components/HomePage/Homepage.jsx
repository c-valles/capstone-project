import React from "react";
import "./Homepage.css";
import acnh from "../../Assets/acnh.png"

const Homepage = () => {
    return (
        <div className="intro">
            <img src={acnh} alt="Animal Crossing New Horizons Logo" id="acnh"/>
            <h1>Welcome to Nookpedia!</h1>
            <h3>Nookpedia is the premier collection of all donatable museum items! Use this resource as a reference to help keep track of your museum progress for Blathers!</h3>
        </div>
    )
}

export default Homepage;