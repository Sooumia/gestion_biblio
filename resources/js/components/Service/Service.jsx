import React from "react";
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
};

export default Services;
