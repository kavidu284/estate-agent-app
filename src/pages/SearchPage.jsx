import { useState } from "react";
import { Link }  from "react-router-dom";
import data from "../data/properties.json";


function SearchPage() {
  const [searchResults, setSearchResults] = useState(["Any"]);
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = data.properties.filter((property) =>{
    const matchesSearch = searchResults ==="Any" || property.type === searchResults;
    const matchesBedrooms = minBedrooms === "" || property.bedrooms >= Number(minBedrooms);
    const matchesPrice = maxPrice === "" || property.price <= Number(maxPrice);   

  return matchesSearch && matchesBedrooms && matchesPrice;
  });

  return (
    <div>
      <h2>Property Search</h2>
      {/*filter options*/}
      <select value = {searchResults} onChange={(e) => setSearchResults(e.target.value)}>
        <option value={"Any"}>Any</option>
        <option value={"House"}>House</option>
        <option value={"Flat"}>Flat</option>
        <option value={"Bungalow"}>Bungalow</option>
      </select>
      <input
        type="number"
        placeholder="Min Bedrooms"  
        value={minBedrooms}
        onChange={(e) => setMinBedrooms(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />  
      <hr />
      {/*search results*/}
      {filteredProperties.map((property) => (
        <div key={property.id} style={{ marginBottom: "15px" }}>
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
