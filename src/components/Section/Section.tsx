import darkPattern from '@/assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import lightPattern from '@/assets/shared/desktop/bg-pattern-three-circles.svg';
import Image, { StaticImageData } from 'next/image';
import styles from './Section.module.css';

interface SectionProps {
  variant: 'dark' | 'light';
  image: string | StaticImageData;
  title: string;
  headingLevel: number;
}

function Section({
  variant = 'dark',
  image,
  title,
  headingLevel = 2,
  children,
}: React.PropsWithChildren<SectionProps>) {
  const Heading = `h${headingLevel}` as React.ElementType;

  return (
    <section className={styles.section}>
      <div className={styles.section__image}>
        <Image src={image} alt="" />
      </div>
      <div
        className={`${styles.section__info} ${
          variant === 'dark'
            ? styles['section--dark']
            : styles['section--light']
        }`}
      >
        <div
          className={`${styles.section__pattern} ${
            variant === 'dark'
              ? styles['section__pattern--dark']
              : styles['section__pattern--light']
          }`}
        >
          <Image src={variant === 'dark' ? darkPattern : lightPattern} alt="" />
        </div>
        <Heading className={styles.section__title}>{title}</Heading>

        {children}
      </div>
    </section>
  );
}

export default Section;
