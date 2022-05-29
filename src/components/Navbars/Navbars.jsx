import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Nav } from "react-bootstrap";

// assets
import "../../components/Navbars/Navbars.scoped.css";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Message from "../../assets/img/chat.png";
import Profile from "../../assets/img/ava.png";

export default function Navbars() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-xl-top fw-bold"
          />{" "}
          Dizzy Coffee Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto pt-xl-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav className="mb-3">
              <Link className="text-decoration-none text-gray me-xl-4" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-gray me-xl-4" to="/">
                Product
              </Link>
              <Link
                className="text-decoration-none text-gray me-xl-4"
                to="/payment"
              >
                Your Cart
              </Link>
              <Link
                className="text-decoration-none text-gray me-xl-4"
                to="/history"
              >
                History
              </Link>
            </Nav>
            <div className="wrap-nav-right ms-md-5 d-flex">
              <Form className="d-flex position-relative justify-content-center">
                <img
                  className="img-button-navbar"
                  src={Search}
                  alt="search-button"
                />
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-xl-2 rounded-5 ps-xl-5 ps-5 input-navbar"
                  aria-label="Search"
                />
              </Form>
              <Link
                className="chat-navbar text-decoration-none me-md-4"
                to="/chat"
              >
                <img src={Message} alt="chat-logo" />
              </Link>
              <Link className="ms-xl-2 text-decoration-none" to="/profile">
                <img src={Profile} alt="chat-logo" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
