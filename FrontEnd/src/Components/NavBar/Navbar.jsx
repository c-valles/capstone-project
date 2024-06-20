import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import actt from '../../Assets/actt.png'

const Navbar = () => {
    return (
        <div>
        <div className="title">
            <img src={actt} alt="Timmy & Tommy Nook" id="actt"/>
            <p>Nookpedia</p>
        </div>
        
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