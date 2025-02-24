import React from "react";
import { FaBook, FaUsers, FaSearch, FaCogs } from "react-icons/fa"; 
import "./Service.css";

const Service = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Nos Services</h1>
                <p>Explorez les services que nous offrons à la bibliothèque</p>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <FaBook className="service-icon" />
                    <h3>Prêt de Livres</h3>
                    <p>Accédez à une large collection de livres pour emprunter, lire et apprécier.</p>
                </div>
                <div className="service-card">
                    <FaUsers className="service-icon" />
                    <h3>Programmes Communautaires</h3>
                    <p>Participez à des événements, des ateliers et des clubs de lecture.</p>
                </div>
                <div className="service-card">
                    <FaSearch className="service-icon" />
                    <h3>Recherche Avancée</h3>
                    <p>Utilisez notre système de recherche pour trouver des livres et des ressources spécifiques.</p>
                </div>
                <div className="service-card">
                    <FaCogs className="service-icon" />
                    <h3>Assistance Personnalisée</h3>
                    <p>Recevez de l'aide pour naviguer dans nos services et choisir les meilleures ressources pour vos besoins.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
