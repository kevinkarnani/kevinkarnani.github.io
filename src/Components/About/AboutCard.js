import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <i><span className="purple">Ritik Ghanshani. </span></i>
            <br />
            <br />
            I'm a <i><span className="purple">Software Engineer </span></i>
            and <i><span className="purple">Computer Science </span></i> student graduating
            soon from Drexel University in Philadelphia, PA. My concentrations are
            in <i><span className="purple">Computer Vision </span></i> and <i><span className="purple">
            Aritificial Intelligence. </span></i>
            <br />
            <br />
            I am passionate about Cloud Computing, DevOps, and Machine Learning. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
