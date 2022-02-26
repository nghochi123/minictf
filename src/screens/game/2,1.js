
// Map for (2,1)

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
        href="./44a4fb7a5de1e98d6ceafbeab1d6358f52d7649bea27b1ba29f531c3e8f2ac46"
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
        href="./1432157ca9f965c66671df850fc07478ea658a5297a88fca65fe6195b6ac71bf"
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
        href="./c1e75495ca446296f02b7b450cce457a190d1941fe2a2a2b9ba23df61a26f6cb"
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
        href="./44dc07ddb13fb0e633c7837e5050322c0f3a5e153b2bcb81780afdb7b2067a67"
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
        <img src="/map/2,1.png" alt="map" height="30%" />
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
        <a download={"parchment-1.png"} href={"/game/parchment-1.png"}>
          <img 
            src="/game/parchment in sand.jpg" 
            alt="parchment-bg"
            style={{height: "300px", display: "absolute"}}
          />
          <div 
            style={{
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)",
              color: "black",
            }}
          >
            You spot a note buried in the sand dune.<br/>
            Bending down, you pick it up.
          </div>
        </a>
      </div>
    </div>
  );
}       
            