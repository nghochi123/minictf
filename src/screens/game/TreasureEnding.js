// Fallback page
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Tutorial7(props) {
  let navigate = useNavigate();
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
      <p>You hear a voice in your head</p>
      <p>Welcome! Did you find your way using the map or did you stumble in?</p>
      <p>Well no matter, you'll need both skills and luck to escape.</p>
      <p>The number you are seeking is <b>NINE</b>. Good luck on your journey!</p>
      <button
        style={{
          backgroundColor: "#4CAF50" /* Green */,
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        Exit  
      </button>
    </div>
  );
}
