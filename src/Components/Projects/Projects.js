
import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../Particle";
import ProjectsArray from "./ProjectsArray";

function Projects() {

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
        <ProjectsArray />
      </Container>
    </Container>
  );
}

export default Projects;
