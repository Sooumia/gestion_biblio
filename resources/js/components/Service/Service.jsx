import React from "react";
import { FaBook, FaUsers, FaSearch, FaCogs, FaLaptop, FaChalkboardTeacher } from "react-icons/fa"; 
import "./Service.css";

const Service = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h1 className="animate__animated animate__fadeIn">Nos Services</h1>
                <p className="animate__animated animate__fadeIn animate__delay-1s">Explorez les services que nous offrons à la bibliothèque</p>
            </div>
            <div className="services-cards">
                <div className="service-card animate__animated animate__fadeInUp animate__delay-2s">
                    <FaBook className="service-icon" />
                    <h3>Prêt de Livres</h3>
                    <p>Accédez à une large collection de livres pour emprunter, lire et apprécier.</p>
                </div>
                <div className="service-card animate__animated animate__fadeInUp animate__delay-3s">
                    <FaUsers className="service-icon" />
                    <h3>Programmes Communautaires</h3>
                    <p>Participez à des événements, des ateliers et des clubs de lecture.</p>
                </div>
                <div className="service-card animate__animated animate__fadeInUp animate__delay-4s">
                    <FaSearch className="service-icon" />
                    <h3>Recherche Avancée</h3>
                    <p>Utilisez notre système de recherche pour trouver des livres et des ressources spécifiques.</p>
                </div>
                <div className="service-card animate__animated animate__fadeInUp animate__delay-5s">
                    <FaCogs className="service-icon" />
                    <h3>Assistance Personnalisée</h3>
                    <p>Recevez de l'aide pour naviguer dans nos services et choisir les meilleures ressources pour vos besoins.</p>
                </div>
                <div className="service-card animate__animated animate__fadeInUp animate__delay-6s">
                    <FaLaptop className="service-icon" />
                    <h3>Accès Numérique</h3>
                    <p>Profitez de notre collection de ressources numériques, y compris des livres électroniques et des bases de données en ligne.</p>
                </div>
                <div className="service-card animate__animated animate__fadeInUp animate__delay-7s">
                    <FaChalkboardTeacher className="service-icon" />
                    <h3>Formations et Ateliers</h3>
                    <p>Participez à des formations et ateliers pour améliorer vos compétences en recherche et utilisation des ressources.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
