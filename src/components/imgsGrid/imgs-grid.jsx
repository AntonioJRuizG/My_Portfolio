import React from 'react';
// @ts-ignore
import styles from './imgs-grid.module.scss';

const techIcons = [
  '../../../stack-icons/react.png',
  '../../../stack-icons/angular.svg',
  '../../../stack-icons/primeng-logo.png',
  '../../../stack-icons/java.svg',
  '../../../stack-icons/html.png',
  '../../../stack-icons/css.png',
  '../../../stack-icons/sass.png',
  '../../../stack-icons/figma.png',
  '../../../stack-icons/javascript.png',
  '../../../stack-icons/typescript.png',

  '../../../stack-icons/npm.svg',
  '../../../stack-icons/git.png',
  '../../../stack-icons/github.png',
  '../../../stack-icons/mysql.svg',
  '../../../stack-icons/nodejs.svg',
  '../../../stack-icons/express.png',
  '../../../stack-icons/mongodb.svg',
  '../../../stack-icons/postman.png',
  '../../../stack-icons/jwt.png',
  '../../../stack-icons/netlify.png',
  '../../../stack-icons/firebase.svg',
  '../../../stack-icons/redux.png',
  '../../../stack-icons/jest.png',
  '../../../stack-icons/react-testing.png',
  '../../../stack-icons/visual.png',
  '../../../stack-icons/IntelliJ_IDEA.svg',
  '../../../stack-icons/eclipse.png',
];

export default function ImageGrid() {
  return (
    <div className={styles.iconsGrid}>
      {techIcons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`Stack icon ${index}`}
          width={30}
          height={30}
        />
      ))}
    </div>
  );
}
