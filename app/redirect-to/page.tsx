import styles from '../page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2>/redirect-to</h2>
      </div>

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
      </div>
    </main>
  )
}
