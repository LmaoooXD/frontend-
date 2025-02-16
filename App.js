import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocumentManagement from "./components/DocumentManagement";
import Upload from "./components/Upload";
import Certify from "./components/Certify";
import ViewDocument from "./components/ViewDocument";
import UserCard from "./components/UserCard";

const App = () => {
    const dataStore = {
        name: "Alice",        // User's Name
        email: "alice@example.com",  // User's Email
        age: 30               // User's Age
      };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocumentManagement />} />
        <Route path="/documentmanagement" element={<DocumentManagement />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/certify" element={<Certify />} />
        <Route path="/view" element={<ViewDocument />} />
        <Route path="/usercard" element={<UserCard {...dataStore} />} /> {/* Passing dataStore to UserCard */}
      </Routes>
    </Router>

  );
};

export default App;
