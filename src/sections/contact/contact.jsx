import React from 'react';

// @ts-ignore
import styles from './contact.module.scss';
import MediaButton from '../../components/button/button.jsx';
import { LinksList } from '../home/home.jsx';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact</h2>

      <article className={styles.article}>
        <div>
          <p>Contact form:</p>
          <form
            className={styles.contactForm}
            name="contact"
            action="/contact"
            method="post"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Name" required></input>
            <textarea name="comment" placeholder="Comment" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </article>
    </section>
  );
}
