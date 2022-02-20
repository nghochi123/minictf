import os
import hashlib

for i in range(6):
    for j in range(5):
        with open(f"./{j},{i}.js", 'w') as file:
          file.write(f"""
// Map for ({j},{i})

import React from "react";

export default function TutorialMain() {{
  return (
    <div>
      <a
        style={{{{
          position: "absolute",
          top: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}}}
        href="./{hashlib.sha256((f'{j-1},{i}abcde').encode('ASCII')).hexdigest()}"
      >
        North
      </a>
      <a
        style={{{{
          position: "absolute",
          bottom: 10,
          left: "50%",
          fontSize: "1.5em",
          transform: "translate(-50%, 0)",
        }}}}
        href="./{hashlib.sha256((f'{j+1},{i}abcde').encode('ASCII')).hexdigest()}"
      >
        South
      </a>
      <a
        style={{{{
          position: "absolute",
          top: "50%",
          left: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}}}
        href="./{hashlib.sha256((f'{j},{i-1}abcde').encode('ASCII')).hexdigest()}"
      >
        West
      </a>
      <a
        style={{{{
          position: "absolute",
          top: "50%",
          right: 10,
          fontSize: "1.5em",
          transform: "translate(0, -50%)",
        }}}}
        href="./{hashlib.sha256((f'{j},{i+1}abcde').encode('ASCII')).hexdigest()}"
      >
        East
      </a>
      <div
        style={{{{
          position: "absolute",
          top: "0%",
          left: "0%",
          textAlign: "center",
          margin: "5px",
          border: "5px solid black",
        }}}}
      >
        <img src="/map/{j},{i}.png" alt="map" height="300" />
      </div>
    </div>
  );
}}       
            """)
