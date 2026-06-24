import React, { memo } from "react";

function FeatureCard({ feature }) {
  const className = feature.highlighted ? "feature-card highlighted" : "feature-card";

  return (
    <div className={className}>
      <div className="feature-icon">{feature.icon}</div>
      <h3 className="feature-title">{feature.heading}</h3>
    </div>
  );
}

export default memo(FeatureCard);
