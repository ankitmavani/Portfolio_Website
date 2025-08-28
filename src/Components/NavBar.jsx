import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link   to="/" className="navbar-link" data-nav-link>
            {/* <button className="navbar-link  active" data-nav-link> */}
              About
            {/* </button> */}
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/resume" className="navbar-link" data-nav-link>
            {/* <button className="navbar-link" data-nav-link> */}
              Resume
            {/* </button> */}
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link" data-nav-link>
            {/* <button className="navbar-link" data-nav-link> */}
              Portfolio
            {/* </button> */}
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/blog" className="navbar-link" data-nav-link>
            {/* <button className="navbar-link" data-nav-link> */}
              Blog
            {/* </button> */}
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" data-nav-link>
            {/* <button className="navbar-link" data-nav-link> */}
              Contact
            {/* </button> */}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
