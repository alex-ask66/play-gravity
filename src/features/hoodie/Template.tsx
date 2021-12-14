import * as React from "react";

import styles from "./Template.module.scss";

interface IProps {
  active: string | null;
  className?: string;
  onClick: (e: any) => void;
  colors: {
    top: string;
    middle: string;
    bottom: string;
  };
}

const Template = ({
  onClick,
  colors: { top, middle, bottom },
  active,
}: IProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 229.8 462"
      xmlSpace="preserve"
    >
      <g id="variable">
        <polygon
          id="bottom"
          className={`${styles.bottom} ${
            active === "bottom" ? styles.active : ""
          }`}
          points="0.5,0.5 228.5,0.5 228.5,183.5 0.5,127.5 	"
          onClick={onClick}
          style={bottom ? { fill: bottom } : {}}
        />
        <polygon
          id="middle"
          className={`${styles.middle} ${
            active === "middle" ? styles.active : ""
          }`}
          points="0.5,315.5 228.5,183.5 0.5,127.5 	"
          onClick={onClick}
          style={middle ? { fill: middle } : {}}
        />
        <polygon
          id="top"
          className={`${styles.top} ${active === "top" ? styles.active : ""}`}
          points="0.5,461.5 228.5,461.5 228.5,183.5 0.5,315.5 	"
          onClick={onClick}
          style={top ? { fill: top } : {}}
        />
      </g>
      <g id="shape">
        <polygon
          className="st1"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeMiterlimit: 10,
          }}
          points="0.5,0.5 228.5,0.5 228.5,183.5 0.5,127.5 	"
        />
        <polygon
          style={{
            fill: "none",
            stroke: "#000000",
            strokeMiterlimit: 10,
          }}
          className="st1"
          points="0.5,315.5 228.5,183.5 0.5,127.5 	"
        />
        <polygon
          className="st1"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeMiterlimit: 10,
          }}
          points="0.5,461.5 228.5,461.5 228.5,183.5 0.5,315.5 	"
        />
      </g>
    </svg>
  );
};

export default Template;
