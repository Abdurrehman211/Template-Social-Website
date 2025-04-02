import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from './images/Navlogo.png';
import './Landing.css';
const Footer = () => {
  return (
    <div className="">
        <div className="row221">
                    <div className="col-lg-12 col-md-12 col-sm-12" id="Review-referral">
                        <h3>
                            Your Reviews Matter to us ! <br />
                            Click the button to leave a review !
                        </h3>
                        <a href="/review/TrioDevelopers" className="btn btn-success" style={{textDecoration: "none"}}>Leave a Review</a>
                    </div>
                </div>
      <footer className="text-center text-lg-start text-white footer" >
        <div className=" p-4 pb-0">
          {/* Section: Links */}
          <section>
            <div className="row">
              {/* Company Info */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img  src={image} alt="Logo" id="logo" width={'100%'}
              height={'100%'}/>
                <h4 className="text-uppercase mb-4 font-weight-bold mt-3">TrioDevelopers </h4>
              
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">SERVICES</h6>
                <p><a href="/Service" className="text-white" style={{textDecoration: "none"}}>Web Design & Development</a></p>
                <p><a href="/Service" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Digital Marketing Strategy</a></p>
                <p><a href="/Service" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Brand Identity Design</a></p>
                <p><a href="/Service" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Billing Home Care</a></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Useful Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                <p><a href="/" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Home</a></p>
                <p><a href="/about" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Why Trio Developers</a></p>
                <p><a href="/portfolio" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Portfolio</a></p>
                <p><a href="/Service" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Service</a></p>
                <p><a href="/contact" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Contact Us</a></p>

                {/* <p><a href="#" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Shipping Rates</a></p>
                <p><a href="#" className="text-white" style={{ textDecoration: "none" , color: "white"}}>Help</a></p> */}
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3  mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <a href="https://maps.app.goo.gl/6bwgukfY13T8e6By5" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color: "white"}}><i className="fas fa-home mr-3" style={{marginRight: "10px"}}></i> 744 Southcross Dr W suite 204
                Burnsville Mn 55306</a><br /><br />
                <a href="mailto:info.triodevelopers@gmail.com " target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color: "white"}}><i className="fas fa-envelope mr-3" style={{marginRight: "10px"}}></i>info.triodevelopers@gmail.com</a><br /><br />
                <a href="tel:952-500-9407" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color: "white"}}><i className="fas fa-phone mr-3" style={{marginRight: "10px"}}></i> 10000000</a><br /><br />
                <a href="tel:952-444-2359" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color: "white"}}><i className="fas fa-print mr-3" style={{marginRight: "10px"}}></i> 100000000</a>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center border-top p-4 border-bottom" >
                    <p className="p-0" style={{marginBottom: "0px"}}>
                        Register Now:&nbsp; <a href="/sign-in" className="btn btn-outline-light"> Sign in</a>
                    </p>
                </div>
            </div>
          </section>

          {/* <hr className="my-3" /> */}

          {/* Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2025 Copyright:  
                  <a className="text-white px-2 text-decoration-none"  target="_blank" rel="noreferrer"> TrioDevelopers.com</a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;