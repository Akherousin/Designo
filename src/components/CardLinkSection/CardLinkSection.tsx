import webDesignImgMobile from '@/assets/home/mobile/image-web-design.jpg';
import appDesignImgMobile from '@/assets/home/mobile/image-app-design.jpg';
import graphicDesignImgMobile from '@/assets/home/mobile/image-graphic-design.jpg';
import webDesignImgTablet from '@/assets/home/tablet/image-web-design.jpg';
import appDesignImgTablet from '@/assets/home/tablet/image-app-design.jpg';
import graphicDesignImgTablet from '@/assets/home/tablet/image-graphic-design.jpg';
import webDesignImgDesktopLarge from '@/assets/home/desktop/image-web-design-large.jpg';
import webDesignImgDesktopSmall from '@/assets/home/desktop/image-web-design-small.jpg';
import appDesignImgDesktop from '@/assets/home/desktop/image-app-design.jpg';
import graphicDesignImgDesktop from '@/assets/home/desktop/image-graphic-design.jpg';

import CardLink from '../CardLink';
import styles from './CardLinkSection.module.css';
import { StaticImageData } from 'next/image';

interface Link {
  title: string;
  href: 'web-design' | 'app-design' | 'graphic-design';
  imageMobile: string | StaticImageData;
  imageTablet: string | StaticImageData;
  imageDesktop: string | StaticImageData;
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
    imageDesktop: webDesignImgDesktopLarge,
  },

  {
    title: 'App Design',
    href: 'app-design',
    imageMobile: appDesignImgMobile,
    imageTablet: appDesignImgTablet,
    imageDesktop: appDesignImgDesktop,
  },

  {
    title: 'Graphic Design',
    href: 'graphic-design',
    imageMobile: graphicDesignImgMobile,
    imageTablet: graphicDesignImgTablet,
    imageDesktop: graphicDesignImgDesktop,
  },
];

function CardLinkSection({ excludeHref }: CardLinkSectionProps) {
  return (
    <section
      className={`${styles.section} ${
        excludeHref ? '' : styles.complex
      }`.trim()}
    >
      {LINKS.filter((link) => link.href !== excludeHref).map(
        ({ title, href, imageMobile, imageTablet, imageDesktop }) => {
          if (excludeHref === 'web-design')
            imageDesktop = webDesignImgDesktopSmall;

          return (
            <CardLink
              key={title}
              href={href}
              title={title}
              imageMobile={imageMobile}
              imageTablet={imageTablet}
              imageDesktop={imageDesktop}
            />
          );
        }
      )}
    </section>
  );
}

export default CardLinkSection;
