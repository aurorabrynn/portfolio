import React from "react";
import "./style.css";
import Card from "../Card";
import Col from "../Col";

function Project(props) {
    return (
        <Col size="12 sm-4">
            <a href={props.link} target="_blank">
                <Card
                    image={props.image}
                    title={props.title}
                    type={props.type}
                    github={props.github}
                />
            </a>
        </Col>
    )
}

export default Project;