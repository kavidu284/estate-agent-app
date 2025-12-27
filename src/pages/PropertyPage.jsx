import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";

function PropertyPage({addFavourite}) {
  const { id } = useParams();

  const property = data.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <h2>{property.type}</h2>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p>
  <strong>Added:</strong>{" "}
  {property.added.day} {property.added.month} {property.added.year}</p>

      <p>{property.description}</p>


      
      
      <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
         Add to Favourites
      </button>


      <br /><br />
      <Link to="/">← Back to Search</Link>
    </div>
  );
}

export default PropertyPage;
