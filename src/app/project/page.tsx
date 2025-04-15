import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

import editor from '../../../public/codeEditor.png';
import chatify from '../../../public/chatify.png';
import bitsOfCode from '../../../public/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section bg-dark">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }} className='text-center'>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HR analytics tool"
              description="An application that make surveys and analyze and provide personalized plan for each of managers. These plans are tracked by managers and HR businees partners. These plans contain focus areas and action items that the manager wants to work on to hone one or more management skills."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data pipe line visualization"
              description="Designed and developed an interactive data pipeline visualization tool to display the flow of data across multiple processing stages in real-time. The interface helps data engineers and analysts understand the structure, status, and health of each pipeline node at a glance."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Analytics Dashboard"
              description="Built a custom analytics platform tailored to specific business KPIs and user behavior tracking. This solution replaced generic tools like Google Analytics to provide deeper, more domain-specific insights."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
