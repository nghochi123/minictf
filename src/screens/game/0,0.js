
// Map for (0,0)

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
        href="./ba5df83b27ab5dd505fb3f5c97cb4bb6c56d56c51182cbba2f769fc3d2647718"
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
        href="./fe2267d9198219da887760a0f36389966c7c4d745613ecde9a4924d181059aec"
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
        href="./33eb5f35cb207fd06fd5d033ef67892d7bf60dd9fcc4a4c511c2a0716416d156"
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
        href="./8b12122a6833284482026d67cfa484c58fd0ff536fadc5db0bce9cef41ab990c"
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
        <img src="/map/0,0.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <p>
          The cave opens to an underground forest. <br/>
          While you stare at the forest in confusion, you spot a note nailed on a tree.<br/>
        </p>
        <a href="/game/parchment-2.txt" download>Parchment-2</a>
        <p>
          <br/>A message is scrawled on the trunk: The forest alters the <b>TYPE</b> of its inhabitants.
        </p>
      </div>
    </div>
  );
}       
            