import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "./index.module.scss";
import seamus from "../public/seamus.jpg";

const Home: NextPage = () => {
  // const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      {/* <Image
        src={seamus}
        alt="Seamus"
        // width="100%"
        layout="fill"
        objectFit="cover"
      /> */}
      {/* <p>{session ? session.user.email : "Nobody"}</p> */}
      {/* <h1 role="header">The value of customKey is</h1>
      <button>Open dialog</button>
      <Link
        href={`
            /users
          `}
      >
        USERS
      </Link>
      <Link
        href={`
            /posts
          `}
      >
        POSTS
      </Link>
      <Link
        href={`
            /products
          `}
      >
        PRODUCTS
      </Link> */}
      {/* {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link
              href={`
            /characters/${character.id}
          `}
            >
              <a>
                <h3>{character.name}</h3>
              </a>
            </Link>
            <Image
              loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width="200"
              height="200"
            />
          </div>
        );
      })} */}
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
