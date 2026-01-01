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
        <div className="property-header">
          <h2>{property.type}</h2>
          <p className="property-location">{property.location}</p>
          <p className="property-price">
            £{property.price.toLocaleString()}
          </p>
        </div>
        {/* PROPERTY IMAGE */}
        <img
          src={`${import.meta.env.BASE_URL}${property.picture}`}
          alt="Property"
          className="property-image-2"
        />
        <div className="thumbnail-grid">
          {property.Images.map((img, index) => (
            <img key={index} src={`${import.meta.env.BASE_URL}${img}`} alt={`Property ${index + 1}`} />
          ))}
        </div>

        {/* BASIC INFO */}
        <div className="property-info">
        <div><strong>Bedrooms:</strong> {property.bedrooms}</div>
        <div><strong>Tenure:</strong> {property.tenure}</div>
        <div><strong>Added:</strong> {property.added.day} {property.added.month} {property.added.year}</div>
        </div>

        {/* TABS */}
        <Tabs className="property-tabs">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <p className="tab-text">{property.description}</p>
          </TabPanel>

          <TabPanel>
            <img
              src={`${import.meta.env.BASE_URL}${property.floorplan}`}
              alt="Floor Plan"
              className="floorplan-img"
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

      
        
        <div className="property-actions">
          <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
            Add to Favourites
          </button>
        </div>
        <div className="property-nav">
          <Link to="/SearchPage" className="back-link">
            ← Back to Search
          </Link>
          <Link to="/properties" className="back-link">
            ← Back to All Properties
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PropertyPage;
 