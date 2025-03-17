import React from "react";
import "./About.scss";
import { FaUsers, FaBookOpen, FaCalendarAlt, FaBuilding, FaSmile, FaHeart, FaLightbulb, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="about-library-container" id="about">
            {/* Section À Propos avec animation */}
            <motion.section 
                className="about-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>À Propos de Notre Bibliothèque</h1>
                <p>
                    Notre bibliothèque est un espace dédié à la connaissance, à la culture et à l'apprentissage. Nous offrons une vaste collection de livres, de ressources numériques et de services pour répondre aux besoins de tous nos visiteurs. Grâce à notre équipe passionnée et à nos infrastructures modernes, nous vous offrons une expérience enrichissante à chaque visite.
                </p>
                <div className="about-img">
                    <img src="path_to_image.jpg" alt="Bibliothèque" />
                    <div className="sticker sticker-1">
                        <FaSmile className="sticker-icon" />
                        <span>Lieu convivial</span>
                    </div>
                    <div className="sticker sticker-2">
                        <FaHeart className="sticker-icon" />
                        <span>Passionnés de culture</span>
                    </div>
                </div>
            </motion.section>

            {/* Section Histoire avec animation */}
            <motion.section 
                className="story-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2>Notre Histoire</h2>
                <p>
                    Fondée en 1990, notre bibliothèque a évolué pour devenir un pilier de la communauté. Nous avons commencé avec une petite collection de livres et avons depuis grandi pour inclure des ressources numériques, des espaces de lecture confortables et des programmes éducatifs pour tous les âges. Nous sommes fiers de notre riche histoire et de l'impact que nous avons eu sur les générations passées et futures.
                </p>
                <div className="sticker sticker-3">
                    <FaAward className="sticker-icon" />
                    <span>Reconnue depuis 1990</span>
                </div>
            </motion.section>

            {/* Section Mission avec animation */}
            <motion.section 
                className="mission-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <h2>Notre Mission : Faciliter l'Accès à la Connaissance</h2>
                <p>
                    Nous croyons en la puissance de la connaissance pour transformer des vies. Notre mission est de fournir un accès facile et équitable à des ressources éducatives et culturelles de qualité pour tous. Nous sommes convaincus que la bibliothèque est un lieu de partage et d'inclusion pour toutes les générations.
                </p>
                <div className="sticker sticker-4">
                    <FaLightbulb className="sticker-icon" />
                    <span>Innovation et Partage</span>
                </div>
            </motion.section>

            {/* Section Chiffres avec animation */}
            <motion.section 
                className="numbers-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <h2>Notre Bibliothèque en Chiffres</h2>
                <div className="stats">
                    <div className="stat">
                        <FaBookOpen className="stat-icon" />
                        <h3>50,000+ Livres</h3>
                        <a href="/livres">En savoir plus</a>
                    </div>
                    <div className="stat">
                        <FaUsers className="stat-icon" />
                        <h3>10,000+ Membres</h3>
                        <a href="/membres">En savoir plus</a>
                    </div>
                    <div className="stat">
                        <FaCalendarAlt className="stat-icon" />
                        <h3>100+ Événements Annuels</h3>
                        <a href="/evenements">En savoir plus</a>
                    </div>
                    <div className="stat">
                        <FaBuilding className="stat-icon" />
                        <h3>5 Succursales</h3>
                        <a href="/succursales">En savoir plus</a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;