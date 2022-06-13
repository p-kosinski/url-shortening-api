import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ShortenedLink.module.scss';

const ShortenedLink = ({ originalLink, shortenedLink }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyToClipboard = (text) => {
    return navigator.clipboard.writeText(text);
  };

  const handleCopyClick = async () => {
    setCopySuccess(false);
    setCopyError(false);

    try {
      await copyToClipboard(shortenedLink);
      setCopySuccess(true);
    } catch (error) {
      console.error(error);
      setCopyError(true);
    }
  };

  return (
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
      <button
        className={clsx(
          styles.copyButton,
          copySuccess && styles.copyButtonSuccess,
          copyError && styles.copyButtonError
        )}
        onClick={() => handleCopyClick()}
      >
        {copySuccess ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

ShortenedLink.propTypes = {
  originalLink: PropTypes.string.isRequired,
  shortenedLink: PropTypes.string.isRequired,
};

export default ShortenedLink;
