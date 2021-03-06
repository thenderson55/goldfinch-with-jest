import * as React from 'react';

function SvgBasicCloud(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="none"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
      />
    </svg>
  );
}

export default SvgBasicCloud;
