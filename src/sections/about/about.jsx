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
            Graduate in Industrial Engineering and Graduate in Full Stack Web
            development bootcamp.
          </p>
          <p>
            Familiar with the whole process of full-stack application
            development, from design tools such as Figma to development with
            version control (Git), static analysis tools (SonarQube, GitHub
            Actions), code quality tools (Prettier, ESLint, Lighthouse), and
            testing (Jest, React Testing Library).
          </p>
          <p>
            Utilization of API platforms such as Postman to assist in the design
            of RESTful APIs, including user authentication (JWT).
          </p>
          <p>
            I bring a strong sense of empathy, a collaborative work mind,
            proactive approach, and a commitment to continuous learning and
            improvement.
          </p>
        </div>
        {/* TEMP.: <div>
          <img
            width={322}
            height={340}
            src="../../../img/profile_picture.jpg"
            alt="Profile picture"
          ></img>
        </div> */}
      </article>
    </section>
  );
}
