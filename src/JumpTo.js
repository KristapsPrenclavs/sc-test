import React from "react";
import "./index.css";

export const JumpTo = (props) => {
  const handleJump = (e) => {
    props.handleJump(e);
  };
  return (
    <div className="jump-to">
      <input
        type="number"
        placeholder="Go to slide"
        onChange={(e) => handleJump(e.target.value)}
      />
    </div>
  );
};
