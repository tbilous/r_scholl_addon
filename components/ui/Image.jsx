import React from "react";

const Image = ( {post} ) => (
  <img
    src={post.image.src}
    width="100"
    height="50"
    alt="Post img"
  />
);

export default Image;
