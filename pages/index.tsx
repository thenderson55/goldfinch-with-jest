import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "./index.module.scss";
import seamus from "../public/seamus.jpg";
import { MswPhotoList } from "../components/MswPhotoList";

const Home: NextPage = () => {
  // const { data: session, status } = useSession();
  return (
    <div className={styles.header}>
      <h1>Kathy Collins!</h1>

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
