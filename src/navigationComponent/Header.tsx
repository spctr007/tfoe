import React from "react";

const Header = () => {
  return (
    <header className="masthead" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/header-bg.jpg'})`
    }}>
      <div className="container">
        <div className="masthead-subheading">
          The Fraternal Order of <b className="eagles-font">EAGLES</b>
        </div>
        <div className="masthead-heading text-uppercase">
          Philippine <b className="eagles-font">Eagles</b>
        </div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#events">
          Learn More About Us
        </a>
      </div>
    </header>
  );
};

export default Header;