import ShortenedLink from '../ShortenedLink/ShortenedLink';

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
          <ShortenedLink
            originalLink='https://www.frontendmentor.io'
            shortenedLink='https://rel.ink/k4lKyk'
          />
        </li>
        <li>
          <ShortenedLink
            originalLink='https://www.twitter.com/frontendmentor'
            shortenedLink='https://rel.ink/gxOXp9'
          />
        </li>
        <li>
          <ShortenedLink
            originalLink='https://www.linkedin.com/company/frontend-mentor'
            shortenedLink='https://rel.ink/gob3X9'
          />
        </li>
      </ul>
    </div>
  </section>
);

export default ShortenLinks;