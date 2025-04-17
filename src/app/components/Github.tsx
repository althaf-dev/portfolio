import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import leetcode from '../../../public/leetcode.png';
import gitlab from '../../../public/gitlab.png';

function Github() {
  return (
    <Row className='ms-12 p-3' style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1
        className="project-heading ms-8"
        style={{ paddingBottom: '20px'}}
      >
        Days I <strong className="purple">Code</strong>
      </h1>

      <Row className='ms-8 d-flex md-flex-row flex-column'>
        <Col>
          <h5 className="text-center">Leet Code</h5>
          <div className="text-center d-flex justify-content-center">
            <Image src={leetcode} alt="leetcode" height={500} width={800} />
          </div>
        </Col>


        <Col>
        <h5 className="text-center">Git Lab</h5>
      <div className="text-center d-flex justify-content-center">
        <Image src={gitlab} alt="leetcode" height={500} width={800} />
      </div>
        </Col>
      </Row>

    
    </Row>
  );
}

export default Github;
