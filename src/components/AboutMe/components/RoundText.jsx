import styles from "../AboutMe.module.css";

const CircularTextSVG = ({
  text = "FRONT-END WEB DEVELOPER",
  radius = 55,
  center = 90,
  reversed = false,
  className = ""
}) => {
  const diameter = center * 2;
  const pathId = `circlePath-${radius}-${reversed ? "r" : "f"}`;

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      className={`${className} ${styles.spinningText}`}
      aria-hidden="false"
      role="img"
    >
      <defs>
        <path
          id={pathId}
          d={`
            M ${center} ${center - radius}
            a ${radius} ${radius} 0 1 ${reversed ? 0 : 1} 0 ${radius * 2}
            a ${radius} ${radius} 0 1 ${reversed ? 0 : 1} 0 ${-radius * 2}
          `}
        />
      </defs>

      <g className={styles.rotate}>
        <text
          textAnchor="middle"
          style={{ fontSize: 20, fontFamily: "sans-serif", fill: "#555" }}
        >
          <textPath href={`#${pathId}`} startOffset="50%">
            {text}
          </textPath>
        </text>
      </g>
    </svg>
  );
};

export default CircularTextSVG;