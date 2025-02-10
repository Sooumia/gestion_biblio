import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

import image1 from "../images/book.png"; 
import image2 from "../images/image.png"; 

    
    const Header = ({ isLoggedIn }) => {
        const [showSearch, setShowSearch] = useState(false);
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header>
                <nav className="navbar">
                    <h1><img src={image1} alt="Logo" width="50px" />MyBiblio</h1>
                    <ul>
                        <li><Link to="/">ACCUEIL</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="navbar-right">
                    {isLoggedIn ? (
                    <a href={`${backendUrl}/logout`} className='login'>Logout</a>
                ) : (
                    <>
                        <a href={`${backendUrl}/login`} className='login'>Login</a>
                    </>
                )}

                        <img src={image2} alt="search" width="40px" onClick={toggleSearch} />
                        {showSearch && (
                            <div>
                                <input type="text" placeholder="Rechercher..." style={{padding:"10px",borderRadius:"7px",backgroundColor:"white"}}/>
                            </div>
                        )}
                    </div>
                </nav>
        </header>
    );
};

export default Header;