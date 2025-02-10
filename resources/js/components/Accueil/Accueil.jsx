import React, { useEffect, useState } from "react";
import "./Accueil.css";

const Accueil = () => {
    const [books, setBooks] = useState([]);
    const defaultImage = '/path/to/valid/default/image.png'; // Ensure this path is correct and the image exists

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
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <main>
                <section>
                    <h1>READING & EDUCATION</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, dolorum, ipsum tempore officia doloribus ratione quasi corrupti eveniet est aut alias facere error quod obcaecati perspiciatis iusto reiciendis soluta perferendis!</p>
                    <button>
                        <a href={`${import.meta.env.VITE_BACKEND_URL}/register`} className="register">INSCRIRE</a>
                    </button>
                </section>
                <div className="h2">
                    <h2 >OUR SERVICES</h2>
                    <div>
                        <div>
                            <h3>BOOKS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                        <div>
                            <h3>EDUCATION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                        <div>
                            <h3>LIBRARY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                {books.length === 0 ? (
                    <p>No books available</p>
                ) : (
                    books.map(book => (
                        <section key={book.id}>
                            <div>
                                <img 
                                    src={book.auther_img} 
                                    alt="image" 
                                     
                                />
                            </div>
                            <div>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <button>
                                    <a href={`/book/${book.id}`} className="read">READ</a>
                                </button>
                            </div>
                        </section>
                    ))
                )}
            </div>
        </div>
    );
}

export default Accueil;