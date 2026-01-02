import List from './List'

function FavouriteProp({ favouriteprop, removeFavourite }) {
    return (
        <>
            <h2>Favourite</h2>
            <List
                items={favouriteprop}
                emptyMessage='You have no favourite yet'
                renderItem={property => (
                    <>
                        <strong>{property.location}</strong>
                        <button onClick={() => removeFavourite(property)}> Remove</button>
                    </>
                )}
            />
        </>
    )
}

export default FavouriteProp