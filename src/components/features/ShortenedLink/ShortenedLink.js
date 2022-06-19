import { useState } from 'react';
import PropTypes from 'prop-types';

import CopyButton from '../../common/CopyButton/CopyButton';

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
      setTimeout(() => setCopySuccess(false), 3000);
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
      <CopyButton
        success={copySuccess}
        error={copyError}
        onClick={handleCopyClick}
        ariaLabel='Copy shortened link'
      />
    </div>
  );
};

ShortenedLink.propTypes = {
  originalLink: PropTypes.string.isRequired,
  shortenedLink: PropTypes.string.isRequired,
};

export default ShortenedLink;
