import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import '../css/app.css';

const App = () => {
  // État pour savoir si l'utilisateur est connecté

  return (
    <div className="text">
      <Navbar />
      <Home />
      <Main />
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

