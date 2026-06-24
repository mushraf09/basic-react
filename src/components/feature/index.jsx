import Heading2 from "../h2";
import Heading5 from "../h5";
import FeatureCard from "../card";
import { FaTools, FaKey, FaPencilAlt, FaPaperPlane, FaFlag, FaBullseye } from "react-icons/fa";

const defaultFeatures = [
  { id: "feat-1", icon: <FaTools />, heading: "Expert Technicians" },
  { id: "feat-2", icon: <FaKey />, heading: "Professional Service" },
  { id: "feat-3", icon: <FaPencilAlt />, heading: "Great Support" },
  { id: "feat-4", icon: <FaPaperPlane />, heading: "Expert Technicians" },
  { id: "feat-5", icon: <FaFlag />, heading: "Professional Service" },
  { id: "feat-6", icon: <FaBullseye />, heading: "Great Support" },
];

function FeaturesSection({ heading = "Some Features that Made us Unique", subheading = "Who are in extremely love with eco friendly system.", features = defaultFeatures }) {
  return (
    <section className="features-section">
      <Heading2 heading={heading} />
      <Heading5 heading={subheading} />

      <div className="features-grid">
        {features.map((f) => (
          <FeatureCard key={f.id || f.heading} feature={f} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
