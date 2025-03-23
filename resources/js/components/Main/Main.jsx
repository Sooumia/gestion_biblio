import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Heart, BookOpen } from 'lucide-react';

// Importation des images
import image1 from '../../Assets/image1.jpg'; 
import image2 from '../../Assets/image2.jpg'; 
import image3 from '../../Assets/image3.jpg'; 
import image5 from '../../Assets/image5.jpg'; 
import image6 from '../../Assets/image6.jpg'; 
import image7 from '../../Assets/image7.jpg'; 
import image8 from '../../Assets/image8.jpg'; 
import image9 from '../../Assets/image9.jpg'; 

// Données des livres
const booksData = [
  { 
    id: 1, 
    image: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg", 
    title: "Atomic Habits", 
    author: "James Clear", 
    description: "Un guide pratique pour développer de bonnes habitudes et se débarrasser des mauvaises.", 
    category: "Développement personnel" 
  },
  { 
    id: 2, 
    image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg", 
    title: "Sapiens: Une brève histoire de l'humanité", 
    author: "Yuval Noah Harari", 
    description: "Un livre qui explore l'histoire et l'évolution de l'humanité.", 
    category: "Histoire" 
  },
 
  { 
    id: 4, 
    image: "https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg", 
    title: "Les Misérables", 
    author: "Victor Hugo", 
    description: "Un roman classique sur la rédemption et la justice sociale.", 
    category: "Fiction" 
  },
  { 
    id: 5, 
    image: "https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS.jpg", 
    title: "The 4-Hour Workweek", 
    author: "Timothy Ferriss", 
    description: "Un livre qui propose des stratégies pour travailler moins et vivre mieux.", 
    category: "Business" 
  },
  { 
    id: 6, 
    image: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg", 
    title: "1984", 
    author: "George Orwell", 
    description: "Un roman dystopique sur une société sous surveillance permanente.", 
    category: "Science-fiction" 
  },
  { 
    id: 7, 
    image: "https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg", 
    title: "The Power of Now", 
    author: "Eckhart Tolle", 
    description: "Un livre sur la pleine conscience et le moment présent.", 
    category: "Développement personnel" 
  },
  { 
    id: 8, 
    image: "https://images-na.ssl-images-amazon.com/images/I/81AfzUtuD3L.jpg", 
    title: "A Brief History of Time", 
    author: "Stephen Hawking", 
    description: "Un livre qui explique les concepts fondamentaux de l'univers.", 
    category: "Science" 
  },
  { 
    id: 9, 
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg", 
    title: "The Alchemist", 
    author: "Paulo Coelho", 
    description: "Un conte philosophique sur la quête des rêves et la destinée.", 
    category: "Fiction" 
  }
];


// Catégories disponibles
const categories = ['Fiction', 'Non-Fiction', 'Science', 'Biography', 'History'];

const Main = () => {
  // États
  const [books, setBooks] = useState(booksData);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Effet pour filtrer les livres
  useEffect(() => {
    let result = books;
    
    // Appliquer le filtre de recherche
    if (searchTerm) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Appliquer le filtre de catégorie
    if (selectedCategory) {
      result = result.filter(book => book.category === selectedCategory);
    }
    
    setFilteredBooks(result);
  }, [searchTerm, selectedCategory, books]);

  // Fonction pour basculer les détails du livre
  const toggleBookDetails = (id) => {
    setSelectedBook(selectedBook === id ? null : id);
  };

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  // Fonction pour ajouter/supprimer des favoris
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto py-16 px-4 max-w-7xl">
        {/* Section Héro */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1096B0] to-[#0d7f94]">
            Discover Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our carefully curated selection of books spanning various genres and topics.
            Find your next great read today.
          </p>
        </div>

        {/* Section Recherche et Filtres */}
        <div className="mb-10 space-y-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by title or author..."
                className="w-full pl-12 pr-4 py-3 border-0 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#1096B0] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 font-medium"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-5 w-5 text-[#1096B0]" />
              Filter
              {isFilterOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>

          {isFilterOpen && (
            <div className="p-6 bg-white rounded-2xl shadow-lg transition-all animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">Category</label>
                  <select
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1096B0] bg-gray-50"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button 
                  className="px-5 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-all font-medium"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Résumé des résultats */}
        <div className="mb-8 flex flex-wrap justify-between items-center">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-[#1096B0]">{filteredBooks.length}</span> of <span className="text-[#1096B0]">{books.length}</span> books
          </p>
          {selectedCategory && (
            <div className="flex items-center gap-1 px-4 py-2 bg-[#1096B0]/10 rounded-full text-sm font-medium text-[#1096B0] mt-2 md:mt-0">
              {selectedCategory}
              <button 
                onClick={() => setSelectedCategory('')}
                className="ml-1 hover:bg-[#1096B0]/20 rounded-full p-1 transition-colors"
                aria-label="Remove filter"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Grille de livres */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div 
                key={book.id} 
                className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md"
              >
                {/* Image du livre */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={book.image || "/placeholder.svg"} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="font-bold text-lg">{book.title}</p>
                      <p className="text-sm opacity-90">By {book.author}</p>
                    </div>
                  </div>
                  <button 
                    className={`absolute top-3 right-3 p-2 rounded-full ${
                      favorites.includes(book.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-white'
                    } transition-colors shadow-md`}
                    onClick={() => toggleFavorite(book.id)}
                    aria-label={favorites.includes(book.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(book.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                {/* Informations du livre */}
                <div className="p-5 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 truncate">{book.title}</h3>
                      <p className="text-sm text-gray-500">By {book.author}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#1096B0]/10 text-[#1096B0] rounded-full font-medium">
                      {book.category}
                    </span>
                  </div>
                  
                  <div className={`mt-3 overflow-hidden transition-all duration-300 ${
                    selectedBook === book.id ? 'max-h-40' : 'max-h-12'
                  }`}>
                    <p className="text-gray-600 leading-relaxed">{book.description}</p>
                  </div>
                  
                  <button 
                    className="text-xs text-[#1096B0] mt-3 flex items-center font-medium hover:text-[#0d7f94] transition-colors"
                    onClick={() => toggleBookDetails(book.id)}
                  >
                    {selectedBook === book.id ? (
                      <>Show less <ChevronUp className="h-3 w-3 ml-1" /></>
                    ) : (
                      <>Show more <ChevronDown className="h-3 w-3 ml-1" /></>
                    )}
                  </button>
                </div>
                
                {/* Bouton */}
                <div className="p-5 pt-0">
                  <button className="w-full bg-gradient-to-r from-[#1096B0] to-[#0d7f94] text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 font-medium">
                    <BookOpen className="h-4 w-4" />
                    Emprunter
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-md">
            <p className="text-2xl text-gray-600 mb-4">No books found matching your criteria</p>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              className="px-6 py-3 bg-[#1096B0] text-white rounded-full hover:bg-[#0d7f94] transition-colors shadow-md"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;