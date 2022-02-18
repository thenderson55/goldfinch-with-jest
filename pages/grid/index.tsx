import React from 'react';
import Image from 'next/image';

import Feature from './Feature';
import styles from './index.module.scss';
import Card from './Card';

function Grid() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <header className={styles.header}>Header</header>
      <div className={styles.realtors}>Realtors</div>
      <section className={styles.features}>
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </section>
      <div className={styles.storyPictures}>
        <div className={styles.imageOneContainer}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png"
            alt="Fuji"
            className={styles.imageOne}
            layout="fill"
          />
        </div>
        <div className={styles.imageTwoContainer}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.imageTwo}
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.storyContent}>
        <h3 className={styles.storyContentTitle}>HAPPY CLAPPY PEOPLE</h3>
        <h2 className={styles.storyContentQuote}>
          &ldquo;The best desicions of our lives&ldquo;
        </h2>
        <div className={styles.storyContentText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit in harum quia optio, libero enim fugiat ad dolore
          exercitationem beatae.
        </div>
        <button className={styles.storyContentButton}>
          FIND YOUR OWN HOME
        </button>
      </div>
      <section className={styles.homes}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section className={styles.gallery}>
        <div className={styles.galleryImageContainerOne}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerTwo}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerThree}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerFour}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerFive}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerSix}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerSeven}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerEight}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerNine}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerTen}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerEleven}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerTwelve}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerThirteen}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
        <div className={styles.galleryImageContainerFourteen}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.galleryImage}
            layout="fill"
          />
        </div>
      </section>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Grid;
