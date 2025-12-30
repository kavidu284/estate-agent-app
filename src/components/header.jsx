import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <span className="brand-icon">🏠</span>
          <span className="brand-name">EstateAgent</span>
        </div>

        <nav className="nav-menu">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/properties" className="nav-item">
            Properties
          </NavLink>
          <NavLink to="/SearchPage" className="nav-item">
            Search
          </NavLink>
          <NavLink to="/favourites" className="nav-item">
            Favourites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
