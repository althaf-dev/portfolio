'use client';

import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });
import icon from "../../../public/code.svg"



export default function ParticleEffect() {
  return (
    <ParticlesBg
      type="custom"
      bg={true}

      config={{
        g:0,
        num: [0,1],
        rps: 0,
        radius: [5, 10],
        life: [1,1],
        v: [0,0],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        body: icon,
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        random: 10
      }}
    />
  );
}
