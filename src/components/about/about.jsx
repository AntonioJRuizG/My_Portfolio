import React from 'react';

// @ts-ignore
import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2>About</h2>
      <article className={styles.article}>
        <div className={styles.paragraphContainer}>
          <p>
            I am Antonio! I went <span>from painter 🎨 to developer 👩‍💻</span>,
            deciding to change the canvas for the screen. Although I miss the
            feel of a canvas, I'm moved to create something new and exciting
            with every line of code I write.
          </p>
          <p>
            I designed my first website when I was 16 years old. I had access to
            little information about web design but at least I managed to deploy
            a simple HTML-CSS web locally. However, I wanted to go further and{' '}
            <span>
              that unsatisfied curiosity was the seed of my interest in learning
              more about web development.
            </span>{' '}
            This curiosity eventually led me to take a U-turn in my life and
            study a full stack bootcamp a few years later.
          </p>
          <p>
            It has been a risky bet in personal, family and economic terms,
            leaving my comfort zone in a drastic way but I couldn't feel more
            satisfied with the results and knowing not only how to design a full
            stack web, but also how to do it supported by testing and clean,
            readable code.
          </p>
          <p>
            From now on I know many <span>challenges and great people</span> are
            waiting for me on the way.
          </p>
        </div>
        <div>
          <img
            src="../../../img/profile_picture.jpg"
            alt="Profile picture"
          ></img>
        </div>
      </article>
    </section>
  );
}
