import Image from 'next/image';
import img from '@/assets/shared/desktop/bg-pattern-leaf.svg';
import styles from './Decoration.module.css';
import { CSSProperties } from 'react';

type AllowedStyles = 'top' | 'bottom' | 'left' | 'right';

function Decoration({
  style,
  isFlipped = false,
}: {
  style: Pick<CSSProperties, AllowedStyles>;
  isFlipped?: boolean;
}) {
  return (
    <div
      className={`${styles.decoration} ${
        isFlipped ? styles.flipped : ''
      }`.trim()}
      style={style}
    >
      <Image src={img} alt="" />
    </div>
  );
}

export default Decoration;
