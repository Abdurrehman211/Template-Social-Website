import React from "react";
import Image1 from './images/Service.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import Footer from "./Footer.jsx";
import Sparkle from './images/sparkle.png';
import Brutal from './images/coneshape.png';
import circle from './images/circle.png';
import Unknown from './images/unknown.png';
import NewsTicker from "./marequee.jsx";
export default function Services() {

    const Locker=()=>{
        alert("To access this, A key is required Contact us for our Services!");
        let a = prompt("Enter the key");
        if(a == "trioDevs"){
            window.location.href= "/portfolio";
        }
        else{
            alert("invalid key!")
        }
    }

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
     
        <div className="container">
        <img src={Brutal} alt="V-brutal"  id="Cone122"/>
        <img src={Unknown} alt="Unknow" id="IDK" />
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
                <p>
                At Triodevelopers, we are committed to merging creativity with strategic insights to help businesses grow. Our team of professionals leverages innovative marketing strategies and data-driven analytics to craft compelling digital campaigns that enhance brand visibility and engagement.
                </p>
                <p>
                With a deep understanding of both global trends and local markets, we ensure each campaign is uniquely positioned for success. Our goal is to create meaningful connections between brands and their audiences, driving measurable results
                </p>
                <p>
                Through continuous innovation and collaboration, we transform marketing concepts into powerful digital experiences that leave a lasting impact.
                </p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/contact'} >
           Learn more
               </button>
                </div>
            </div>
            <div className="row" id="Service-row">
                <div className="col-6 col-md-6 col-sm-12" id="Service-Para1">
                    <h1>Web Design & Development</h1>
                    <p>
                    At Triodevelopers, we are passionate about building user-centric websites that combine aesthetics with functionality. Our expert developers and designers craft custom digital solutions that align with your brand’s goals while ensuring an exceptional user experience.                    </p>
                    <p>
                    By blending cutting-edge technology with creative design, we develop responsive and scalable websites that perform seamlessly across all devices. From startups to enterprises, our tailored web solutions empower businesses to thrive in the digital landscape.                    </p>
                    <p>
                    Fueled by innovation and expertise, we transform ideas into high-performing websites that engage users and drive success.                    </p>
                    <button className="btn btn-primary" onClick={Locker}>
                        Showcase
                    </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5" id="Service-pic1">
                    <div className="wrapper32">
                    </div>
                </div>
                <NewsTicker />
            </div>
          
            <div className="row" id="Service-row">
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-pic2">
                    <div className="wrapper32">
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-Para2">
                <h1>Brand Identity Design</h1>
                <p>At Triodevelopers, we specialize in crafting strong brand identities that resonate with audiences. Our creative team works meticulously to develop unique visual elements that reflect your brand’s values, ensuring a consistent and memorable presence across all platforms.</p>
                <p>
                By combining strategic thinking with artistic creativity, we design logos, typography, color schemes, and branding assets that set businesses apart from the competition. Our approach ensures that every element contributes to a cohesive and impactful brand story.                </p>
                <p>
                With a focus on innovation and excellence, we bring brands to life with compelling designs that leave a lasting impression.                </p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/contact'} >
                Learn more
               </button>
                </div>
              
            </div>
     
            <div className="row" id="Service-row">
            <div className="col-lg-6 col-md-6 col-sm-12" id="Service-Para2">
                <h1>Billing Home Care</h1>
                <p>At Triodevelopers, we understand the complexities of home care billing and provide seamless solutions to simplify the process. Our expertise ensures accurate and efficient billing services that help home care providers manage client accounts effortlessly.</p>
                <p>
                By leveraging technology and industry best practices, we optimize billing workflows, reduce administrative burdens, and improve reimbursement accuracy. Our services ensure that home care providers can focus on delivering quality care while we handle the financial aspects.               </p>
                <p>
                With a commitment to precision and reliability, we transform home care billing into a smooth, stress-free experience that enhances operational efficiency.                </p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/contact'} >
               Learn more
               </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" id="Service-pic2">
                    <div className="wrapper32">
                    </div>
                </div>
            
            </div>
            <img src={circle} alt='circle' id="circle221"/>
        </div>
       
    
 
    </section>
 
   <section id='Footer'>
    <Footer/>
   </section>
    </>
)
}
