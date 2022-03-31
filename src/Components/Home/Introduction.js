import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/Home/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            I am an Aspiring Machine Learning Researcher who prioritizes maximizing efficiency, be it: leisurely activities, meeting deadlines, or developing relationships. More specifically, my passion lies in maximizing the efficiency in which we diagnose patients and save lives, which is why I wish to specialize in the areas of Health Intelligence and Clinical Imaging.
              <br />
              <br />
              I'm fluent in <i><b className="purple"> Python, Java, and MATLAB </b></i>, and love working with PyTorch, TensorFlow and ML specific Cloud Computing platforms, like AWS Sagemaker. 
              <br />
              <br />
              My fields of interests are &nbsp;
              <i>
                <b className="purple">Machine Learning, Computer Vision</b> and
                {" "}
                <b className="purple">
                  Artificial Intelligence
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">check me out </span> and <span className="purple">connect </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kevinkarnani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kevin-karnani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kevinkarnani@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
