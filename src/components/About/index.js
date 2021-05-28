import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function About() {
    return (
        <Row>
            <Col size="sm-2" id="about">
                <h2>About Me</h2>
            </Col>
            <Col size="sm-1" id="pic">
                <img src="https://user-images.githubusercontent.com/70443846/119419779-dbed6900-bcaf-11eb-8497-585e1b57c12e.jpg" id="profile" alt="My profile picture" />
            </Col>
            <Col size="sm-9" id="aboutContent">
                <p>Hi! My name is Aurora Duncan and I have been coding for almost a year now! I graduated from
                Western
                Washington University with a bachelor's degree in English. However, I relized I wanted to go in a
                different direction in my life, so I attended the Nucamp Coding Bootcamp. I'm currently enrolled my
                second bootcamp; the University of Washington's Coding Bootcamp. I'm excited to say I've found my
                    love for developing websites and now have proficiency in HTML, CSS and JavaScript!<br></br><br></br>
                        My hobbies include drinking coffee, playing video games, and hanging out with my kitten, Lilith!</p>
            </Col>
        </Row>
    )
}

export default About;