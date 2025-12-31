import { Link } from "react-router-dom";
import data from "../data/properties.json";

function AllPropertyPage({ addFavourite }) {
  return (
    <div className="container">
      <div className="page-header">
        <h2>All Properties</h2>
      </div>

      {/* ALL PROPERTIES LIST */}
      {data.properties.map((property) => (
        <div key={property.id} className="property-card">
          <img
            src={property.picture}
            alt="Property"
            className="property-image"
          />
          <div className="property-info">
            <h3>{property.type}</h3>
            <p className="property-location">{property.location}</p>
            <p className="property-meta">Bedrooms: {property.bedrooms}</p>
            <p  className="property-price">£{property.price.toLocaleString()}</p>
          </div>
          <div className="property-actions">
            <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
                    Add to Favourites
            </button>

            <Link className="details-btn" to={`/property/${property.id}`}>
              View Details
            </Link>
          </div>
        </div>    
      ))}
    </div>
  );
}

export default AllPropertyPage;
