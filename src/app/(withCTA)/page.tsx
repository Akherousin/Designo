import Hero from '@/components/Hero';
import CardLinkSection from '@/components/CardLinkSection';
import CardFeatureSection from '@/components/CardFeatureSection';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage - Designo',
};

export default function Home() {
  return (
    <>
      <div className={`${styles.grid} max-width-container`}>
        <Hero />
        <CardLinkSection />
        <CardFeatureSection />
      </div>
    </>
  );
}
