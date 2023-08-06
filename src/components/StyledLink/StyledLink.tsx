import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import styles from './StyledLink.module.css';

type StyledLinkProps = LinkProps &
  ComponentPropsWithoutRef<'a'> & {
    variant?: 'light' | 'dark';
  };

function StyledLink({ variant = 'light', children, ...rest }: StyledLinkProps) {
  const classes = `${styles.link} ${styles[variant]} ${
    rest.className ? rest.className : ''
  }`.trim();

  return (
    <Link {...rest} className={classes}>
      {children}
    </Link>
  );
}

export default StyledLink;
