
import BlogSection from "./components/blog";
import FeaturesSection from "./components/feature";
import FeaturedProjects from "./components/featured-projects";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <FeaturesSection />
      <BlogSection />
      <FeaturedProjects />
    </div>
  );
}

export default App;
