import * as React from "react";
import { useSwipeable } from "react-swipeable";

import Diagonal from "../../assets/Units/Diagonal";
import Rectangle from "../../assets/Units/Rectangle";
import Triangle from "../../assets/Units/Triangle";

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

// TODO: Backend
//  - email/telegram/viber message to admin account

// TODO: Client
//  - animated slider
//  - color options - orders saving

// TODO: Admin
//  - colors in DB
//  - basic authorization
//  - orders list
//  - ??? messages settings

const components = [Diagonal, Rectangle, Triangle];

const Template = ({
  onClick,
  colors: { top, middle, bottom },
  active,
}: IProps) => {
  const [index, setIndex] = React.useState<number>(0);

  const { ref } = useSwipeable({
    onSwipedLeft: () => {
      setIndex((prev) => (prev === 0 ? components.length - 1 : prev - 1));
    },
    onSwipedRight: () => {
      setIndex((prev) => (prev === components.length - 1 ? 0 : prev + 1));
    },
  });

  const Component = components[index];

  return (
    <div className={styles.container} ref={ref}>
      <Component />
      <div className={styles.controls}>
        {components.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={styles.dot} />
        ))}
      </div>
    </div>
  );

  /*
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
*/
};

export default Template;
