import React from "react";
import "./style.css";
import Container from "../Container";

function Header(props) {
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
                        <li className="nav-item"><a className="nav-link" onClick={() => props.handlePageChange("About")}
                            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>About Me</a></li>
                        <li className="nav-item"><a className="nav-link" onClick={() => props.handlePageChange("Work")}
                            className={props.currentPage === "Work" ? "nav-link active" : "nav-link"}>My Work</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/aurorabrynn/portfolio/files/6563067/Aurora.Duncan.-.Resume.pdf">Resume</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Header;