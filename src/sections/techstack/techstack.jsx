import React from 'react';

// @ts-ignore
import styles from './techstack.module.scss';
import ImageGrid from '../../components/imgsGrid/imgs-grid';

export default function TechStack() {
  return (
    <section id="techstack" className={styles.techStackSection}>
      <h2>Tech Stack</h2>
      <ImageGrid></ImageGrid>
    </section>
  );
}
