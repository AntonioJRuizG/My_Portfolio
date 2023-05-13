import React from 'react';
import Thumbnail from '../thumbnail/thumbnail.jsx';

// @ts-ignore
import styles from './gallery.module.scss';

const projectList = [
  {
    id: '001',
    name: 'Be Euphonium',
    imgName: 'be-euphonium',
    description:
      'Music enthusiasts network to share a gallery of their favourite instruments, filter the gallery and registered users can add new ones, edit or remove them.',
    stack:
      'React | TypeScript | SASS | Redux | Node.js | Express | MongoDB | Jest | SonarQube',
    linkWeb: 'https://beeuphonium.netlify.app/',
    linkCode: 'https://github.com/AntonioJRuizG/Be-Euphonium_front',
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.gallerySectionTitle}>Projects</h2>
      <ul className={styles.galleryItems}>
        {projectList.map((item) => (
          <li key={item.id} className={styles.thumbnailContainer}>
            <Thumbnail props={item}></Thumbnail>
          </li>
        ))}
      </ul>
    </section>
  );
}
