import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Property</h1>
          <p>
            Search houses and flats across the UK with ease. 
            Save favourites and explore detailed listings.
          </p>

          <div className="hero-actions">
            <Link to="/SearchPage" className="hero-btn primary">
              Start Searching
            </Link>
            <Link to="/properties" className="hero-btn secondary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>🔍 Smart Search</h3>
          <p>Filter by price, bedrooms, date added and postcode.</p>
        </div>

        <div className="feature-card">
          <h3>❤️ Save Favourites</h3>
          <p>Shortlist properties and view them anytime.</p>
        </div>

        <div className="feature-card">
          <h3>📍 Detailed Listings</h3>
          <p>View images, descriptions and full property details.</p>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
