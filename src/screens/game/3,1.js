
// Map for (3,1)

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
        href="https://settlersofyang.netlify.app/game/de5132ef203a6c17569522ca06ec5f9c35ba445660aa522214656f1035269a34"
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
        href="https://settlersofyang.netlify.app/game/3e120492c7ba10862063c932cf4b7793fef7c7bd10895ec1b16be40564824431"
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
        href="https://settlersofyang.netlify.app/game/399750c93c74ec8d379690f9c974a5d69aa3a0ec56c4d582315d77c964849c33"
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
        href="https://settlersofyang.netlify.app/game/cd51a5c8d2edb16b6a917fcf7f4911dc1c42fb744ab212625a7c0323c0bc3e98"
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
        <img src="/map/3,1.png" alt="map" height="300" />
      </div>
    </div>
  );
}       
            