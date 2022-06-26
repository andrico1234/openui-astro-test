import React from "react";
import CommunityLinks from "./community-links";
import Logo from "./logo";
import BarsIcon from "../icons/bars";

const Header = ({ siteTitle = "" }) => {
  return (
    <header
      style={{
        background: "#333",
        marginBottom: "2rem",
        color: "#eee",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "1rem",
          margin: "0 auto",
          maxWidth: 1200,
          width: "100%",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ flex: 1 }}>
          <Logo siteTitle={siteTitle} />
        </span>

        <CommunityLinks />

        <button
          type="button"
          className="header-menu-btn"
          aria-label="Toggle menu"
          title="Toggle menu"
          // onClick={onToggleMenu}
          // aria-expanded={menuOpened ? "true" : "false"}
          aria-controls="site-nav"
        >
          <BarsIcon width={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
