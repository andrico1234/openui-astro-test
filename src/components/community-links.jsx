import React from "react";

export default function CommunityLinks({ className = "" }) {
  return (
    <div className={"community-links " + className}>
      <a
        href="https://github.com/openui/open-ui"
        target="_blank"
        rel="noreferrer noopener"
        style={{ color: "inherit" }}
      >
        {/* <FontAwesomeIcon style={{ marginRight: "0.2em" }} icon={faGithub} /> */}
        GitHub
      </a>

      <a
        href="https://discord.gg/DEWjhSw"
        target="_blank"
        rel="noreferrer noopener"
        style={{ color: "inherit" }}
      >
        Discord
      </a>
    </div>
  );
}
