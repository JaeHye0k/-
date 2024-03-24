import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const IndexList = ({ key, week, title, url }) => {
  return (
    <li>
      <Badge bg="secondary">{week}주차</Badge>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default IndexList;
