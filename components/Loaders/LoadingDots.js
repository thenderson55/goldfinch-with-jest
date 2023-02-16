import React from "react";
import styles from "./LoadingDots.module.scss";

const LoadingDots = (props) => {
  return (
      <div className={styles.bouncingLoader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default LoadingDots;