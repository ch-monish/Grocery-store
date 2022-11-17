import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" href="#" to="/">Grocery App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>

            <li className="nav-item">
              <Link to="/about"className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link  to="/contact"className="nav-link" href="#">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" href="#">Cart</Link>
            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-item" to="/register">Register</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-item" to="/login">Login</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default NavBar
