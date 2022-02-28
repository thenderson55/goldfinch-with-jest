import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '../imageLoader';
import styles from '../sass/pages/index.module.scss';
import seamus from '../public/seamus.jpg';
import { MswPhotoList } from '../components/MswPhotoList';
import dalmation from '../public/dalmation.jpeg';
const Home: NextPage = () => {
  // const { data: session, status } = useSession();
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Image
          src={seamus}
          alt="Seamus"
          className={styles.headerImage}
          layout="fill"
          objectFit="cover"
          // objectPosition="center bottom"
          quality={20}
        />
        <div className={styles.headerLogoBox}>
          <Image
            src={dalmation}
            alt="Dalmation"
            className={styles.headerLogo}
          />
        </div>
        <div className={styles.headerNavBox}>
          <Link href="/flex">
            <a className={styles.subHeaderLink}>FLEX</a>
          </Link>
          <Link href="/grid">
            <a className={styles.subHeaderLink}>GRID</a>
          </Link>
        </div>
        <div className={styles.headerTextBox}>
          <h1 className={styles.headerPrimary}>
            <span className={styles.headerPrimaryMain}>KATHY COLLINS</span>
            <span className={styles.headerPrimarySub}>
              Fine art and photography
            </span>
          </h1>
          <Link href="#">
            <a
              className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimation}`}
            >
              DISCOVER MORE
            </a>
          </Link>
        </div>
        {/* <MswPhotoList /> */}
      </header>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          Facilis tempore labore deleniti dolorum blanditiis earum
        </div>
        <div className={styles.mainInfo}>
          <div>
            <div className={styles.subHeader}>
              THE MOST AMAZING ART ON EARTH
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quasi aliquid dolor repellat fuga sint. Explicabo optio facilis,
              animi eos ipsum, nihil a, veritatis et doloremque aliquam quos ex
              neque!
            </div>
          </div>
          <div>
            <div className={styles.subHeader}>
              UNFORGETABLE THINGS MADE FROM STUFF
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis
              quasi aliquid dolor repellat fuga sint. Explicabo optio facilis.
            </div>
          </div>
          <a href="#" className={styles.infoLink}>
            KOKO
          </a>
        </div>
        <div className={styles.mainPictures}>
          <div className={styles.mainImageWrapperOne}>
            <Image
              src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png"
              alt="Fuji"
              className={styles.mainImageOne}
              layout="fill"
              objectFit="cover"
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
          <div className={styles.mainImageWrapperTwo}>
            <Image
              src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
              alt="Flowers"
              className={styles.mainImageTwo}
              layout="fill"
              objectFit="cover"
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
          <div className={styles.mainImageWrapperThree}>
            <Image
              src={seamus}
              alt="Seamus"
              className={styles.mainImageThree}
              layout="fill"
              objectFit="cover"
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
        </div>
      </main>
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
