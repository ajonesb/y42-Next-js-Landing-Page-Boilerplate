import React from "react";
import styles from "./styles.module.scss";

const View = ({ children }) => {
  return (
    <div className={styles.view}>
      <div>{children}</div>
    </div>
  );
};

export default View;
