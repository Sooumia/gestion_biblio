import React from "react"
import { useEffect, useState, useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa6"
import { LuTwitter } from "react-icons/lu"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"
import "./home.scss"
import Video from '../../Assets/video.mp4'


const Home = () => {
  // State management
  const [loaded, setLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Refs
  const videoRef = useRef(null)
  const searchInputRef = useRef(null)

  // Handle loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 500)

    // Cleanup function
    return () => clearTimeout(timer)
  }, [])

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        console.log("Video loaded successfully")
      })
    }
  }, [])

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`)
      // Here you would typically call your search API
    }
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focus search input when pressing '/' key
      if (e.key === "/" && !isSearchFocused) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchFocused])

  return (
    <section className="home" id="home" aria-label="Library home section">
      {/* Overlay for darkening the video */}
      <div className={`overlay ${loaded ? "loaded" : ""}`} aria-hidden="true"></div>

      {/* Background video */}
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
        Your browser does not support the video tag.
      </video>

      {/* Main content above the video */}
      <div className={`homeContent container ${loaded ? "loaded" : ""}`}>
        {/* Presentation text */}
        <div className="textDiv" role="banner">
          <span className="smallText">My Biblio</span>
          <h1 className="homeTitle">Find Your Favorite Book</h1>
        </div>

        {/* Search bar */}
        <form className="cardDiv" onSubmit={handleSearchSubmit} role="search" aria-label="Search for books">
          <div className={`input ${isSearchFocused ? "focused" : ""}`}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Enter your book name..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              aria-label="Search for books"
            />
            <button type="submit" aria-label="Search" disabled={!searchQuery.trim()}>
              <FaSearch className="searchIcon" aria-hidden="true" />
              <span>Search</span>
            </button>
          </div>
          <div className="searchTip">
            Press <kbd>/</kbd> to focus search
          </div>
        </form>

        {/* Footer icons */}
        <div className="homeFooterIcons">
          {/* Social media icons */}
          <div className="socialIcons" aria-label="Social media links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="iconLink"
            >
              <FiFacebook className="icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="iconLink"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              className="iconLink"
            >
              <LuTwitter className="icon" />
            </a>
          </div>

          {/* Navigation icons */}
          <div className="navIcons" aria-label="Navigation options">
            <button aria-label="View as list" className="iconButton">
              <BsListTask className="icon" />
            </button>
            <button aria-label="View as grid" className="iconButton">
              <TbApps className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

