import * as React from 'react';

function SvgBasicFloppydisk(props) {
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
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M63 63H1V1h50l12 12z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M7 31h50v32H7zM14 39h36M14 47h36M14 55h36M15 1h34v19H15z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M38 5h5v11h-5z"
      />
    </svg>
  );
}

export default SvgBasicFloppydisk;
