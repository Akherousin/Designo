import CardLink from '@/components/CardLink';
import styles from './page.module.css';
import Hero from '@/components/Hero';
import CardLinkSection from '@/components/CardLinkSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CardLinkSection />
    </main>
  );
}
