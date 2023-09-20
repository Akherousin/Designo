import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import styles from './StyledLink.module.css';

type StyledLinkProps = LinkProps &
  ComponentPropsWithoutRef<'a'> & {
    plainAnchor?: boolean;
    variant?: 'light' | 'dark';
  };

function StyledLink({
  variant = 'light',
  children,
  plainAnchor = false,
  ...rest
}: StyledLinkProps) {
  const Tag = (plainAnchor ? 'a' : Link) as React.ElementType;

  const classes = `${styles.link} ${styles[variant]} ${
    rest.className ? rest.className : ''
  }`.trim();

  return (
    <Tag {...rest} className={classes}>
      {children}
    </Tag>
  );
}

export default StyledLink;
