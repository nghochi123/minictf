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
      <p>Oh no, are you lost?</p>
      <p>Let me bring you back to where you came from.</p>
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
        Go back
      </button>
    </div>
  );
}
