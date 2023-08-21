import styles from './CardProject.module.css';
import Image from 'next/image';
import { Project } from '@/data';

function CardProject({ title, text, image }: Project) {
  return (
    <article className={styles.project}>
      <div className={styles.project__image}>
        <Image alt="" src={image} />
      </div>
      <div className={styles.project__info}>
        <h2 className={styles.project__title}>{title}</h2>
        <p className={styles.project__text}>{text}</p>
      </div>
    </article>
  );
}

export default CardProject;
