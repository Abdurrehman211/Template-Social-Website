import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "#2c3e50",
          color: "white",
          padding: "20px",
          position: "fixed",
          height: "100%",
        }}
      >
        <h2>Admin Panel</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}><a href="#contacts" style={{ color: "white", textDecoration: "none" }}>Contact Forms</a></li>
          <li><a href="#orders" style={{ color: "white", textDecoration: "none" }}>Orders</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: "270px", padding: "20px", width: "100%" }}>
        <section id="contacts">
          <h2>Contact Forms</h2>
          <p>Here you will find all the submitted contact forms.</p>
          {/* Add contact forms display here */}
        </section>
        <hr />
        <section id="orders">
          <h2>Orders</h2>
          <p>Here you will find all the orders.</p>
          {/* Add orders display here */}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
