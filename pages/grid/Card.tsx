import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import SvgBookmark from '../../svgs/SvgBookmark';
import SvgHome from '../../svgs/SvgHome';

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png"
          alt="Fuji"
          className={styles.image}
          layout="fill"
          objectFit="cover"
          objectPosition=" bottom"
        />
        <SvgBookmark className={styles.icon} />
      </div>
      <div className={styles.title}>Beautiful family house</div>
      <div className={styles.location}>
        <SvgHome className={styles.textIcon} />
        Georgia
      </div>
      <div className={styles.rooms}>
        <SvgHome className={styles.textIcon} />2 rooms
      </div>
      <div className={styles.area}>
        <SvgHome className={styles.textIcon} />
        40 m<sup>2</sup>
      </div>
      <div className={styles.price}>
        <SvgHome className={styles.textIcon} />
        £45 p/n
      </div>
      <button className={styles.button}>CONTACT REALTOR</button>
    </div>
  );
}

export default Card;
