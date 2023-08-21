import canadaImg from '@/assets/shared/desktop/illustration-canada.svg';
import australiaImg from '@/assets/shared/desktop/illustration-australia.svg';
import ukImg from '@/assets/shared/desktop/illustration-united-kingdom.svg';
import { StaticImageData } from 'next/image';
import CardCountry from '../CardCountry/CardCountry';
import styles from './CardCountries.module.css';

export interface Country {
  country: string;
  image: string | StaticImageData;
}

type Countries = Country[];

const COUNTRIES: Countries = [
  {
    country: 'Canada',
    image: canadaImg,
  },
  {
    country: 'Australia',
    image: australiaImg,
  },
  {
    country: 'United Kingdom',
    image: ukImg,
  },
];

function CardCountriesSection() {
  return (
    <section className={styles.countries}>
      {COUNTRIES.map(({ country, image }) => (
        <CardCountry key={country} country={country} image={image} />
      ))}
    </section>
  );
}

export default CardCountriesSection;
