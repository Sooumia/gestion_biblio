import React, { useState } from 'react';
import './navBar.scss';
import { IoLibrary } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [actif, setActif] = useState('navBar');

    const afficherNavBar = () => {
        setActif('navBar activeNavbar');
    };

    const fermerNavBar = () => {
        setActif('navBar');
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
                <div className={actif}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#home" className="navLink" onClick={fermerNavBar}>Accueil</a>
                        </li>
                        <li className="navItem">
                            <a href="#services" className="navLink" onClick={fermerNavBar}>Services</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className="navLink" onClick={fermerNavBar}>À propos</a>
                        </li>
                        <li className="navItem">
                            <a href="#contact" className="navLink" onClick={fermerNavBar}>Contact</a>
                        </li>
                        <button className="btn">
                            <a href={`${backendUrl}/login`} className="login">
                                Connexion
                            </a>
                        </button>
                    </ul>

                    {/* Bouton pour fermer la barre de navigation (mobile) */}
                    <div className='closeNavbar' onClick={fermerNavBar}>
                        <IoCloseCircleOutline className="icon" />
                    </div>
                </div>

                {/* Bouton pour afficher la barre de navigation (mobile) */}
                <div className="toggleNavBar" onClick={afficherNavBar}>
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;