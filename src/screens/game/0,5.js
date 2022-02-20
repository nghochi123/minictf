
// Map for (0,5)

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
        href="./703ea2365abd47fc67cf68eeee5eca68fcadfef85b7588cdac1c14c2e80a18f5"
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
        href="./c5620637b414f9ee28f9276290f23687047abd02696185fd4253061a16a3847c"
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
        href="./4c6617b306ad9c78e25313ffa5ca203b97107c6afc90d6323aaa9c5b86ae2809"
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
        href="./712730246763dd1ba2214e2e4aba3aad8c8c5169dbba43205054446cbb505230"
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
        <img src="/map/0,5.png" alt="map" height="30%" />
      </div>
    </div>
  );
}       
            