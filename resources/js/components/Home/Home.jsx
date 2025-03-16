import React, { useEffect, useState } from 'react';
import './home.scss';
import video from '../../assets/video.mp4';
import { FaSearch } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


const Home = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simuler un chargement pour l'effet de transition
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    return (
        <section className="home" id="home">
            {/* Overlay pour assombrir la vidéo */}
            <div className={`overlay ${loaded ? 'loaded' : ''}`}></div>

            {/* Vidéo en arrière-plan */}
            <video className={`video ${loaded ? 'loaded' : ''}`} src={video} type="video/mp4" autoPlay loop muted></video>

            {/* Contenu principal au-dessus de la vidéo */}
            <div className={`homeContent container ${loaded ? 'loaded' : ''}`}>
                {/* Texte de présentation */}
                <div className="textDiv">
                    <span className="smallText">Our Services</span>
                    <h1 className="homeTitle">Find Your Favorite Book</h1>
                </div>

                {/* Barre de recherche */}
                <div className="cardDiv">
  <div className="input">
    <input type="text" placeholder="Enter your book name..." />
    <button>
      <FaSearch className="searchIcon" /> {/* Icône de recherche */}
      <span>Search</span> {/* Texte "Search" */}
    </button>
  </div>
</div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                      <FiFacebook className='icon'/>
                      <FaInstagram className='icon'/>
                      <LuTwitter className='icon'/>
                    </div>
                    <div className="leftIcons">
                    <BsListTask className='icon'/>
                    <TbApps className='icon'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;