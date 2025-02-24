import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="animate__animated animate__fadeIn">À Propos de Gestion de Bibliothèque</h1>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
                Bienvenue sur notre plateforme ! Nous sommes une équipe passionnée dédiée 
                à fournir les meilleures solutions pour nos utilisateurs, facilitant 
                la gestion et l'accès aux ressources bibliographiques.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-2s">Notre Mission</h2>
            <p className="animate__animated animate__fadeIn animate__delay-3s">
                Offrir une expérience de gestion de bibliothèque fluide et intuitive 
                grâce à des technologies modernes et une interface conviviale.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-4s">Notre Équipe</h2>
            <p className="animate__animated animate__fadeIn animate__delay-5s">
                Nous sommes des développeurs, designers et créateurs passionnés, travaillant ensemble 
                pour améliorer continuellement l'expérience utilisateur de notre plateforme.
            </p>
        </div>
    );
};

export default About;
