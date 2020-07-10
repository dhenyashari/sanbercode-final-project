import React from "react";

const Jumbotron = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default Jumbotron;

Jumbotron.defaultProps = {
  hero: "jumbotron"
};
