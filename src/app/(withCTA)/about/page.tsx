import Section from '@/components/Section';
import aboutUsImgMobile from '@/assets/about/mobile/image-about-hero.jpg';
import worldClassImgMobile from '@/assets/about/mobile/image-world-class-talent.jpg';
import realDealImgMobile from '@/assets/about/mobile/image-real-deal.jpg';
import aboutUsImgTablet from '@/assets/about/tablet/image-about-hero.jpg';
import worldClassImgTablet from '@/assets/about/tablet/image-world-class-talent.jpg';
import realDealImgTablet from '@/assets/about/tablet/image-real-deal.jpg';
import aboutUsImgDesktop from '@/assets/about/desktop/image-about-hero.jpg';
import worldClassImgDesktop from '@/assets/about/desktop/image-world-class-talent.jpg';
import realDealImgDesktop from '@/assets/about/desktop/image-real-deal.jpg';

import CardCountriesSection from '@/components/CardCountriesSection';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <div className="stack max-width-container">
        <Section
          variant="dark"
          title="About Us"
          headingLevel={1}
          imageMobile={aboutUsImgMobile}
          imageTablet={aboutUsImgTablet}
          imageDesktop={aboutUsImgDesktop}
        >
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our
            clients&apos; audiences.
          </p>
        </Section>
        <Section
          variant="light"
          title="World-class talent"
          headingLevel={2}
          isReverse
          imageMobile={worldClassImgMobile}
          imageTablet={worldClassImgTablet}
          imageDesktop={worldClassImgDesktop}
        >
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand&apos;s story and mission.
          </p>
        </Section>

        <CardCountriesSection />

        <Section
          variant="light"
          title="The real deal"
          headingLevel={2}
          imageMobile={realDealImgMobile}
          imageTablet={realDealImgTablet}
          imageDesktop={realDealImgDesktop}
        >
          <p>
            As strategic partners in our clients&apos; businesses, we are ready
            to take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </Section>
      </div>
    </>
  );
}
