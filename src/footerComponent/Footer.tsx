import React from "react";

const Footer = () => {
  // Back to top Button Event listener
  //
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add('active');
  //     } else {
  //       backtotop.classList.remove('active');
  //     }
  //   }
  //   window.addEventListener('load', toggleBacktotop)
  //   onscroll(document, toggleBacktotop);
  // }

  return (
    <div>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright &copy; Philippine Eagles 2022
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#">
                <i className="fab fa-twitter"/>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#">
                <i className="fab fa-facebook-f"/>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#">
                <i className="fab fa-linkedin-in"/>
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#">
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none" href="#">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div id="preloader" />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
};

export default Footer;
