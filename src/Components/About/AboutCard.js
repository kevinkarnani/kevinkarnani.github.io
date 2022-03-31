import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <i><span className="purple">Kevin Karnani. </span></i>
            <br />
            <br />
            I am a <i><span className="purple">Machine Learning Researcher </span></i>
            and <i><span className="purple">Computer Science </span></i> student graduating
            from Drexel University in Philadelphia, PA. My concentrations are
            in <i><span className="purple">Computer Vision </span></i> and <i><span className="purple">
            Aritificial Intelligence. </span></i> I will attend <i><span className="purple">
            John's Hopkins University </span></i> in Fall 2022 for my <i><span className="purple">
            Masters of Science in Aritificial Intelligence </span></i>.
            <br />
            <br />
            I am passionate about Machine Learning, Medical Image Analysis, and AI in Healthcare. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
