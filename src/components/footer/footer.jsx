import React from 'react';

// @ts-ignore
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <section>
      <p className={styles.footerText}>Made with {'<'}3 by Antonio © 2023</p>
    </section>
  );
}
