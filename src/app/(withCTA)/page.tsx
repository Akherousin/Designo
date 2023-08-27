import Hero from '@/components/Hero';
import CardLinkSection from '@/components/CardLinkSection';
import CardFeatureSection from '@/components/CardFeatureSection';
import CallToAction from '@/components/CallToAction';
import Separator from '@/components/Separator/Separator';

export default function Home() {
  return (
    <>
      <Hero />
      <Separator size="small" />
      <CardLinkSection />
      <Separator size="big" />
      <CardFeatureSection />
      <Separator size="big" />
    </>
  );
}
