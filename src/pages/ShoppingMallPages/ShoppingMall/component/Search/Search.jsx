import React from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 로그인 창에 오면 검색창 안보이게
// 1. 로그인 창에 오는 방법
// 1-1. 로그인 안한 상태에서 상품을 클릭했을 떄
// 1-2. 상품을 보던 중 로그아웃을 눌렀을 때
// 1-3. 로그인 버튼을 눌렀을 때

const Search = () => {
  const navigate = useNavigate();
  const handleChage = (e) => {
    navigate(`?q=${e.target.value}`);
  };
  return (
    <div className="search_container">
      <FontAwesomeIcon icon={faSearch} className="search_icon" />
      <input
        className="search_navbar"
        type="text"
        placeholder="제품 검색"
        onChange={(e) => handleChage(e)}
      />
    </div>
  );
};

export default Search;
