import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        style={styles.hamburger}
        aria-label="Toggle Sidebar"
      >
        &#9776; {/* Hamburger icon */}
      </button>
      
      {/* Sidebar */}
      <aside style={{ ...styles.sidenav, width: isOpen ? "220px" : "0px" }}>
        <div className="sidenav-header">
          <div className="row d-flex" style={{ alignItems: "center", paddingLeft: "10px", flexWrap: "nowrap" }}>
            <br/><h5>Hong Kong Metropolitan University</h5>
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="functions" onClick={() => navigate("/")}>
            <h3>Dashboard</h3>
            <span className="material-icons-outlined">dashboard</span>
          </li>
          <li className="functions" onClick={() => navigate("/documentmanagement")}>
            <h3>Document Management</h3>
            <span className="material-icons-outlined">document management</span>
          </li>
          <li className="functions" onClick={() => navigate("/view")}>
            <h3>View file</h3>
            <span className="material-icons-outlined">view_file</span>
          </li>
          <li className="functions" onClick={() => navigate("/upload")}>
            <h3>Upload Certificate</h3>
            <span className="material-icons-outlined">upload_file</span>
          </li>
          <li className="functions" onClick={() => navigate("/certify")}>
            <h3>Verify Certificate</h3>
            <span className="material-icons-outlined">verified</span>
          </li>
        </ul>
      </aside>
      
      {/* Optional overlay to prevent background clicks when sidebar is open */}
      {isOpen && <div onClick={toggleSidebar} style={styles.overlay}></div>}
    </>
  );
};

const styles = {
  hamburger: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "30px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 10001,  // Make sure it's above the sidebar
  },
  sidenav: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#FFD700", // Yellow background
    overflowX: "hidden",
    transition: "0.3s", // Smooth toggle animation
    paddingTop: "20px",
    zIndex: 9999,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Light black overlay for closing
    zIndex: 9998, // Overlay sits below the sidebar
  }
};

export default Sidebar;
