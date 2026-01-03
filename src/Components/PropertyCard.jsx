import { Link } from 'react-router-dom';

function PropertyCard({ property, onFavourite, onRemoveFavourite, showRemove = false,
    draggable = true, isFavourited = false
}) {
    const handleDragStart = (e) => {
        if (draggable) {
            e.dataTransfer.setData('application/json', JSON.stringify(property))
        }
    }

    return (
        <div
            className="prop-card"
            draggable={draggable}
            onDragStart={handleDragStart}
        >
            <img
                src={property.picture}
                alt={property.location}
                className="prop-image"
                onError={(e) => {
                    e.target.style.display = 'none'
                }}
            />
            <div className="prop-info">
                <div className="prop-location"><strong>Location: </strong>{property.location}</div>
                <div className='prop-postcode'><strong>Postcode: </strong>{property.postcode}</div>
                <div className="prop-bedrooms"><strong>Bedrooms: </strong>{property.bedrooms}</div>
                <div className="prop-bathrooms"><strong>Bathrooms: </strong>{property.bathrooms}</div>
                <div className="prop-type"><strong>Type: </strong>{property.type}</div>
                <div className="prop-price"><strong>Price: </strong>£{property.price}</div>
                <div className="prop-actions">
                    <Link to={`/property/${property.id}`}>
                        <button className="btn btn-view">View Details</button>
                    </Link>

                    {showRemove ? (
                        <button className="btn btn-danger" onClick={() => onRemoveFavourite(property)}>
                            Remove
                        </button>
                    ) : (
                        <button
                            className={`btn ${isFavourited ? 'btn-disabled' : 'btn-primary'}`}
                            onClick={() => !isFavourited && onFavourite(property)}
                            disabled={isFavourited}
                        >
                            {isFavourited ? 'Favourited' : 'Add to Favourite'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PropertyCard