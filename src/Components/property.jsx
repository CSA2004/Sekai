import { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'

function Property({ searchTerm, onFavourite, favouriteprop, filters }) {
    const [Property, setProperty] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('./properties.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch properties.json');
                return res.json()
            })
            .then((data) => {
                setProperty(data.properties)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            });
    }, []);

    if (loading) return <div className='section'>Loading properties...</div>
    if (error) return <div className='section'>Error: {error}</div>

    // Filter properties based on searchTerm
    const filteredprop = Property.filter((property) => {

        const matchesLocation = property.location.toLowerCase().includes(filters.searchTerm.toLowerCase());

        // type location
        const matchesType = filters.type === "any" || property.type === filters.type;

        // Postcode Logic
        const matchesPostcode = !filters.postcode ||
            (property.postcode && property.postcode.toLowerCase().startsWith(filters.postcode.toLowerCase()));

        // bedroom logic
        const matchesBedrooms = filters.bedrooms === "any" || property.bedrooms >= parseInt(filters.bedrooms);

        // bathroom Logic
        const matchesBathrooms = filters.bathrooms === "any" || property.bathrooms >= parseInt(filters.bathrooms);

        // price logic
        const matchesPrice = property.price >= (filters.minPrice || 0) &&
            property.price <= (filters.maxPrice || 100000000);

        // Date comparison logic
        const propDate = new Date(`${property.added.month} ${property.added.day}, ${property.added.year}`);
        const startFilter = filters.startDate ? new Date(filters.startDate) : null;
        const endFilter = filters.endDate ? new Date(filters.endDate) : null;

        let matchesDate = true;
        if (startFilter && propDate < startFilter) matchesDate = false;
        if (endFilter && propDate > endFilter) matchesDate = false;

        // Only return true if ALL conditions are met
        return matchesLocation && matchesType && matchesBedrooms && matchesBathrooms && matchesPrice && matchesDate && matchesPostcode;
    });

    return (
        <div className='section'>
            <div className='section-header'>
                <h2>Properties List ({filteredprop.length})</h2>
            </div>
            <div className='prop-grid'>
                {filteredprop.map(property => (
                    <PropertyCard
                        key={property.location}
                        property={property}
                        onFavourite={onFavourite}
                        isFavourited={favouriteprop.some(fave =>
                            (fave.location === property.location)
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default Property