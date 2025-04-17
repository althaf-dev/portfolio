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
          Hi everyone! I'm Althaf, a passionate software engineer based in Bengaluru, India.
        
            I am currently employed as a software engineer at Innoventes.
         
            I have completed B tech in electronics & communcation engineering, but I found my true calling in the world of software development — where logic meets creativity.


            <br />
            <br />

          </p>
         
          <div style={{textAlign:"left"}}>
            <p style={{ color: 'rgb(155 126 172)' }}>
              "Driven by curiosity, powered by code, inspired by impact"{' '}
            </p>
     
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
