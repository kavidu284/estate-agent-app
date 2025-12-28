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

      {/* BASIC INFO */}
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <br />

      {/* TABS */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Added</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
          <p>
            Added on: {property.added.day}{" "}
            {property.added.month}{" "}
            {property.added.year}
          </p>
        </TabPanel>

        <TabPanel>
          <p>{property.location}</p>
        </TabPanel>
      </Tabs>

      <br />
      
      
      <button className="add-favourite-btn" onClick={() => addFavourite(property)}>
         Add to Favourites
      </button>


      <br /><br />
      <Link to="/">← Back to Search</Link>
      </div>
    </div>);
}

export default PropertyPage;
