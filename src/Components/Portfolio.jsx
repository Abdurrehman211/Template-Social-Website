import React, { useEffect, useRef, useState } from "react";
import './portfolio.css';
import { FaUsers, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import Half from './images/halfcircle.png';
import Footer from './Footer'
import FeaturedProjects from "./Servicecards";
import image from './images/Navlogo.png';
function Portfolio(){
    const services = [
        {
          title: "Web Development",
          description: [
            "Custom Website Development",
            "E-commerce Development",
            "CMS Development (WordPress, Shopify)",
            "Progressive Web Apps (PWAs)",
            "Landing Page Development",
          ],
        },
        {
          title: "Mobile App Development",
          description: [
            "Native & Cross-Platform Apps",
            "UI/UX Mobile Design",
            "App Optimization & Maintenance",
            "API & Third-Party Integrations",
          ],
        },
        {
          title: "Full-Stack Development",
          description: [
            "MERN & MEAN Stack Development",
            "PHP, Laravel, & Node.js Solutions",
            "API Development & Integration",
            "Database Management (SQL, MongoDB, Firebase)",
          ],
        },
        {
          title: "E-commerce Solutions",
          description: [
            "Shopify & WooCommerce Stores",
            "Custom E-commerce Platforms",
            "Payment Gateway Integration",
            "Product Management Systems",
          ],
        },
        {
          title: "UI/UX Design",
          description: [
            "Website & App UI/UX Design",
            "Wireframing & Prototyping",
            "Brand Identity & Logo Design",
            "Interactive Web Elements",
          ],
        },
        {
          title: "Software Development",
          description: [
            "SaaS Development",
            "ERP & CRM Solutions",
            "Business Automation Tools",
            "Custom Web & Desktop Applications",
          ],
        },
        {
          title: "Cloud & DevOps",
          description: [
            "Cloud Deployment (AWS, Google Cloud, Azure)",
            "CI/CD Pipeline Implementation",
            "Server Management & Optimization",
            "Security & Compliance",
          ],
        },
        {
          title: "Digital Marketing & SEO",
          description: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing (SMM)",
            "Pay-Per-Click Advertising (PPC)",
            "Content Marketing & Copywriting",
          ],
        },
      ];
    const [counts, setCounts] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
    });
    
    const targets = [250, 50, 10000];
    const refs = [useRef(null), useRef(null), useRef(null)];
    const duration = 2000; // 2 seconds
    
    useEffect(() => {
        refs.forEach((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        let start = 0;
                        const increment = Math.ceil(targets[index] / (duration / 50));
    
                        const interval = setInterval(() => {
                            start += increment;
                            if (start >= targets[index]) {
                                setCounts((prevCounts) => ({
                                    ...prevCounts,
                                    [`count${index + 1}`]: targets[index],
                                }));
                                clearInterval(interval);
                            } else {
                                setCounts((prevCounts) => ({
                                    ...prevCounts,
                                    [`count${index + 1}`]: start,
                                }));
                            }
                        }, 50);
                    }
                },
                { threshold: 0.5 }
            );
    
            if (ref.current) {
                observer.observe(ref.current);
            }
    
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        });
    }, []);
    return (
        <>
        <section id="Portfolio">
            <div className="wrap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>
                        Showcasing Our <span className="Hero-heading" >Expertise</span> <br />One <span className="Hero-heading" >Project</span> at a Time
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    <section id="portfolio-Service">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <a href="/"><img src={image} alt="logo" width={'95%'} height={'95%'} /></a>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1>
                        <span className="Hero-heading" >Our</span> <span className="Hero-heading" >Services</span>
                    </h1>
              <p>  At <span className="Hero-heading">Trio Developers</span> , we specialize in delivering high-quality, scalable, and customized digital solutions to help businesses grow and succeed in the competitive market. Our expert team of developers, designers, and strategists work collaboratively to bring your ideas to life with cutting-edge technologies and best industry practices.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="services-wrapper">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-list">
              {service.description.map((item, idx) => (
                <li key={idx} className="service-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
                </div>
            </div>
        </div>
    </section>

        <section id="Pics">
            <div className="container">
               <div className="row">
                   <div className="col-lg-12 col-md-12 col-sm-12">
                    <FeaturedProjects />
                   </div>
               </div>
            </div>
        
        </section>
         <section id="hero-about1">
        <div className="wrap">          </div>
      
                        <div className="container ">
                            <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                                    <div className="card1" ref={refs[0]}>
                                    <FaUsers className="icon" />
                                        <h2>{counts.count1}+</h2>
                                        <p>Satisfied Clients Served</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                                    <div className="card1" ref={refs[1]}>
                                    <FaChalkboardTeacher className="icon" />
                                        <h2>{counts.count2}+</h2>
                                        <p>Projects Delivered</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                                    <div className="card1" ref={refs[2]}>
                                    <FaClock className="icon" />
                                        <h2>{counts.count3}+</h2>
                                        <p>Hours of Deserving Creativity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
              
                    </section>
        <br /><br /><br />
        <section id="footer">
            <Footer/>
        </section>
        </>
    )
}
export default Portfolio;