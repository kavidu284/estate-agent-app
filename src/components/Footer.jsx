import { Link } from "react-router-dom";

function Footer() {
  return (
     <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section brand-section">
          <h3>Estate Agent App</h3>
          <p>
             A modern property listing platform designed for
            smart searching and effortless property management.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/SearchPage">Search</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><Link to="/properties">Properties</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@estateagentapp.com</p>
          <p>Phone: +94 77 123 4567</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EstateAgent.All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
