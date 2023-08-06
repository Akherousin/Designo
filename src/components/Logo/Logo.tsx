import Image from 'next/image';
import logoDark from '@/assets/shared/desktop/logo-dark.png';
import logoLight from '@/assets/shared/desktop/logo-light.png';
import styles from './Logo.module.css';
import NavLink from '@/components/NavLink';

interface LogoProps {
  variant?: 'light' | 'dark';
}

function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <NavLink href="/" className={styles.logo}>
      <span className="visually-hidden">Homepage - Designo</span>
      <Image
        src={variant === 'dark' ? logoDark : logoLight}
        alt=""
        className={styles.logo__image}
      />
    </NavLink>
  );
}

export default Logo;
