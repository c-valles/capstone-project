import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import acleaf from '../../Assets/acleaf.png'

const Navbar = () => {
    return (
        <div className="title">
            <img src={acleaf} alt="Animal Crossing Leaf" id="acleaf"/>
            <p>Nookpedia</p>
        <div className="navbar">
            <ul className="navmenu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/fish'>Fish</Link></li>
                <li><Link to='/bugs'>Bugs</Link></li>
                <li><Link to='/fossils'>Fossils</Link></li>
                <li><Link to='/artwork'>Artwork</Link></li>
            </ul>
            <div className="account">
                <button><Link to='/account'>Account</Link></button>
            </div>
        </div>
        </div>
    )
}

export default Navbar