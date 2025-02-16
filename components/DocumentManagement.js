import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";


const DocumentManagement = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <div style={styles.mainContent}>
        <Sidebar />
        <div style={styles.contentContainer}>
          <h1>Document Management</h1>
          <table>
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Version</th>
                <th>Status</th>
                <th>Upload Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sample Document 1</td>
                <td>v1.0</td>
                <td>✅ Certified</td>
                <td>2024-01-01</td>
                <td>
                  <button className="button blue-button">View</button>
                  <button className="button gray-button">Edit</button>
                  <button className="button green-button">Certify</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column", // Keeps the header at the top and sidebar/content below it
    minHeight: "100vh", // Full viewport height
    backgroundColor: "#f4f4f4", // Optional: Background color
  },
  mainContent: {
    display: "flex", // Sidebar on the left and content on the right
    flexDirection: "row",
    width: "100%",
    maxWidth: "1200px", // Optional: Limit content width for larger screens
    margin: "0 auto", // Centers the content horizontally, while keeping sidebar fixed
  },
  contentContainer: {
    flex: 1, // Content takes remaining space
    padding: "20px",
    backgroundColor: "#fff", // White background for the content
    borderRadius: "8px", // Optional: Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Shadow effect for content
    marginLeft: "220px", // Space to the right of the sidebar, makes sure the content starts after the sidebar
  },
};

export default DocumentManagement;
