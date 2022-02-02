import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "./index.module.scss";
import seamus from "../public/seamus.jpg";
import { MswPhotoList } from "../components/MswPhotoList";
import dalmation from "../public/dalmation.jpeg";
const Home: NextPage = () => {
  // const { data: session, status } = useSession();
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        {/* <h1>Kathy Collins!</h1> */}
        <Image
          src={dalmation}
          alt="Dalmation"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.headerPrimary}>
          <span className={styles.headerPrimaryMain}>KATHY COLLINS</span>
          <span className={styles.headerPrimarySub}>
            Fine art and photography
          </span>
        </h1>
        <Link href="#">
          <a className={`${styles.btn} ${styles.btnWhite}`}>DISCOVER MORE</a>
        </Link>
      </div>

      {/* <MswPhotoList /> */}
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const { results }: GetCharacterResults = await res.json();

//   return {
//     props: {
//       characters: results,
//     },
//   };
// };

export default Home;
