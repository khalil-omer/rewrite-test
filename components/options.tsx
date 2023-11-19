"use client"

import styles from '../app/page.module.css';

export default function Options() {
  return (
    <div className={styles.grid}>
      <a
        href="/redirect-from"
        className={styles.card}
      >
        <h2>
          Redirect <span>-&gt;</span>
        </h2>
        <p>Go to /redirect-from</p>
      </a>

      <a
        href="/rewrite-from"
        className={styles.card}
      >
        <h2>
          Rewrite <span>-&gt;</span>
        </h2>
        <p>Go to /rewrite-from</p>
      </a>

      <a
        href="/set-cookie"
        className={styles.card}
        onClick={(e) => {
          // Set your cookie here

          document.cookie = "hello=world; path=/;";

        }}
      >
        <h2>
          Redirect w/ cookie           </h2>
        <p>Go to /set-cookie but first set cookie google</p>
      </a>

      <a
        href="/set-cookie"
        className={styles.card}
        onClick={(e) => {
          // Set your cookie here

          document.cookie = "about=world; path=/;";

        }}
      >
        <h2>
          Redirect w/ cookie            </h2>
        <p>Go to /set-cookie but first set cookie about</p>
      </a>


    </div>

  )
}
