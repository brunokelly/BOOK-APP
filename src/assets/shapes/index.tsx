import React from "react";

interface IShapes {
  styles: React.CSSProperties;
}

export const Triangle = ({ styles }: IShapes) => (
  <svg
    width="34"
    height="30"
    viewBox="0 0 34 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...styles }}
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M3.81349 0.795898L0.5 29.0133L33.3682 7.67883L3.81349 0.795898Z"
      fill="#FCBC48"
    />
  </svg>
);

export const Circle = ({ styles }: IShapes) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...styles }}
  >
    <circle cx="10" cy="10" r="9" stroke="#4550A7" strokeWidth="2" />
  </svg>
);

export const Rectangle = ({ styles }: IShapes) => (
  <svg
    width="46"
    height="16"
    viewBox="0 0 46 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...styles }}
  >
    <rect
      x="1.16704"
      y="0.495239"
      width="46"
      height="4"
      transform="rotate(14 1.16704 0.495239)"
      fill="#EC6374"
    />
  </svg>
);
