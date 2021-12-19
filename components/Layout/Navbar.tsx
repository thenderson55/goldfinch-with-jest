import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// import "./Navbar.css";
import styles from "./Navbar.module.scss";
// import { useRouter } from "next/router";

function Navbar() {
  const { data: session, status } = useSession();
  // const router = useRouter();
  // const logout = async () => {
  //   const authURL = `https://${process.env.AUTH0_ISSUER}/v2/logout`;
  //   await router.push(authURL);
  //   await signOut();
  // };

  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">NextAuth</a>
      </h1>
      {/* <ul className={styles.mainNav && styles.loaded}> */}
      <ul
        className={
          styles.mainNav &&
          (!session && status == "loading" ? styles.loading : styles.loaded)
        }
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/properties">
            <a>Properties</a>
          </Link>
        </li>
        <li>
          <Link href="/shipwrecks">
            <a>Shipwrecks</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/restaurants">
            <a>Restaurants</a>
          </Link>
        </li>
        {status !== "loading" && !session && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                  // signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
