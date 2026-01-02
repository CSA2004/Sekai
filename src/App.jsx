import { useState} from 'react';
import SearchBar from './Components/SearchBar';
import Property from './Components/property';
import FavouriteProp from './Components/FavouriteProp';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [favouriteprop, setFavourite] = useState([])

  const addFavourite = property => {
    if (!favouriteprop.some(p => p.location !== property.location)) {
      setFavourite([...favouriteprop, property])
    }
  }

  const removeFavourite = property => {
    setFavourite(favouriteprop.filter(p => p.location !== property.location))
  }

  const clearFavourites = () => {
    setFavourite([])
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Property searchTerm={searchTerm} onFavourite={addFavourite} favouriteprop={favouriteprop}/>
      <FavouriteProp favouriteprop={favouriteprop} removeFavourite={removeFavourite} />
    </div>
  );
}
export default App