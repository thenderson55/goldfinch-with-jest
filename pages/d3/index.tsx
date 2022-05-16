import React from 'react';

function D3() {
  const width = 960;
  const height = 500;
  const strokeWidth = 5;
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeRadius = 50;
  const eyeOffsetX = 100;
  const eyeOffsetY = 50;

  return (
    <div>
      <svg width={width} height={height}>
        <circle
          cx={centerX}
          cy={centerY}
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        ></circle>
        <circle
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
        ></circle>
      </svg>
    </div>
  );
}

export default D3;
