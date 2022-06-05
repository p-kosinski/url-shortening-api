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
              <span>https://www.frontendmentor.io</span>
            </div>
            <hr className={styles.divider} />
            <div className={styles.shortenedLink}>
              <span>
                <mark>https://rel.ink/k4lKyk</mark>
              </span>
            </div>
            <button className={styles.copyButton}>
              Copy
            </button>
          </div>
        </li>
        <li>
          <div className={styles.link}>
            <div className={styles.originalLink}>
              <span>https://www.twitter.com/frontendmentor</span>
            </div>
            <hr className={styles.divider} />
            <div className={styles.shortenedLink}>
              <span>
                <mark>https://rel.ink/gxOXp9</mark>
              </span>
            </div>
            <button className={styles.copyButton}>
              Copy
            </button>
          </div>
        </li>
        <li>
          <div className={styles.link}>
            <div className={styles.originalLink}>
              <span>https://www.linkedin.com/company/frontend-mentorxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <hr className={styles.divider} />
            <div className={styles.shortenedLink}>
              <span>
                <mark>https://rel.ink/gob3X9</mark>
              </span>
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