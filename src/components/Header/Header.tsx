'use client';
import Logo from '@/components/Logo';
import styles from './Header.module.css';
import NavLink from '@/components/NavLink';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useTrapFocus } from '@/hooks/useTrapFocus';
import { usePreventScroll } from '@/hooks/usePreventScroll';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useTrapFocus(isNavOpen);
  usePreventScroll(isNavOpen);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const handleClick = () => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  return (
    <header className={`${styles.header} max-width-container`}>
      <Logo />

      <span id="nav__label" hidden>
        Site
      </span>

      <nav aria-labelledby="nav__label" ref={navRef} className={styles.nav}>
        <button
          className={`${styles.nav__btn} click-target-helper`}
          aria-expanded={isNavOpen}
          aria-controls="nav__list"
          onClick={handleClick}
        >
          <span className="visually-hidden">Navigation</span>
          {isNavOpen ? (
            <CloseIcon aria-hidden="true" />
          ) : (
            <NavIcon aria-hidden="true" />
          )}
        </button>

        <ul
          id="nav__list"
          className={`${styles.nav__list} ${isNavOpen ? styles.open : ''}`}
        >
          <li>
            <NavLink href="/about" className="click-target-helper">
              Our company
            </NavLink>
          </li>
          <li>
            <NavLink href="/locations" className="click-target-helper">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact" className="click-target-helper">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {isNavOpen && <div className={styles.nav__overlay} />}
    </header>
  );
}

function NavIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
    >
      <rect width="24" height="4" fill="#1D1C1E" />
      <rect y="8" width="24" height="4" fill="#1D1C1E" />
      <rect y="16" width="24" height="4" fill="#1D1C1E" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Combined Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 7.17165L2.92901 0.100586L0.100586 2.92901L7.17165 10.0001L0.100586 17.0711L2.92901 19.8996L10.0001 12.8285L17.0711 19.8996L19.8996 17.0711L12.8285 10.0001L19.8996 2.92901L17.0711 0.100586L10.0001 7.17165Z"
          fill="#1D1C1E"
        />
      </g>
    </svg>
  );
}
export default Header;
