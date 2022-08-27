import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { SiOrcid } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <ul className="footer-icons">
        <li className="social-icons">
          <a
            href="https://github.com/kevinkarnani"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/kevin-karnani"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://orcid.org/0000-0002-3108-7941"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiOrcid />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:kevinkarnani@gmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
