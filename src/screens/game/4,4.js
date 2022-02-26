
// Map for (4,4)
// Ending for treasure map

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
        href="./bd8cafd4e95ad8108b12e90682c3ae4c93e7ebaa3137ae5a12710da55cb3ca04"
      >
        North
      </a>
      
      <a
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}
        href="./5854db683cdf2601f9e2afffb97140fec2d34f299215246acc1dd6ef247cdd0d"
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
        href="./0102a778bdf45eac8270c9eda194419be4435645aa6cd0dffe584a1850a3f09c"
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
        <img src="/map/4,4.png" alt="map" height="30%" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p style={{width: "100%"}}>Despite the danger that the dungeon presents, sailing across the ocean is strangely calming</p>
        <img 
          src="/backgrounds/ocean.jpg" 
          alt="map"
          style={{height: "70vh", display: "absolute"}}
        />
      </div>
    </div>
  );
}       
            