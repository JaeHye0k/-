import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import style from "./indexList.module.css";

const IndexList = ({ week, title, url }) => {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(url);
  };
  return (
    <li>
      <button onClick={goToPage}>
        <Badge className={style.badge} bg="secondary">
          {week}주차
        </Badge>
        {title}
      </button>
    </li>
  );
};

export default IndexList;
