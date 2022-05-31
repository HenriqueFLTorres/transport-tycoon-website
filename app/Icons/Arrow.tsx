import * as React from "react"

const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 11"
    style={{
      enableBackground: "new 0 0 20 11",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M3.5 8.7 10 2.3l6.5 6.4"
    />
  </svg>
)

export default Arrow
