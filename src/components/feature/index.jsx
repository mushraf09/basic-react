import React from "react";
import FeatureCard from "../card";
import Heading2 from "../h2";
import Heading5 from "../h5";

const features = [
  { icon: "🌕", title: "Expert Technicians", iconBg: "#eef5ff" },
  { icon: "📍", title: "Professional Service", iconBg: "#fff3f7" },
  { icon: "✏️", title: "Great Support", highlighted: true, iconBg: "rgba(255,255,255,0.2)" },
  { icon: "💡", title: "Expert Technicians", iconBg: "#f7f8ff" },
  { icon: "🚩", title: "Professional Service", iconBg: "#effcf7" },
  { icon: "🎯", title: "Great Support", iconBg: "#fff8eb" },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <Heading2 heading="Some Features that Made us Unique" />
      <Heading5 text="Who are in extremely love with eco friendly system." />
      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            highlighted={feature.highlighted}
            iconBg={feature.iconBg}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
