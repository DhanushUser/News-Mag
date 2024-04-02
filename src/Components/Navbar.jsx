import React from "react";

const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-warning text-dark fs-4 ">News-Mag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ">
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("technology")}>
                Technology
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("business")}>
                Business
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("health")}>
                Health
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("science")}>
                Science
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("sports")}>
                Sports
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" onClick={()=>setCategory("entertainment")}>
                Entertainment
                </div>
            </li>
            
           
          </ul>
          <form class="d-flex ms-2 " role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-warning" type="submit">Search</button>
        </form>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
