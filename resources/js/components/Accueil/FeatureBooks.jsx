import React, { useState, useEffect } from "react";
import "./FeatureBooks.css";

const FeatureBooks = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]);
    const API_KEY = "AIzaSyCCewV2huYZq4055B9Kn-X3f50nodKCrls"; // Your API key

    // Fetch default books when the component mounts
    useEffect(() => {
        fetchDefaultBooks();
    }, []);

    // Function to fetch default books (e.g., popular science books)
    const fetchDefaultBooks = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=subject:science&orderBy=newest&maxResults=12&key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch default books");
            }
            const data = await response.json();
            setBooks(data.items || []);
        } catch (error) {
            console.error("Error fetching default books:", error);
        }
    };

    // Function to search books by title
    const searchBooks = async () => {
        if (!searchQuery.trim()) {
            // If the search query is empty, fetch default books
            fetchDefaultBooks();
            return;
        }

        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch books");
            }
            const data = await response.json();
            setBooks(data.items || []);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="App">
            <h1>Recherche de Livres</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Rechercher un livre par titre..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={searchBooks}>
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>
            </div>
            <div className="books-grid">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div key={book.id} className="book-item" style={{ animationDelay: `${index * 0.1}s` }}>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                                alt={book.volumeInfo.title}
                            />
                            <h3>{book.volumeInfo.title}</h3>
                            <p>{book.volumeInfo.authors?.join(", ")}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun livre trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default FeatureBooks;