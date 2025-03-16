import React, { useState } from 'react';
import './navBar.scss';
import { IoLibrary } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [active, setActive] = useState('navBar');

    const showNavBar = () => {
        setActive('navBar activeNavbar');
    };

    const closeNavBar = () => {
        setActive('navBar');
    };

    return (
        <section className="navBarSection">
            <header className="header flex">
                {/* Logo */}
                <div className="logoDiv">
                    <a href="#home" className='logo flex'>
                        <h1><IoLibrary className="icon" />MyBiblio</h1>
                    </a>
                </div>

                {/* Barre de navigation */}
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#home" className="navLink" onClick={closeNavBar}>Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#services" className="navLink" onClick={closeNavBar}>Services</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className="navLink" onClick={closeNavBar}>About</a>
                        </li>
                        <li className="navItem">
                            <a href="#contact" className="navLink" onClick={closeNavBar}>Contact</a>
                        </li>
                        <button className="btn">
                            <a href={`${backendUrl}/login`} className="login">
                                Login
                            </a>
                        </button>
                    </ul>

                    {/* Bouton pour fermer la barre de navigation (mobile) */}
                    <div className='closeNavbar' onClick={closeNavBar}>
                        <IoCloseCircleOutline className="icon" />
                    </div>
                </div>

                {/* Bouton pour afficher la barre de navigation (mobile) */}
                <div className="toggleNavBar" onClick={showNavBar}>
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;