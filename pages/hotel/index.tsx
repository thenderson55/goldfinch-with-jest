import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

function Hotel() {
  return (
    <div>
      <h1 className={styles.main}>HOTEL</h1>
      <Link href="/">
        <a className={styles.subHeaderLink} style={{ color: "black" }}>
          HOME
        </a>
      </Link>
    </div>
  );
}

export default Hotel;
