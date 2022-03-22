
import React from "react";
import { Container, Row } from "react-bootstrap";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import Particle from "../Particle";
import ResumeRender from "./ResumeRender";
import ResumeDownloadButton from "./ResumeDownloadButton";

function Resume() {

  return (
    <div>
      <Container fluid className="resume-section">

        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeDownloadButton />
        </Row>

        <Row className="resume">
          <ResumeRender />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeDownloadButton />
        </Row>

      </Container>
    </div>
  );
}

export default Resume;
