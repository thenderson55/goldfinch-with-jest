import React from "react";
import Feature from "./Feature";
import styles from "./index.module.scss";

function Grid() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <header className={styles.header}>Header</header>
      <div className={styles.realtors}>Realtors</div>
      <section className={styles.features}>
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </section>
      <div className={styles.storyPictures}>Story-pictures</div>
      <div className={styles.storyContent}>
        <h3 className={styles.storyContentTitle}>HAPPY CLAPPY PEOPLE</h3>
        <h2 className={styles.storyContentQuote}>
          &ldquo;The best desicions of our lives&ldquo;
        </h2>
        <div className={styles.storyContentText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit in harum quia optio, libero enim fugiat ad dolore
          exercitationem beatae.
        </div>
        <button className={styles.storyContentButton}>
          FIND YOUR OWN HOME
        </button>
      </div>
      <section className={styles.homes}>Homes</section>
      <section className={styles.gallery}>Gallery</section>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Grid;
