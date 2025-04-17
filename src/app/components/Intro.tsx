import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../public/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

function Home2() {
  return (
    <Container  style={{ backgroundColor: '#151023', color: 'white'}} fluid className="home-about-section " id="about">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md={8} className="home-about-description mt-4">
            <h1 className="heading">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <div className="mt-4">
                <p className="home-about-body">I fell in love with programming — and I like to believe I’ve learned a few things along the way. 🤷‍♂️</p>
                <p className="home-about-body">I’m fluent in core web languages like JavaScript and TypeScript, and I enjoy building fast, accessible, and scalable front-end experiences.</p>
                <p className="home-about-body">My interests lie in creating impactful web products, exploring new technologies, and occasionally diving into areas like blockchain.</p>
                <p className="home-about-body">Whenever I can, I bring my passion to life through tools like React.js, Next.js, and Node.js, applying modern JavaScript frameworks to build real-world solutions.</p>
            </div>
            
          </Col>
          <Col md={3} className="myAvtar ">
           
              <Image src={myImg} alt="avatar" />
            
           
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <div className="d-flex flex-column flex-md-row align-items-center md-gap-16  justify-content-center ">
               <p style={{textAlign:"left"}} className="ms-10 text-center md:text-left">Let’s connect — I’d love to hear from you!</p>
               <div className="p-0 -mt-2">
               <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/althaf-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons border-danger"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdulla-althaf-b86374a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
               </div>
            </div>
          
          
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
