import React from "react";
import { Link } from "react-router-dom";
import data from "../data/properties.json";

function AllPropertyPage() {
  return (
    <div className="container">
      <div className="page-header">
        <h2>All Properties</h2>
        <div className="top-buttons">
            <Link to="/SearchPage" className="main-link">
              Go to Search Page
            </Link>
            <Link to="/favourites" className="main-link">
              View All favourites
            </Link>
        </div>
        
      </div>

      {/* ALL PROPERTIES LIST */}
      {data.properties.map((property) => (
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
    </div>
  );
}

export default AllPropertyPage;
