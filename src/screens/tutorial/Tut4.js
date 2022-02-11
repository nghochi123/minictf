// Image
import React from "react";

export default function Tutorial4(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>Congratulations on making it this far. I'm proud of you.</p>
      <p>Again, you will be downloading another image file.</p>
      <p>
        Download the image below. Right click on the image and click "Save Image
        As..."
      </p>
      <img src="/pepe_1.jpg" alt="pepe" height="200" />
      <p>
        Instead of text being hidden directly on the image, we have hidden the
        text IN the image.
      </p>
      <p>Right click the image and go to image properties.</p>
      <img src="/details.png" alt="details" height="100" />
      <p>Then, navigate to the "details" tab.</p>
      <p>
        Sometimes, you can even open the image in notepad and you may find some
        information hidden there!
      </p>
    </div>
  );
}
