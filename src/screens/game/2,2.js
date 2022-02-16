
// Map for (2,2)

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
        href="https://settlersofyang.netlify.app/game/15bafed7aff5e5084fbbf7660d14156d447cbe1db316aa2857efb93de3cb77f8"
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
        href="https://settlersofyang.netlify.app/game/cd51a5c8d2edb16b6a917fcf7f4911dc1c42fb744ab212625a7c0323c0bc3e98"
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
        href="https://settlersofyang.netlify.app/game/de5132ef203a6c17569522ca06ec5f9c35ba445660aa522214656f1035269a34"
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
        href="https://settlersofyang.netlify.app/game/be7cc5b081354059d0bd0a8f82d3d1c40b622e2c5618942b431ea4431eb12c87"
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
        <img src="/map/2,2.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            