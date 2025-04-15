'use client';

import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Althaf </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently employed as a software engineer at Innoventes.
            <br />
            I have completed B tech in electronics & communcation engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity d-flex  align-items-center gap-2 ">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity d-flex  align-items-center gap-2 ">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity d-flex  align-items-center gap-2 ">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <div style={{textAlign:"center"}}>
            <p style={{ color: 'rgb(155 126 172)' }}>
              "Strive to build things that make a difference!"{' '}
            </p>
            <footer className="blockquote-footer">Althaf</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
