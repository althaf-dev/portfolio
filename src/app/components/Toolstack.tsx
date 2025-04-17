import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiPostman, SiSlack, SiVercel, SiGitlab, SiNpm } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandRedux, TbBrandFigma } from 'react-icons/tb';
import { BiLogoDocker } from 'react-icons/bi';
// import { DiMongodb } from "react-icons/di";
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
import { TbBrandGolang, TbBrandTypescript, TbBrandCss3 } from 'react-icons/tb';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
          <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-between align-items-center ">
          <SiPostman />

          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            PostMan
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <SiGitlab />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Git
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <VscVscode />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            VS Code
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <SiVercel />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Vercel
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <TbBrandRedux />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Redux Tools
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <BiLogoDocker />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Docker
          </span>
        </div>
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <TbBrandFigma />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            Figma
          </span>
        </div>
      </Col>


      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <SiNpm/>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            NPM
          </span>
        </div>
      </Col>


      <Col xs={4} md={1} className="tech-icons">
        <div className="d-flex flex-col justify-content-center align-items-center">
          <DiMongodb/>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'rgb(199, 112, 240)',
            }}
          >
            MongoCompass
          </span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
