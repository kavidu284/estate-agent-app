import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Estate Agent</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/SearchPage">Search</Link>
      </nav>
    </header>
  );
}

export default Header;
