import { Link } from "react-router-dom";

function FavouritePage({favourites= [], RemoveFavourite}) {
  return (
    <div className="container">
        <div className="page-header">
          <h2>Favourite Properties</h2>
      
        </div>
        <div className="favourites-container"> 
            {favourites.length === 0 && (
                <p>You have no favourite properties.</p>)}

                {favourites.map((property)=>(

                  <div className="favourite-card" key={property.id} >
                       <Link to={`/property/${property.id}`}className="favourite-view-btn" > View Details </Link>
                        <img
                            src={property.picture}
                            alt="Property"
                            className="favourite-property-image"
                        />
                        <h3>{property.type}</h3>
                        <p>{property.location}</p>
                        <p>Price: £{property.price.toLocaleString()}</p>

                        <button className="remove-favourite-btn" onClick={() => RemoveFavourite(property.id)}>
                            Remove from Favourites
                        </button>
                    </div>

             ))}
       
            <Link to="/SearchPage">← Back to Search</Link>
            
        </div>
      </div>
  );
}

export default FavouritePage;