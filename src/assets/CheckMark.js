import React from 'react';

const CheckMark = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.84198 17.541L4.44694 12C3.85102 11.388 3.85102 10.3957 4.44694 9.78361L5.52595 8.67542C6.12187 8.06338 7.08805 8.06338 7.68397 8.67542L10.921 12L16.316 6.45903C16.912 5.84699 17.8781 5.84699 18.4741 6.45903L19.5531 7.56722C20.149 8.17926 20.149 9.17157 19.5531 9.78361L12 17.541C11.4041 18.153 10.4379 18.153 9.84198 17.541Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="4"
          y1="6"
          x2="4"
          y2="18"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#B4F4E5" />
          <stop offset="1" stopColor="#7DE6C6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckMark;
