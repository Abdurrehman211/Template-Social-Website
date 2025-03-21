import React, { useState } from "react";
import './team.css';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamMembers = [
    {
      teamMemberId: 1,
      name: "Marvin McKinney",
      role: "Developer",
      email: 'battlemani790@gmail.com'  ,
      service: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "CSS", level: 88 },
        { name: "React Js", level: 75 },
        { name: "Node Js", level: 65 },
        { name: "Python", level: 45 },
        { name: "Java", level: 50 },
        { name: "C++", level: 50 },
        { name: "C# (.net Framework)", level: 20 },
        { name: "Express Js", level: 65 },
        { name: "Android Development (Java)", level: 20 },
        { name: "BootStrap", level: 90 },
        { name: "Jquery", level: 80 },
        { name: "React Native", level: 30 },
        { name: "mySQL", level: 75 },
        { name: "PHP", level: 80 },
        { name: "Laraval", level: 70 },
        { name: "MongoDb", level: 70 },
      ],
    },
    {
      teamMemberId: 2,
      name: "Wade Warren",
      role: "Developer",
      email: 'info@gmail.com',
      service: "WordPress Site",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Express.js", level: 85 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      teamMemberId: 3,
      name: "Jerome Bell",
      role: "Manager",
      email: 'info@gmail.com',
      service: "Project Management",
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Communication", level: 88 },
        { name: "Team Building", level: 85 },
      ],
    },
    {
      teamMemberId: 4,
      name: "Arlene McCoy",
      role: "CEO & Founder",
      email: 'info@gmail.com',
      service:"CEO & Founder",
      skills: [
        { name: "Business Strategy", level: 98 },
        { name: "Decision Making", level: 95 },
        { name: "Networking", level: 92 },
        { name: "Leadership", level: 97 },
      ],
    },
    {
      teamMemberId: 5,
      name: "Brooklyn Simmons",
      role: "Billing Handler",
      email: 'info@gmail.com',
      service: "Home Care Billing",
      skills: [
        { name: "Financial Management", level: 89 },
        { name: "Invoicing", level: 85 },
        { name: "Accounts Receivable", level: 83 },
        { name: "QuickBooks", level: 80 },
      ],
    },
    {
      teamMemberId: 6,
      name: "Leslie Alexander",
      role: "Market Analyst",
      email: 'info@gmail.com',
      service: "Market Analysis",
      skills: [
        { name: "Market Research", level: 91 },
        { name: "Data Analysis", level: 87 },
        { name: "SEO & SEM", level: 84 },
        { name: "Google Analytics", level: 86 },
      ],
    },
  ];
  
  


const Team = () => {
  const [filter, setFilter] = useState("All");

  const filteredTeam = filter === "All" ? teamMembers : teamMembers.filter((member) => member.role === filter);

  return (
    <div className="container">
      <h1 className="text-center mb-4">Meet Our <span style={{ color: "cornflowerblue" }}>Team</span></h1>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        {["All", "Developer", "Manager", "CEO & Founder", "Billing Handler", "Market Analyst"].map((category) => (
          <button
            key={category}
            className={`btn mx-2 ${filter === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Members */}
      <div className="row">
        {filteredTeam.map((member, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
            <div className="card2 team-card">
             <FaUserCircle size={150} className="user-icon mt-3 mb-5" color="white" />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <Link to={`/profile/${member.teamMemberId}`} state={{ member }} className="btn btn-outline-dark">
  Read More
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
