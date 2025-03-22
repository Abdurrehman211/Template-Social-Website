import React from "react";
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "auto" }}>
      
      {/* First Marquee (Slow Speed) */}
      <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={50}>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#ff5733" }}>
          🚀 Welcome to Triodevelopers - Your Digital Success Partner!
        </span>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#2085c9" }}>
          💡 We provide Web Development, Branding & Marketing Solutions.
        </span>
      </Marquee>

      {/* Second Marquee (Medium Speed) */}
      <Marquee pauseOnHover={true} speed={60} gradient={true} gradientWidth={50}>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#28a745" }}>
          🔥 Get a professional website with Triodevelopers today!
        </span>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#ffcc00" }}>
          📧 Contact us for custom web solutions: support@triodevelopers.com
        </span>
      </Marquee>

      {/* Third Marquee (Fast Speed) */}
      <Marquee pauseOnHover={true} speed={80} gradient={true} gradientWidth={50}>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#6f42c1" }}>
          🎯 Elevate your brand with expert digital solutions from Triodevelopers!
        </span>
        <span style={{ marginRight: "30px", fontWeight: "bold", color: "#e63946" }}>
          ✅ Let's build your next big idea together - Get in touch now!
        </span>
      </Marquee>

    </div>
  );
};

export default NewsTicker;
