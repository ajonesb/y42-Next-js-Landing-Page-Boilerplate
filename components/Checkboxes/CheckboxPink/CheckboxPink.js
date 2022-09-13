import * as React from "react";
import styles from "./styles.module.scss";

const CheckboxPinkSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
  >
    <path
      d="M9.98889 1.33341L9.66082 1.08207C9.25072 0.767902 8.64807 0.848521 8.33497 1.25943L4.28559 6.57392L2.32038 5.09007C1.91029 4.7759 1.30763 4.85652 0.994532 5.26743L0.744055 5.59616C0.430958 6.00707 0.508556 6.58714 0.921882 6.92548L3.95657 9.25034C4.17529 9.4179 4.42605 9.45816 4.66711 9.42591C4.90817 9.39366 5.13631 9.26474 5.30652 9.06975L10.1667 2.66273C10.4798 2.25182 10.399 1.64758 9.98889 1.33341Z"
      fill="#EA6CA0"
    />
  </svg>
);

const CheckboxPink = () => (
  <>
    <div className={styles.checkbox_pink}>{CheckboxPinkSVG()}</div>
  </>
);

export default CheckboxPink;
