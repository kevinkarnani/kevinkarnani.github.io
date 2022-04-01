import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiPytorch,
  SiJava,
  SiTensorflow,
  SiNumpy,
  SiGnubash,
  SiScikitlearn,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiLatex
} from "react-icons/si";

import {
  FaAngular
} from "react-icons/fa"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython data-tip="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch data-tip="PyTorch"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow data-tip="TensorFlow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy data-tip="NumPy"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash data-tip="Bash"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 data-tip="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava data-tip="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex data-tip="LaTeX"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 data-tip="HTML5"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn data-tip="Sci-Kit Learn"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp data-tip="C#"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs data-tip="NodeJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact data-tip="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular data-tip="Angular"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 data-tip="CSS3"/>
      </Col>
      <div className="icontooltip">
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    </Row>
  );
}

export default Techstack;