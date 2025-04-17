'use client';

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


function ResumeNew() {

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
