import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


const Certify = () => {
  return (
    <div style={styles.pageWrapper}>
      <Header />
      <Sidebar />
      <div className="container" style={styles.container}>
        <h1>Certify Document</h1>
        <table>
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Version</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Document 1</td>
              <td>v1.0</td>
              <td>⏳ Pending</td>
              <td>
                <button className="button green-button">Certify</button>
              </td>
            </tr>
          </tbody>
        </table>
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

export default Certify;
