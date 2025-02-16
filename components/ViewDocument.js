import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


const ViewDocument = () => {
  return (
    <div style={styles.pageWrapper}>
      <Header />
      <Sidebar />
      <div className="container" style={styles.container}>
        <h1>View Document</h1>
        <p><strong>Document Name:</strong> Sample Document 1</p>
        <p><strong>Version:</strong> v1.0</p>
        <p><strong>Status:</strong> ✅ Certified</p>
        <p><strong>Upload Date:</strong> 2024-01-01</p>

        <div className="document-content">
          <p>This is the content of the document...</p>
        </div>

        <a href="/" className="button back-button">Back</a>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },
  container: {
    marginLeft: "220px",  // Sidebar width offset
    marginTop: "50px",    // Space below the header
    width: "60%",         // Centered with width percentage
    marginRight: "20px",  // Add a little margin on the right for balance
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the content horizontally
    textAlign: "center",  // Align the text to the center
  },
};

export default ViewDocument;
