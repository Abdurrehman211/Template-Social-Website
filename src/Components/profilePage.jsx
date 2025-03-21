import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./ProfilePage.css";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const { id } = useParams(); // Get user ID from URL
  const location = useLocation();
  const member = location.state?.member;
  
  const service = member?.service || "Default Service";
  // Get full user object
const [form , setForm] = useState({
  name: "",
  email: "",
  message: "",
  phone: "",
  address: service,
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


  if (!member) {
    return <h2 className="text-center">User Not Found</h2>;
  }

  return (
    <div className="profile-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        
        <h3>Contact</h3>
        <ul className="social-links1">
          <li><a href="#"><FaFacebook /> Facebook</a></li>
          <li><a href="#"><FaGithub /> GitHub</a></li>
          <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="#"><FaEnvelope /> Email</a></li>
        </ul>
        <h3>Hire Me</h3>
        <form className="contact-form" onSubmit={HandleSubmit}>
          <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input type="email" placeholder="Your Email" required value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} />
          <input type="hidden" value={form.service} />
          <input type="Phone Number" placeholder="Your Phone Number" value={form.phone} required onChange={(e)=> setForm({...form, phone: e.target.value})} />
          <textarea placeholder="Your Message" rows="4" required value={form.message} onChange={(e)=> setForm({...form, message: e.target.value})} ></textarea>
          <button type="submit">Send</button>
        </form>
      </aside>

      {/* Main Profile Section */}
      <main className="profile-content">
        {/* User Info */}
        <section className="user-info">
       <FaUserCircle size={150} className="user-icon mt-3 mb-5" color="Black" />
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h3>Skills</h3>
          {member.skills.map((skill, index) => (
            <div key={index} className="skill-container">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <ToastContainer  autoClose={3000} theme="dark" autoposition="top-center" />
    </div>
  );
};

export default ProfilePage;
