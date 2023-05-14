import React from 'react';

// @ts-ignore
import styles from './about.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About</h2>
      <article className={styles.article}>
        <div className={styles.paragraphContainer}>
          <p>
            I am Antonio! I went <span>from painter 🎨 to developer 👩‍💻</span>,
            deciding to change the canvas for the screen. Although I miss the
            feel of a canvas, I'm moved to create something new and exciting
            with every line of code I write 🎉.
          </p>
          <p>
            I designed my first website when I was 16 years old. At that time
            there was little information on the subject but I managed to deploy
            a simple HTML-CSS website locally in a self-taught way. Although my
            academic career ended up going the other way, I was always left
            wondering how to go further and that unfulfilled{' '}
            <span>curiosity</span> was the seed of my interest in learning more
            about web development.
          </p>
          <p>
            This curiosity finally led me to make a 180-degree turn in my life
            and dedicate myself fully to this sector a few years later.
          </p>
          <p>
            Having studied Industrial Engineering and being trained at Skylab
            Coders Academy (now ISDI Coders), <span>world's best bootcamp</span>{' '}
            of 2021 (according to SwitchUp), I keep coding and learning with
            every challenging project I find.
          </p>
          <p>
            My favourite <span>stack</span> is HTML5, SASS, JavaScript (ES6),
            React, Redux and Jest. For my personal projects I use Trello, Figma,
            SonarCloud, Postman and I try to implement different setups to be
            ready to work in any project environment.
          </p>
        </div>
        <div>
          <img
            width={322}
            height={340}
            src="../../../img/profile_picture.jpg"
            alt="Profile picture"
          ></img>
        </div>
      </article>
    </section>
  );
}
