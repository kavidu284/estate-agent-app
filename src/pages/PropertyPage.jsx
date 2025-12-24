import { useParams , Link} from "react-router-dom";
import data from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();

  const property = data.properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <h2>{property.type}</h2>
      <p>{property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Price: £{property.price.toLocaleString()}</p>
      <p>{property.description}</p>

      <Link to="/">Back to Search</Link>
    </div>
  );
}

export default PropertyPage;
