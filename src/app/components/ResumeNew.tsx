'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Particle from "../Particle";
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section bg-dark">
        {/* <Particle /> */}
        <Row className="resume">
          <div style={{width:"55vw"}}>
          <iframe
            src="/resume/Abdulla_Althaf_2025_APRIL.pdf"
            width="100%"
            height="800px"
            title="Resume"
          />
          </div>
         
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
