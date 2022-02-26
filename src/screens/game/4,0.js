
// Map for (4,0)

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
        href="./399750c93c74ec8d379690f9c974a5d69aa3a0ec56c4d582315d77c964849c33"
      >
        North
      </a>

      <a
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./3e120492c7ba10862063c932cf4b7793fef7c7bd10895ec1b16be40564824431"
      >
        East
      </a>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
          margin: "5px",
          border: "5px solid black",
        }}
      >
        <img src="/map/4,0.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          border: "5px solid black",
        }}
      >
        <p>
          After you entered the dungeon, the entrance suddenly collapsed!<br/>
          You decide to proceed deeper into the cave, maybe there will be a way out!
        </p>
      </div>
    </div>
  );
}       
            