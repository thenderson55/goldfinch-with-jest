import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import SvgMagnifyingGlass from "../../svgs/SvgMagnifyingGlass";
import SvgCake from "../../svgs/SvgCake";
import seamus from "../../public/seamus.jpg";
import SvgBookmark from "../../svgs/SvgBookmark";
import SvgChat from "../../svgs/SvgChat";
import SvgHome from "../../svgs/SvgHome";
import SvgAircraftTakeOff from "../../svgs/SvgAircraftTakeOff";
import SvgKey from "../../svgs/SvgKey";
import SvgMap from "../../svgs/SvgMap";

function Hotel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/">
            <a>
              <SvgCake className={styles.headerIcon} />
            </a>
          </Link>

          {/* <Image src={seamus} alt="seamus" className={styles.headerLogo} /> */}
          <form action="" className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
            <button className={styles.searchButton}>
              <SvgMagnifyingGlass className={styles.searchIcon} />
            </button>
          </form>
          <nav className={styles.userNav}>
            <div className={styles.userNavIconBox}>
              <SvgBookmark className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>5</span>
            </div>
            <div className={styles.userNavIconBox}>
              <SvgChat className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>14</span>
            </div>
            <div className={styles.userNavUser}>
              <div className={styles.userNavAvatarBox}>
                <Image
                  src={seamus}
                  alt="user photo"
                  height={40}
                  width={40}
                  // layout="fill"
                  objectFit="cover"
                  className={styles.userNavAvatarBox}
                />
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.content}>
          <nav className={styles.sideBar}>
            <ul className={styles.sideNav}>
              <li className={styles.sideNavItem}>
                <Link href="/">
                  <a className={styles.sideNavLink}>
                    <SvgHome className={styles.sideNavIcon} />
                    <span className={styles.sideNavText}>HOTEL</span>
                  </a>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href="/">
                  <a className={styles.sideNavLink}>
                    <SvgAircraftTakeOff className={styles.sideNavIcon} />
                    <span className={styles.sideNavText}>HOTEL</span>
                  </a>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href="/">
                  <a className={styles.sideNavLink}>
                    <SvgKey className={styles.sideNavIcon} />
                    <span className={styles.sideNavText}>HOTEL</span>
                  </a>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href="/">
                  <a className={styles.sideNavLink}>
                    <SvgMap className={styles.sideNavIcon} />
                    <span className={styles.sideNavText}>HOTEL</span>
                  </a>
                </Link>
              </li>
            </ul>
            <div className={styles.legal}>
              &copy; 2022 by Kathy Collins. All rights reserved.
            </div>
          </nav>
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
