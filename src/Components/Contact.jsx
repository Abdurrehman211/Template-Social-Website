import React, { useState } from "react";
import './contact.css';
import Phone from './images/phone.png';
import fax from './images/fax.png';
import email from './images/email.png';
import Noone from './images/irregular.png';
import Footer from './Footer';
import Brutal from './images/coneshape.png';
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from './images/Navlogo.png';
function Contact (){
    
    const [form , setForm] = useState({
      name: "",
      email: "",
      message: "",
      phone: "",
      address: "TrioDevelopers",
    });
    
    const HandleSubmit = async(e) =>{
        e.preventDefault();
        if (!form.name || !form.email || !form.message || !form.phone || !form.address ) {
            toast.error("Please fill all fields");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) {
          toast.error("Please enter a valid email address.");
          return;
      }
      
           toast.info('Sending mail....');
        try{
            const response =await axios.post("http://localhost:8000/index.php", form);
            if (response.data.message) {
            toast.success('Message sent successfully!');
            }
            else{
                toast.error('Error sending message');
            }
        }catch (error) {
            console.error('Error:', error);
            toast.error('Error sending message');
        }
        
    }
    
    return(
        <>
        <section id="Contact">
        <div className="wrap"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12" id="Contact-col">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="Contact-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1>
                            Our <span className="Hero-heading">Objective</span>
                        </h1>
                    <p>
                              At <strong>Trio Developers</strong>, our mission is to empower businesses with cutting-edge software solutions that drive innovation and efficiency. We are committed to delivering high-quality, scalable, and customized applications that cater to the unique needs of our clients. By combining expertise in modern technologies with a passion for problem-solving, we strive to create seamless digital experiences that enhance productivity and foster growth. Our goal is to be a trusted technology partner, helping businesses achieve success through reliable and future-ready software solutions.
                              </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                    <img src={image} alt="logo" width={'100%'} />
                        </div>
                </div>
            </div>
        </section>
        <section id="Form">
            <div className="container">
            <img src={Noone} alt="IRDK" id="nothing"/>
                <div className="row"  id="AfterForm">
                    <div className="col-lg-6 col-md-6 col-sm-12" id="Form-col">
                        <h1>Get in <span style={{color:'green'}}>Touch</span></h1>
                        <p>Got a New <span className="Hero-heading">Project?</span> Let's Talk</p>
                        <form className="contact-form" onSubmit={HandleSubmit}>
          <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input type="email" placeholder="Your Email" required value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} />
          <input type="hidden" value={form.service} />
          <input type="Phone Number" placeholder="Your Phone Number" value={form.phone} required onChange={(e)=> setForm({...form, phone: e.target.value})} />
          <textarea placeholder="Your Message" rows="4" required value={form.message} onChange={(e)=> setForm({...form, message: e.target.value})} ></textarea>
          <button type="submit">Send</button>
        </form>
                        <div className="row" id="icons1">
                            <div className="col-lg-12 col-md-12 col-sm-12" id="icons">
                                <img src={Phone} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Phone</p>
                                <p><a href="tel:090078601">090078601</a></p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12" id="icons">
                                <img src={fax} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Fax</p>
                                <p><a href="tel:090078601">090078601</a></p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12" id="icons">
                                <img src={email} alt="Phone" id="phone"/>
                                <div className="text-emd">
                                <p>Email</p>
                                <p><a href="mailto:info.triodevelopers@gmail.com">info.triodevelopers@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="main23123 mt-4 mb-4">
                        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5642455.238655522!2d-98.64676078589105!3d46.32760765371162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d585b9a60780b9b%3A0x2a2c99b10fea20f!2sMinnesota%2C%20USA!5e0!3m2!1sen!2s!4v1743174741550!5m2!1sen!2s"
        width="95%"
        height="500px"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </section>
<section style={{height:'200px',textAlign:'left',position:'relative'}}>
<img src={Brutal} alt="V-brutal"  id="Cone1222"/>
</section>
        <section id="Footer">
            <Footer/>
        </section>
          <ToastContainer  autoClose={3000} theme="light" autoposition="top-center" />
        </>
    )
}
export default Contact;