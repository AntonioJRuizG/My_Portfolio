import React from 'react';

// @ts-ignore
import styles from './button.module.scss';

export default function MediaButton({ props }) {
  return (
    <a className={styles.link} href={props.link} target="_blank">
      {props.text}
    </a>
  );
}
