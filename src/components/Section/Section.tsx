import darkPattern from '@/assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import darkDesktopPattern from '@/assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import lightPattern from '@/assets/shared/desktop/bg-pattern-three-circles.svg';
import Image, { StaticImageData } from 'next/image';
import styles from './Section.module.css';

interface SectionProps {
  variant: 'dark' | 'light';
  imageMobile: string | StaticImageData;
  imageTablet: string | StaticImageData;
  imageDesktop: string | StaticImageData;

  title: string;
  isReverse?: boolean;
  headingLevel: number;
}

function Section({
  variant = 'dark',
  imageMobile,
  imageTablet,
  imageDesktop,
  title,
  headingLevel = 2,
  isReverse = false,
  children,
}: React.PropsWithChildren<SectionProps>) {
  const Heading = `h${headingLevel}` as React.ElementType;

  return (
    <section
      className={`${styles.section} ${isReverse ? styles.reverse : ''}`.trim()}
    >
      <div className={styles.section__box}>
        <div className={styles.section__image}>
          <Image src={imageMobile} alt="" fill={true} className="mobile-only" />
          <Image src={imageTablet} alt="" fill={true} className="tablet-only" />
          <Image src={imageDesktop} alt="" fill={true} className="desktop-up" />
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
            <Image
              src={variant === 'dark' ? darkPattern : lightPattern}
              alt=""
              fill={true}
              className={variant === 'dark' ? 'desktop-down' : ''}
            />
            {variant === 'dark' && (
              <Image
                src={darkDesktopPattern}
                alt=""
                fill={true}
                className="desktop-up"
              />
            )}
          </div>
          <Heading className={styles.section__title}>{title}</Heading>

          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;
