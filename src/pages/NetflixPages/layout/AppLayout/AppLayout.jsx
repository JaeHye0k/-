import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./AppLayout.style.css";
import Intro from "../../pages/Intro/Intro";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/reducer/globalSlice";

const AppLayout = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.global.language);

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`./movies?q=${keyword}`);
    setKeyword("");
  };

  const setCurrentLanguage = () => {
    const lang = language === "ko" ? "en-US" : "ko";
    dispatch(setLanguage({ language: lang }));
  };
  setTimeout(() => {
    setIsIntro(false);
  }, 4500);
  return (
    <div id="netflix">
      {/* {isIntro && <Intro />} */}
      <div /*className={isIntro ? "unshow" : ""}*/>
        <Navbar variant="dark" expand="lg" className="bg-dark" fixed="top">
          <Container fluid>
            <Navbar.Brand as={Link} to="">
              <img
                src="/assets/images/netflix/netflix_logo.svg"
                alt="netflix logo"
                width={100}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="movies">
                  Movies
                </Nav.Link>
                <Nav.Link onClick={setCurrentLanguage}>
                  {language === "ko" ? "English" : "한국어"}
                </Nav.Link>
                <Form onSubmit={searchByKeyword} className="navbar-search">
                  <InputGroup>
                    <Form.Control
                      data-bs-theme="dark"
                      type="search"
                      placeholder={language === "ko" ? "검색" : "Search"}
                      className="me-2 search-box"
                      aria-label="Search"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Button variant="outline-danger" type="submit">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                  </InputGroup>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
