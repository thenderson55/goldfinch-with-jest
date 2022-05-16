import React from 'react';
import styles from './TourCard.module.scss';
import Image from 'next/image';

function TourCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <Image
            src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg"
            alt="Flowers"
            className={styles.image}
            layout="fill"
            objectFit="cover"
            // objectPosition="center"
          />
        </div>
        <div className={styles.cardBack}>Hey there!</div>
      </div>
    </div>
  );
}

export default TourCard;
