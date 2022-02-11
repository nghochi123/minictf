// Hidden Text
import React from "react";
import "react-jsx-html-comments";

export default function Tutorial2(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>Here, we'll teach you about some ways to hide text on a page.</p>
      <p>Try highlighting all the text here.</p>
      <p style={{ color: "white" }}>
        This text over here is hidden! Read on to find out more and get the next
        url.
      </p>
      <p>Another way we can hide text is as comments.</p>
      <p>
        Right click anywhere on the page and click inspect (element). Ctrl-C and
        F12 keys will work as well.
      </p>
      <p>
        See the differently coloured text on the page? That's a comment. You
        can't see it on the page, but it's there.
      </p>
      <react-comment>Nice work. Your next link is /h1dd3nt3xt</react-comment>
    </div>
  );
}
