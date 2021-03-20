import React from "react";
import "./index.css";

const CustButton = ({ text, ...props }) => {
  return (
    <div className="lend-invest-btn">
      <button {...props}>{text}</button>
    </div>
  );
};

export default CustButton;
