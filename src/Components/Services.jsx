import React from "react";
import Image1 from './images/Service.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import Footer from "./Footer.jsx";
import Sparkle from './images/sparkle.png';
import Brutal from './images/coneshape.png';
import circle from './images/circle.png';
import Unknown from './images/unknown.png';
export default function Services() {
return (
    <>
    <section id="M-Services">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-sm-12">
                <h1 className="h1">Our Services</h1>
                </div>
                <div className="col-12 col-md-12 col-sm-12 mb-5">
                <img src={Image1} alt="main pic " id="main" />
                </div>
            </div>
         
        </div>
        <div className="footer3210">
                    <h3>Billing</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Development</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Agency</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Design</h3>
                    <img src={Sparkle} alt="sparkle" id="sparkle" />
                    <h3>Marketing</h3>
                </div>
    </section>
    <section id="Service-text">
        <img src={Brutal} alt="V-brutal"  id="Cone122"/>
        <img src={Unknown} alt="Unknow" id="IDK" />
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-sm-12" id="Service-col">
                    <h1>Start Exploring <span style={{color:'cornflowerblue',fontFamily:"Montserrat"}}>Services</span></h1>
                </div>
            </div>
            <div className="row" id="Service-row">
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-pic">
                    <div className="wrapper32">
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-Para">
                <h1>Digital Marketing Strategy</h1>
                <p>At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.</p>
                <p>
                With a global perspective and local expertise, we bring a fresh approach to every project. Our commitment is to create impactful experiences that drive success and resonate with audiences worldwide.
                </p>
                <p>
                Driven by innovation and collaboration, we transform ideas into compelling digital experiences that leave a lasting impact.
                </p>
                </div>
            </div>
            <div className="row" id="Service-row">
                <div className="col-6 col-md-6 col-sm-12" id="Service-Para1">
                    <h1>Web Design & Development</h1>
                    <p>
                    At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.
                    </p>
                    <p>
                    With a global perspective and local expertise, we bring a fresh approach to every project. Our commitment is to create impactful experiences that drive success and resonate with audiences worldwide.
                    </p>
                    <p>
                    Driven by innovation and collaboration, we transform ideas into compelling digital experiences that leave a lasting impact.
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-pic1">
                    <div className="wrapper32">
                    </div>
                </div>
            </div>
            <div className="row" id="Service-row">
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-pic2">
                    <div className="wrapper32">
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-Para2">
                <h1>Brand Identity Design</h1>
                <p>At Market Brains, we are passionate about blending creativity with strategy to elevate brands. Our team of experts combines innovative design with data-driven insights to deliver exceptional digital solutions tailored to your unique needs.</p>
                <p>
                With a global perspective and local expertise, we bring a fresh approach to every project. Our commitment is to create impactful experiences that drive success and resonate with audiences worldwide.
                </p>
                <p>
                Driven by innovation and collaboration, we transform ideas into compelling digital experiences that leave a lasting impact.
                </p>
                </div>
            </div>
        </div>
      <img src={circle} alt='circle' id="circle221"/>
    </section>
   <section id='Footer'>
    <Footer/>
   </section>
    </>
)
}
