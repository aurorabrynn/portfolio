import React from "react";
import "./style.css";
import Container from "../Container";

function Header() {
  return (
      <nav className="navbar navbar-expand-sm">
        <Container>
            <h1 className="navbar-header">Aurora Duncan</h1>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                    <li className="nav-item"><a className="nav-link" href="#work">Work</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Resume</a></li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Header;