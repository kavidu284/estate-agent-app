import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/properties.json";

function SearchPage({ favourites = [], removeFavourite }) {

 

  const [searchResults, setSearchResults] = useState("Any");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [postcode, setPostcode] = useState("");

  const filteredProperties = data.properties.filter((property) =>{
    const matchesSearch = searchResults ==="Any" || property.type === searchResults;
    const matchesBedrooms = minBedrooms === "" || property.bedrooms >= Number(minBedrooms);
    const matchesmaxBedrooms = maxBedrooms === "" || property.bedrooms <= Number(maxBedrooms);
    const matchesminPrice = minPrice === "" || property.price >= Number(minPrice);
    const matchesmaxPrice = maxPrice === "" || property.price <= Number(maxPrice); 
    const propertyDate = new Date(
  `${property.added.month} ${property.added.day}, ${property.added.year}`);
    const matchesDateAdded = dateAdded === "" || propertyDate >= new Date(dateAdded); 
    const matchesPostcode = postcode === "" || property.location.toLowerCase().includes(postcode.toLowerCase());

  return matchesSearch && matchesBedrooms && matchesmaxBedrooms && matchesminPrice && matchesmaxPrice && matchesDateAdded && matchesPostcode;
  });

  return (
    <div className="container">
      {/*header*/}
      <div className="page-header">
          <h2>Property Search</h2>
      </div>

    {/*filter options*/}
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
    </div> 
    <hr />
      {/* ⭐ FAVOURITES PREVIEW  */}
    {favourites.length > 0 && (
      <div className="favourites-preview">
        <h3>❤️ Favourite Properties ({favourites.length})</h3>

        {favourites.map((property) => (
          <div key={property.id} className="favourite-mini-card">
            <p>
              <strong>{property.type}</strong> – {property.location}
            </p>
            <p>£{property.price.toLocaleString()}</p>

            <button
              onClick={() => removeFavourite(property.id)}
              className="remove-fav-btn"
            >
              Remove
            </button>
          </div>
        ))}

        <Link to="/favourites">View All Favourites</Link>
      </div>
      )}
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

          <Link to={`/property/${property.id}`}>
            View Details
          </Link>

        </div>
      ))}

      {filteredProperties.length === 0 && (
        <p>No properties match your search.</p>
      )}
      
    </div>

  );
}


export default SearchPage;