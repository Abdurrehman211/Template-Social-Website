import React, { useState } from "react";
import image from './images/Navlogo.png';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav>
            <div className="logo">
                <a href="/"><img src={image} alt="logo" id="logo" /></a>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Goto links - hidden by default on small screens */}
            <div className={`Goto ${isMenuOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="/about" className="Links">About</a></li>
                    <li><a href="/Service" className="Links">Services</a></li>
                    <li><a href="/portfolio" className="Links">Portfolio</a></li>
                    <li><a href="/#Testimonial" className="Links">Testimonial</a></li>
                </ul>
            </div>

            <a href="/contact">
                <button className="btn1233">Contact us</button>
            </a>
        </nav>
        </>
    );
}

export default Navbar;
