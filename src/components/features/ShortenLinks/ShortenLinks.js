import styles from './ShortenLinks.module.scss';

const ShortenLinks = () => (
  <section className={styles.component}>
    <form className={styles.form}>
      <input
        placeholder='Shorten a link here...'
        className={styles.input}
      />
      <button className={styles.submitButton}>
        Shorten it!
      </button>
    </form>
    <div className={styles.links}>
      <ul>
        <li>
          <div className={styles.link}>
            <div className={styles.originalLink}>
              <p>https://www.frontendmentor.io</p>
            </div>
            <div className={styles.shortenedLink}>
              <p>
                <mark>https://rel.ink/k4lKyk</mark>
              </p>
            </div>
            <button className={styles.copyButton}>
              Copy
            </button>
          </div>
        </li>
        <li>
          <div className={styles.link}>
            <div className={styles.originalLink}>
              <p>https://www.twitter.com/frontendmentor</p>
            </div>
            <div className={styles.shortenedLink}>
              <p>
                <mark>https://rel.ink/gxOXp9</mark>
              </p>
            </div>
            <button className={styles.copyButton}>
              Copy
            </button>
          </div>
        </li>
        <li>
          <div className={styles.link}>
            <div className={styles.originalLink}>
              <p>https://www.linkedin.com/company/frontend-mentor</p>
            </div>
            <div className={styles.shortenedLink}>
              <p>
                <mark>https://rel.ink/gob3X9</mark>
              </p>
            </div>
            <button className={styles.copyButton}>
              Copy
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default ShortenLinks;