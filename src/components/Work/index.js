import React, { Component } from "react";
import "./style.css";
import Project from "../Project"
import Row from "../Row"
import Col from "../Col"
import projects from "./project.json";

class Work extends Component {

    render() {
        return (
            <Row>
                <Col size="sm-2" id="work">
                    <h2>Work</h2>
                </Col>
                <Col size="12" id="workContent">
                    <Row id="workRow">
                        {
                            projects.map(project => (
                                <Project
                                    id={project.id}
                                    key={project.id}
                                    link={project.link}
                                    image={project.image}
                                    title={project.title}
                                    type={project.type}
                                    github={project.github}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>

        )
    }


}

export default Work;