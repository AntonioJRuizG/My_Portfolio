import React from 'react';

// @ts-ignore
import styles from './thumbnail.module.scss';

export default function Thumbnail({ props }) {
  return (
    <li className={styles.thumbnailContainer}>
      <img
        className={styles.thumbnailImage}
        width={940}
        height={500}
        src={`./img/img-${props.imgName}.png`}
        alt={`Project ${props.name}`}
      ></img>

      <div className={styles.thumbnailTextPart}>
        <h2 className={styles.thumbnailTitle}>{props.name}</h2>
        <p className={styles.thumbnailDescription}>{props.description}</p>

        <p className={styles.thumbnailStack}>{props.stack}</p>
        <div>
          <a
            className={styles.socialLink}
            href={props.linkCode}
            target="_blank"
            rel="noopener"
            aria-label="Github"
          >
            Code
          </a>
          {props.linkWeb && (
            <a
              className={styles.socialLink}
              href={props.linkWeb}
              target="_blank"
              rel="noopener"
              aria-label="ProjectLink"
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
