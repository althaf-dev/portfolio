'use client';

import React from 'react';
import { Button } from 'react-bootstrap';

function LandingCTA() {
  return (
    <div
      className="ps-8 mt-4  ms-3 d-flex  gap-4 z-10"
    >
      <a href="https://www.linkedin.com/in/abdulla-althaf-b86374a2/"> <Button>LinkedIn</Button></a>
      <a href="https://github.com/althaf-dev"><Button>Github</Button></a>
      <a href="https://leetcode.com/u/althaf1/"><Button>Leetcode</Button></a>
      
    </div>
  );
}

export default LandingCTA;
