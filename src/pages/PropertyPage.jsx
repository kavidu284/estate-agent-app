import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";

function PropertyPage() {
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

      <p>{property.description}</p>

      <Link to="/">← Back to Search</Link>
    </div>
  );
}

export default PropertyPage;
