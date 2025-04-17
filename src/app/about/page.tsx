import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Particle from "../Particle";
import Github from "../components/Github";
import Techstack from '../components/Techstack';
import Aboutcard from '../components/AboutCard';
import laptopImg from '../../../public/about.png';
import Image from 'next/image';
import Toolstack from "../components/Toolstack";

function About() {
  return (
    <Container
      style={{ backgroundColor: '#00000',paddingLeft:"14px" }}
      fluid
      className="about-section"
    >
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '10px',
              paddingBottom: '50px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                fontSize: '2.1em',
                paddingBottom: '20px',
                marginLeft:"12px"
               
              }}
            >
               <strong className="purple">Know </strong> Who I Am
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <Image src={laptopImg} alt='about'/>
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1  className="project-heading text-left ms-8 mb-4">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1  className="project-heading ms-8 mb-4">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
