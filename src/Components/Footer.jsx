import React from "react";
import insta from './images/insta.png';
import Facebook from './images/Icon.png';
import youtube from './images/youtube.png';
import linkdin from './images/linkedin.png';
import './Landing.css';
export default function Footer() {
    return (
        <>
        <footer className="Footer" style={{background: '#20b541'}}>
                <div className="main32">
                    <div className="row" id="row50">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="col12">
                            <div className="links">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Portfolio</a></li>
                                    <li><a href="/">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="col12">
                
                            <div className="social-links">
                                <a href="/"><img src={insta} alt='socials' id="img-s" /></a>
                                <a href="/"><img src={Facebook} alt='socials' id="img-s" /></a>
                                <a href="/"><img src={youtube} alt='socials' id="img-s" /></a>
                                <a href="/"><img src={linkdin} alt='socials' id="img-s" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="row21">
                        <div className="col-lg-12 col-md-12 col-sm-12" id="col12">
                            <h1 className="Last">TRIO DEVELOPERS</h1>
                        </div>
                        
                    </div>

                </div>

            </footer>
        </>
    )
}