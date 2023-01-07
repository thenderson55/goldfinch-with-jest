import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
// import "./Navbar.css";
import styles from './Navbar.module.scss';
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
        <Link href='/'>
          Home
        </Link>
      </h1>
      {/* <ul className={styles.mainNav && styles.loaded}> */}
      <ul
        className={
          styles.mainNav &&
          (!session && status == 'loading' ? styles.loading : styles.loaded)
        }
      >
        <li>
          <Link href='/properties'>
            Properties
          </Link>
        </li>
        <li>
          <Link href='/shipwrecks'>
            Shipwrecks
          </Link>
        </li>
        {/* <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li> */}
        <li>
          <Link href='/restaurants'>
            Restaurants
          </Link>
        </li>
        <li>
          <Link href='/items'>
            Items
          </Link>
        </li>
        {status !== 'loading' && !session && (
          <li>
            <Link
              href='/api/auth/signin'
              onClick={(e) => {
                e.preventDefault();
                signIn();
                // signIn("github");
              }}>
              
                Sign In
              
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href='/api/auth/signout'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}>
              
                Sign Out
              
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
