import React from "react";
<<<<<<< HEAD
import { FaBook, FaLaptop, FaUserAlt, FaHeadphones } from "react-icons/fa";
import "./Service.scss";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Prêt de Livres",
      description: "Empruntez des livres physiques pour une période déterminée.",
      icon: <FaBook />,
    },
    {
      id: 2,
      title: "Accès aux Ressources Numériques",
      description: "Accédez à une large gamme de ressources en ligne et de livres électroniques.",
      icon: <FaLaptop />,
    },
    {
      id: 3,
      title: "Espace de Lecture",
      description: "Profitez de notre espace de lecture confortable pour étudier ou lire.",
      icon: <FaUserAlt />,
    },
    {
      id: 4,
      title: "Assistance & Conseils",
      description: "Notre équipe est à votre disposition pour vous aider à trouver les ressources dont vous avez besoin.",
      icon: <FaHeadphones />,
    },
  ];

  return (
    <div className="services-container" id="services">
      <header className="services-header">
        <h1>Nos Services</h1>
        <p>Explorez les différents services que nous proposons à nos membres.</p>
      </header>

      <section className="services-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
=======
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
>>>>>>> dacbe2c9fe321243b2d6407edb8fc05cb653f070
};

export default Services;
