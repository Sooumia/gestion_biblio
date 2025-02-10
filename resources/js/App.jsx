import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Header from "./components/Header&Footer/Header";
import Footer from "./components/Header&Footer/Footer";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service/Service";
import Signup from "./components/Login/Signup";

const App = () => {
  // État pour savoir si l'utilisateur est connecté

  return (
    <div className="text">
      <Router>
        <Header/> {/* Passer l'état au Header */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} /> {/* Passer la fonction pour changer l'état */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

