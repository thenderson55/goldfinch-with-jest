import React from "react";

function Button({ onMoney }) {
  return (
    <div>
      <button
        onClick={() => {
          onMoney(33);
        }}
      >
        Give me 33 dollars
      </button>
    </div>
  );
}

export default Button;
