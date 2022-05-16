import React from 'react';
import { arc } from 'd3';

function D3() {
  const width = 960;
  const height = 500;
  const strokeWidth = 5;
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeRadius = 50;
  const eyeOffsetX = 100;
  const eyeOffsetY = 80;
  const mouthWidth = 10;
  const mouthRadius = 150;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 1.5);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default D3;
