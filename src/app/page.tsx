
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particle from './components/Particle';
import homeLogo from '../../public/home-main.svg';
import Type from './components/Type';
import Intro from './components/Intro';
import LandingCTA from './components/LandingCTA';

export default function Home() {
  return (
    <section >
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content" >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div className="d-flex gap-3 align-items-center">
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Abdulla Althaf,</strong>
                </h1>
                <h1>Software Engineer</h1>
              </div>

              <h6 className="ms-12">
                Front-End Developer focused on crafting fast, accessible, and
                scalable interfaces.
              </h6>
              <div className='d-flex flex-col mt-4' >
                <p className="ms-12 p-0 mb-0">
                  React | Next.js | TypeScript | Node.js | Tailwind | MUI{' '}
                </p>
                <p className="ms-12 p-0">
                  I build reliable UIs with performance, user experience, and
                  scalability in mind.
                </p>
              </div>
              <div className='ms-12 mb-8'>
              🚀 5+ Projects Built | 🧠 270+ Leetcode Problems Solved | 🗣️ 4+ Years Experience
              </div>
             
              <LandingCTA/>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image src={homeLogo} alt="home pic" height={450} />
            </Col>
          </Row>
        </Container>
        
      </Container>
      <Intro />
    </section>
  );
}
