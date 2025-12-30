import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
const Gallery = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/properties.json'); // Use the correct path
            const data = await response.json();
            setProducts(data.products);
        };
        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="all-items">
                <h2>Available</h2>
                <div className="gallery">
                    {products.map((product) => (
                        <ImageCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="favorites">
                <h2>Favorites</h2>
                {/* Add your favorites content here */}
            </div>
        </div>
    );
};
export default Gallery;