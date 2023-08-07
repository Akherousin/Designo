import Image from 'next/image';
import bgPattern from '@/assets/home/desktop/bg-pattern-hero-home.svg';
import phoneImgSrc from '@/assets/home/desktop/image-hero-phone.png';
import StyledLink from '../StyledLink/StyledLink';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className="heading-large">
          Award-winning custom designs and digital branding solutions
        </h1>

        <p className="text-small">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <StyledLink href="about">Learn More</StyledLink>
      </div>
      <div className={styles.hero__pattern}>
        <Image alt="" src={bgPattern} />
      </div>
      <div className={styles.hero__image}>
        <Image src={phoneImgSrc} alt="" />
      </div>
    </section>
  );
}

export default Hero;
