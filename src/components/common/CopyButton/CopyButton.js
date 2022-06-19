import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CopyButton.module.scss';

const CopyButton = ({ success, error, onClick, ariaLabel }) => (
  <button
    className={clsx(
      styles.component,
      success && styles.success,
      error && styles.error
    )}
    onClick={() => onClick()}
    aria-label={ariaLabel}
  >
    {success ? 'Copied!' : 'Copy'}
  </button>
);

CopyButton.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default CopyButton;