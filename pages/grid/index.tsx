import React from "react";
import styles from "./index.module.scss";

function Grid() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <header className={styles.header}>Header</header>
      <div className={styles.realtors}>Realtors</div>
      <section className={styles.features}>Features</section>
      <div className={styles.storyPictures}>Story-pictures</div>
      <div className={styles.storyContent}>Story-content</div>
      <section className={styles.homes}>Homes</section>
      <section className={styles.gallery}>Gallery</section>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Grid;
