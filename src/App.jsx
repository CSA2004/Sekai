import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { useState } from 'react';
import './App.css'

function App() {
  const [favouriteprop, setFavourite] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    type: "any",
    bedrooms: "any",
    bathrooms: "any",
    minPrice: 0,
    maxPrice: 100000000,
    startDate: "",
    endDate: "",
    postcode: ""
  });

  const addFavourite = (prop) => {
    // Ensuring each property can only be added once
    if (!favouriteprop.some(p => p.id === prop.id)) {
      setFavourite([...favouriteprop, prop]);
    }
  };

  const removeFavourite = (prop) => {
    setFavourite(favouriteprop.filter(p => p.id !== prop.id));
  };

  const clearFavourites = () => {
    setFavourite([]); // Sets the favourites state back to an empty array
  };

  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <Home
            filters={filters}
            setFilters={setFilters}
            favouriteprop={favouriteprop}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            clearFavourites={clearFavourites}
          />
        } />

        {/* Individual property page route */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;