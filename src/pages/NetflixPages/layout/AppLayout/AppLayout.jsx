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

const AppLayout = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`./movies?q=${keyword}`);
    setKeyword("");
  };
  setTimeout(() => {
    setIsIntro(false);
  }, 4500);
  return (
    <div id="netflix">
      {isIntro && <Intro />}
      <div className={isIntro ? "unshow" : ""}>
        <header>
          <Navbar variant="dark" expand="lg" className="bg-dark">
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
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                >
                  <Nav.Link as={Link} to="">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="movies">
                    Movies
                  </Nav.Link>
                </Nav>
                <Form onSubmit={searchByKeyword}>
                  <InputGroup>
                    <Form.Control
                      data-bs-theme="dark"
                      type="search"
                      placeholder="Search"
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
