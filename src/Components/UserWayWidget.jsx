import { useEffect } from "react";
import "./portfolio.css"; // Import external CSS for positioning

const UserWayWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.userway.org/widget.js";
    script.setAttribute("data-account", "wkReG6NkWT");
    script.async = true;
    script.onload = () => {
      console.log("UserWay Widget Loaded"); // Debugging message
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="userway-widget-placeholder"></div>; // Placeholder for CSS targeting
};

export default UserWayWidget;
