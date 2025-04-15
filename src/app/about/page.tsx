import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Particle from "../Particle";
import Github from "../components/Github";
import Techstack from '../components/Techstack';
import Aboutcard from '../components/AboutCard';
import laptopImg from '../../../public/about.png';
import Image from 'next/image';
import Toolstack from "../components/Toolstack";
import { Button } from "react-component-libarary"

function About() {
  return (
    <Container
      style={{ backgroundColor: '#00000' }}
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
              paddingTop: '30px',
              paddingBottom: '50px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                fontSize: '2.1em',
                paddingBottom: '20px',
                textAlign: 'center',
              }}
            >
              Know Who <strong className="purple">I'M</strong>
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
        <h1 style={{textAlign:"center"}} className="project-heading text-center">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 style={{textAlign:"center"}} className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
