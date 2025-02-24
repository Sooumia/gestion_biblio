import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import image1 from "../images/book.png";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons for dark/light mode

const Header = ({ isLoggedIn }) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode
    const backendUrl = import.meta.env.VITE_BACKEND_URL;


    // Toggle dark/light mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark/light mode to the body
    useEffect(() => {
        if (isDarkMode) {
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.body.removeAttribute("data-theme");
        }
    }, [isDarkMode]);

    return (
        <header>
            <nav className="navbar">
                <h1>
                    <img src={image1} alt="Logo" width="50px" />
                    MyBiblio
                </h1>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="navbar-right">
                    {isLoggedIn ? (
                        <a href={`${backendUrl}/logout`} className="login">
                            Logout
                        </a>
                    ) : (
                        <a href={`${backendUrl}/login`} className="login">
                            Login
                        </a>
                    )}
                  <div className="theme-toggle" onClick={toggleTheme}>
    {isDarkMode ? <FaSun /> : <FaMoon />}
</div>
                 
                   
                </div>
            </nav>
        </header>
    );
};

export default Header;