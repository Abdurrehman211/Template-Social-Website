import React, { useEffect, useRef, useState } from "react";
import './portfolio.css';
import { FaUsers, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import Half from './images/halfcircle.png';
import Footer from './Footer'
import FeaturedProjects from "./Servicecards";
function Portfolio(){

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
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    
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