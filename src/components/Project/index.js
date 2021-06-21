import React from "react";
import "./style.css";
import Card from "../Card";
import Col from "../Col";

function Project(props) {
    return (
        <Col size="12 sm-4">
                <Card
                    link={props.link}
                    image={props.image}
                    title={props.title}
                    type={props.type}
                    github={props.github}
                    description={props.description}
                />
        </Col>
    )
}

export default Project;