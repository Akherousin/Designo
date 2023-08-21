import Section from '@/components/Section';
import aboutUsImg from '@/assets/about/mobile/image-about-hero.jpg';
import worldClassImg from '@/assets/about/mobile/image-world-class-talent.jpg';
import realDealImg from '@/assets/about/mobile/image-real-deal.jpg';
import CardCountriesSection from '@/components/CardCountriesSection';
import Separator from '@/components/Separator/Separator';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function AboutPage() {
  return (
    <>
      <Section
        variant="dark"
        title="About Us"
        headingLevel={1}
        image={aboutUsImg}
      >
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We&apos;ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We&apos;re always looking forward to creating brands,
          products, and digital experiences that connect with our clients&apos;
          audiences.
        </p>
      </Section>
      <Section
        variant="light"
        title="World-class talent"
        headingLevel={2}
        image={worldClassImg}
      >
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand&apos;s story and mission.
        </p>
      </Section>
      <Separator size="big" />
      <CardCountriesSection />
      <Separator size="big" />
      <Section
        variant="light"
        title="The real deal"
        headingLevel={2}
        image={realDealImg}
      >
        <p>
          As strategic partners in our clients&apos; businesses, we are ready to
          take on any challenge as our own. Solving real problems require
          empathy and collaboration, and we strive to bring a fresh perspective
          to every opportunity.
        </p>
        <p>
          We make design and technology more accessible and give you tools to
          measure success. We are visual storytellers in appealing and
          captivating ways. By combining business and marketing strategies, we
          inspire audiences to take action and drive real results.
        </p>
      </Section>
      <Separator size="big" />
      <CallToAction />
    </>
  );
}
