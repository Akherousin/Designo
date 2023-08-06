import webDesignImg from '@/assets/home/mobile/image-web-design.jpg';
import appDesignImg from '@/assets/home/mobile/image-app-design.jpg';
import graphicDesignImg from '@/assets/home/mobile/image-graphic-design.jpg';
import CardLink from '../CardLink';
import styles from './CardLinkSection.module.css';

const LINKS = [
  { title: 'Web Design', href: 'web-design', image: webDesignImg },

  { title: 'App Design', href: 'app-design', image: appDesignImg },

  { title: 'Graphic Design', href: 'graphic-design', image: graphicDesignImg },
];

function CardLinkSection() {
  return (
    <section className={styles.section}>
      {LINKS.map(({ title, href, image }) => (
        <CardLink key={title} href={href} title={title} image={image} />
      ))}
    </section>
  );
}

export default CardLinkSection;
