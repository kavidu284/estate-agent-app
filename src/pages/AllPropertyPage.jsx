import { Link } from "react-router-dom";
import data from "../data/properties.json";

function AllPropertyPage({ addFavourite  , favourites , removeFavourite  }) {
  return (
    <div className="container two-column-layout">
      {/*left column header*/}
      <div className="properties-column">
        <h2>All Properties</h2>
      

        {/* ALL PROPERTIES LIST */}
        {data.properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={`${import.meta.env.BASE_URL}${property.picture}`}
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
      {/*right column - favourites*/}
      <aside className="favourites-panel">
        <h3>❤️ Favourites</h3>

        {favourites.length === 0 ? (
          <p className="empty-fav">No favourite properties yet</p>
        ) : (
          favourites.map((fav) => (
            <div key={fav.id} className="favourite-mini-card">
              <img src={`${import.meta.env.BASE_URL}${fav.picture}`} alt="Property image" />
              <div>
                <p className="fav-title">{fav.type}</p>
                <p className="fav-price">
                  £{fav.price.toLocaleString()}
                </p>
              </div>

              <button
                className="remove-fav-btn"
                onClick={() => removeFavourite(fav.id)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </aside>
    </div>
  );
}

export default AllPropertyPage;
