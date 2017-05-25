import React from "react";

const Image = ({image, width, height, alt}) => (
  <img
    src={image}
    width={width}
    height={height}
    alt={alt}
  />
);


export default Image;
