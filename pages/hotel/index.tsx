import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import MagnifyingGlass from "../../svgs/SvgMagnifyingGlass";

function Hotel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* <Image src={dalmation} alt="Dalmation" className={styles.headerLogo} /> */}
          <form action="" className={styles.search}>
            <input type="text" className={styles.searchInput} />
            <button className={styles.searchButton}>
              <MagnifyingGlass className={styles.searchIcon} />
            </button>
          </form>
        </header>
        <div className={styles.content}>
          <nav className={styles.sidebar}>NAV</nav>
          <main className={styles.hotelView}>MAIN</main>
          {/* CONTENT
          <h1 className={styles.main}>HOTEL</h1>
          <Link href="/">
            <a className={styles.hotelSubHeaderLink}>HOME</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hotel;
