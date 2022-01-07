import * as React from "react";

interface IProps {
  className?: string;
}

/**
 *      <style type="text/css">
 *         .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#C2539A;}
 *         .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#2B6BB3;}
 *         .st2{fill-rule:evenodd;clip-rule:evenodd;fill:#E60B60;}
 *         .st3{fill:none;stroke:#000000;stroke-width:2.126;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.9256;}
 *       </style>
 */

const Diagonal = ({ className }: IProps) => {
  const st0: React.SVGProps<SVGPathElement> = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#C2539A",
  };
  const st1: React.SVGProps<SVGPathElement> = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#2B6BB3",
  };
  const st2: React.SVGProps<SVGPathElement> = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#E60B60",
  };
  const st3: React.SVGProps<SVGPathElement> = {
    fill: "none",
    stroke: "#000000",
    strokeWidth: 2.126,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 22.9256,
  };

  return (
    <svg
      version="1.1"
      id="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1191 842"
      // @ts-ignore
      style={{ enableBackground: "new 0 0 1191 842" }}
      xmlSpace="preserve"
    >
      <g id="bottom">
        <path
          // @ts-ignore
          style={st0}
          d="M662.6,532.6c-0.2,0-1.2,25.6-0.9,28.3c0.5,5.1,4.7,33.8,4.1,39.5c-0.6,5.7-3.8,4.5-4.1,10.6
		c-0.4,6.2-0.5,24-0.4,28.3s-1.2,6-1.2,6s-31.4,15.2-46.1,15.2c-14.7,0-34.3-0.7-49.9,0.9c-15.6,1.7-62.7,1.7-70.5-1.9
		c-7.8-3.5-20.1-9-20.1-9s4.5-33.6,1.2-36.4c-3.3-2.8-5.2-6.2-5.2-20.1c0-14,2.7-37.7,2.5-44.7s0.4-14.5,0.4-14.5s0.8,1.2,1,1.4
		s1.5-0.1,2.9-0.8s0.1-5.7,0.1-5.7l19.1-5.1l1.1-8.7l18.6,1.6c0,0,29.8-9,55-18s58.2-27,65.7-33.3s17.9-17.3,17.9-17.3l3.9-4.4
		l0.1,2.7c0,0-0.2,18.3-0.4,25c-0.2,6.8,4.6,38.3,4.6,38.3L662.6,532.6z"
        />
      </g>
      <g id="middle">
        <path
          // @ts-ignore
          style={st1}
          d="M657.7,444.6l-3.9,4.4c0,0-10.4,11-17.9,17.3s-40.5,24.3-65.7,33.3s-55,18-55,18l-18.6-1.6l-1.1,8.7l-19.1,5.1
		c0,0,0.1,0.4,0.2,1c-0.4-1.3-0.7-2.4-0.7-2.4s-2.4-9.5-1.9-11.7c0.6-2.1,4.3-6.3,4.8-8s0.9-4.9,0.9-4.9s-0.7-5.7-0.9-9.7
		c-0.2-4-0.1-5.5,0.7-6.9c0.8-1.5,3.1-8.1,1.7-14.5s1.7-24.1,2.4-28c0.7-3.9,4.8-26.6,4.8-26.6l0.2-3.7c0,0,8.5-2.1,11.2-5.9
		c2.7-3.7,0.1-5.4,10.2-9.3c10-3.9,38-16.6,44.7-19.8c6.8-3.2,30.9-10.3,40.8-14.4c9.9-4.1,22.1-7.2,26.7-9.6
		c4.7-2.4,26.7-10.5,26.7-10.5l-2.5,12.1c0,0-4.6,17.9-4.5,24.6s3.2,26.7,7.9,38s6.9,15.6,7.3,17.6
		C657.2,439.1,657.7,444.6,657.7,444.6z"
        />
      </g>
      <g id="top">
        <path
          // @ts-ignore
          style={st2}
          d="M472.9,535.3c0,0-15.8-0.5-20.8,0.5c-5,0.9-8.5,2.6-8.5,2.6v-4c0,0,3.3-3.3,2.8-9.2s-3.5-17-3.5-17
		s-5.9,0.9-6.9-6.4c-0.9-7.3-1.7-12.5-2.8-15.4c-1.2-2.8-6.2-11.1-5.7-15.8c0.5-4.7,2.6-8.3,5.4-10.4s4.7-10.2,5-14
		c0.2-3.8,0.2-20.3,0.2-20.3s-2.6-40.9,0.2-52c2.8-11.1,20.8-71,21.3-80.9s13.2-37.6,21.1-43.8c7.8-6.2,32.4-13,32.4-13
		s-3.5-16.9-2.1-22.4c1.4-5.4,1.9-9.6,1.9-11.9c0-2.4-2.2-4.3-1.7-8.3c0.6-4,3.5-12.5,3.5-12.5s19.4-10.6,52.5-12.1
		c33.1-1.4,60.6,2.8,61.7,10.4c1.2,7.6,3.3,24.8,6.4,26.3c3.1,1.4,16.8,9.7,14.7,19.6c-2.1,9.9-6.4,15.6-3.1,16.8
		c3.3,1.2,12.5,5.2,16.6,8.5c4,3.3,10.6,13.7,10.6,13.7s21.3,49,24.1,86.3c2.8,37.4,3.2,43.8,2.7,50c-0.5,6.3,1,12.3,1.6,16.7
		c0.6,4.4-4,19.5-5.5,27.5s-2.8,7.7,0.5,10.9c3.3,3.2,9.5,7.3,9.7,10.5s0.7,8.3,0.5,9.2c-0.2,0.9-3.6,9.3-5.7,11
		c-2.1,1.7-3.1,2.2-2.7,5.7c0.4,3.5,1.1,4.9,1.8,7.3s-1.4,5.6-5.7,10.1c-4.4,4.5-4.4,12.2-3.7,15.1c0.7,2.8,0.4,11.7,0.4,11.7
		s-12.4-3.4-19.6-3.5c-7.2-0.1-9.3,0.2-9.3,0.2l-0.7-21.9c0,0-4.8-31.6-4.6-38.3c0.2-6.8,0.4-25,0.4-25l-0.1-2.7
		c0,0-0.4-5.4-0.8-7.4c-0.3-2-2.6-6.3-7.3-17.6c-4.7-11.3-7.8-31.3-7.9-38c-0.1-6.7,4.5-24.6,4.5-24.6l2.5-12.1
		c0,0-22,8.1-26.7,10.5c-4.6,2.4-16.8,5.5-26.7,9.6s-34,11.2-40.8,14.4c-6.8,3.2-34.7,15.9-44.7,19.8s-7.5,5.5-10.2,9.3
		s-11.2,5.9-11.2,5.9l-0.2,3.7c0,0-4.1,22.7-4.8,26.6c-0.7,3.9-3.8,21.6-2.4,28s-0.9,13-1.7,14.5c-0.8,1.5-0.9,2.9-0.7,6.9
		c0.2,4,0.9,9.7,0.9,9.7s-0.3,3.2-0.9,4.9c-0.5,1.7-4.3,5.9-4.8,8c-0.6,2.1,1.9,11.7,1.9,11.7s0.4,1,0.7,2.4l0,0l0,0
		c0.3,1.5,0.6,4.1-0.3,4.6c-1.3,0.7-2.7,1-2.9,0.8C473.8,536.5,472.9,535.3,472.9,535.3z"
        />
      </g>
      <g id="Layer_3">
        <path
          // @ts-ignore
          style={st3}
          d="M663.1,533.1c-0.2,0-1.2,25.6-0.9,28.3c0.5,5.1,4.7,33.8,4.1,39.5c-0.6,5.7-3.8,4.5-4.1,10.6
		c-0.4,6.2-0.5,24-0.4,28.3s-1.2,6-1.2,6s-31.3,15.2-46,15.2s-34.3-0.7-49.9,0.9c-15.6,1.7-62.7,1.7-70.5-1.9
		c-7.8-3.5-20.1-9-20.1-9s4.5-33.6,1.2-36.4c-3.3-2.8-5.2-6.2-5.2-20.1c0-14,2.7-37.7,2.5-44.7s0.4-14.5,0.4-14.5s0.8,1.2,1,1.4
		s1.5-0.1,2.9-0.8s0.1-5.7,0.1-5.7l19.1-5.1l1.1-8.7l18.6,1.6c0,0,29.8-9,55-18s58.2-27,65.7-33.3s17.9-17.3,17.9-17.3l3.9-4.4
		l0.1,2.7c0,0-0.2,18.3-0.4,25c-0.2,6.8,4.6,38.3,4.6,38.3L663.1,533.1z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M662.7,608.6c0,0-29.2,10-36.1,10.9c-6.9,0.9-10.6-1.9-20.3,1.9c-9.7,3.8-34.3,2.8-67.2,1.2
		c-32.9-1.7-45.2-5.9-49-5.9s-14.8-2-14.8-2"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M497,516.5c0,0,68.6,6.2,85.4,6.2c16.8,0,57.7-4,57.7-4l6.4,55.6l-17,28.6c0,0-94.9,5.2-106,3.8
		s-18-2.6-18-2.6l-17-31.7l7.6-38.6L497,516.5z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M510.6,553.4c0,0,8.3,0.9,12.8,2.5c4.5,1.7,4.3,3.4,4.3,3.4s-3.4,23.5-3.5,25c-0.2,1.5-3.5,2.2-8.5,1
		s-11.1-2.8-10.1-6.8s2.6-12.4,2.6-13.1c0-0.8,0.1-5.9,0.3-6.4C508.6,558.4,510.6,553.4,510.6,553.4z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M511.5,573.4c0,0,0.4-12.1,1.9-12.1c1.5-0.1,2.4,0.1,2.5,2.2c0.1,2.1-0.4,3.9-0.9,4.6
		c-0.5,0.7-3.2,0.3-3.2,0.3"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M522.8,562.7c0,0-3.8-1-3.9,1.4c-0.1,2.5-1.2,8.6,0.4,9.6c1.6,1,2.5-0.7,2.8-2.6c0.1-0.7,0.2-1.2,0.2-1.6
		c0-0.9,0.1-0.8-0.5-0.8l-1.1-0.1"
        />
      </g>
      <g id="Layer_2">
        <path
          // @ts-ignore
          style={st3}
          d="M658.2,445.1l-3.9,4.4c0,0-10.4,11-17.9,17.3s-40.5,24.3-65.7,33.3s-55,18-55,18l-18.6-1.6l-1.1,8.7l-19.1,5.1
		c0,0,0.1,0.4,0.2,1c-0.4-1.3-0.7-2.4-0.7-2.4s-2.4-9.5-1.9-11.7c0.6-2.1,4.3-6.3,4.8-8s0.9-4.9,0.9-4.9s-0.7-5.7-0.9-9.7
		c-0.2-4-0.1-5.5,0.7-6.9c0.8-1.5,3.1-8.1,1.7-14.5s1.7-24.1,2.4-28c0.7-3.9,4.8-26.6,4.8-26.6l0.2-3.7c0,0,8.5-2.1,11.2-5.9
		c2.7-3.7,0.1-5.4,10.2-9.3c10-3.9,38-16.6,44.7-19.8c6.8-3.2,30.9-10.3,40.8-14.4c9.9-4.1,22.1-7.2,26.7-9.6
		c4.7-2.4,26.7-10.5,26.7-10.5l-2.5,12.1c0,0-4.6,17.9-4.5,24.6s3.2,26.7,7.9,38s6.9,15.6,7.3,17.6
		C657.7,439.6,658.2,445.1,658.2,445.1z"
        />
      </g>
      <g id="Layer_1">
        <path
          // @ts-ignore
          style={st3}
          d="M473.4,535.8c0,0-15.8-0.5-20.8,0.5c-5,0.9-8.5,2.6-8.5,2.6v-4c0,0,3.3-3.3,2.8-9.2s-3.5-17-3.5-17
		s-5.9,0.9-6.9-6.4c-0.9-7.3-1.7-12.5-2.8-15.4c-1.2-2.8-6.2-11.1-5.7-15.8c0.5-4.7,2.6-8.3,5.4-10.4s4.7-10.2,5-14
		c0.2-3.8,0.2-20.3,0.2-20.3s-2.6-40.9,0.2-52c2.8-11.1,20.8-71,21.3-80.9s13.2-37.6,21.1-43.8c7.8-6.2,32.4-13,32.4-13
		s-3.5-16.9-2.1-22.4c1.4-5.4,1.9-9.6,1.9-11.9c0-2.4-2.2-4.3-1.7-8.3c0.6-4,3.5-12.5,3.5-12.5s19.4-10.6,52.5-12.1
		c33.1-1.4,60.6,2.8,61.7,10.4c1.2,7.6,3.3,24.8,6.4,26.3c3.1,1.4,16.8,9.7,14.7,19.6c-2.1,9.9-6.4,15.6-3.1,16.8
		c3.3,1.2,12.5,5.2,16.6,8.5c4,3.3,10.6,13.7,10.6,13.7s21.3,49,24.1,86.3c2.8,37.4,3.2,43.8,2.7,50c-0.5,6.3,1,12.3,1.6,16.7
		c0.6,4.4-4,19.5-5.5,27.5s-2.8,7.7,0.5,10.9c3.3,3.2,9.5,7.3,9.7,10.5s0.7,8.3,0.5,9.2c-0.2,0.9-3.6,9.3-5.7,11
		c-2.1,1.7-3.1,2.2-2.7,5.7c0.4,3.5,1.1,4.9,1.8,7.3s-1.4,5.6-5.7,10.1c-4.4,4.5-4.4,12.2-3.7,15.1c0.7,2.8,0.4,11.7,0.4,11.7
		s-12.4-3.4-19.6-3.5c-7.2-0.1-9.3,0.2-9.3,0.2l-0.7-21.9c0,0-4.8-31.6-4.6-38.3c0.2-6.8,0.4-25,0.4-25l-0.1-2.7
		c0,0-0.4-5.4-0.8-7.4c-0.3-2-2.6-6.3-7.3-17.6c-4.7-11.3-7.8-31.3-7.9-38c-0.1-6.7,4.5-24.6,4.5-24.6l2.5-12.1
		c0,0-22,8.1-26.7,10.5c-4.6,2.4-16.8,5.5-26.7,9.6s-34,11.2-40.8,14.4c-6.8,3.2-34.7,15.9-44.7,19.8s-7.5,5.5-10.2,9.3
		s-11.2,5.9-11.2,5.9l-0.2,3.7c0,0-4.1,22.7-4.8,26.6c-0.7,3.9-3.8,21.6-2.4,28s-0.9,13-1.7,14.5c-0.8,1.5-0.9,2.9-0.7,6.9
		c0.2,4,0.9,9.7,0.9,9.7s-0.3,3.2-0.9,4.9c-0.5,1.7-4.3,5.9-4.8,8c-0.6,2.1,1.9,11.7,1.9,11.7s0.4,1,0.7,2.4l0,0l0,0
		c0.3,1.5,0.6,4.1-0.3,4.6c-1.3,0.7-2.7,1-2.9,0.8C474.3,537,473.4,535.8,473.4,535.8z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M473.4,535.8c0,0,3.7,3.1,4.6-0.3c0.8-3.4-1.5-5.7-2.2-10.3s-2.1-6.3-0.5-8.8c1.7-2.5,3.9-4.7,4.4-8.3
		c0.5-3.5,1.7-1.9,0.9-7.1c-0.7-5.2-1.5-10.5-0.6-12.2s3.9-6.5,2.7-11.9s-0.9-13.5-0.9-14.9s7.6-43.1,7.6-43.1
		c0.7-25.3,9.9-44.7,7-73.4c-0.2-1.5-4.6-45.7-4.8-47.3"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M521.1,185.8c0,0,26.3-11.8,56.1-11.8s45.4,1.7,45.9,11.4s-17.3,34.5-40.9,34.3c-23.7-0.2-49.4-10.2-56.5-18.2
		s-7.7-10.8-7.2-12.4C518.8,187.3,521.1,185.8,521.1,185.8z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M534.7,266c0,0,22.7,25.8,39.7,24.8c17-0.9,39.5-18.2,39.5-18.2"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M649.7,345.8c1-4.8,2-9.6,3-14.2c0.4-1.9,5-42.2,5.4-44"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M443.4,508.6c0,0,5.9-2.9,15.3-2.7c9.5,0.2,21.1,1.2,21.1,1.2"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M694.8,511.5c0,0-9.4-5.2-16.7-4.5s-15.2,4.7-15.2,4.7"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M524,257c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4s-2.4,1.1-2.4,2.4C521.5,255.9,522.6,257,524,257z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M628.1,256.6c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5C625.6,255.4,626.7,256.6,628.1,256.6z"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M524,254.6c0,0-3.8,29.9-3.1,46.2c0.7,16.3,3.5,33.4,2.4,40.9c-1.2,7.6,1.4,19.4,1.4,19.4"
        />
        <path
          // @ts-ignore
          style={st3}
          d="M628.1,254.1c0,0-4.4,37.7-4.6,49.1c-0.2,11.4-2.1,28.2-1.4,34.8s-2.1,12.2-2.1,12.2"
        />
      </g>
    </svg>
  );
};

export default Diagonal;
