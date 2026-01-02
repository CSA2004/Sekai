function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <section className='search-container'>
            <h1>
                Find Your Property
            </h1>

            <input
                className="search-box"
                type="text"
                placeholder="Search..."
                value={searchTerm} // controlled input
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <form>
                <label htmlFor="type">Property type</label><br />
                <select name="type" id="type">
                    <option value="house">House</option>
                    <option value="Flat">Flat</option>
                </select>
                <button>Search</button>
                <button>Reset</button>
            </form>
        </section>
    );
};
export default SearchBar;