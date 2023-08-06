import Image from 'next/image';
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
      <BgPattern className={styles.hero__pattern} />
      <div className={styles.hero__image}>
        <Image src={phoneImgSrc} alt="" />
      </div>
    </section>
  );
}

function BgPattern({ className }: { className: string }) {
  return (
    <svg
      width="640"
      height="639"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      focusable="false"
      aria-hidden="true"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <circle
        fill="url(#a)"
        transform="matrix(0 -1 -1 0 640 640)"
        cx="320"
        cy="320"
        r="320"
        fillRule="evenodd"
        opacity=".309"
      />
    </svg>
  );
}
export default Hero;
