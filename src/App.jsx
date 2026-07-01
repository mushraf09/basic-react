
import BlogSection from "./components/blog";
import FeaturesSection from "./components/feature";
import FeaturedProjects from "./components/featured-projects";
import UseStateExample from "./UseStateExample";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <FeaturesSection />
      <BlogSection />
      <FeaturedProjects />
      <UseStateExample />
    </div>
  );
}

export default App;
