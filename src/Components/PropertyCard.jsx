function PropertyCard({ property, onFavourite, onRemoveFavourite, showRemove = false,
    draggable = true, isFavourited = false
}) {
    const handleDragStrat = (e) => {
        if (draggable) {
            e.dataTransfer.setData('application/json', JSON.stringify(property))
        }
    }

    return (
        <div
            className="prop-card"
            draggable={draggable}
            onDragStart={handleDragStrat}
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
                <div className="prop-location">{property.location}</div>
                <div className="prop-bedrooms">{property.bedrooms}</div>
                <div className="prop-type">{property.type}</div>
                <div className="prop-price">£{property.price}</div>
                <div className="prop-actions"></div>
                {showRemove ? (
                    <button className="btn btn-danger"
                        onClick={() => onRemoveFavourite(property)}>Remove</button>
                ) : (
                    <button className={`btn ${isFavourited ? 'btn-disabled'
                        : 'btn-primary'
                        }`}
                        onClick={() => !isFavourited && onFavourite(property)}
                        disabled={isFavourited}
                    >
                        {isFavourited ? 'Favourited' : 'Add to Favourite'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default PropertyCard