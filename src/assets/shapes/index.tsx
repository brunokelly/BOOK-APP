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
      clipRule="evenodd"
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

export const BookCharpter = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.66666 8.00002C4.66666 8.51822 5.23198 8.83829 5.67633 8.57168L7 7.77748L8.32367 8.57168C8.76802 8.83829 9.33333 8.51822 9.33333 8.00002V1.33335C9.33333 0.965164 9.03485 0.666687 8.66666 0.666687H5.33333C4.96514 0.666687 4.66666 0.965164 4.66666 1.33335V8.00002ZM6.657 6.42836L6 6.82256V2.00002H8V6.82256L7.34299 6.42836C7.13187 6.30169 6.86812 6.30169 6.657 6.42836Z"
      fill="#E66CFF"
      fillOpacity="0.98"
    />
    <path
      d="M3.33333 2.00002H10.6667C11.7712 2.00002 12.6667 2.89545 12.6667 4.00002V12C12.6667 13.1046 11.7712 14 10.6667 14H4C3.63181 14 3.33333 14.2985 3.33333 14.6667C3.33333 15.0349 3.63181 15.3334 4 15.3334H10.6667C12.5076 15.3334 14 13.841 14 12V4.00002C14 2.15907 12.5076 0.666687 10.6667 0.666687H2.66667C2.29848 0.666687 2 0.965164 2 1.33335V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03486 12.6667 3.33333 12.3682 3.33333 12V2.00002Z"
      fill="#9013FE"
    />
    <circle cx="10.6667" cy="12" r="0.666667" fill="#FF9F00" />
  </svg>
);

export const HugeCircle = ({ styles }: IShapes) => (
  <svg
    width="63"
    height="63"
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={styles}
  >
    <circle cx="31.5" cy="31.5" r="31.5" fill="#00173D" />
  </svg>
);

export const SmallPinkCircle = ({ styles }: IShapes) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={styles}
  >
    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6978" />
  </svg>
);

export const CircleLines = ({ styles }: IShapes) => {
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={styles}
  >
    <circle
      cx="32"
      cy="32"
      r="24"
      transform="rotate(25 32 32)"
      fill="url(#pattern0)"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="0.845983"
        height="0.149291"
      >
        <use xlinkHref="#image0" transform="scale(0.0248819)" />
      </pattern>
      <image
        id="image0"
        width="34"
        height="6"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>;
};
