import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import SvgBookmark from '../../svgs/SvgBookmark';

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png"
          alt="Fuji"
          className={styles.image}
          layout="fill"
        />
        <SvgBookmark className={styles.icon} />
      </div>
      <div className={styles.title}>Beautiful family house</div>
      <div className={styles.location}>GEORGIA</div>
      <div className={styles.rooms}>5 ROOMS</div>
      <div className={styles.area}>
        40 m<sub>2</sub>
      </div>
      <div className={styles.price}> £45 per night</div>
      <button className={styles.button}>CONTACT REALTOR</button>
    </div>
  );
}

export default Card;
