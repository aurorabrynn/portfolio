import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function Contact() {
    return (
        <Row id="contactRow">
            <Col size="sm-2" id="contact">
                <h2>Contact Me</h2>
            </Col>
            <Col size="sm-10" id="contactContent">
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">(541) 653-5065</a></li>
                    <li className="list-inline-item"><a href="mailto:aurorabrynn@gmail.com">aurorabrynn@gmail.com</a></li>
                    <li className="list-inline-item"><a href="https://github.com/aurorabrynn">GitHub</a></li>
                    <li className="list-inline-item"><a href="www.linkedin.com/in/aurora-duncan-585570205">Linkedin</a></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Contact;