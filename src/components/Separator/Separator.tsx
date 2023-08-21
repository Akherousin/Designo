import { CSSProperties } from 'react';
import styles from './Separator.module.css';

interface SeparatorProps {
  size: 'small' | 'big';
}

function Separator({ size }: SeparatorProps) {
  return (
    <div
      className={styles.separator}
      style={
        {
          '--size': size === 'small' ? '96px' : '120px',
        } as CSSProperties
      }
    />
  );
}

export default Separator;
