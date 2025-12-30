import React from 'react';
const ImageCard = ({ product }) => {
    const { type, brand, location, added, images } = product;
    const firstImage = images[0];
    const imageName = firstImage.split('/').pop(); // Assuming the path is in the format "images/imagename.jpg"
    return (
        <section>
            <img src={firstImage} alt={imageName} />
            <h3>Type: {type}</h3>
            <h4>Brand: {brand}</h4>
            <h4>Location: {location}</h4>
            <h4>Added: {added.month} {added.day}, {added.year}</h4>
            <button>Add to Favourites</button>
        </section>
    );
};
export default ImageCard;