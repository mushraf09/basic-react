import React from "react";

const Icon = ({ symbol, label }) => {
  return (
    <span role="img" aria-label={label || "icon"} className="feature-icon">
      {symbol}
    </span>
  );
};

export default Icon;
