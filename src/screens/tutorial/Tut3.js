// Image
import React from "react";

export default function Tutorial3(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>Another way that information is hidden is by hiding it in images.</p>
      <p>
        Download the image below. Right click on the image and click "Save Image
        As..."
      </p>
      <img src="/mario.png" alt="mario" height="200" />
      <p>
        Try adjusting the contrast on the image. You should be able to see
        something.
      </p>
      <p>
        This is called Steganography, and an example of another way that that
        this can be done is by adding a colour filter.
      </p>
    </div>
  );
}
