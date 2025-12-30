import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Estate Agent</h1>

      <nav>
        <NavLink to="/" className="nav-link">Property page</NavLink>
        <NavLink to="/SearchPage" className="nav-link">Search</NavLink>
        <NavLink to="/favourites" className="nav-link">Favourites</NavLink>
      </nav>
    </header>
  );
}

export default Header;
