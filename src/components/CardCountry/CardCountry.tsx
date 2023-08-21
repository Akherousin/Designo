import StyledLink from '../StyledLink';
import Image, { StaticImageData } from 'next/image';
import styles from './CardCountry.module.css';
import { Country } from '@/components/CardCountriesSection/CardCountriesSection';

function CardCountry({ country, image }: Country) {
  return (
    <article className={styles.country}>
      <div className={styles.country__image}>
        <Image src={image} alt="" />
      </div>
      <h2 className={styles.country__title}>{country}</h2>
      <StyledLink href="locations" variant="dark">
        See Location <span className="visually-hidden">{country}</span>
      </StyledLink>
    </article>
  );
}

export default CardCountry;
