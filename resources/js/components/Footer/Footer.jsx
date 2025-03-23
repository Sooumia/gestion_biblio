import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";
import "./footer.scss";
import { IoLibrary } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer className="container-footer">
        <div className="grid">
          <div className="item">
            {/* Logo ou Titre */}
            <div className="logo">
              <IoLibrary className="icon" />
              <h3>MaBibliothèque</h3>
            </div>
          </div>
          <div className="item">
            <h3>Nos Services</h3>
            <ul>
              <li><a href="#" aria-label="Emprunt de Livres">Emprunt de Livres</a></li>
              <li><a href="#" aria-label="Événements">Événements</a></li>
              <li><a href="#" aria-label="Recherche Avancée">Recherche Avancée</a></li>
            </ul>
          </div>
          <div className="item">
            <h3>À Propos</h3>
            <ul>
              <li><a href="#" aria-label="Notre Histoire">Notre Histoire</a></li>
              <li><a href="#" aria-label="Notre Mission">Notre Mission</a></li>
              <li><a href="#" aria-label="Équipe">Équipe</a></li>
            </ul>
          </div>
          <div className="item text">
            <h3>À Propos de MaBibliothèque</h3>
            <p>
              MaBibliothèque est une bibliothèque numérique innovante dédiée à offrir une expérience de lecture exceptionnelle.
            </p>
          </div>
        </div>

        <div className="item social">
          <a href="#" aria-label="Facebook"><Facebook className="social-icon" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="social-icon" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="social-icon" /></a>
        </div>

        <p className="copyright">
          <IoLibrary className="icon" /> MaBibliothèque © 2024 | <a href="#" aria-label="Politique de Confidentialité">Politique de Confidentialité</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;