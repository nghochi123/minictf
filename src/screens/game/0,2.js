
// Map for (0,2)

import React from "react";

export default function TutorialMain() {
  return (
    <div>
      <a
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}
        href="https://settlersofyang.netlify.app/game/f86a23a5e2d0a696630ccc31fc9f8099f393b5de0f138b46821323f4b1e7a354"
      >
        North
      </a>
      <a
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}
        href="https://settlersofyang.netlify.app/game/15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"
      >
        South
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="https://settlersofyang.netlify.app/game/8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c"
      >
        West
      </a>
      <a
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="https://settlersofyang.netlify.app/game/7a5fda9a307e8871cbf2de85874d66342eff72165abc2581f586b3f1dbfa0604"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img src="/map/0,2.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            