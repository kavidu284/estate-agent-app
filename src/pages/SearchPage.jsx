import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/properties.json";

function SearchPage({
  favourites = [],
  removeFavourite = () => {},
  addFavourite = () => {}
}) {

  const [searchResults, setSearchResults] = useState("Any");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [postcode, setPostcode] = useState("");
const [hasSearched, setHasSearched] = useState(false);

 const filteredProperties = hasSearched ? data.properties.filter((property) => {
      const matchesSearch =
        searchResults === "Any" || property.type === searchResults;

      const matchesBedrooms =
        minBedrooms === "" || property.bedrooms >= Number(minBedrooms);

      const matchesMaxBedrooms =
        maxBedrooms === "" || property.bedrooms <= Number(maxBedrooms);

      const matchesMinPrice =
        minPrice === "" || property.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === "" || property.price <= Number(maxPrice);

      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      const matchesDateAdded =
        dateAdded === "" || propertyDate >= new Date(dateAdded);

      const matchesPostcode =
        postcode === "" ||
        property.location.toLowerCase().includes(postcode.toLowerCase());

      return (
        matchesSearch &&
        matchesBedrooms &&
        matchesMaxBedrooms &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesDateAdded &&
        matchesPostcode
      );
    })
  : [];
  const handleReset = () => {
  setSearchResults("Any");
  setMinBedrooms("");
  setMaxBedrooms("");
  setMinPrice("");
  setMaxPrice("");
  setDateAdded("");
  setPostcode("");
  setHasSearched(false); // hide results again
};



  return (
    <div className="container">
        {/*header*/}
        <div className="page-header">
            <h2>Property Search</h2>
        </div>

      {/*filter options*/}
       <div className="search-card">
        <div className="filters">
        <select value = {searchResults} onChange={(e) => setSearchResults(e.target.value)}>
          <option value={"Any"}>Any</option>
          <option value={"House"}>House</option>
          <option value={"Flat"}>Flat</option>

        </select>
        <input
          type="number"
          placeholder="Min Bedrooms"  
          value={minBedrooms}
          onChange={(e) => setMinBedrooms(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Bedrooms"
          value={maxBedrooms}
          onChange={(e) => setMaxBedrooms(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        /> 
        <input
          type="date"
          value={dateAdded}
          onChange={(e) => setDateAdded(e.target.value)}          
        />
        <input
          type="text"
          placeholder="Postcode (e.g. BR5)"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}          
        />
        <div className="filter-actions">
          <button
            className="search-btn"
            onClick={() => setHasSearched(true)}
          >
            Search
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div> 
    <hr />
      {/* ⭐ FAVOURITES PREVIEW  */}
      <div className="favourites-preview">
  <h3 className="favourites-title">
    ❤️ Favourite Properties
    {favourites.length > 0 && ` (${favourites.length})`}
  </h3>

  {favourites.length === 0 ? (
    <p className="empty-state">
      No favourites yet. Add properties to see them here.
    </p>
  ) : (
    <>
      {favourites.map((property) => (
        <div key={property.id} className="favourite-mini-card">
          <div className="fav-info">
            <p className="fav-type">
              <strong>{property.type}</strong> – {property.location}
            </p>
            <p className="fav-price">
              £{property.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => removeFavourite(property.id)}
            className="remove-fav-btn"
          >
            Remove
          </button>
        </div>
      ))}

      <Link to="/favourites" className="view-all-favs-btn">
        View All Favourites
      </Link>
    </>
  )}
</div>

      {/*search results*/}
      {filteredProperties.map((property) => (
        <div key={property.id} className="property-card">

          <img
            src={property.picture}
            alt="Property"
            className="property-image"
          />

          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>£{property.price.toLocaleString()}</p>
          
              <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
                       Add to Favourites
              </button>

              <Link  className="details-btn" to={`/property/${property.id}`}>
                View Details
              </Link>
            
        </div>
      ))}

      {filteredProperties.length === 0 && (
        <p className="empty-state">
  Try adjusting your filters to see more properties.
</p>

      )}
      
    </div>

  );
}


export default SearchPage;