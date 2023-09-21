import styles from './CardFeature.module.css';
import Image from 'next/image';

interface CardFeatureProps {
  heading: string;
  desc: string;
  image: string;
}

function CardFeature({ desc, heading, image }: CardFeatureProps) {
  return (
    <article className={styles.cardFeature}>
      <div className={styles.cardFeature__image}>
        <Image src={image} alt="" />
      </div>
      <h2 className={styles.cardFeature__heading}>{heading}</h2>
      <p className={styles.cardFeature__desc}>{desc}</p>
    </article>
  );
}

export default CardFeature;
