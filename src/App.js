import React from 'react';
import Header from "./Header";
import Dashboard from "./Dashboard";
import List from "./List"; // Correct import path
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Dashboard />
      <List /> {/* Render the ReferralsList component */}
      <Footer />
    </div>
  );
}

export default App;
