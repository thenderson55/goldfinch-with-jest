import React from "react";
import SvgMagnifyingGlass from "../../svgs/SvgMagnifyingGlass";
import styles from "./Feature.module.scss";

function Feature() {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <SvgMagnifyingGlass className={styles.icon} />
      </div>
      <div className={styles.title}>Title</div>
      <div className={styles.detail}>
        <div className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          nihil nulla, dolorem aspernatur, voluptates totam ab tempora cum quo,
          nisi iure distinctio.
        </div>
      </div>
    </div>
  );
}

export default Feature;
