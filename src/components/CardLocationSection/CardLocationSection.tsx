import CardLocation from '../CardLocation/CardLocation';
import styles from './CardLocationSection.module.css';

type Coords = [number, number];

interface Location {
  country: string;
  coords: Coords;
  phone: string;
  mail: string;
  office: string;
  street: string;
  city: string;
}

type Locations = Location[];

const LOCATIONS: Locations = [
  {
    country: 'Canada',
    coords: [43.65107, -79.347015],
    phone: '+1 253-863-8967',
    mail: 'contact@designo.co',
    office: 'Designo Central Office',
    street: '3886 Wellington Street ',
    city: 'Toronto, Ontario M9C 3j5',
  },
  {
    country: 'Australia',
    coords: [-31.840233, 145.612793],
    phone: '(02) 6720 9092',
    mail: 'contact@designo.au',
    office: 'Designo AU Office',
    street: '19 Balonne Street',
    city: 'New South Wales 2445',
  },
  {
    country: 'United Kingdom',
    coords: [51.73260117, -3.86193461],
    phone: '078 3115 1400',
    mail: 'contact@designo.uk',
    office: 'Designo UK Office',
    street: '13 Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
  },
];

function CardLocationSection() {
  return (
    <section className={styles.locations}>
      {LOCATIONS.map((location, index) => {
        return (
          <CardLocation
            key={location.office}
            coords={location.coords}
            phone={location.phone}
            mail={location.mail}
            country={location.country}
            isReversed={index % 2 !== 0}
          >
            <strong>{location.office}</strong>
            <p>
              {location.street}
              <br />
              {location.city}
            </p>
          </CardLocation>
        );
      })}
    </section>
  );
}

export default CardLocationSection;
