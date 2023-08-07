import CardFeature from '@/components/CardFeature';
import styles from './CardFeatureSection.module.css';
import passionateSvg from '@/assets/home/desktop/illustration-passionate.svg';
import resourcefulSvg from '@/assets/home/desktop/illustration-resourceful.svg';
import friendlySvg from '@/assets/home/desktop/illustration-friendly.svg';

const FEATURES = [
  {
    heading: 'passionate',
    desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    image: passionateSvg,
  },
  {
    heading: 'resourceful',
    desc: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    image: resourcefulSvg,
  },
  {
    heading: 'friendly',
    desc: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    image: friendlySvg,
  },
];

function CardFeatureSection() {
  return (
    <section className={styles.section}>
      {FEATURES.map(({ heading, desc, image }) => (
        <CardFeature
          key={heading}
          heading={heading}
          desc={desc}
          image={image}
        />
      ))}
    </section>
  );
}

export default CardFeatureSection;
