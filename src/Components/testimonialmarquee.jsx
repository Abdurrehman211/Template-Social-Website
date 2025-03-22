import React from "react";
import Marquee from "react-fast-marquee";
import './Landing.css';

const testimonials = [
  {    name: "Employee Development",
    review: "Useful resources for employee training and testing, including videos, documents, and online resources",
   
  },
  {   name: "Caregiver Assistance",
    review: "In-home caregiving can be a taxing job physically, mentally, and emotionally. It can become even more difficult when the recipient of your care is a friend or relative.",
    
  },
  {    name: "Resource Hub",
    review: "Browse our useful library of forms, links, videos, and more in our resource center.",
   
  },
  {
    name: " Industry Alerts & Announcements",
    review: "Important industry notices and updates to help you stay informed.",
    
  },
];

const TestimonialMarquee = () => {
  return (
    <div style={{ padding: "40px", background: "#f9f9f9", borderRadius: "10px", maxWidth: "100%", overflow: "hidden" }} id="Marquee-test">
  
      <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={100}>
        {testimonials.map((testimonial, index) => (
          <div key={index} id="Card">
 
             <h4 >{testimonial.name}</h4>
            <p >
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialMarquee;
