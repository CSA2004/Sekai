import React from 'react';
import SearchBar from '../Components/SearchBar';
import Property from '../Components/property';
import FavouriteProp from '../Components/FavouriteProp';

const Home = ({ filters, setFilters, favouriteprop, addFavourite, removeFavourite, clearFavourites }) => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Sekai</h1>
            </header>

            <section className="search-section">
                <SearchBar filters={filters} setFilters={setFilters} />
            </section>

            <main className="main-content-wrapper">
                <div className="property-results-column">
                    <Property
                        filters={filters}
                        onFavourite={addFavourite}
                        favouriteprop={favouriteprop}
                    />
                </div>

                <aside className="favourites-sidebar-column">
                    <FavouriteProp
                        favouriteprop={favouriteprop}
                        removeFavourite={removeFavourite}
                        addFavourite={addFavourite}
                        clearFavourites={clearFavourites} // Pass it here
                    />
                </aside>
            </main>
        </div>
    );
};

export default Home;