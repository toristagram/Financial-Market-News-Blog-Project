import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand
            className="navbarBrand"
            style={{
              color: "#fff",
              fontFamily: "Roboto Slab",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "40px",
            }}
            href="/"
          >
            SHARETRADE.
            <small style={{ fontSize: "24px" }}>
              COM
            </small>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
