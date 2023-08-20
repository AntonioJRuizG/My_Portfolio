import React from 'react';

// @ts-ignore
import styles from './home.module.scss';
import MediaButton from '../../components/button/button.jsx';

export const LinksList = [
  {
    link: 'https://docs.google.com/document/d/12Q2hK3DC6aiJI2w775cZ2pK9EC-rfG5qyll2gWdwb3o/edit?usp=sharing',
    text: 'CV',
  },
  {
    link: 'https://www.linkedin.com/in/antoniojesusruizgarcia',
    text: 'LinkedIn',
  },
  {
    link: 'https://github.com/AntonioJRuizG',
    text: 'GitHub',
  },
];

export default function Home() {
  return (
    <section id="home" className={`${styles.homeSection} home`}>
      <h1>Antonio Ruiz</h1>
      <p>Full Stack Web Developer</p>

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
