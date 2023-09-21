import styles from './Intro.module.css';
import Image from 'next/image';
import bgPattern from '@/assets/web-design/desktop/bg-pattern-intro-web.svg';

interface IntroProps {
  title: string;
  text: string;
}

function Intro({ title, text }: IntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__box}>
        <div className={styles.intro__pattern}>
          <Image src={bgPattern} alt="" fill={true} sizes="100%" />
        </div>
        <h1 className={styles.intro__title}>{title}</h1>
        <p className={styles.intro__text}>{text}</p>
      </div>
    </section>
  );
}

export default Intro;
