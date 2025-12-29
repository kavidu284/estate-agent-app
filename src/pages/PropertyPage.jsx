import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";
import { Tabs , TabList , Tab , TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyPage({addFavourite}) {
  const { id } = useParams();

  const property = data.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div className="container">
      <div className="details">
      <h2>{property.type}</h2>
      {/* PROPERTY IMAGE */}
      <img
        src={property.picture}
        alt="Property"
        className="property-image-2"
      />
<div className="thumbnail-grid">
    {property.Images.map((img, index) => (
      <img key={index} src={img} alt={`Property ${index + 1}`} />
    ))}
  </div>

      {/* BASIC INFO */}
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p><strong>Added:</strong> {property.added.day} {property.added.month} {property.added.year}</p>
      <br />

      {/* TABS */}
      <Tabs>
  <TabList>
    <Tab>Description</Tab>
    <Tab>Floor Plan</Tab>
    <Tab>Map</Tab>
  </TabList>

  <TabPanel>
    <p>{property.description}</p>
  </TabPanel>

  <TabPanel>
    <img
      src={property.floorplan}
      alt="Floor Plan"
      style={{ width: "60%" }}
    />
  </TabPanel>

  <TabPanel>
    <p>{property.location}</p>
    <iframe
      title="map"
      width="100%"
      height="300"
      loading="lazy"
      src={`https://www.google.com/maps?q=${property.location}&output=embed`}
    ></iframe>
  </TabPanel>
</Tabs>

      <br />
      
      
      <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
         Add to Favourites
      </button>


      <br /><br />
      <Link to="/SearchPage">← Back to Search</Link>
      <br />
      <Link to="/">← Back to All Property</Link>
      </div>
    </div>);
}

export default PropertyPage;
