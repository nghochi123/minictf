// Harder puzzles
import React from "react";
import "react-jsx-html-comments";

export default function Tutorial7(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>
        You now have whatever you need to solve the puzzles in the main game.
        You will need the skills you have learnt earlier along with a little
        creativity.
      </p>
      <p>This will be a final unguided room to put your skills to the test.</p>
      <p>
        The url that you will get at the end of this room will be the path to
        your next adventure.
      </p>
      <p>Good luck, and have fun!</p>
      <div style={{ color: "white" }}>
        <p>
          Hint: You will have to get through more than one URL to get the final
          URL.
        </p>
      </div>
      <react-comment>
        Nice going - you'll have to go to the /darkforest to find out more.
      </react-comment>
    </div>
  );
}
