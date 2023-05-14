import React from 'react';

// @ts-ignore
import styles from './thumbnail.module.scss';

export default function Thumbnail({ props }) {
  return (
    <>
      <h2 className={styles.thumbnailTitle}>{props.name}</h2>
      <p className={styles.thumbnailDescription}>{props.description}</p>
      <img
        className={styles.thumbnailImage}
        width={300}
        src={`../../img/img-${props.imgName}.png`}
        alt={`Project ${props.name}`}
      ></img>
      <p className={styles.thumbnailStack}>{props.stack}</p>

      <a
        className={styles.socialLink}
        href={props.linkCode}
        target="_blank"
        rel="noopener"
        aria-label="Github"
      >
        View code
      </a>
      {props.linkWeb && (
        <a
          className={styles.socialLink}
          href={props.linkWeb}
          target="_blank"
          rel="noopener"
          aria-label="ProjectLink"
        >
          Open project
        </a>
      )}
    </>
  );
}
