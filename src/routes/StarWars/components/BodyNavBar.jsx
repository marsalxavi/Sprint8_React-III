import React from "react";

export const BodyNavBar = () => {
  return (
    <div>
      <nav
        style={{ position: "relative"}}
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="index.html#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#Naus" className="nav-link">
                  SpaceCrafts-&gt;
                </a>
              </li>
              <li className="nav-item">
                <a href="#Ship01" className="nav-link">
                  Ship01
                </a>
              </li>
              <li className="nav-item">
                <a href="#Ship02" className="nav-link">
                  Ship02
                </a>
              </li>
              <li className="nav-item">
                <a href="#Ship03" className="nav-link">
                  Ship03
                </a>
              </li>
              <li className="nav-item">
                <a href="#Ship04" className="nav-link">
                  Ship04
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
