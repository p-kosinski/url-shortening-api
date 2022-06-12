import PropTypes from 'prop-types';

import styles from './ShortenedLink.module.scss';

const ShortenedLink = ({ originalLink, shortenedLink }) => (
  <div className={styles.component}>
    <div className={styles.originalLink}>
      <span>{originalLink}</span>
    </div>
    <hr className={styles.divider} />
    <div className={styles.shortenedLink}>
      <span>
        <mark>{shortenedLink}</mark>
      </span>
    </div>
    <button className={styles.copyButton}>
      Copy
    </button>
  </div>
);

ShortenedLink.propTypes = {
  originalLink: PropTypes.string.isRequired,
  shortenedLink: PropTypes.string.isRequired,
};

export default ShortenedLink;