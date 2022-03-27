import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard(props) {

  const [img, setImg] = useState("");

  const load_img = (imgPath) => {
    import(`../../Assets/Images/Projects/${imgPath}`).then(
      (img) => {setImg(img.default)}
    );
  }
  load_img(props.imgPath);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={img} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
