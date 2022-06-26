import React from "react";

const Image = ({ src, style }) => {
  // let imageData;

  console.log(src);

  return (
    <img
      // alt={alt}
      // srcSet={imageData + " 2x"}
      src={src}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        margin: 0,
        ...style,
      }}
    />
  );
};

export default Image;
