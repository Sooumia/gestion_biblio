import React from "react";
import "./About.scss";
import { FaUsers, FaBookOpen, FaCalendarAlt, FaBuilding, FaSmile, FaHeart, FaLightbulb, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
<<<<<<< HEAD
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
=======
    return (
        <div className="about-container">
            <h1 className="animate__animated animate__fadeIn">À Propos de Notre Bibliothèque</h1>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
                Bienvenue sur notre plateforme de gestion de bibliothèque ! Nous sommes une équipe passionnée dédiée 
                à fournir les meilleures solutions pour nos utilisateurs, facilitant 
                la gestion et l'accès aux ressources bibliographiques. Notre bibliothèque offre une vaste collection 
                de livres, d'articles et de ressources numériques pour répondre aux besoins de tous les lecteurs.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-2s">Notre Mission</h2>
            <p className="animate__animated animate__fadeIn animate__delay-3s">
                Offrir une expérience de gestion de bibliothèque fluide et intuitive 
                grâce à des technologies modernes et une interface conviviale. Nous nous engageons à promouvoir 
                la lecture et l'apprentissage en fournissant un accès facile à une large gamme de ressources éducatives.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-4s">Nos Services</h2>
            <p className="animate__animated animate__fadeIn animate__delay-5s">
                Nous proposons divers services, y compris le prêt de livres, l'accès à des bases de données en ligne, 
                des ateliers de lecture et des événements communautaires. Notre personnel est toujours disponible pour 
                aider les utilisateurs à trouver les informations dont ils ont besoin.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-6s">Notre Équipe</h2>
            <p className="animate__animated animate__fadeIn animate__delay-7s">
                Nous sommes des développeurs, designers et créateurs passionnés, travaillant ensemble 
                pour améliorer continuellement l'expérience utilisateur de notre plateforme. Notre équipe est composée 
                de bibliothécaires expérimentés et de professionnels de l'information dédiés à fournir un service de 
                haute qualité.
            </p>
            <h2 className="animate__animated animate__fadeIn animate__delay-8s">Contactez-Nous</h2>
            <p className="animate__animated animate__fadeIn animate__delay-9s">
                Pour toute question ou demande d'information, n'hésitez pas à nous contacter. Nous sommes là pour vous 
                aider à tirer le meilleur parti de notre bibliothèque.
            </p>
>>>>>>> dacbe2c9fe321243b2d6407edb8fc05cb653f070
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