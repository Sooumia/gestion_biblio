import React from "react"
import { useEffect, useState, useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa6"
import { LuTwitter } from "react-icons/lu"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"
// Remove the problematic import and use the CSS file we'll create
import "./home.scss"
// import "./home.css"
import Video from '../../Assets/video.mp4'

// Composant pour afficher un livre
const BookCard = ({ book }) => {
  const { volumeInfo } = book
  const thumbnail = volumeInfo.imageLinks?.thumbnail || '/placeholder.svg?height=200&width=150'
  
  return (
    <div className="bookCard">
      <div className="bookImageContainer">
        <img 
          src={thumbnail || "/placeholder.svg"} 
          alt={`Couverture de ${volumeInfo.title}`} 
          className="bookCover"
          onError={(e) => {
            e.target.src = '/placeholder.svg?height=200&width=150'
          }}
        />
      </div>
      <div className="bookInfo">
        <h3 className="bookTitle">{volumeInfo.title}</h3>
        {volumeInfo.authors && (
          <p className="bookAuthors">{volumeInfo.authors.join(', ')}</p>
        )}
        {volumeInfo.publishedDate && (
          <p className="bookDate">{new Date(volumeInfo.publishedDate).getFullYear()}</p>
        )}
        {volumeInfo.description && (
          <p className="bookDescription">
            {volumeInfo.description.length > 150 
              ? volumeInfo.description.substring(0, 150) + '...' 
              : volumeInfo.description}
          </p>
        )}
        <a 
          href={volumeInfo.infoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bookLink"
        >
          Plus d'informations
        </a>
      </div>
    </div>
  )
}

const Home = () => {
  // Gestion des états
  const [loaded, setLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Références
  const videoRef = useRef(null)
  const searchInputRef = useRef(null)

  // Gérer l'effet de chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 500)

    // Fonction de nettoyage
    return () => clearTimeout(timer)
  }, [])

  // Gérer le chargement de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        console.log("Vidéo chargée avec succès")
      })
    }
  }, [])

  // Gérer le changement de l'entrée de recherche
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Gérer la soumission de la recherche
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=10`)
        
        if (!response.ok) {
          throw new Error('Erreur lors de la recherche de livres')
        }
        
        const data = await response.json()
        setBooks(data.items || [])
      } catch (err) {
        console.error('Erreur API:', err)
        setError('Une erreur est survenue lors de la recherche. Veuillez réessayer.')
        setBooks([])
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Gérer les raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focaliser l'entrée de recherche en appuyant sur la touche '/'
      if (e.key === "/" && !isSearchFocused) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchFocused])

  return (
    <div>
      <section className="home" id="home" aria-label="Section d'accueil de la bibliothèque">
        {/* Superposition pour assombrir la vidéo */}
        <div className={`overlay ${loaded ? "loaded" : ""}`} aria-hidden="true"></div>

        {/* Vidéo de fond */}
        <video
          ref={videoRef}
          className={`video ${loaded ? "loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={Video} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        {/* Contenu principal au-dessus de la vidéo */}
        <div className={`homeContent container ${loaded ? "loaded" : ""}`}>
          {/* Texte de présentation */}
          <div className="textDiv" role="banner">
            <span className="smallText">My Biblio</span>
            <h1 className="homeTitle">Trouvez votre livre préféré</h1>
          </div>

          {/* Barre de recherche */}
          <form className="cardDiv" onSubmit={handleSearchSubmit} role="search" aria-label="Rechercher des livres">
            <div className={`input ${isSearchFocused ? "focused" : ""}`}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Entrez le nom de votre livre..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                aria-label="Rechercher des livres"
              />
              <button type="submit" aria-label="Rechercher" disabled={!searchQuery.trim() || isLoading}>
                <FaSearch className="searchIcon" aria-hidden="true" />
                <span>{isLoading ? "Recherche..." : "Rechercher"}</span>
              </button>
            </div>
            <div className="searchTip">
              Appuyez sur <kbd>/</kbd> pour focaliser la recherche
            </div>
          </form>

          {/* Icônes de pied de page */}
          <div className="homeFooterIcons">
            {/* Icônes des réseaux sociaux */}
            <div className="socialIcons" aria-label="Liens vers les réseaux sociaux">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Facebook"
                className="iconLink"
              >
                <FiFacebook className="icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Instagram"
                className="iconLink"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitez notre page Twitter"
                className="iconLink"
              >
                <LuTwitter className="icon" />
              </a>
            </div>

            {/* Icônes de navigation */}
            <div className="navIcons" aria-label="Options de navigation">
              <button aria-label="Afficher en liste" className="iconButton">
                <BsListTask className="icon" />
              </button>
              <button aria-label="Afficher en grille" className="iconButton">
                <TbApps className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section des résultats de recherche */}
      <section className="booksResults container">
        
        
        {isLoading && <div className="loading">Chargement des résultats...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {!isLoading && !error && books.length === 0 && searchQuery.trim() !== "" && (
          <div className="noResults">Aucun livre trouvé pour cette recherche.</div>
        )}
        
        {!isLoading && !error && books.length > 0 && (
           <div> <h2>Résultats de recherche</h2>
          <div className="booksGrid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div></div>
        )}
      </section>
    </div>
  )
}

export default Home
