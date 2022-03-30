
import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// import ResumeFile from "../../Assets/Data/resume.pdf";



function ResumeDownloadButton() {

  let ResumeFile = "https://raw.githubusercontent.com/ritik-ghanshani/ritik-ghanshani-resume/main/Ritik_Ghanshani_Resume.pdf";

  return <Button variant="primary" href={ResumeFile} target="_blank">
    <AiOutlineDownload />
    &nbsp;Download Resume
  </Button>;
}

export default ResumeDownloadButton;
