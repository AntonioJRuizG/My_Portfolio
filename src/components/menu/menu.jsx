import React, { useEffect } from 'react';

// @ts-ignore
import styles from './menu.module.scss';

const menuOptions = [
  { id: '1', label: 'Home', path: '#home' },
  { id: '2', label: 'About', path: '#about' },
  { id: '3', label: 'Projects', path: '#projects' },
  { id: '4', label: 'Contact', path: '#contact' },
];

export default function NavigationMenu() {
  function handleClick(event) {
    event.preventDefault();
    const seccionDestino = document.querySelector(
      event.target.getAttribute('href')
    );
    seccionDestino.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <nav className={styles.mainMenu}>
        <ul className={styles.mainMenuList}>
          {menuOptions.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={styles.link}
              onClick={handleClick}
            >
              {item.label}
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
}
