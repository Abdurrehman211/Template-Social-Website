import React, { useState, useEffect, useRef } from "react";
import "./FeaturedProjects.css";
import project1 from "./images/react-app1.png";
import project2 from "./images/react-app2.png";
import project3 from "./images/react-app3.png";
import project4 from "./images/Document.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Exclusive App is a sleek, coming-soon landing page (https://exclusive-app-rho.vercel.app/) featuring a dark-themed, minimalist design. The site displays a prominent 'Coming Soon' message and includes an email signup field with a 'Notify Me' button, likely for early access or updates. The heading may contain a typo ('Exclusive'), suggesting the project is still in development. Hosted on Vercel, it appears to be a placeholder for an upcoming app, SaaS tool, or exclusive service, with more details expected upon launch",
    image: project1,
    note: "we would like to hear from you. Visit our sites and tells us what you think ! click the button below.",
    link: "https://exclusive-app-rho.vercel.app/",
    technologies: [
      { name: "React", level: 90 },
      { name: "React Bootstrap", level: 90 },
      { name: "React Toastify ", level: 75 },
      { name: "React Router", level: 85 },
      { name: "State Management", level: 75 },
      { name: "Node.js", level: 75 },
      { name: "Middleware", level: 70 },
      { name: "JWT Tokens & Authentication", level: 70 },
      { name: "Express Js", level: 70 },
      { name: "MongoDB", level: 50 },

    ],
  },
  {
    id: 2,
    title: "Samah Home Care | A Home Care Agency MN",
    description: "Samah Home Care (https://sammmah-care.vercel.app/) is a contemporary healthcare or wellness platform featuring a clean, professional design with soothing aesthetics and intuitive navigation. The responsive website appears to include essential sections like services, about, and contact, suggesting a focus on medical or well-being services. Hosted on Vercel, it seems to be a developer-built project currently in development or early launch phase, potentially offering consultations, support, or personalized care solutions. The minimalist structure indicates ongoing refinement, with more features likely to be added in future updates.",
    image: project2,
    note: "we would like to hear from you. Visit our sites and tells us what you think ! click the button below.",
    link: "https://sammmah-care.vercel.app/",
    technologies: [
      { name: "React", level: 80 },
      { name: "React Quill | Rich Text Editor", level: 70 },
      { name: "Google Maps, Geocoding & Localization", level: 70 },
      { name: "React Bootstrap", level: 90 },
      { name: "React Toastify ", level: 75 },
      { name: "React Router", level: 85 },
      { name: "State Management", level: 75 },
      { name: "PHP", level: 60 },
      { name: "PHP Mailer", level: 65 },
  
      { name: "MY SQL", level: 75 },
    ],
  },
  {
    id: 3,
    title: "Unique Home Care | A Home Care Agency MN",
    description: "Unique Home Care is a professional home healthcare services provider offering personalized in-home care solutions for seniors, recovering patients, and individuals needing daily assistance. The website features a warm, inviting design with clear sections highlighting their services (like personal care, companionship, and skilled nursing), caregiver qualifications, and service areas. Emphasis is placed on compassionate, client-centered care with flexible options tailored to individual needs. The site includes easy contact methods, testimonials (if available), and likely details about insurance/payment options—all structured to help families quickly find reliable care for loved ones. Hosted on a dedicated domain, it reflects an established business with a focus on trust and accessibility in home healthcare.",
    image: project3,
    note: "we would like to hear from you. Visit our sites and tells us what you think ! click the button below.",
    link: "https://uniquehomecare.us/",
    technologies: [
        { name: "React", level: 80 },
        { name: "Google Maps", level: 70 },
        { name: "React Bootstrap", level: 90 },
        { name: "React Toastify ", level: 75 },
        { name: "React Router", level: 85 },
        { name: "State Management", level: 75 },
        { name: "PHP", level: 60 },
        { name: "PHP Mailer", level: 65 },
        { name: "MY SQL", level: 75 },
    ],
  },
  {
    id: 4,
    title: "Template",
    description: "An admin panel for managing business analytics.",
    image: project4,
    note: "we would like to hear from you. Visit our sites and tells us what you think ! click the button below.",
    link: "https://exclusive-app-rho.vercel.app/",
    technologies: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
    ],
  },
];

const FeaturedProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgressVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 3);
    setExpanded(true);
  };

  const handleViewLess = () => {
    setVisibleProjects(3);
    setExpanded(false);
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">🚀 Web Development Projects</h2>
      
      <div className="projects-container">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="project-card">
            <div className="upper-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.note}</strong> <br />
                <a href={`/review/${encodeURIComponent(project.title)}`} className="btn btn-primary my-3">
  Please give us a review
</a> <br />
                {project.link && <a href={project.link}  target="_blank" rel="noopener noreferrer"  className="view-project">View Project <span>→</span></a>}
              </div>
            </div>
            <div className="progress-section" ref={progressRef}>
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-progress">
                  <span>{tech.name}</span>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${progressVisible ? "animate" : ""}`}
                      style={{ width: progressVisible ? `${tech.level}%` : "0%" }}
                    >
                      <span className="progress-text">{progressVisible ? `${tech.level}%` : ""}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        {!expanded && visibleProjects < projects.length && (
          <button className="btn btn-success mt-4" onClick={handleViewMore}>
            View More
          </button>
        )}
        {expanded && (
          <button className="btn btn-danger" onClick={handleViewLess}>
            View Less
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects