import CardCountriesSection from '@/components/CardCountriesSection';
import FormSection from '@/components/FormSection';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <>
      <div className={styles.grid}>
        <FormSection />
        <CardCountriesSection />
      </div>
    </>
  );
}
