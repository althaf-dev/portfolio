'use client';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandGolang, TbBrandTypescript,TbBrandCss3  } from 'react-icons/tb';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <DiJavascript1 />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            JavaScript
          </span>
        </div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
           <TbBrandTypescript />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            TypeScript
          </span>
        </div>
        
      </Col>

      <Col xs={4} md={1} className="tech-icons">
      <div className="d-flex flex-col justify-content-center align-items-center">
          <DiReact />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            React
          </span>
        </div>
       
      </Col>

      <Col xs={4} md={1} className="tech-icons">
      <div className="d-flex flex-col justify-content-center align-items-center">
          <DiReact />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            React Native
          </span>
        </div>
       
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
        <DiNodejs />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Node JS
          </span>
        </div>
        
      </Col>
      

      <Col xs={4} md={1} className="tech-icons">

        <div className="d-flex flex-col justify-content-center align-items-center">
        <DiMongodb />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            MongoDB
          </span>
        </div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        
        <div className="d-flex flex-col justify-content-center align-items-center">
        <SiNextdotjs />

          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            NextJS
          </span>
        </div>
      </Col>
    
      <Col xs={4} md={1} className="tech-icons">
        
        <div className="d-flex flex-col justify-content-center align-items-center">
        <SiFirebase />

          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            FireBase
          </span>
        </div>
      </Col>
  
      <Col xs={4} md={1} className="tech-icons">
        
        <div className="d-flex flex-col justify-content-center align-items-center">
        <TbBrandCss3/>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            CSS3
          </span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
