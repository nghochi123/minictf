
// Map for (4,5)

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
        href="./a4a36aa85bae181263894423377d7ec54fa027f92efcbbbf0474b026662f5de9"
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
        href="./c1ef461e1a44abbc733181c22e93ef12d8954656d5412e5eef1de00202ee9a33"
      >
        <p
        style={{
          position: "absolute",
          top: "10%",
          left: "95%",
          color: "white",
          fontSize: "0.6em",
        }}
        >
          is
        </p>
        West
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
        <img src="/map/4,5.png" alt="map" height="30%" />
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
        <p style={{width: "100%"}}>While sailing across the ocean, you spot a glimpse of something, but it disappears as quickly as you spot it</p>
        <img 
          src="/backgrounds/ocean.jpg" 
          alt="map"
          style={{height: "70vh", display: "absolute"}}
        />
      </div>
    </div>
  );
}       
            