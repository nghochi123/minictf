// Fallback page
import React from "react";

export default function ending(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <p>Well Done! You escaped from the dungeon in one piece!</p>
    </div>
  );
}
