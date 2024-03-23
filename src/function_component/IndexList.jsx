import React from "react";
import { Link } from "react-router-dom";

const IndexList = ({ key, week, title, url }) => {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default IndexList;
