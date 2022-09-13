import React, { useState } from "react";
import styles from "./styles.module.scss";

function Button(props) {
  const [variant] = useState(props.variant);

  return (
    <button className={`${styles[`btn__${variant}`]}`}>{props.children}</button>
  );
}

export default Button;
