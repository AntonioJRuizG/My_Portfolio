import React, { useEffect, useRef } from 'react';

// @ts-ignore
import styles from './menu.module.scss';

const menuOptions = [
  { id: '1', label: 'Home', path: '#home' },
  { id: '2', label: 'Projects', path: '#projects' },
  { id: '3', label: 'Contact', path: '#contact' },
  { id: '4', label: 'About', path: '#about' },
];

export default function NavigationMenu() {
  const navRef = useRef(null);
  const closeBtnRef = useRef(null);

  function handleClick(event) {
    event.preventDefault();
    const seccionDestino = document.querySelector(
      event.target.getAttribute('href')
    );
    seccionDestino.scrollIntoView({ behavior: 'smooth' });
    handleMenu();
  }

  const handleMenu = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
    closeBtnRef.current.classList.toggle(styles.navOpenBtnAction);
  };

  return (
    <header className={styles.header}>
      <h1>AntonioJesusRuiz.app</h1>
      <nav ref={navRef} className={styles.nav}>
        <ul className={styles.mainMenuList}>
          {menuOptions.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className={styles.mainMenuItem}
                onClick={handleClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button ref={closeBtnRef} className={styles.navBtn} onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
