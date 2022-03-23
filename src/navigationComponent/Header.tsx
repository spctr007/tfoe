import React from "react";

const Header = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">
          The Fraternal Order of <b className="eagles-font">EAGLES</b>
        </div>
        <div className="masthead-heading text-uppercase">
          Philippine <b className="eagles-font">Eagles</b>
        </div>
        <p>First Philippine-Born Fraternal Socio-Civic Organization</p>
        <a className="btn btn-primary btn-xl text-uppercase" href="#events">
          Learn More About Us
        </a>
      </div>
    </header>
  );
};

export default Header;