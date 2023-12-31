import Image from 'next/image';
import Map from '@/components/Map';
import styles from './CardLocation.module.css';
import patternSrc from '@/assets/shared/desktop/bg-pattern-three-circles.svg';
import { PropsWithChildren } from 'react';

type Coords = [number, number];

interface CardLocationProps {
  coords: Coords;
  country: string;
  phone: string;
  mail: string;
  isReversed?: boolean;
}

function CardLocation({
  coords,
  country,
  phone,
  mail,
  isReversed = false,
  children,
}: PropsWithChildren<CardLocationProps>) {
  return (
    <article
      className={`${styles.location} ${
        isReversed ? styles.reversed : ''
      }`.trim()}
      id={country.split(' ').join('').toLowerCase()}
    >
      <div className={styles.location__map}>
        <Map coords={coords} popup={`Office in ${country}.`} />
      </div>
      <div className={styles.location__info}>
        <div className={styles.location__pattern}>
          <Image src={patternSrc} alt="" fill={true} sizes="100%" />
        </div>
        <div className={styles.wrapper__center}>
          <h2 className={styles.location__country}>{country}</h2>
          <div>{children}</div>
          <address className={styles.location__contacts}>
            <strong>Contact</strong>
            <br />
            <a href={`tel:${phone.replace(/\s/g, '')}`}>P: {phone}</a>
            <br />
            <a href={`mailto:${mail}`}>M: {mail}</a>
          </address>
        </div>
      </div>
    </article>
  );
}

export default CardLocation;
