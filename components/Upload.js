import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


const Upload = () => {
  return (
    <div style={styles.pageWrapper}>
      <Header />
      <Sidebar />
      <div className="container" style={styles.container}>
        <h1>Upload Document</h1>
        <form>
          <label>Document Name:</label>
          <input type="text" placeholder="Enter document name" />

          <label>Version:</label>
          <input type="text" placeholder="Enter version" />

          <label>Upload File:</label>
          <input type="file" />

          <button type="submit" className="button save-button">Upload</button>
        </form>
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

export default Upload;
