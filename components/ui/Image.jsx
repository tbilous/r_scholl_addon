import React from "react";

const Image = ({image}) => (
  <img
    src={image.src}
    width={image.style.width}
    height={image.style.height}
    alt={image.style.alt}
  />

);

export default Image;
