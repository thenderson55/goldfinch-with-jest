import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import SvgMagnifyingGlass from '../../svgs/SvgMagnifyingGlass';
import SvgCake from '../../svgs/SvgCake';
import seamus from '../../public/seamus.jpg';
import bees from '../../public/bees.png';

import SvgBookmark from '../../svgs/SvgBookmark';
import SvgChat from '../../svgs/SvgChat';
import SvgHome from '../../svgs/SvgHome';
import SvgAircraftTakeOff from '../../svgs/SvgAircraftTakeOff';
import SvgKey from '../../svgs/SvgKey';
import SvgMap from '../../svgs/SvgMap';
import SvgLocationPin from '../../svgs/SvgLocationPin';
import SvgStar from '../../svgs/SvgStar';
import SvgChevronRight from '../../svgs/SvgChevronRight';

function Flex() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href='/'>
            <SvgCake className={styles.headerIcon} />
          </Link>
          <form action='' className={styles.search}>
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Search'
            />
            <button className={styles.searchButton}>
              <SvgMagnifyingGlass className={styles.searchIcon} />
            </button>
          </form>
          <nav className={styles.userNav}>
            <div className={styles.userNavIconBox}>
              <SvgBookmark className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>5</span>
            </div>
            <div className={styles.userNavIconBox}>
              <SvgChat className={styles.userNavIcon} />
              <span className={styles.userNavNotification}>14</span>
            </div>
            <div className={styles.userNavUser}>
              <div className='avatar-box'>
                <Image
                  src={seamus}
                  alt='user photo'
                  className='avatar-image'
                  fill
                />
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.content}>
          <nav className={styles.sideBar}>
            <ul className={styles.sideNav}>
              <li className={styles.sideNavItem}>
                <Link href='/' className={styles.sideNavLink}>
                  <SvgHome className={styles.sideNavIcon} />
                  <span className={styles.sideNavText}>HOTELS</span>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href='/hotel' className={styles.sideNavLink}>
                  <SvgAircraftTakeOff className={styles.sideNavIcon} />
                  <span className={styles.sideNavText}>FLIGHTS</span>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href='/' className={styles.sideNavLink}>
                  <SvgKey className={styles.sideNavIcon} />
                  <span className={styles.sideNavText}>CARS</span>
                </Link>
              </li>
              <li className={styles.sideNavItem}>
                <Link href='/' className={styles.sideNavLink}>
                  <SvgMap className={styles.sideNavIcon} />
                  <span className={styles.sideNavText}>MAP</span>
                </Link>
              </li>
            </ul>
            <div className={styles.legal}>
              &copy; 2022 by Kathy Collins. All rights reserved.
            </div>
          </nav>
          <main className={styles.hotelView}>
            <div className={styles.gallery}>
              <div className={styles.galleryImageContainer}>
                <Image
                  src='https://res.cloudinary.com/dvjflyd1j/image/upload/v1489725041/sample.jpg'
                  alt='Flowers'
                  className={styles.galleryImage}
                  fill
                />
              </div>
              <div className={styles.galleryImageContainer}>
                <Image
                  src='https://res.cloudinary.com/fay/image/upload/v1617047570/galaxy_ne5p8f.jpg'
                  alt='Space'
                  className={styles.galleryImage}
                  fill
                />
              </div>
              <div className={styles.galleryImageContainer}>
                <Image
                  src='https://res.cloudinary.com/dvjflyd1j/image/upload/v1489733445/ubakmxgfj8czhvsuflxt.png'
                  alt='Fuji'
                  className={styles.galleryImage}
                  fill
                />
              </div>
            </div>
            <div className={styles.hotelViewOverview}>
              <div className={styles.hotelViewOverviewText}>
                <span>COMRIE ROYAL HOTEL</span>
                <span className={styles.hotelViewOverviewRating}>
                  <SvgStar className={styles.hotelViewOverviewIcon} />
                  <SvgStar className={styles.hotelViewOverviewIcon} />
                  <SvgStar className={styles.hotelViewOverviewIcon} />
                  <SvgStar className={styles.hotelViewOverviewIcon} />
                  <SvgStar className={styles.hotelViewOverviewIcon} />
                </span>
              </div>
              <div className={styles.hotelViewOverviewInfo}>
                <div className={styles.hotelViewOverviewInfoLocation}>
                  <SvgLocationPin className={styles.hotelViewOverviewIcon} />
                  <button className='pulsatingButton'>Lagos, Portugal</button>
                </div>
                <div className={styles.hotelViewOverviewInfoVotes}>
                  <span className={styles.hotelViewOverviewInfoVotesText}>
                    8.6
                  </span>
                  <span className={styles.hotelViewOverviewInfoVotesTextSmall}>
                    2345 votes
                  </span>
                </div>
              </div>
            </div>
            <div className='detail'>
              <div className='description'>
                <p className='paragraph'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  minima, dolore quidem ipsum quo voluptatibus placeat itaque
                  unde architecto doloremque sint, id dolores provident sunt
                  officia dolorem delectus dicta. Assumenda.
                </p>
                <p className='paragraph'>
                  Amet minima, dolore quidem ipsum quo voluptatibus placeat
                  itaque unde architecto doloremque sint, id dolores provident
                  sunt officia dolorem delectus dicta. Assumenda.
                </p>
                <ul className='list'>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Sea view
                  </li>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Pool and Gym
                  </li>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Close to the beach
                  </li>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Fine dining
                  </li>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Shopping nearby
                  </li>
                  <li className='list-item'>
                    <SvgChevronRight className='list-item-icon' />
                    Kids area
                  </li>
                </ul>
                <div className='recommend'>
                  <span>Tui and 3 others recommend this hotel.</span>
                  <div className='recommend-avatar'>
                    <div
                      className={`${styles.avatarOverlap} avatar-box-border`}
                    >
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className={`${styles.avatarBorder} avatar-image`}
                      />
                    </div>
                    <div
                      className={`${styles.avatarOverlap} avatar-box-border`}
                    >
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className={`${styles.avatarBorder} avatar-image`}
                      />
                    </div>
                    <div
                      className={`${styles.avatarOverlap} avatar-box-border`}
                    >
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className={`${styles.avatarBorder} avatar-image`}
                      />
                    </div>
                    <div
                      className={`${styles.avatarOverlap} avatar-box-border`}
                    >
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className={`${styles.avatarBorder} avatar-image`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.userReviews}>
                <div className={styles.review}>
                  <div className={styles.reviewText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className={styles.reviewUser}>
                    <div className='avatar-box'>
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className='avatar-image'
                      />
                    </div>
                    <div className={styles.reviewName}>
                      <span style={{ fontWeight: 600 }}>BOBBY</span>
                      <span>1st Jan 2021</span>
                    </div>
                    <span className={styles.reviewRating}>7.6</span>
                  </div>
                </div>

                <div className={styles.review}>
                  <div className={styles.reviewText}>
                    Eum ipsum molestias provident necessitatibus reiciendis quo
                    esse doloribus officia dolor possimus!
                  </div>
                  <div className={styles.reviewUser}>
                    <div className='avatar-box'>
                      <Image
                        src={seamus}
                        alt='user photo'
                        fill
                        className='avatar-image'
                      />
                    </div>
                    <div className={styles.reviewName}>
                      <span style={{ fontWeight: 600 }}>AKIKO</span>
                      <span>2nd Dec 2020</span>
                    </div>
                    <span className={styles.reviewRating}>9.9</span>
                  </div>
                </div>
                <div className={styles.hotelViewOverviewInfoLocation}>
                  <button className='pulsatingButton'>See more &rarr;</button>
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <h2 className={styles.ctaBookNow}>
                Good news! We have 4 rooms available for your dates!
              </h2>
              <button className='cta-btn'>
                <span>BOOK NOW!</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Flex;
