import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import style from "../styles/index.module.css";

const IndexList = ({ key, week, title, url }) => {
  return (
    <li>
      <Badge className={style.badge} bg="secondary">
        {week}주차
      </Badge>
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default IndexList;
