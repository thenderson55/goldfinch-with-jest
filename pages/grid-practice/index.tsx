import React from "react";
import styles from "./index.module.scss";

function GridPractice() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <div className={styles.box1}>Box 1</div>
      <div className={styles.box2}>Box 2</div>
      <div className={styles.box3}>Box 3</div>
      <div className={styles.main}></div>
      <div className={styles.sidebar}>Sidebar</div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default GridPractice;
