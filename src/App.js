import React from 'react';
import Header from "./Header";
import Dashboard from "./Dashboard";
import List from "./List"; 
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Dashboard />
      <List /> 
      <Footer />
    </div>
  );
}

export default App;
