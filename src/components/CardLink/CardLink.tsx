import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './CardLink.module.css';

interface CardLinkProps {
  title: string;
  href: string;
  imageMobile: string | StaticImageData;
  imageTablet: string | StaticImageData;
}

function CardLink({ title, href, imageMobile, imageTablet }: CardLinkProps) {
  return (
    <Link className={styles.cardLink} href={href}>
      <h2 className={styles.cardLink__heading}>{title}</h2>
      <p className={styles.cardLink__text}>
        View projects
        <ArrowRight />
      </p>

      <div className={styles.cardLink__image}>
        <Image src={imageMobile} alt="" fill={true} className="mobile-only" />
        <Image src={imageTablet} alt="" fill={true} className="tablet-only" />
      </div>
    </Link>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="10"
      viewBox="0 0 5 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 1.13477L5 5.13477L1 9.13477"
        stroke="#E7816B"
        strokeWidth="2"
      />
    </svg>
  );
}

export default CardLink;
