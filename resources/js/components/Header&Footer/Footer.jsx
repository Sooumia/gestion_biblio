import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";
import "./Footer.css";
import image1 from "../images/book.png";  // Add your logo or image here

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer className="container-footer">
        <div className="grid">
          <div className="item">
            {/* Logo or Title */}
            <div className="logo">
              <img src={image1} alt="Logo" width="50px" />
              <h3>MyBiblio</h3>
            </div>
          </div>
          <div className="item">
            <h3>Nos Services</h3>
            <ul>
              <li><a href="#">Emprunt de Livres</a></li>
              <li><a href="#">Événements</a></li>
              <li><a href="#">Recherche Avancée</a></li>
            </ul>
          </div>
          <div className="item">
            <h3>A Propos</h3>
            <ul>
              <li><a href="#">Notre Histoire</a></li>
              <li><a href="#">Notre Mission</a></li>
              <li><a href="#">Équipe</a></li>
            </ul>
          </div>

          <div className="item text">
            <h3>À Propos de MyBiblio</h3>
            <p>
              MyBiblio est une bibliothèque numérique innovante dédiée à offrir une expérience de lecture exceptionnelle.
            </p>
          </div>
        </div>
        
        <div className="item social">
          <a href="#"><Facebook className="social-icon" /></a>
          <a href="#"><Twitter className="social-icon" /></a>
          <a href="#"><Instagram className="social-icon" /></a>
        </div>
        
        <p className="copyright">
          <img src={image1} alt="Logo" width="30px" style={{margin:"10px"}} /> MyBiblio © 2024
        </p>
      </footer>
    </div>
  );
};

export default Footer;