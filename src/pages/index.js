import React from "react";
import { Link } from "react-router-dom";

const IndexPage = ({ props }) => {
  return (
    <>
      <h1>This is index page</h1>
      <Link to="/search">To search page</Link>
    </>
  );
};

export default IndexPage;
