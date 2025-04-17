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
          Here are a few projects I`&apos;`ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HR analytics tool"
              description="An application that make surveys and analyze and provide personalized plan for each of managers. These plans are tracked by managers and HR businees partners. These plans contain focus areas and action items that the manager wants to work on to hone one or more management skills."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data pipe line visualization"
              description="Designed and developed an interactive data pipeline visualization tool to display the flow of data across multiple processing stages in real-time. The interface helps data engineers and analysts understand the structure, status, and health of each pipeline node at a glance."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Custom Analytics Dashboard"
              description="Built a custom analytics platform tailored to specific business KPIs and user behavior tracking. This solution replaced generic tools like Google Analytics to provide deeper, more domain-specific insights."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Optimized Static Website for Brand Visibility"
              description="Built a fast, responsive, and SEO-optimized static website for a client to showcase their brand, services, and portfolio. Leveraged modern web technologies like HTML, CSS, and JavaScript along with performance best practices to ensure quick load times and high accessibility. The site was designed with scalability in mind and deployed with automated CI/CD workflows for smooth updates."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Migration from React to Next.js"
              description="Migrated an existing React.js application to Next.js to improve performance, SEO, and developer experience. The migration involved restructuring routes, implementing server-side rendering (SSR), and optimizing static assets. Leveraged Next.js features like getServerSideProps, API routes, and image optimization to enhance scalability and maintainability. The result was a significantly faster, SEO-friendly application with a cleaner architecture."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Micro Frontend Architecture Implementation"
              description="Designed and developed a scalable Micro Frontend architecture to break a large monolithic React application into independent, manageable modules. Each micro-app was built, deployed, and maintained separately using tools like Module Federation, enhancing team autonomy and deployment flexibility. Ensured smooth integration, shared state management, and consistent UI across all modules."
              ghLink="https://github.com/althaf-dev"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
