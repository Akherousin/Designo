import StyledLink from '../StyledLink/StyledLink';
import styles from './CallToAction.module.css';
import Image from 'next/image';
import bgPattern from '@/assets/shared/desktop/bg-pattern-call-to-action.svg';

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={`${styles.cta__box} max-width-container`}>
        <div className={styles.cta__pattern}>
          <Image src={bgPattern} alt="" fill={true} />
        </div>
        <h2 className={styles.cta__header}>
          Let&apos;s talk about your project
        </h2>
        <p className={styles.cta__text}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <StyledLink href="/contact" className={styles.cta__link}>
          Get in touch
        </StyledLink>
      </div>
    </section>
  );
}

export default CallToAction;
