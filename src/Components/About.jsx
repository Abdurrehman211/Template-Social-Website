import React, {useEffect} from "react";
import './About.css';
import Landing from './images/Aboutus-Land.jpg';
import Desktop from './images/Desktop.jpg';
import Presentation from './images/About-servises.jpg';
import Brutal from './images/coneshape.png';
import image1 from './images/Rectangle119.png';
import image2 from './images/Rectangle121.png';
import image3 from './images/Rectangle123.png';
import image4 from './images/Rectangle127.png';
import image5 from './images/Rectangle128.png';
import image6 from './images/Rectangle129.png';
import Sparkle from './images/sparkle.png';
import { FaLightbulb, FaUsers, FaCogs, FaHandshake, FaRocket } from "react-icons/fa";
import Footer from './Footer';
import Aos from 'aos';
import image from './images/Navlogo.png';
import 'aos/dist/aos.css';
import Team from "./ourTeam";
export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 200,
            mirror: true
        });
    },[]);

    const values = [
        {
          icon: <FaLightbulb />,
          title: "Innovation",
          description: "We embrace emerging technologies to create groundbreaking solutions that redefine industry standards.",
        },
        {
          icon: <FaUsers />,
          title: "Client-Centric Approach",
          description: "We put our clients first, ensuring solutions are tailored to their specific business goals and challenges.",
        },
        {
          icon: <FaCogs />,
          title: "Quality & Excellence",
          description: "We uphold the highest development standards, ensuring robust, secure, and efficient software solutions.",
        },
        {
          icon: <FaHandshake />,
          title: "Integrity & Transparency",
          description: "We believe in honesty, ethical practices, and clear communication to build trust and long-term partnerships.",
        },
        {
          icon: <FaRocket />,
          title: "Continuous Growth",
          description: "We are committed to learning, evolving, and staying ahead in the fast-paced world of digital transformation.",
        },
      ];
    return (
        <>
            <section id="Landing-page">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12" id="About-col" data-aos="fade-up">
                                <h1>Your Choice is our First & Foremost <span style={{ color: "cornflowerblue" }}>priority</span></h1>
                                <p>The Real Creative Potential</p>
                                <p>
                                    We craft innovative digital solutions and designs that drive your business forward and captivate your audience.
                                </p>
                                <div className="Above" data-aos="fade-up">
                                    <div className="first" style={{ padding: '20px 0px' }}>
                                        <p style={{ padding: '5px 0px' }}>1- Consulting</p>
                                        <p style={{ padding: '5px 0px' }}>3- Concept Design</p>

                                    </div>
                                    <div className="second" style={{ padding: '20px 0px' }} data-aos="fade-up">
                                        <p style={{ padding: '5px 0px' }} >2- Construction</p>
                                        <p style={{ padding: '5px 0px' }}>4- Design Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up"> 
                                <img src={Landing} alt="Business" id="Business" />
                                <img src={Desktop} alt="Desktop" id="Desktop" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <h1  className="H2221">4+ Years of <span style={{ color: "cornflowerblue" }}>Experience</span></h1>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 col-md-12 col-sm-12" align="center">
                            <p id="Passionate"  align="center">
                            At <strong>Trio Developers</strong>, we are dedicated to merging innovation with strategy to empower brands. Our team of experts integrates cutting-edge design with data-driven insights to craft exceptional digital solutions tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 col-md-12 col-sm-12" align="center">
                            <div className="img-block">
                                <img src={Presentation} alt="presentation" id="presentation" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="About1" >
                <div className="container">
                    <div className="row border-bottom mb-5  about-ser">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <h1><span className="hero-highlight">Trio Developer: </span>A Place of Revolution</h1>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-7">
                              <h1>
                                <span style={{ color: "cornflowerblue" }}>Our Mission</span>
                              </h1>
                              <p>
                              At Trio Developers, our mission is to empower businesses with cutting-edge software solutions that drive innovation and efficiency. We are committed to delivering high-quality, scalable, and customized applications that cater to the unique needs of our clients. By combining expertise in modern technologies with a passion for problem-solving, we strive to create seamless digital experiences that enhance productivity and foster growth. Our goal is to be a trusted technology partner, helping businesses achieve success through reliable and future-ready software solutions.
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5 my-5 ">
                            <img src={image} alt="logo" width={'95%'} height={'95%'} />
                            </div>
                        </div>
                        <div className="row mt-4">
                    
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <h1>
                                <span style={{ color: "cornflowerblue" }}>Our Values</span>
                              </h1>
                              <div className="row values-section">
        {values.map((value, index) => (
          <div key={index} className="col-md-4 col-lg-4 value-card">
            <div className="icon-box">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
          </div>
      </div>                        </div>
                    
                </div>
            </section>
            <section id="Team">
                <img src={Brutal} alt="Cone Shaped" id="Cone12" data-aos="fade-up" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <h1 className="Team">Our <span style={{ color: "cornflowerblue" }}>Team</span></h1>
                        </div>
                    </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                    <Team />    
                    </div>
                  </div>
               
                </div>
                <div className="footer321">
                    <h3>Branding</h3>
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
            <section id="footer">
                <Footer/>
            </section>
        </>
    )
}