import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import imageLoader from '../imageLoader';
import styles from '../sass/pages/index.module.scss';
import seamus from '../public/seamus.jpg';
import { MswPhotoList } from '../components/MswPhotoList';
import dalmation from '../public/dalmation.jpeg';
import FeaturesCard from '../components/Cards/FeaturesCard';
import TourCard from '../components/Cards/TourCard';

const Home: NextPage = () => {
  // const { data: session, status } = useSession();
  const svgs = ['world', 'anchor', 'floppydisk', 'cloud'];

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Image
          src={seamus}
          alt='Seamus'
          className={styles.headerImage}
          fill
          style={{ objectFit: 'cover' }}
          // objectPosition="center bottom"
          quality={20}
        />
        <div className={styles.headerLogoBox}>
          <Link href='/'>
            <Image
              src={dalmation}
              alt='Dalmation'
              className={styles.headerLogo}
            />
          </Link>
        </div>
        <div className={styles.headerNavBox}>
          <ul className={styles.headerLinksWrapper}>
            <h3 className={styles.subHeader}>CSS</h3>
            <Link href='/flex' className={styles.subHeaderLink}>
              FLEX
            </Link>
            <Link href='/grid' className={styles.subHeaderLink}>
              GRID
            </Link>
          </ul>
          <ul className={styles.headerLinksWrapper}>
            <h3 className={styles.subHeader}>NEXT.JS</h3>
            <Link href='/items' className={styles.subHeaderLink}>
              ITEMS
            </Link>
            <Link href='/shipwrecks' className={styles.subHeaderLink}>
              SHIPWRECKS
            </Link>
          </ul>
        </div>
        <div className={styles.headerTextBox}>
          <div className={styles.headerPrimary}>
            <h1 className={styles.headerPrimaryMain}>THOMAS HENDERSON</h1>
            <span className={styles.headerPrimarySub}>
              Web and mobile developement
            </span>
          </div>
          <Link
            href='#'
            className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimation}`}
          >
            DISCOVER MORE
          </Link>
        </div>
        {/* <MswPhotoList /> */}
      </header>
      <main className={styles.main}>
        <h2 className={styles.mainHeader}>
          Facilis tempore labore deleniti dolorum blanditiis earum
        </h2>
        <div className={styles.mainInfo}>
          <div>
            <h3>THE MOST AMAZING ART ON EARTH</h3>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quasi aliquid dolor repellat fuga sint. Explicabo optio facilis,
              animi eos ipsum, nihil a, veritatis et doloremque aliquam quos ex
              neque!
            </div>
          </div>
          <div>
            <h3>UNFORGETABLE THINGS MADE FROM STUFF</h3>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis
              quasi aliquid dolor repellat fuga sint. Explicabo optio facilis.
            </div>
          </div>
          <a href='#' className={styles.infoLink}>
            KOKO
          </a>
        </div>
        <div className={styles.mainPictures}>
          <div className={styles.mainImageWrapperOne}>
            <Image
              src='https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png'
              alt='Fuji'
              className={styles.mainImageOne}
              fill
              style={{ objectFit: 'cover' }}
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
          <div className={styles.mainImageWrapperTwo}>
            <Image
              src='https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg'
              alt='Flowers'
              className={styles.mainImageTwo}
              fill
              style={{ objectFit: 'cover' }}
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
          <div className={styles.mainImageWrapperThree}>
            <Image
              src={seamus}
              alt='Seamus'
              className={styles.mainImageThree}
              fill
              style={{ objectFit: 'cover' }}
              // objectPosition="center bottom"
              quality={20}
            />
          </div>
        </div>
      </main>
      <section className={styles.features}>
        {svgs.map((svg, i) => (
          <FeaturesCard key={i} svg={svg} />
        ))}
      </section>
      <section className={styles.tours}>
        <TourCard />
        <TourCard />
        <TourCard />
      </section>
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
