import React from 'react';
import styles from './FeaturesCard.module.scss';
import SvgBasicCloud from '../../svgs/SvgBasicCloud';
import SvgBasicFloppydisk from '../../svgs/SvgBasicFloppydisk';
import SvgBasicWorld from '../../svgs/SvgBasicWorld';
import SvgBasicAnchor from '../../svgs/SvgBasicAnchor';

function FeaturesCard({ svg }) {
  console.log('SVG', svg);
  return (
    <div className={styles.container}>
      {svg === 'anchor' ? (
        <SvgBasicAnchor className={styles.icon} />
      ) : svg === 'floppydisk' ? (
        <SvgBasicFloppydisk className={styles.icon} />
      ) : svg === 'world' ? (
        <SvgBasicWorld className={styles.icon} />
      ) : svg === 'cloud' ? (
        <SvgBasicCloud className={styles.icon} />
      ) : (
        ''
      )}
      <div className={styles.title}>TITLE</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        perspiciatis ullam nihil delectus dolorem at non asperiores atque
        voluptas beatae libero alias tenetur, a nisi nostrum aut mollitia.
        Voluptates, eligendi.
      </div>
    </div>
  );
}

export default FeaturesCard;
