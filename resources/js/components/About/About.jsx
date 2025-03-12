import React from "react";
import "./About.css";

const About = () => {
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
        </div>
    );
};

export default About;
