import React from 'react';
import image1 from '../../Assets/image1.jpg'; 
import image2 from '../../Assets/image2.jpg'; 
import image3 from '../../Assets/image3.jpg'; 
import image4 from '../../Assets/image4.jpg'; 
import image5 from '../../Assets/image5.jpg'; 
import image6 from '../../Assets/image6.jpg'; 
import image7 from '../../Assets/image7.jpg'; 
import image8 from '../../Assets/image8.jpg'; 
import image9 from '../../Assets/image9.jpg'; 
import image10 from '../../Assets/image10.jpg'; 

const books = [
    { image: image1, title: "Book Title 1", author: "Author 1", description: "A brief description of Book 1." },
    { image: image2, title: "Book Title 2", author: "Author 2", description: "A brief description of Book 2." },
    { image: image3, title: "Book Title 3", author: "Author 3", description: "A brief description of Book 3." },
    { image: image4, title: "Book Title 4", author: "Author 4", description: "A brief description of Book 4." },
    { image: image5, title: "Book Title 5", author: "Author 5", description: "A brief description of Book 5." },
    { image: image6, title: "Book Title 6", author: "Author 6", description: "A brief description of Book 6." },
    { image: image7, title: "Book Title 7", author: "Author 7", description: "A brief description of Book 7." },
    { image: image8, title: "Book Title 8", author: "Author 8", description: "A brief description of Book 8." },
    { image: image9, title: "Book Title 9", author: "Author 9", description: "A brief description of Book 9." },
    { image: image10, title: "Book Title 10", author: "Author 10", description: "A brief description of Book 10." }
];

const Main = () => {
    return (
        <section className="container mx-auto py-12 px-4">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Our Books</h1>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        {/* Book Image */}
                        <div className="h-64 overflow-hidden">
                            <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Book Info */}
                        <div className="p-4">
                            <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
                            <p className="text-gray-700 text-sm mb-4">{book.description}</p>
                            <button className="w-full bg-[#1096B0]  text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Main;
