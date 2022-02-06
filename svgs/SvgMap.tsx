import * as React from "react";

function SvgMap(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M19.447 3.718l-6-3a1 1 0 00-.895 0l-5.63 2.815-5.606-1.869A1 1 0 000 2.613v13.001c0 .379.214.725.553.894l6 3a1.006 1.006 0 00.894 0l5.63-2.814 5.606 1.869a.999.999 0 001.316-.949V4.612a.996.996 0 00-.552-.894zM8 5.231l4-2v11.763l-4 2V5.231zM2 4l4 1.333v11.661l-4-2V4zm16 12.227l-4-1.334V3.231l4 2v10.996z" />
    </svg>
  );
}

export default SvgMap;
