import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              {props.searchBar ? (                     // Props se search bar ka use (Ternary Operator)
                <button className="btn btn-outline-success" type="submit">
                  Search{" "}
                </button>
              ) : (
                "No search Bar"
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps =  { 
  title : "Your title here" ,              // if it is not passed by parent 
  searchBar : false 
}

Header.propTypes = {
  title: PropTypes.string ,               // datatype of prop it will not show error but it is useful in debugging
  searchBar : PropTypes.bool.isRequired        // it is necessary to pass a value in search bar
}

export default Header
