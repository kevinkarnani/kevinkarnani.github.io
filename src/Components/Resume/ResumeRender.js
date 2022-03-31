import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/kevinkarnani/KevinKarnaniResume2022/main/KevinKarnaniResume2021.pdf";

function ResumeRender() {

  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <Document file={resumeLink}>
    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
  </Document>
};

export default ResumeRender;