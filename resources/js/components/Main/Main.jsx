import React from 'react';
import './main.scss';

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

const Main = () => {
    return (
        <section className='main container section'>
            {/* Section Our Books */}
            <div className="secTitle">
                <div className="title">
                    <h1>Our Books</h1>
                </div>
                <div className='secContent grid'>
                    {/* Book Cards */}
                    {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].map((image, index) => (
                        <div className="singleDestination" key={index}>
                            <div className="imageDiv">
                                <img src={image} alt={`Book Cover ${index + 1}`} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">Book Title {index + 1}</h4>
                                <p className="author">By Author Name</p>
                                <p className="description">
                                    This is a brief description of the book. It provides a summary of the content.
                                </p>
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default Main;