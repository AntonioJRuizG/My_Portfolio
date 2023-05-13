import React from 'react';

// @ts-ignore
import styles from './home.module.scss';
import MediaButton from '../button/button.jsx';

export const LinksList = [
  {
    link: 'https://docs.google.com/document/d/1Ohh9XJlq1adzN3chfmWi1-zgHsK96L7Nvxcge2MShqI/edit?usp=sharing',
    text: 'Download CV',
  },
  {
    link: 'https://github.com/AntonioJRuizG',
    text: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/antoniojesusruizgarcia',
    text: 'LinkedIn',
  },
];

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <h1> Hello, I'm Antonio</h1>
      <p>Junior Frontend Developer</p>

      <ul>
        {LinksList.map((item) => (
          <li key={item.text}>
            <MediaButton props={item}></MediaButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
