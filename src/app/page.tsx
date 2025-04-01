import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from './components/Particle';
import homeLogo from '../../public/home-main.svg';
import Type from './components/Type';
import Intro from './components/Intro';

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Abdulla Althaf</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
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
