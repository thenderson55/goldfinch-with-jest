import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import SvgMagnifyingGlass from "../../svgs/SvgMagnifyingGlass";
import SvgCake from "../../svgs/SvgCake";
import seamus from "../../public/seamus.jpg";

function Hotel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <SvgCake className={styles.headerIcon} />

          {/* <Image src={seamus} alt="seamus" className={styles.headerLogo} /> */}
          <form action="" className={styles.search}>
            <input type="text" className={styles.searchInput} />
            <button className={styles.searchButton}>
              <SvgMagnifyingGlass className={styles.searchIcon} />
            </button>
          </form>
          <nav className={styles.userNav}>
            <div className={styles.userNavIconBox}>
              <SvgCake className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>5</span>
            </div>
            <div className={styles.userNavIconBox}>
              <SvgCake className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>14</span>
            </div>
            <div className={styles.userNavUser}>
              <div className={styles.userNavAvatarBox}>
                <Image
                  src={seamus}
                  alt="user photo"
                  className={styles.userNavAvatar}
                />
              </div>
            </div>
          </nav>
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
