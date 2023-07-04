import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-light text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">
              Contact us for more personalized guidance and support. Your
              satisfaction is our priority, and we can't wait to help you find
              the perfect jewelry that will add a touch of elegance and sparkle
              to your life. Contact us now and let's embark on a memorable
              jewelry experience together!
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-light mr-3" />
              123 Street, Vehari, Punjab, Pakistan
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-light mr-3" />
              <a
                href="mailto:ddamas850@gmail.com"
                target="_blank"
                style={{
                  listStyle: "none",
                  color: "#eee",
                  textDecoration: "none",
                }}
              >
                ddamas850@gmail.com
              </a>
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-light mr-3" />

              <a
                href="tel:+923022099099"
                target="_blank"
                style={{
                  listStyle: "none",
                  color: "#eee",
                  textDecoration: "none",
                }}
              >
                +92-302-2099099
              </a>
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-light text-uppercase mb-4">Site Link</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link to="/" className="text-light mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link to="/about" className="text-light mb-2" href="">
                    <i className="fa fa-angle-right mr-2" />
                    About
                  </Link>
                  <Link to="/privacy" className="text-light mb-2" href="">
                    <i className="fa fa-angle-right mr-2" />
                    Privacy Policy
                  </Link>
                  <Link to="/term" className="text-light mb-2" href="">
                    <i className="fa fa-angle-right mr-2" />
                    Terms & Conditions
                  </Link>

                  {/* <link to="/term" className="text-light mb-2" href=""><i className="fa fa-angle-right mr-2" />Terms & Conditions </Link> */}
                  <Link
                    to="/help"
                    className="text-light mb-2"
                    href="checkout.html"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    Help
                  </Link>
                  <Link
                    to="/"
                    className="text-light"
                    href="mailto:ddamas850@gmail.com"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-light text-uppercase mb-4">Products</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link
                    to="/category/64765dd953d305240492d4a8/page/1"
                    className="text-light mb-2"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    EARRINGS
                  </Link>
                  <Link
                    to="/category/64765de653d305240492d4a9/page/1"
                    className="text-light mb-2"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    NECKLACE SET
                  </Link>
                  <Link
                    to="/category/647659d7fea5cf30988a5c66/page/1"
                    className="text-light mb-2"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    RINGS FOR GIRLS
                  </Link>
                  <Link
                    to="/category/64765e2353d305240492d4ab/page/1"
                    className="text-light mb-2"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    BANGLES
                  </Link>
                  <Link
                    to="/category/64765e0553d305240492d4aa/page/1"
                    className="text-light mb-2"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    BRACELETS
                  </Link>
                  <Link
                    to="/category/64765e3b53d305240492d4ac/page/1"
                    className="text-light"
                    href="#"
                  >
                    <i className="fa fa-angle-right mr-2" />
                    Pendant
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h6 className="text-light text-uppercase mt-4 mb-3 ooi">
                  Follow Us
                </h6>
                <div className="d-flex">
                  <a
                    className="btn btn-primary btn-square mr-2"
                    href="https://twitter.com/abouzar_ijaz89"
                    target="_blank"
                    style={{ borderRadius: "40px" }}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    target="_blank"
                    className="btn btn-primary btn-square mr-2"
                    href="https://web.facebook.com/profile.php?id=100011857892382"
                    style={{ borderRadius: "40px" }}
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    target="_blank"
                    className="btn btn-primary btn-square mr-2"
                    href="https://www.linkedin.com/in/abouzar-ijaz-12935b1ab/"
                    style={{ borderRadius: "40px" }}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    target="_blank"
                    className="btn btn-primary btn-square"
                    href="https://github.com/abouzarijaz89"
                    style={{ borderRadius: "40px" }}
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-light">
              <a className="text-light" href="#">
                ©
              </a>{" "}
              2022 Damas Jewellery Store. All Rights Reserved | Develop by
              <p className=" nam text-danger" href="#">
                &nbsp;Abouzar Ijaz
              </p>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <p>DAMAS DIAMOND</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
