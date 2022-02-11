// Hashing
import React from "react";

export default function Tutorial5(props) {
  return (
    <div style={{ margin: 20 }}>
      <p>Decoding things is hard... if you have to do it by hand.</p>
      <p>There are many online encoders or decoders available to use.</p>
      <p>
        A popular encoding system is the SHA1 algorithm. You don't need to know
        how to use it, just put this hash into the decoder and it will be
        decoded for you.
      </p>
      <a href="https://md5decrypt.net/en/Sha1/">SHA1 Decoder</a>
      <p>Hash: 1ffc42404852223a86483d63b76e52b53da0f2e4</p>
      <p>The new url is a slash (/) + the decoded message without any space.</p>
      <p>For example, hello world becomes /helloworld</p>
    </div>
  );
}
