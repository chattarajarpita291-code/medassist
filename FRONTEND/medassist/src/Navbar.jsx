// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./assets/css/Navbar.css";
import bgimage from './assets/images/ChatGPT_Image_Jul_31__2025__03_56_15_PM-removebg-preview.png';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="box1">
                <div className="sbox1">
                    <img src={bgimage} alt="bg" />
                    <div className="sbox2">MediAssist+</div>
                </div>
            </div>
            <div className="box2">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/department">Departments</Link></li>
                </ul>
            </div>
            <a href="#" className="btn-nav">MediBot<span><i></i></span></a>
        </div>
    );
};

export default Navbar;