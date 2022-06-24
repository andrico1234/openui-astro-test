import React from "react";
import Image from "./logo";

const Logo = ({ siteTitle = "" }) => (
  <a to="/" style={{ textDecoration: "none", color: "inherit" }}>
    <Image
      src="logo-green.png"
      style={{ height: "2.75em", width: "2.75em", marginRight: "0.25rem" }}
      alt={siteTitle}
    />
    <strong style={{ verticalAlign: "middle" }}>{siteTitle}</strong>
  </a>
);

export default Logo;
