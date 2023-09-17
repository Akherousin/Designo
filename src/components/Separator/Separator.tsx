import { CSSProperties } from 'react';
import styles from './Separator.module.css';

interface SeparatorProps {
  size: 'small' | 'big';
  toSmall?: boolean;
}

function Separator({ size, toSmall }: SeparatorProps) {
  return (
    <div
      className={`${styles.separator} ${toSmall ? styles.toSmall : ''}`.trim()}
      style={
        {
          '--size': size === 'small' ? '96px' : '120px',
        } as CSSProperties
      }
    />
  );
}

export default Separator;
