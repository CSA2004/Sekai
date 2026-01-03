const FavouriteProp = ({ favouriteprop, addFavourite, removeFavourite, clearFavourites }) => {

    const handleDrop = (e) => {
        e.preventDefault();
        // Retrieve the property data that was set during the drag
        const propertyData = e.dataTransfer.getData("application/json");
        if (propertyData) {
            const property = JSON.parse(propertyData);
            addFavourite(property); // Call your existing add logic
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // This is required for the drop to work!
    };

    return (
        /* The outer div must keep these props for Drag and Drop to work */
        <div
            className="favourite-drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <div className="fav-header">
                <h2>Favourite</h2>

                {/* Clear All Button: only shows if there are items */}
                {favouriteprop.length > 0 && (
                    <button
                        className="btn-clear-all"
                        onClick={clearFavourites}
                    >
                        Clear All
                    </button>
                )}
            </div>

            <div className="favourite-list">
                {favouriteprop.length === 0 ? (
                    <p className="empty-msg">You have no favourite yet</p>
                ) : (
                    favouriteprop.map((property) => (
                        <div key={property.id} className="fav-item">
                            <div className="fav-info">
                                <strong>Location: </strong> {property.location}
                            </div>
                            <button
                                className="btn-remove-fav"
                                onClick={() => removeFavourite(property)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default FavouriteProp