import React from "react";

const FeatureCard = ({ icon, title, highlighted, iconBg }) => {
  return (
    <div className={`feature-card ${highlighted ? "highlighted" : ""}`}>
      <div className="feature-icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
    </div>
  );
};

export default FeatureCard;
