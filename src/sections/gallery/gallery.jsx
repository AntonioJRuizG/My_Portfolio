import React from 'react';
import Thumbnail from '../../components/thumbnail/thumbnail.jsx';

// @ts-ignore
import styles from './gallery.module.scss';

const projectList = [
  {
    id: '001',
    name: 'Be Euphonium',
    imgName: 'be-euphonium',
    description:
      'Music enthusiasts network to share their favourite instruments. Apply filters to the gallery or click for details. Sign in to add your favourites, edit or remove them.',
    stack:
      'React | TypeScript | SASS | Redux | Node.js | Express | MongoDB | Jest | SonarQube',
    linkWeb: 'https://beeuphonium.netlify.app/',
    linkCode: 'https://github.com/AntonioJRuizG/Be-Euphonium_front',
  },
];

export default function Gallery() {
  return (
    <section id="projects" className={`${styles.gallerySection} projects`}>
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
