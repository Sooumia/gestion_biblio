import React, { useEffect, useState } from "react";

import FeaturedBooks from "./FeatureBooks";
import "./Accueil.css";

const Accueil = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const defaultImage = '/path/to/valid/default/image.png'; // Replace with your default image path

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/books`)
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched books:', data);
                setBooks(data);
                setFilteredBooks(data); // Initialize filtered books with all books
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);



    // Filter books based on search query
    const filterBooks = (query) => {
        const filtered = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <div className="accueil-container">
            <main className="main">
                <section className="intro-section">
                    <h1 className="title">READING & EDUCATION</h1>
                    <p className="intro-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                    <button className="register-btn">
                        <a href={`${import.meta.env.VITE_BACKEND_URL}/register`} className="register-link">INSCRIRE</a>
                    </button>

                    
                </section>
            </main>

    
          
            <FeaturedBooks/>
        </div>
    );};





export default Accueil;