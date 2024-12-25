import React, { useState } from "react";

function LikeButton() {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <button
      type="button"
      className={`rounded-lg p-2 ${
        isRed ? "bg-red-500 text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      }`}
      onClick={handleClick}
    >
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6z"
        />
      </svg>
    </button>
  );
}

export default LikeButton;
