import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";
import "./Footer.css";
import image1 from "../images/book.png"; 


const Footer = () => {
  return (
    <div className="footer-dark">
      <footer className="container-footer">
        <div className="grid">
        <div className="item">
          </div>
          <div className="item">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div className="item">
            <h3>About</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="item text">
            <h3>MyBiblio</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.
            </p>
          </div>
        </div>
        
        <div className="item social">
          <a href="#"><Facebook /></a>
          <a href="#"><Twitter /></a>
          <a href="#"><Instagram /></a>
        </div>
        
        <p className="copyright" ><img  src={image1} width="40px" style={{margin:"10px"}}/>MyBiblio © 2024</p>
      </footer>
    </div>
  );
};

export default Footer;