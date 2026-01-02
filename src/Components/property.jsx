import { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'

function Property({ searchTerm, onFavourite, favouriteprop}) {
    const [Property, setProperty] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/properties.json')
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
    const filteredprop = Property.filter((property) =>
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='section'>
            <div className='section-header'>
            <h2>Properties List ({filteredprop.length})</h2>
            </div>
            <div className='prop-grid'>
                {filteredprop.map(property =>(
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