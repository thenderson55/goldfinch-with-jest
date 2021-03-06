import * as React from 'react';

function SvgBasicAnchor(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path fill="none" strokeWidth={2} strokeMiterlimit={10} d="M32 13v50" />
      <path
        fill="none"
        strokeWidth={2}
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        d="M19 50L9 47 6 57M45 50l10-3 4 10"
      />
      <path
        fill="none"
        strokeWidth={2}
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        d="M54.752 47C51.555 56.301 42.576 63 32 63c-10.575 0-19.553-6.698-22.751-15.998M23 17h18"
      />
      <circle
        fill="none"
        strokeWidth={2}
        strokeMiterlimit={10}
        cx={32}
        cy={7}
        r={6}
      />
    </svg>
  );
}

export default SvgBasicAnchor;
