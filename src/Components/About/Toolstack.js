import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";
import {
  DiApple,
  DiGit,
  DiMongodb
} from "react-icons/di";
import { 
  SiDocker,
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiFirebase,
  SiWindows
} from "react-icons/si";
import {
  FaAws
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode data-tip="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter data-tip="Jupyter Notebook"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit data-tip="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker data-tip="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws data-tip="Amazon Web Services"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb data-tip="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase data-tip="Firebase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple data-tip="Apple"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux data-tip="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows data-tip="Windows"/>
      </Col>
      <div className="icontooltip">
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    </Row>
  );
}

export default Techstack;
