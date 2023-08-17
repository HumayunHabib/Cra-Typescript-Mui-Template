import React, { FC } from "react";
import { logo } from "../../assets/images";

interface CommonImageProps {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  marginRight?: string;
}

const CommonImage: FC<CommonImageProps> = ({
  width,
  height,
  src,
  alt,
  marginRight,
}) => {
  return (
    <>
      <img
        src={src || logo}
        width={width || "20px"}
        height={height || "20px"}
        alt={alt || "icon"}
        style={{
          objectFit: "contain",
          marginRight: marginRight || "0px",
        }}
      />
    </>
  );
};

export default CommonImage;
