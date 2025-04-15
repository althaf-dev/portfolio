import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import Image from 'next/image';
import leetcode from '../../../public/leetcode.png';
import gitlab from '../../../public/gitlab.png';

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1
        className="project-heading"
        style={{ paddingBottom: '20px', textAlign: 'center' }}
      >
        Days I <strong className="purple">Code</strong>
      </h1>
      <h5 className='text-center'>Leet Code</h5>
      <div className="text-center d-flex justify-content-center">
        <Image src={leetcode} alt="leetcode" height={500} width={800} />
      </div>
      <h5 className='text-center mt-4'>Git Lab</h5>
      <div className="text-center d-flex justify-content-center">
        <Image src={gitlab} alt="leetcode" height={500} width={800} />
      </div>
    </Row>
  );
}

export default Github;
