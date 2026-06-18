import React from "react";
import FeaturesSection from "./components/feature";
import BlogSection from "./components/blog";
import "./style.css";
import "./App.css";
import "./components/feature/index.css";


function App() {
  return (
    <div className="app-container">
      <FeaturesSection />
      <BlogSection />
    </div>
  );
}

export default App;
