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
  {
    id: '002',
    name: 'My Portfolio',
    imgName: 'my-portfolio',
    description:
      'Personal web where you can know more about me and my projects ✨. ',
    stack: 'Vite | React | JavaScript | Sass modules | Linter',
    linkWeb: '',
    linkCode: 'https://github.com/AntonioJRuizG/My_Portfolio',
  },
  {
    id: '003',
    name: 'e-Commerce Admin Dashboard',
    imgName: 'ecommerce-admin',
    description:
      'Admin Dashboard for an e-Commerce Store for electronic products. 🎧📱💻',
    stack: 'Next.js | React | JavaScript | Tailwind',
    linkWeb: 'https://ecommerce-admin-preview.vercel.app/products',
    linkCode: 'https://github.com/AntonioJRuizG/ecommerce',
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
