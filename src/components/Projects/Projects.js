
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import projectList from "../../Assets/projectList";

function Projects() {

  console.log(projectList);

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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What I've been <strong className="purple">working </strong> on
        </h1>
        <p style={{ color: "white" }}>
          I love talking about my projects! Feel free to email me with any comments or questions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.projects.map((project, index) => make_project_card(project, index))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
