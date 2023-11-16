import Image from 'next/image';
import styles from './page.module.css';

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
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
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
