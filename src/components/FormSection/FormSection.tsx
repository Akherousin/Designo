import Form from '@/components/Form';
import styles from './FormSection.module.css';
import Image from 'next/image';
import bgPattern from '@/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg';

function FormSection() {
  return (
    <section className={styles.section}>
      <div className={styles.section__pattern}>
        <Image src={bgPattern} alt="" />
      </div>
      <div className={styles.section__info}>
        <h1 className={styles.section__title}>Contact us</h1>
        <p>
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
      </div>
      <Form />
    </section>
  );
}

export default FormSection;
