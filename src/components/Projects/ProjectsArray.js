
import React from "react";
import { Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";
import projectList from "../../Assets/projectList";

function ProjectsArray() {

    const make_project_card = (project, key) => {
        console.log(project);
        return <Col md={4} className="project-card"><ProjectCard
            key={key}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            link={project.link}
        /></Col>
    };

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectList.projects.map((project, index) => make_project_card(project, index))}
        </Row>
    );
}

export default ProjectsArray;