import webDesignImgMobile from '@/assets/home/mobile/image-web-design.jpg';
import appDesignImgMobile from '@/assets/home/mobile/image-app-design.jpg';
import graphicDesignImgMobile from '@/assets/home/mobile/image-graphic-design.jpg';
import webDesignImgTablet from '@/assets/home/tablet/image-web-design.jpg';
import appDesignImgTablet from '@/assets/home/tablet/image-app-design.jpg';
import graphicDesignImgTablet from '@/assets/home/tablet/image-graphic-design.jpg';
import CardLink from '../CardLink';
import styles from './CardLinkSection.module.css';
import { StaticImageData } from 'next/image';

interface Link {
  title: string;
  href: 'web-design' | 'app-design' | 'graphic-design';
  imageMobile: string | StaticImageData;
  imageTablet: string | StaticImageData;
}

interface CardLinkSectionProps {
  excludeHref?: Link['href'];
}

const LINKS: Link[] = [
  {
    title: 'Web Design',
    href: 'web-design',
    imageMobile: webDesignImgMobile,
    imageTablet: webDesignImgTablet,
  },

  {
    title: 'App Design',
    href: 'app-design',
    imageMobile: appDesignImgMobile,
    imageTablet: appDesignImgTablet,
  },

  {
    title: 'Graphic Design',
    href: 'graphic-design',
    imageMobile: graphicDesignImgMobile,
    imageTablet: graphicDesignImgTablet,
  },
];

function CardLinkSection({ excludeHref }: CardLinkSectionProps) {
  return (
    <section className={styles.section}>
      {LINKS.filter((link) => link.href !== excludeHref).map(
        ({ title, href, imageMobile, imageTablet }) => (
          <CardLink
            key={title}
            href={href}
            title={title}
            imageMobile={imageMobile}
            imageTablet={imageTablet}
          />
        )
      )}
    </section>
  );
}

export default CardLinkSection;
