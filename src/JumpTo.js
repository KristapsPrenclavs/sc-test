import React from "react";
import "./index.css";

export const JumpTo = () => {
  const handleJump = (e) => {
    console.log(e);
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
