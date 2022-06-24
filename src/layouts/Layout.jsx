import React from "react";

// import "./global.css";
import Header from "../components/header";
// import Navigation from "./navigation";
// import ComponentLayout from "./component-layout";

function Navigation() {
  return <nav>This is navigation</nav>;
}

function ComponentLayout({ children }) {
  return <main>{children}</main>;
}

const Layout = ({ children, pageContext }) => {
  const [opened, setOpen] = React.useState(false);
  const onToggleMenu = React.useCallback(
    () => setOpen((opened) => !opened),
    [setOpen]
  );

  const { frontmatter } = pageContext || {};
  const useComponentLayout =
    frontmatter?.path?.startsWith("/components/") ?? false;

  return (
    <div style={{ paddingBottom: "10rem" }}>
      <Header
        // siteTitle={data.site.siteMetadata.title}
        // githubURL={data.site.siteMetadata.githubURL}
        menuOpened={opened}
        onToggleMenu={onToggleMenu}
      />
      <div className="page-wrapper">
        <Navigation
          opened={opened}
          // githubURL={data.site.siteMetadata.githubURL}
        />

        <div className="page-content" style={{ flex: "1 1 auto", minWidth: 0 }}>
          {useComponentLayout ? (
            <ComponentLayout frontmatter={frontmatter}>
              {children}
            </ComponentLayout>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
