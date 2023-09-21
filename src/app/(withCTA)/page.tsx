import Hero from '@/components/Hero';
import CardLinkSection from '@/components/CardLinkSection';
import CardFeatureSection from '@/components/CardFeatureSection';
import styles from './page.module.css';
import { Metadata } from 'next';
import Decoration from '@/components/Decoration';

export const metadata: Metadata = {
  title: 'Homepage - Designo',
};

export default function Home() {
  return (
    <>
      <Decoration style={{ top: '16%', left: '0' }} />
      <Decoration isFlipped style={{ bottom: '16%', right: '0' }} />
      <div className={`${styles.grid} max-width-container`}>
        <Hero />
        <CardLinkSection />
        <CardFeatureSection />
      </div>
    </>
  );
}
