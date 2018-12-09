import React from "react";
import Header from "../Header";
import PropTypes from "prop-types";

import s from "./Layout.scss";

function Layout({ hero, children }) {
  return (
    <div className={s.root}>
      <Header>{hero}</Header>
      <main>{children}</main>
      <footer>
        <span>Company Name</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
